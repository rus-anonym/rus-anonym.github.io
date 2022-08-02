import React, { useEffect, useState } from "react";
import {
    Alert,
    Button,
    Card,
    CardScroll,
    Div,
    Group,
    Header,
    MiniInfoCell,
    Progress,
    RichCell,
    Separator,
    SimpleCell,
    Spacing,
} from "@vkontakte/vkui";
import {
    Icon28SpeedometerStartOutline,
    Icon28SpeedometerMiddleOutline,
    Icon28SpeedometerMaxOutline,
    Icon28ErrorCircleOutline,
} from "@vkontakte/icons";
import session from "../../../TS/store/session";
import { observer } from "mobx-react";
import router from "../../../TS/store/router";
import { useTranslation } from "react-i18next";
import moment from "moment";

interface IWord {
    value: string;
    status: "current" | "valid" | "invalid" | "default";
}

interface IHistoryElement {
    lang: typeof session.language;
    spm: number;
    errors: number;
    date: number;
}

const styles = {
    light: {
        current: {
            backgroundColor: "green",
            color: "white",
            padding: "3px",
            borderRadius: "3px",
        },
        invalid: {
            backgroundColor: "red",
            color: "white",
            padding: "3px",
            borderRadius: "3px",
        },
        valid: { color: "green" },
        default: { color: "black" },
    },
    dark: {
        current: {
            backgroundColor: "green",
            color: "white",
            padding: "3px",
            borderRadius: "3px",
        },
        invalid: {
            backgroundColor: "red",
            color: "white",
            padding: "3px",
            borderRadius: "3px",
        },
        valid: { color: "green" },
        default: { color: "white" },
    },
} as const;

const Word = ({ value, status }: IWord): JSX.Element => {
    return <span style={styles[session.theme][status]}>{value}</span>;
};

const generateLetters = (text: string): IWord[] => {
    const letters: IWord[] = text.split("").map((x) => {
        return { value: x, status: "default" };
    });
    letters[0].status = "current";

    return letters;
};

const filters = {
    ru: /^[ЁёА-я\s]/,
    en: /^[a-zA-Z\s]/,
} as const;

const dateSort = (a: IHistoryElement, b: IHistoryElement): number =>
    a.date < b.date ? 1 : -1;

const resultSort = (a: IHistoryElement, b: IHistoryElement): number => {
    const [aFactor, bFactor] = [a.spm / a.errors, b.spm / b.errors];

    if (aFactor > bFactor) {
        return -1;
    } else if (aFactor < bFactor) {
        return 1;
    } else {
        return 0;
    }
};

class History {
    public static load(): IHistoryElement[] {
        const history = localStorage.getItem("utils-speeedtype-history");

        const historyJSON = history
            ? (JSON.parse(history) as IHistoryElement[])
            : [];

        return historyJSON;
    }

    public static save(history: IHistoryElement[]): void {
        if (history.length > 100) {
            history.sort(dateSort);
            history = history.slice(0, 100);
        }

        return localStorage.setItem(
            "utils-speeedtype-history",
            JSON.stringify(history)
        );
    }
}

const Speedtype = (): JSX.Element => {
    const [startDate, setStartDate] = useState<number>();
    const [spm, setSpm] = useState<number>(0);
    const [errors, setErrors] = useState<number>(0);
    const [progressValue, setProgressValue] = useState(0);

    const [letters, setLetters] = useState<IWord[]>([]);
    const [history, setHistory] = useState<IHistoryElement[]>(History.load());

    const { t, i18n } = useTranslation("translation", {
        keyPrefix: "pages.utils.list.speedtype",
    });

    const text = t("text");

    const Result = (element: IHistoryElement): JSX.Element => {
        return (
            <Card mode="outline">
                <RichCell
                    disabled
                    text={
                        i18n.t(`languages.${element.lang}`) as unknown as string
                    }
                    caption={moment(element.date).format(
                        "DD.MM.YYYY, HH:mm:ss"
                    )}
                >
                    <MiniInfoCell
                        before={
                            element.spm < 120 ? (
                                <Icon28SpeedometerStartOutline />
                            ) : element.spm < 300 ? (
                                <Icon28SpeedometerMiddleOutline />
                            ) : (
                                <Icon28SpeedometerMaxOutline />
                            )
                        }
                        textWrap="short"
                    >
                        {t("spm")}: {element.spm}
                    </MiniInfoCell>
                    <MiniInfoCell
                        before={
                            <Icon28ErrorCircleOutline
                                fill={`rgb(${150 + element.errors}, ${
                                    162 - element.errors * 8.1
                                }, ${173 - element.errors * 8.65})`}
                            />
                        }
                        textWrap="short"
                    >
                        {t("errors")}: {element.errors}
                    </MiniInfoCell>
                </RichCell>
            </Card>
        );
    };

    const reset = (): void => {
        setSpm(0);
        setErrors(0);
        setProgressValue(0);
        setLetters(generateLetters(text));
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const letter = event.target.value;

        if (!filters[session.language].test(letter)) {
            router.popout = (
                <Alert
                    actions={[
                        {
                            title: t("continue"),
                            autoclose: true,
                            mode: "default",
                        },
                    ]}
                    text={t("switchLayout")}
                    onClose={(): void => {
                        router.popout = null;
                    }}
                />
            );
            return;
        }

        const currentLetterIndex = letters.findIndex(
            (x) => x.status === "current" || x.status === "invalid"
        );
        const currentLetter = letters[currentLetterIndex];

        if (currentLetterIndex === 0 && currentLetter.status === "current") {
            setStartDate(Date.now());
        }

        const computeSpm = (): number => {
            let spm = Math.floor(
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                60 / ((Date.now() - startDate!) / 1000 / currentLetterIndex)
            );
            if (isNaN(spm)) {
                spm = 0;
            }
            return spm;
        };

        if (letter === currentLetter.value) {
            currentLetter.status = "valid";
            if (currentLetterIndex + 1 === letters.length) {
                setLetters([]);
                setProgressValue(currentLetterIndex / (letters.length / 100));
                const spm = computeSpm();
                setSpm(spm);

                const newHistory = [
                    ...history,
                    {
                        lang: session.language,
                        spm,
                        errors,
                        date: startDate as number,
                    },
                ];
                setHistory(newHistory);
                History.save(newHistory);
                return;
            } else {
                letters[currentLetterIndex + 1].status = "current";
            }
        } else {
            currentLetter.status = "invalid";
            setErrors(errors + 1);
        }

        setProgressValue(currentLetterIndex / (letters.length / 100));
        setSpm(computeSpm());
        setLetters([...letters]);
    };

    useEffect(() => {
        document.getElementById("input")?.focus();

        reset();
    }, []);

    return (
        <>
            <Group>
                {letters.length > 0 && (
                    <Div
                        onClick={(): void => {
                            document.getElementById("input")?.focus();
                        }}
                    >
                        <Progress value={progressValue} />
                        <Spacing size={28} />
                        <div style={{ textAlign: "center" }}>
                            {letters.map(Word)}
                        </div>
                        <input
                            value={""}
                            id="input"
                            autoComplete="off"
                            onChange={onChange}
                            type="text"
                            style={{
                                width: "0px",
                                height: "0px",
                                opacity: "0.0",
                            }}
                        />
                    </Div>
                )}
                <Group mode="plain" header={<Header>{t("results")}</Header>}>
                    <MiniInfoCell
                        before={
                            spm < 120 ? (
                                <Icon28SpeedometerStartOutline />
                            ) : spm < 300 ? (
                                <Icon28SpeedometerMiddleOutline />
                            ) : (
                                <Icon28SpeedometerMaxOutline />
                            )
                        }
                        textWrap="short"
                    >
                        {t("spm")}: {spm}
                    </MiniInfoCell>
                    <MiniInfoCell
                        before={
                            <Icon28ErrorCircleOutline
                                fill={`rgb(${150 + errors}, ${
                                    162 - errors * 8.1
                                }, ${173 - errors * 8.65})`}
                            />
                        }
                        textWrap="short"
                    >
                        {t("errors")}: {errors}
                    </MiniInfoCell>
                    {letters.length === 0 && (
                        <Div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                appearance="positive"
                                stretched
                                size="l"
                                onClick={reset}
                            >
                                {t("restart")}
                            </Button>
                        </Div>
                    )}
                </Group>
                {history.length > 0 && (
                    <Group
                        mode="plain"
                        header={
                            <Header aside={`${t("total")}: ${history.length}`}>
                                {t("history")}
                            </Header>
                        }
                    >
                        <CardScroll size="s">
                            {history.sort(dateSort).map(Result)}
                        </CardScroll>
                        <Spacing />
                        <div
                            style={{ display: "flex", alignItems: "baseline" }}
                        >
                            <Group
                                style={{ marginRight: "5px" }}
                                separator="hide"
                                mode="plain"
                                description={`${t("formula")}: ${t(
                                    "spm"
                                )} / ${t("errors")}`}
                            >
                                <Header>{t("bestResult")}</Header>
                                {Result(history.sort(resultSort)[0])}
                            </Group>
                            <Group
                                style={{ marginLeft: "5px" }}
                                separator="hide"
                                mode="plain"
                                description={`${t("formula")}: ${t(
                                    "spm"
                                )} / ${t("errors")}`}
                            >
                                <Header>{t("worstResult")}</Header>
                                {Result(
                                    history.sort(resultSort)[history.length - 1]
                                )}
                            </Group>
                        </div>

                        <Separator />

                        <SimpleCell disabled>
                            <Button
                                size="m"
                                mode="destructive"
                                onClick={(): void => {
                                    setHistory([]);
                                    History.save([]);
                                }}
                            >
                                {t("clearHistory")}
                            </Button>
                        </SimpleCell>
                    </Group>
                )}
            </Group>
        </>
    );
};

export default observer(Speedtype);

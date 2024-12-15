import {
  Icon28ErrorCircleOutline,
  Icon28SpeedometerMaxOutline,
  Icon28SpeedometerMiddleOutline,
  Icon28SpeedometerStartOutline,
} from "@vkontakte/icons";
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
import { observer } from "mobx-react";
import moment from "moment";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import router from "../../../TS/store/router";
import session from "../../../TS/store/session";
import storage from "../../../TS/store/storage";

interface IWord {
  value: string;
  status: "current" | "valid" | "invalid" | "default";
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
    valid: {
      color: "green",
    },
    default: {
      color: "black",
    },
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
    valid: {
      color: "green",
    },
    default: {
      color: "white",
    },
  },
} as const;

const Word = ({ value, status }: IWord): JSX.Element => {
  return <span style={styles[session.theme][status]}>{value}</span>;
};

const generateLetters = (text: string): IWord[] => {
  const letters: IWord[] = text.split("").map((x) => {
    return {
      value: x,
      status: "default",
    };
  });
  letters[0].status = "current";

  return letters;
};

const filters = {
  ru: /^[ЁёА-я\s]/,
  en: /^[a-zA-Z\s]/,
} as const;

type THistoryElement = (typeof storage.utils.storage.speedtype.history)[number];

const dateSort = (a: THistoryElement, b: THistoryElement): number =>
  a.date < b.date ? 1 : -1;

const resultSort = (a: THistoryElement, b: THistoryElement): number => {
  const [aFactor, bFactor] = [a.cpm / a.errors, b.cpm / b.errors];

  if (aFactor > bFactor) {
    return -1;
  } else if (aFactor < bFactor) {
    return 1;
  } else if (a.cpm > b.cpm) {
    return -1;
  } else if (a.cpm < b.cpm) {
    return 1;
  } else {
    return 0;
  }
};

class History {
  public static load(): THistoryElement[] {
    return storage.utils.storage.speedtype.history.slice();
  }

  public static save(history: THistoryElement[]): void {
    if (history.length > 100) {
      history.sort(dateSort);
      history = history.slice(0, 100);
    }

    storage.utils.storage.speedtype.history = history;
    return;
  }
}

const Speedtype = (): JSX.Element => {
  const [startDate, setStartDate] = useState<number>();
  const [cpm, setcpm] = useState<number>(0);
  const [errors, setErrors] = useState<number>(0);
  const [progressValue, setProgressValue] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const [history, setHistory] = useState<THistoryElement[]>(History.load());

  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "pages.utils.list.speedtype",
  });

  const text = t("text");
  const [letters, setLetters] = useState<IWord[]>(generateLetters(text));

  const Result = (element: THistoryElement): JSX.Element => {
    return (
      <Card
        mode="outline"
        style={{
          textAlign: "center",
        }}
      >
        <RichCell
          hasActive={false}
          hasHover={false}
          subtitle={i18n.t(`languages.${element.lang}`) as unknown as string}
          extraSubtitle={moment(element.date).format("DD.MM.YYYY, HH:mm:ss")}
        >
          <MiniInfoCell
            before={
              element.cpm < 200 ? (
                <Icon28SpeedometerStartOutline />
              ) : element.cpm < 400 ? (
                <Icon28SpeedometerMiddleOutline />
              ) : (
                <Icon28SpeedometerMaxOutline />
              )
            }
            textWrap="short"
          >
            {t("cpm")}: {element.cpm}
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
    setcpm(0);
    setErrors(0);
    setProgressValue(0);
    setLetters(generateLetters(text));
  };

  const addLetter = (letter: string): void => {
    if (!filters[session.language].test(letter)) {
      router.popout = (
        <Alert
          actions={[
            {
              title: t("continue"),
              mode: "default",
            },
          ]}
          description={t("switchLayout")}
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

    // eslint-disable-next-line no-debugger
    debugger;

    const computecpm = (): number => {
      let cpm = Math.floor(
        60 / ((Date.now() - startDate!) / 1000 / currentLetterIndex)
      );
      if (isNaN(cpm)) {
        cpm = 0;
      }
      return cpm;
    };

    if (letter === currentLetter.value) {
      currentLetter.status = "valid";
      if (currentLetterIndex + 1 === letters.length) {
        setLetters([]);
        setProgressValue(currentLetterIndex / (letters.length / 100));
        const cpm = computecpm();
        setcpm(cpm);

        const newHistory = [
          ...history,
          {
            lang: session.language,
            cpm,
            errors,
            date: startDate as number,
          },
        ];
        setHistory(newHistory);
        History.save(newHistory);
        setIsStarted(false);
        return;
      } else {
        letters[currentLetterIndex + 1].status = "current";
      }
    } else {
      currentLetter.status = "invalid";
      setErrors(errors + 1);
    }

    setProgressValue(currentLetterIndex / (letters.length / 100));
    setcpm(computecpm());
    setLetters([...letters]);
  };

  const keypressHandler = (event: KeyboardEvent): void => {
    event.preventDefault();
    if (isStarted || event.key === text[0]) {
      setIsStarted(true);
      addLetter(event.key);
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", keypressHandler);

    return () => {
      document.removeEventListener("keypress", keypressHandler);
    };
  }, [cpm, startDate, errors, history, progressValue, isStarted]);

  return (
    <Group>
      {letters.length > 0 && (
        <Div
          onClick={(): void => {
            document.getElementById("input")?.focus();
          }}
        >
          <Progress value={progressValue} />
          <Spacing size={28} />
          <div
            style={{
              textAlign: "center",
            }}
          >
            {letters.map(Word)}
          </div>
        </Div>
      )}
      <Group mode="plain" header={<Header>{t("results")}</Header>}>
        <MiniInfoCell
          before={
            cpm < 200 ? (
              <Icon28SpeedometerStartOutline />
            ) : cpm < 400 ? (
              <Icon28SpeedometerMiddleOutline />
            ) : (
              <Icon28SpeedometerMaxOutline />
            )
          }
          textWrap="short"
        >
          {t("cpm")}: {cpm}
        </MiniInfoCell>
        <MiniInfoCell
          before={
            <Icon28ErrorCircleOutline
              fill={`rgb(${150 + errors}, ${162 - errors * 8.1}, ${
                173 - errors * 8.65
              })`}
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
            <Button appearance="positive" stretched size="l" onClick={reset}>
              {t("restart")}
            </Button>
          </Div>
        )}
      </Group>
      {history.length > 0 && (
        <Group mode="plain">
          <Group
            separator="hide"
            mode="plain"
            style={{
              textAlign: "center",
            }}
            description={`${t("formula")}: ${t("cpm")} / ${t("errors")}`}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
              }}
            >
              <Group
                style={{
                  marginRight: history.length > 1 ? "5px" : undefined,
                }}
                separator="hide"
                mode="plain"
              >
                <Header>{t("bestResult")}</Header>
                {Result(history.sort(resultSort)[0])}
              </Group>
              {history.length > 1 && (
                <Group
                  style={{
                    marginLeft: "5px",
                  }}
                  separator="hide"
                  mode="plain"
                >
                  <Header>{t("worstResult")}</Header>
                  {Result(history.sort(resultSort)[history.length - 1])}
                </Group>
              )}
            </div>
          </Group>

          <Spacing />

          <Group
            mode="plain"
            header={
              <Header after={`${t("total")}: ${history.length}`}>
                {t("history")}
              </Header>
            }
          >
            <CardScroll padding>
              {history.sort(dateSort).map(Result)}
            </CardScroll>
          </Group>

          <Spacing />

          <Separator />

          <SimpleCell hasActive={false} hasHover={false}>
            <Button
              size="m"
              mode="primary"
              appearance="negative"
              onClick={(): void => {
                setHistory([]);
                History.save([]);
                reset();
              }}
            >
              {t("clearHistory")}
            </Button>
          </SimpleCell>
        </Group>
      )}
    </Group>
  );
};

export default observer(Speedtype);

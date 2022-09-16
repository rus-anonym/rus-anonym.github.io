import React, { useMemo, useState } from "react";
import {
    FormItem,
    FormItemProps,
    FormLayout,
    Group,
    Input,
    Slider,
    Spacing,
    Text,
} from "@vkontakte/vkui";

interface IResult {
    type: "win" | "lose" | "default";
    count?: number;
    winCount: number;
    loseCount: number;
}

const Result = ({
    result,
    desiredWinrate,
}: {
    result: IResult;
    desiredWinrate: number;
}): JSX.Element => {
    if (result.type === "default") {
        return <Text>Желаемый процент побед равен текущему</Text>;
    }

    if (result.count === Infinity) {
        return (
            <Text>Достигнуть процента побед {desiredWinrate}% невозможно</Text>
        );
    }

    return (
        <Text>
            Для достижения процента побед {desiredWinrate}% необходимо{" "}
            {result.count as number}{" "}
            {result.type === "win" ? "побед" : "поражений"} подряд
        </Text>
    );
};

const WinRateCalculator = (): JSX.Element => {
    const [totalMatchesCount, setTotalMatchesCount] = useState(0);
    const [totalWinrate, setTotalWinrate] = useState(0);
    const [desiredWinrate, setDesiredWinrate] = useState(0);

    const [totalWinrateStatus, setTotalWinrateStatus] =
        useState<Exclude<FormItemProps["status"], undefined>>("default");
    const [desiredWinrateStatus, setDesiredWinrateStatus] =
        useState<Exclude<FormItemProps["status"], undefined>>("default");

    const result = useMemo<IResult>(() => {
        const winCount = Math.floor(totalMatchesCount * (totalWinrate / 100));
        const loseCount = Math.floor(totalMatchesCount - winCount);

        const result = Math.round(
            loseCount * (100 / (100 - desiredWinrate)) - totalMatchesCount
        );

        if (result > 0) {
            return {
                type: "win",
                count: result,
                winCount,
                loseCount,
            };
        } else if (result < 0) {
            const totalWin = (totalMatchesCount * totalWinrate) / 100;
            return {
                type: "lose",
                count: Math.round(
                    totalWin / (desiredWinrate / 100) - totalMatchesCount
                ),
                winCount,
                loseCount,
            };
        } else {
            return {
                type: "default",
                winCount,
                loseCount,
            };
        }
    }, [totalMatchesCount, totalWinrate, desiredWinrate]);

    return (
        <Group>
            <FormLayout>
                <FormItem top="Общее количество матчей">
                    <Input
                        min={0}
                        value={totalMatchesCount.toString()}
                        onChange={(e): void =>
                            setTotalMatchesCount(Number(e.target.value))
                        }
                        type="number"
                    />
                </FormItem>
                <FormItem
                    top="Текущий процент побед"
                    status={totalWinrateStatus}
                >
                    <Input
                        min={0}
                        max={100}
                        value={totalWinrate.toString()}
                        onChange={(e): void => {
                            const number = Number(e.target.value);
                            if (number > 100 || number < 0) {
                                setTotalWinrateStatus("error");
                            } else {
                                setTotalWinrate(number);
                                setTotalWinrateStatus("valid");
                            }
                        }}
                        type="number"
                    />
                    <Spacing />
                    <Slider
                        step={0.25}
                        min={0}
                        max={100}
                        value={totalWinrate}
                        onChange={(number): void => {
                            setTotalWinrate(number);
                            setTotalWinrateStatus("valid");
                        }}
                    />
                </FormItem>
                <FormItem
                    top="Желаемый процент побед"
                    status={desiredWinrateStatus}
                >
                    <Input
                        min={0}
                        max={100}
                        value={desiredWinrate.toString()}
                        onChange={(e): void => {
                            const number = Number(e.target.value);
                            if (number > 100 || number < 0) {
                                setDesiredWinrateStatus("error");
                            } else {
                                setDesiredWinrate(number);
                                setDesiredWinrateStatus("valid");
                            }
                        }}
                        type="number"
                    />
                    <Spacing />
                    <Slider
                        step={0.25}
                        min={0}
                        max={100}
                        value={desiredWinrate}
                        onChange={(number): void => {
                            setDesiredWinrate(number);
                            setDesiredWinrateStatus("valid");
                        }}
                    />
                </FormItem>
            </FormLayout>

            <Group mode="plain" style={{
                textAlign: "center", height: "4vh" 
            }}>
                <Result result={result} desiredWinrate={desiredWinrate} />
            </Group>
        </Group>
    );
};

export default WinRateCalculator;

import { Div, Group, Header, Input, Link, RichCell } from "@vkontakte/vkui";
import React, { useState } from "react";

interface IRule {
    pattern: string;
    removeSymbolsCount: number;
}

interface IEnding {
    pattern: string;
    rules: IRule[];
}

interface IFeminitive {
    stem: string;
    feminitives: string[];
    endings: string[];
}

interface IEndingData {
    ending: IEnding;
    rule: IRule;
}

class Feminizator {
    public static readonly words = {
        без: "без",
        как: "как",
        либо: "либо",
        например: "например",
        них: "них",
        под: "под",

        два: "две",

        весь: "вся",
        всё: "вся",

        чего: "чегой",

        ее: "е_е",
        её: "е_ё",
        кто: "котор_ая",
        каким: "как_ой",
        "муж.": "жен.",
        муж: "жена",
        то: "т_а",
        того: "т_у",
        тот: "т_а",
        мужчина: "женщи_на",
        мужчины: "женщи_ны",
    } as const;

    public static readonly endings: IEnding[] = [
        {
            pattern: "бо",
            rules: [
                {
                    pattern: "либо",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "их",
            rules: [
                {
                    pattern: "их",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "ых",
            rules: [
                {
                    pattern: "ых",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "ной",
            rules: [
                {
                    pattern: "ной",
                    removeSymbolsCount: 3,
                },
            ],
        },
        {
            pattern: "ных",
            rules: [
                {
                    pattern: "ных",
                    removeSymbolsCount: 3,
                },
            ],
        },
        {
            pattern: "тей",
            rules: [
                {
                    pattern: "тей",
                    removeSymbolsCount: 3,
                },
            ],
        },
        {
            pattern: "ть",
            rules: [
                {
                    pattern: "[аеи]ть",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "ёт",
            rules: [
                {
                    pattern: "[её]т",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "ют",
            rules: [
                {
                    pattern: "ают",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "ая",
            rules: [
                {
                    pattern: "[дкнш]ое",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "[дн]ый",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "[бвлмпт][оы][ей]",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "[шщ]ее",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "[кнпщщ]ий",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "яя",
            rules: [
                {
                    pattern: "[нчщ]ий",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "[нчщ]ее",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "аяся",
            rules: [
                {
                    pattern: "ееся",
                    removeSymbolsCount: 4,
                },
                {
                    pattern: "ийся",
                    removeSymbolsCount: 4,
                },
            ],
        },
        {
            pattern: "ок|есс|ин|иц",
            rules: [
                {
                    pattern: "вий",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "лей",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "ств",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "тра",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "еров",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "ч+ки|ессы|ини|ицы",
            rules: [
                {
                    pattern: "века",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "ки|ессы|ини|ицы",
            rules: [
                {
                    pattern: "[ае]за",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[ай]на",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[ас]та",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[её]ма",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[коя][тдя]а",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[мн]ца",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "алла",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "дке",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "е[жт]а",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "зда",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "ены",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "еста",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "и[дтщ]а",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "иала",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "инка",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "кты",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "лива",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "нта",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "о[лрс]а",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "рева",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "ства",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "те[лр][аия]",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[оу]ви",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "фона",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "я[дс]а",
                    removeSymbolsCount: 1,
                },
            ],
        },
        {
            pattern: "ессы|ини|ицы",
            rules: [
                {
                    pattern: "[вгнст]и[ия]",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "бега",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[бк]оя",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "иги",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[врт]ца",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "ени",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "есы",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[исы]ка",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "изма",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "лия",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "сьма",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "йма",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "нка",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "ья",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "уки",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "юди",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "у[сх]а",
                    removeSymbolsCount: 1,
                },
            ],
        },
        {
            pattern: "ии",
            rules: [
                {
                    pattern: "[гн]и[ия]",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "есс|иц|инь",
            rules: [
                {
                    pattern: "вых",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "й+ки",
            rules: [
                {
                    pattern: "боя",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "ви[йя]",
                    removeSymbolsCount: 1,
                },
            ],
        },
        {
            pattern: "ей",
            rules: [
                {
                    pattern: "[шщ]им",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "его",
                    removeSymbolsCount: 3,
                },
            ],
        },
        {
            pattern: "ой",
            rules: [
                {
                    pattern: "[вгдклнртш]ого",
                    removeSymbolsCount: 3,
                },
                {
                    pattern: "[ео]му",
                    removeSymbolsCount: 3,
                },
                {
                    pattern: "[гд][иы]м",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "[клмнр][оы]м",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "ке|ессе|ине|ице",
            rules: [
                {
                    pattern: "[ия]де",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[оя]ду",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "ане",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "е[нс]те",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[ар]те",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "ессе",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[её]ме",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "ксу",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "лу",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "нию",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "нке",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "оду",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "ету",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "сту",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "усе",
                    removeSymbolsCount: 1,
                },
            ],
        },
        {
            pattern: "ессе|ине|ице",
            rules: [
                {
                    pattern: "еге",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "тве",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "дне",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[иы]ке",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "нцу",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "чае",
                    removeSymbolsCount: 1,
                },
            ],
        },
        {
            pattern: "ей|це",
            rules: [
                {
                    pattern: "н[иь]ем",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "ессам",
            rules: [
                {
                    pattern: "кам",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "ессам|иням|ицам",
            rules: [
                {
                    pattern: "[дт]ям",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "ую",
            rules: [
                {
                    pattern: "шой",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "чий",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "[вг]ое",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "ессой|иней|ицей",
            rules: [
                {
                    pattern: "[вгдл]ом",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "ью",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "[илнт][её]м",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "ками|ессами|ицами",
            rules: [
                {
                    pattern: "[вдлн][ая]ми",
                    removeSymbolsCount: 3,
                },
                {
                    pattern: "[иы]ми",
                    removeSymbolsCount: 3,
                },
                {
                    pattern: "тами",
                    removeSymbolsCount: 3,
                },
                {
                    pattern: "ьями",
                    removeSymbolsCount: 4,
                },
            ],
        },
        {
            pattern: "ессами|ицами",
            rules: [
                {
                    pattern: "[ая]ми",
                    removeSymbolsCount: 3,
                },
            ],
        },
        {
            pattern: "ч+ка|есса|ина|иня|ица",
            rules: [
                {
                    pattern: "ёнок",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "ыка",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "[ае]к",
                    removeSymbolsCount: 1,
                },
            ],
        },
        {
            pattern: "ч+есса|ина|иня|ица",
            rules: [
                {
                    pattern: "цо",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "ц+есса|иня|ица",
            rules: [
                {
                    pattern: "[бнр]ец",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "к+иня",
            rules: [
                {
                    pattern: "ст",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "нт",
                    removeSymbolsCount: 0,
                },
            ],
        },
        {
            pattern: "н+ица",
            rules: [
                {
                    pattern: "ль",
                    removeSymbolsCount: 0,
                },
            ],
        },
        {
            pattern: "адья",
            rules: [
                {
                    pattern: "поп",
                    removeSymbolsCount: 0,
                },
            ],
        },
        {
            pattern: "ка|есса|иня|ица",
            rules: [
                {
                    pattern: "[аеёиноруэю][бвжзлнпрстфчшщ]",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "евт",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "[аеи][дн]ец",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "тец",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "[лн]ь",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "л[блнпт]",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "льм",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "мп",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "оша",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "рин",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "с[лст]",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "ы[нсш]",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "я[жнпрсчшщ]",
                    removeSymbolsCount: 0,
                },
            ],
        },
        {
            pattern: "ка",
            rules: [
                {
                    pattern: "яд",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "[аеёуы]м",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "рий",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "[аеоу]й",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "[рст]ь",
                    removeSymbolsCount: 0,
                },
            ],
        },
        {
            pattern: "есса|иня|ица",
            rules: [
                {
                    pattern: "[аеёинорсуыя][гдкмхц]",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "[аеи]лец",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "[бвдт]р",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "з[дм]",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "ол[гк]",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "офе",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "ыв",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "[аеиоу]й",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[дрст]ь",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "ядя",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "дья",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "[кы]т",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "к[сх]",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[бвдклмнрстхч]о",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[вжлнстч][иь][её]",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "мя",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "[лрцщ]е",
                    removeSymbolsCount: 1,
                },
            ],
        },
        {
            pattern: "есса",
            rules: [
                {
                    pattern: "[длн]ие",
                    removeSymbolsCount: 1,
                },
            ],
        },
        {
            pattern: "ыня",
            rules: [
                {
                    pattern: "рин",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "уз",
                    removeSymbolsCount: 0,
                },
            ],
        },
        {
            pattern: "ица",
            rules: [
                {
                    pattern: "[дл]ие",
                    removeSymbolsCount: 2,
                },
                {
                    pattern: "ще",
                    removeSymbolsCount: 3,
                },
            ],
        },
        {
            pattern: "ша",
            rules: [
                {
                    pattern: "у[нт]",
                    removeSymbolsCount: 0,
                },
                {
                    pattern: "ир",
                    removeSymbolsCount: 0,
                },
            ],
        },
        {
            pattern: "ь+я",
            rules: [
                {
                    pattern: "ун",
                    removeSymbolsCount: 0,
                },
            ],
        },
        {
            pattern: "ессы|ыни|ицы",
            rules: [
                {
                    pattern: "нга",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "о[дс]ы",
                    removeSymbolsCount: 1,
                },
                {
                    pattern: "усы",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "инь",
            rules: [
                {
                    pattern: "дей",
                    removeSymbolsCount: 2,
                },
            ],
        },
        {
            pattern: "на",
            rules: [
                {
                    pattern: "обно",
                    removeSymbolsCount: 2,
                },
            ],
        },
    ];

    public static findEndingData(
        wordEnding: string
    ): IEndingData[] | undefined {
        const rules: IEndingData[] = [];

        for (const ending of Feminizator.endings) {
            const rule = ending.rules.find(({ pattern }) =>
                new RegExp("^.*" + pattern + "$", "i").test(wordEnding)
            );

            if (rule) {
                rules.push({ ending, rule });
            }
        }

        return rules.length > 0 ? rules : undefined;
    }

    public static makeFeminitive(word: string): IFeminitive | string {
        if (word.length < 3) {
            return word;
        }

        const endingDataParser = (endingData: IEndingData): IFeminitive => {
            const { ending, rule: wordRule } = endingData;

            const stem =
                wordRule.removeSymbolsCount === 0
                    ? word
                    : word.slice(0, -wordRule.removeSymbolsCount);

            const rule = ending.pattern.split("+");

            const prefix: string = rule.length > 1 ? rule[0] : "";
            const allFeminitiveEndings: string =
                rule.length > 1 ? rule[1] : ending.pattern;

            const feminitives: string[] = [];

            allFeminitiveEndings.split("|").map((x) => {
                feminitives.push(stem + prefix + x);
            });

            return {
                stem,
                feminitives,
                endings: allFeminitiveEndings.split("|"),
            };
        };

        for (const wordEnding of [
            word.slice(-4),
            word.slice(-3),
            word.slice(-2),
        ]) {
            const endingData = Feminizator.findEndingData(wordEnding);

            if (!endingData) {
                continue;
            }

            const endings: IFeminitive[] = endingData.map(endingDataParser);

            return {
                stem: endings[0].stem,
                endings: ([] as string[]).concat(
                    ...endings.map((x) => x.endings)
                ),
                feminitives: ([] as string[]).concat(
                    ...endings.map((x) => x.feminitives)
                ),
            };
        }

        return word;
    }
}

const Result = ({ word }: { word: string }): JSX.Element => {
    const feminizedWord = Feminizator.makeFeminitive(word);

    if (typeof feminizedWord === "string") {
        return (
            <Group header={<Header>Прекрасное слово</Header>} mode="plain">
                <Div>{feminizedWord}</Div>
            </Group>
        );
    }

    if (feminizedWord.feminitives.length === 1) {
        return (
            <Group>
                <Div>{feminizedWord.feminitives[0]}</Div>
            </Group>
        );
    }

    return (
        <Group
            header={<Header>{feminizedWord.feminitives[0]}</Header>}
            mode="plain"
        >
            <RichCell disabled>
                {feminizedWord.feminitives
                    .filter((x) => x !== feminizedWord.feminitives[0])
                    .map((feminitive, index) => {
                        return <Div key={index}>{feminitive}</Div>;
                    })}
            </RichCell>
        </Group>
    );
};

const FeminizatorComponent = (): JSX.Element => {
    const [value, setValue] = useState("");

    const description = (
        <>
            Вдохновлено{" "}
            <Link target="_blank" href="https://feminitives.ru/">
                feminitives.ru
            </Link>{" "}
            (автор{" "}
            <Link target="_blank" href="https://github.com/envrm">
                envrm
            </Link>
            )
        </>
    );

    return (
        <Group description={description}>
            <Div>
                <Input
                    value={value}
                    onChange={(event): void => {
                        setValue(event.target.value);
                        event.preventDefault();
                    }}
                />
            </Div>

            {value !== "" && <Result word={value} />}
        </Group>
    );
};

export default FeminizatorComponent;

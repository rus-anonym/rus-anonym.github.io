import React, { useEffect, useState } from "react";

import moment from "moment";

import {
    Alert,
    Button,
    CellButton,
    Div,
    Group,
    Header,
    MiniInfoCell,
    Panel,
    Placeholder,
    useAdaptivity,
    View,
    ViewWidth,
} from "@vkontakte/vkui";

import {
    Icon20CalendarOutline,
    Icon20GlobeOutline,
    Icon56ArticleOutline,
} from "@vkontakte/icons";

import router from "../../TS/store/router";
import { useTranslation } from "react-i18next";
import session from "../../TS/store/session";
import { observer } from "mobx-react";
import lazyLoad from "../../utils/lazyLoad";

interface IArticle {
    id: string;
    title: string;
    content: React.ReactNode;
    lang: "en" | "ru";
    published: Date;
    explicit: boolean;
}

const ArticleFallback = ({ title }: { title: string }): JSX.Element => {
    const { t } = useTranslation("translation", {
        keyPrefix: "pages.articles",
    });

    const [dotsCount, setDotsCount] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDotsCount(dotsCount >= 3 ? 1 : dotsCount + 1);
        }, 300);

        return () => clearInterval(interval);
    }, [dotsCount]);

    return (
        <Group>
            <Placeholder header={title} icon={<Icon56ArticleOutline />}>
                {t("loading")}
                {".".repeat(dotsCount)}
            </Placeholder>
        </Group>
    );
};

const articlesList: IArticle[] = [
    {
        id: "ebatmeta",
        title: "NoMeta для настоящих пацанов",
        content: lazyLoad(
            {
                fallback: (
                    <ArticleFallback title="NoMeta для настоящих пацанов" />
                ),
            },
            () => import("./List/EbatMeta")
        ),
        lang: "ru",
        published: new Date("2022-03-03T23:42:14"),
        explicit: true,
    },
    {
        id: "nometa",
        title: "NoMeta",
        content: lazyLoad(
            {
                fallback: <ArticleFallback title="NoMeta" />,
            },
            () => import("./List/NoMeta")
        ),
        lang: "ru",
        published: new Date("2022-03-07T00:14:54"),
        explicit: false,
    },
    {
        id: "nohello",
        title: "NoHello",
        content: lazyLoad(
            {
                fallback: <ArticleFallback title="NoHello" />,
            },
            () => import("./List/NoHello")
        ),
        lang: "en",
        published: new Date("2022-03-07T00:23:27"),
        explicit: false,
    },
    {
        id: "howtocommunicateru",
        title: "Как разговаривать в интернете",
        content: lazyLoad(
            {
                fallback: (
                    <ArticleFallback title="Как разговаривать в интернете" />
                ),
            },
            () => import("./List/HowToCommunicateRU")
        ),
        lang: "ru",
        published: new Date("2022-03-07T02:11:44"),
        explicit: true,
    },
    {
        id: "davidov-retake",
        title: "Сказ о том как Давидов пересдачу закрывал",
        content: lazyLoad(
            {
                fallback: (
                    <ArticleFallback title="Сказ о том как Давидов пересдачу закрывал" />
                ),
            },
            () => import("./List/DavidovRetake")
        ),
        lang: "ru",
        published: new Date("2021-10-20T22:11:34"),
        explicit: true,
    },
];

const byPublished = (a: IArticle, b: IArticle): 1 | 0 | -1 => {
    if (a.published.valueOf() > b.published.valueOf()) {
        return -1;
    }
    if (a.published.valueOf() < b.published.valueOf()) {
        return 1;
    }
    return 0;
};

const ArticlesView = ({ id }: { id: string }): JSX.Element => {
    const { t, i18n } = useTranslation("translation", {
        keyPrefix: "pages.articles",
    });

    const { viewWidth } = useAdaptivity();
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    const [isLanguageFilter, setLanguageFilter] = useState(true);

    useEffect(() => {
        if (
            !articlesList.some((article) => article.id === router.activePanel)
        ) {
            router.activePanel = null;
        }
    });

    const BackwardButton = (
        <Group>
            <Div>
                <Button
                    size="m"
                    onClick={(): void => {
                        router.activePanel = null;
                    }}
                    stretched
                    appearance="neutral"
                >
                    {t("backward")}
                </Button>
            </Div>
        </Group>
    );

    const activeArticles = articlesList
        .filter((x) => (isLanguageFilter ? x.lang === session.language : true))
        .sort(byPublished);

    const ExplicitArticleButton = ({
        article,
    }: {
        article: IArticle;
    }): JSX.Element => {
        return (
            <CellButton
                onClick={(): void => {
                    router.popout = (
                        <Alert
                            onClose={(): void => {
                                router.popout = null;
                            }}
                            actions={[
                                {
                                    title: t("stillOpen"),
                                    mode: "destructive",
                                    autoclose: true,
                                    action: (): void => {
                                        router.activePanel = article.id;
                                    },
                                },
                                {
                                    title: t("backward"),
                                    autoclose: true,
                                    mode: "cancel",
                                },
                            ]}
                            header={t("warning")}
                            text={t("explicitWarning")}
                        />
                    );
                }}
            >
                {t("open")}
            </CellButton>
        );
    };

    return (
        <View id={id} activePanel={router.activePanel || "default"}>
            <Panel id="default">
                <Group>
                    {activeArticles.length > 0 ? (
                        activeArticles.map((x) => {
                            moment.locale(session.language);
                            return (
                                <Group
                                    header={
                                        <Header mode="primary" multiline>
                                            {x.title}
                                        </Header>
                                    }
                                >
                                    <MiniInfoCell
                                        before={<Icon20CalendarOutline />}
                                    >
                                        {`${t("published")}: ${moment(
                                            x.published
                                        ).format("DD.MM.YYYY, HH:mm:ss")}`}
                                    </MiniInfoCell>
                                    {!isLanguageFilter && (
                                        <MiniInfoCell
                                            before={<Icon20GlobeOutline />}
                                        >
                                            {`${t("language")}: ${
                                                i18n.t(
                                                    "languages." + x.lang
                                                ) as unknown as string
                                            }`}
                                        </MiniInfoCell>
                                    )}
                                    {x.explicit ? (
                                        <ExplicitArticleButton article={x} />
                                    ) : (
                                        <CellButton
                                            onClick={(): void => {
                                                router.activePanel = x.id;
                                            }}
                                        >
                                            {t("open")}
                                        </CellButton>
                                    )}
                                </Group>
                            );
                        })
                    ) : (
                        <Placeholder icon={<Icon56ArticleOutline />}>
                            {t("notFound")}
                        </Placeholder>
                    )}

                    {(activeArticles.length < articlesList.length ||
                        !isLanguageFilter) && (
                        <Div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                size="l"
                                stretched={!isDesktop}
                                onClick={(): void =>
                                    setLanguageFilter(!isLanguageFilter)
                                }
                            >
                                {t(
                                    isLanguageFilter
                                        ? "showOtherArticles"
                                        : "hideOtherArticles"
                                )}
                            </Button>
                        </Div>
                    )}
                </Group>
            </Panel>
            {articlesList.map((x) => {
                return (
                    <Panel id={x.id}>
                        {x.content}
                        {BackwardButton}
                    </Panel>
                );
            })}
        </View>
    );
};

export default observer(ArticlesView);

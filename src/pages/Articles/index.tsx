import React, { useEffect, useState } from "react";

import moment from "moment";

import {
    Alert,
    CellButton,
    Group,
    Header,
    IconButton,
    MiniInfoCell,
    Panel,
    Placeholder,
    Search,
    Spacing,
    useAdaptivity,
    View,
    ViewWidth,
} from "@vkontakte/vkui";

import {
    Icon20CalendarOutline,
    Icon20GlobeOutline,
    Icon24Filter,
    Icon56ArticleOutline,
} from "@vkontakte/icons";

import router from "../../TS/store/router";
import { useTranslation } from "react-i18next";
import session from "../../TS/store/session";
import { observer } from "mobx-react";
import LazyLoadComponent from "../../utils/LazyLoad";
import storage from "../../TS/store/storage";

interface IArticle {
    id: string;
    title: string;
    content: React.ReactNode;
    lang: typeof session.language;
    published: Date;
    isExplicit: boolean;
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
        content: (
            <LazyLoadComponent
                params={{
                    fallback: (
                        <ArticleFallback title="NoMeta для настоящих пацанов" />
                    ),
                }}
                callbacks={[() => import("./List/EbatMeta")]}
            />
        ),
        lang: "ru",
        published: new Date("2022-03-03T23:42:14"),
        isExplicit: true,
    },
    {
        id: "nometa",
        title: "NoMeta",
        content: (
            <LazyLoadComponent
                params={{
                    fallback: <ArticleFallback title="NoMeta" />,
                }}
                callbacks={[() => import("./List/NoMeta")]}
            />
        ),
        lang: "ru",
        published: new Date("2022-03-07T00:14:54"),
        isExplicit: false,
    },
    {
        id: "nohello",
        title: "NoHello",
        content: (
            <LazyLoadComponent
                params={{
                    fallback: <ArticleFallback title="NoHello" />,
                }}
                callbacks={[() => import("./List/NoHello")]}
            />
        ),
        lang: "en",
        published: new Date("2022-03-07T00:23:27"),
        isExplicit: false,
    },
    {
        id: "howtocommunicateru",
        title: "Как разговаривать в интернете",
        content: (
            <LazyLoadComponent
                params={{
                    fallback: (
                        <ArticleFallback title="Как разговаривать в интернете" />
                    ),
                }}
                callbacks={[() => import("./List/HowToCommunicateRU")]}
            />
        ),
        lang: "ru",
        published: new Date("2022-03-07T02:11:44"),
        isExplicit: true,
    },
    {
        id: "davidov-retake",
        title: "Сказ о том как Давидов пересдачу закрывал",
        content: (
            <LazyLoadComponent
                params={{
                    fallback: (
                        <ArticleFallback title="Сказ о том как Давидов пересдачу закрывал" />
                    ),
                }}
                callbacks={[() => import("./List/DavidovRetake")]}
            />
        ),
        lang: "ru",
        published: new Date("2021-10-20T22:11:34"),
        isExplicit: true,
    },
    {
        id: "information-security-concepts-for-humanitarians",
        title: "Основные понятия информационной безопасности для гуманитариев",
        content: (
            <LazyLoadComponent
                params={{
                    fallback: (
                        <ArticleFallback title="Основные понятия информационной безопасности для гуманитариев" />
                    ),
                }}
                callbacks={[() => import("./List/ISHumanitaries")]}
            />
        ),
        lang: "ru",
        published: new Date("2022-08-11T23:42:34"),
        isExplicit: false,
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

    const [searchFilter, setSearchFilter] = useState("");

    const { isLanguageFilter, isExplicitFilter } = storage.articles.filters;

    useEffect(() => {
        if (
            !articlesList.some((article) => article.id === router.activePanel)
        ) {
            router.activePanel = null;
        }
    });

    const filterCallback = (article: IArticle): boolean => {
        if (isLanguageFilter && article.lang !== session.language) {
            return false;
        }

        if (isExplicitFilter && article.isExplicit) {
            return false;
        }

        if (
            searchFilter !== "" &&
            !article.title.toLowerCase().includes(searchFilter.toLowerCase())
        ) {
            return false;
        }

        return true;
    };

    const activeArticles = articlesList
        .filter(filterCallback)
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

    const ArticlePreview = (article: IArticle): JSX.Element => {
        moment.locale(session.language);
        return (
            <Group
                mode="plain"
                header={
                    <Header mode="primary" multiline>
                        {article.title}
                    </Header>
                }
            >
                <MiniInfoCell before={<Icon20CalendarOutline />}>
                    {`${t("published")}: ${moment(article.published).format(
                        "DD.MM.YYYY, HH:mm:ss"
                    )}`}
                </MiniInfoCell>
                {!isLanguageFilter && (
                    <MiniInfoCell before={<Icon20GlobeOutline />}>
                        {`${t("language")}: ${
                            i18n.t(
                                "languages." + article.lang
                            ) as unknown as string
                        }`}
                    </MiniInfoCell>
                )}
                {article.isExplicit ? (
                    <ExplicitArticleButton article={article} />
                ) : (
                    <CellButton
                        onClick={(): void => {
                            router.activePanel = article.id;
                        }}
                    >
                        {t("open")}
                    </CellButton>
                )}
            </Group>
        );
    };

    return (
        <View id={id} activePanel={router.activePanel || "default"}>
            <Panel id="default">
                <Group>
                    <Search
                        placeholder={t("filters.search")}
                        value={searchFilter}
                        onChange={(event): void => {
                            setSearchFilter(event.target.value);
                        }}
                        icon={
                            <IconButton
                                onClick={(): void => {
                                    router.activeModal = "articles-filter";
                                }}
                            >
                                <Icon24Filter />
                            </IconButton>
                        }
                    />

                    {isDesktop && <Spacing />}
                    {activeArticles.length > 0 ? (
                        activeArticles.map(ArticlePreview)
                    ) : (
                        <Placeholder icon={<Icon56ArticleOutline />}>
                            {t("notFound")}
                        </Placeholder>
                    )}
                </Group>
            </Panel>
            {articlesList.map((x) => {
                return <Panel id={x.id}>{x.content}</Panel>;
            })}
        </View>
    );
};

export default observer(ArticlesView);

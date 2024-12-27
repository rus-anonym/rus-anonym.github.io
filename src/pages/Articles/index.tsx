import React, { ReactElement, useEffect, useState } from "react";

import moment from "moment";

import {
  CellButton,
  Group,
  Header,
  IconButton,
  MiniInfoCell,
  Panel,
  Placeholder,
  Search,
  Spacing,
  useAdaptivityWithJSMediaQueries,
  View,
} from "@vkontakte/vkui";

import {
  Icon20CalendarOutline,
  Icon20GlobeOutline,
  Icon24Filter,
  Icon56ArticleOutline,
} from "@vkontakte/icons";

import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import router from "../../TS/store/router";
import session from "../../TS/store/session";
import storage from "../../TS/store/storage";
import LazyLoadComponent from "../../utils/LazyLoad";

interface IArticle {
  id: string;
  title: string;
  content: React.ReactNode;
  lang: typeof session.language;
  published: Date;
  isExplicit: boolean;
  isPinned: boolean;
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
      <Placeholder title={title} icon={<Icon56ArticleOutline />}>
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
          fallback: <ArticleFallback title="NoMeta для настоящих пацанов" />,
        }}
        callbacks={[() => import("./List/EbatMeta")]}
      />
    ),
    lang: "ru",
    published: new Date("2022-03-03T23:42:14"),
    isExplicit: true,
    isPinned: false,
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
    isPinned: false,
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
    isPinned: false,
  },
  {
    id: "howtocommunicateru",
    title: "Как разговаривать в интернете",
    content: (
      <LazyLoadComponent
        params={{
          fallback: <ArticleFallback title="Как разговаривать в интернете" />,
        }}
        callbacks={[() => import("./List/HowToCommunicateRU")]}
      />
    ),
    lang: "ru",
    published: new Date("2022-03-07T02:11:44"),
    isExplicit: true,
    isPinned: false,
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
    isPinned: false,
  },
  {
    id: "my-vk-permanent-ban",
    title: "История о моём перманентном бане в ВК",
    content: (
      <LazyLoadComponent
        params={{
          fallback: (
            <ArticleFallback title="История о моём перманентном бане в ВК" />
          ),
        }}
        callbacks={[() => import("./List/MyVKPermanentBan")]}
      />
    ),
    lang: "ru",
    published: new Date("2022-10-19T02:35:45"),
    isExplicit: false,
    isPinned: false,
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

const ArticlesView = (): JSX.Element => {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "pages.articles",
  });

  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  const [searchFilter, setSearchFilter] = useState("");

  const { isLanguageFilter, isExplicitFilter } = storage.articles.filters;

  useEffect(() => {
    if (!articlesList.some((article) => article.id === router.activePanel)) {
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

  const activeArticles = articlesList.filter(filterCallback).sort(byPublished);

  const ArticlePreview = (article: IArticle): JSX.Element => {
    moment.locale(session.language);
    return (
      <Group
        mode="plain"
        header={
          <Header size="m" multiline>
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
              i18n.t("languages." + article.lang) as unknown as string
            }`}
          </MiniInfoCell>
        )}
        <CellButton
          onClick={(): void => {
            router.activePanel = article.id;
          }}
        >
          {t("open")}
        </CellButton>
      </Group>
    );
  };

  return (
    <View activePanel={router.activePanel || "default"}>
      <Panel id="default">
        <Group>
          <Search
            placeholder={t("filters.search").toString()}
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
      {
        articlesList.map((x) => {
          return <Panel id={x.id}>{x.content}</Panel>;
        }) as unknown as ReactElement
      }
    </View>
  );
};

const ObservedArticlesView = observer(ArticlesView);
export default ObservedArticlesView;

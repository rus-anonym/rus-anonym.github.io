import {
  Icon24Filter,
  Icon28ComputerOutline,
  Icon28ComputerSmartphoneOutline,
  Icon28SmartphoneOutline,
  Icon56ComputerOutline,
  Icon56ErrorTriangleOutline,
  Icon56SmartphoneOutline,
} from "@vkontakte/icons";
import {
  Button,
  Cell,
  CellButton,
  Group,
  IconButton,
  MiniInfoCell,
  Panel,
  Placeholder,
  Search,
  useAdaptivityWithJSMediaQueries,
  View,
} from "@vkontakte/vkui";
import React, { ReactElement, useEffect, useState } from "react";

import { Tooltip } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";
import router from "../../TS/store/router";
import session from "../../TS/store/session";
import storage from "../../TS/store/storage";
import LazyLoadComponent from "../../utils/LazyLoad";

interface IUtil {
  id: string;
  title: string;
  description: string;
  isMobile: boolean;
  isDesktop: boolean;
  component: React.ReactNode;
  languages: (typeof session.language)[];
}

const UtilsView = (): JSX.Element => {
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  const [searchFilter, setSearchFilter] = useState("");

  const { t } = useTranslation("translation", {
    keyPrefix: "pages.utils",
  });

  const { isLanguageFilter } = storage.utils.filters;

  const utils: IUtil[] = [
    {
      id: "qr",
      title: "QR Scanner",
      description: "Simple QR scanner",
      isMobile: true,
      isDesktop: false,
      component: <LazyLoadComponent callbacks={[() => import("./List/QR")]} />,
      languages: ["en", "ru"],
    },
    {
      id: "cat",
      title: "Cat",
      description: t("list.cat.description"),
      isMobile: true,
      isDesktop: true,
      component: <LazyLoadComponent callbacks={[() => import("./List/Cat")]} />,
      languages: ["en", "ru"],
    },
    {
      id: "speedtype",
      title: "Speedtype",
      description: t("list.speedtype.description"),
      isMobile: false,
      isDesktop: true,
      component: (
        <LazyLoadComponent callbacks={[() => import("./List/Speedtype")]} />
      ),
      languages: ["en", "ru"],
    },
    {
      id: "feminizator",
      title: "Feminizator",
      description: "Феминизаторка словесс",
      isMobile: true,
      isDesktop: true,
      component: (
        <LazyLoadComponent callbacks={[() => import("./List/Feminizator")]} />
      ),
      languages: ["ru"],
    },
    {
      id: "winrate-calculator",
      title: "Winrate Calculator",
      description: "Предварительная версия",
      isMobile: true,
      isDesktop: true,
      component: (
        <LazyLoadComponent
          callbacks={[() => import("./List/WinRateCalculator")]}
        />
      ),
      languages: ["ru"],
    },
    {
      id: "demotivator",
      title: "Demotivator",
      description: "",
      isMobile: true,
      isDesktop: true,
      component: (
        <LazyLoadComponent callbacks={[() => import("./List/Demotivator")]} />
      ),
      languages: ["ru", "en"],
    },
    {
      id: "vk-conversations",
      title: "VK Conversations",
      description: "",
      isMobile: true,
      isDesktop: true,
      component: (
        <LazyLoadComponent
          callbacks={[() => import("./List/VKConversations")]}
        />
      ),
      languages: ["ru"],
    },
    {
      id: "password-generator",
      title: "Password generator",
      description: "",
      isMobile: true,
      isDesktop: true,
      component: (
        <LazyLoadComponent
          callbacks={[() => import("./List/PasswordGenerator")]}
        />
      ),
      languages: ["ru", "en"],
    },
  ];

  const filter = (util: IUtil): boolean => {
    if (util.isDesktop !== isDesktop && util.isMobile !== !isDesktop) {
      return false;
    }

    if (isLanguageFilter && !util.languages.includes(session.language)) {
      return false;
    }

    if (
      searchFilter !== "" &&
      !util.title.toLowerCase().includes(searchFilter.toLowerCase())
    ) {
      return false;
    }

    return true;
  };

  const filteredUtils = utils.filter(filter);

  useEffect(() => {
    if (!utils.some((util) => util.id === router.activePanel)) {
      router.activePanel = null;
    }
  });

  const UtilNavBlock = (util: IUtil): JSX.Element => {
    return (
      <Group mode="plain">
        <Cell
          hasActive={false}
          hasHover={false}
          subtitle={util.description}
          badgeAfterTitle={
            <Tooltip
              shown={!isDesktop ? false : undefined}
              title={
                util.isDesktop && util.isMobile
                  ? t("multiplatform")
                  : util.isDesktop
                  ? t("onlyDesktop")
                  : t("onlyMobile")
              }
            >
              {util.isDesktop && util.isMobile ? (
                <Icon28ComputerSmartphoneOutline width={20} />
              ) : util.isDesktop ? (
                <Icon28ComputerOutline width={20} />
              ) : (
                <Icon28SmartphoneOutline width={20} />
              )}
            </Tooltip>
          }
        >
          {util.title}
        </Cell>
        <CellButton
          onClick={(): void => {
            router.activePanel = util.id;
          }}
        >
          {t("start")}
        </CellButton>
      </Group>
    );
  };

  const UtilCell = (util: IUtil): React.ReactElement => {
    if ((isDesktop && !util.isDesktop) || (!isDesktop && !util.isMobile)) {
      return (
        <Panel id={util.id}>
          <Group>
            <Placeholder
              icon={
                isDesktop ? (
                  <Icon56SmartphoneOutline />
                ) : (
                  <Icon56ComputerOutline />
                )
              }
              title={t("notAvailable")}
              action={
                <Button
                  size="l"
                  onClick={(): void => {
                    router.activePanel = null;
                  }}
                  stretched
                  appearance="neutral"
                >
                  {t("close")}
                </Button>
              }
              stretched={!isDesktop}
            >
              {isDesktop ? t("onlyMobile") : t("onlyDesktop")}
            </Placeholder>
          </Group>
        </Panel>
      );
    }

    const ErrorFallback = (): JSX.Element => {
      return (
        <Group>
          <Placeholder
            title={t("onStartError")}
            icon={<Icon56ErrorTriangleOutline />}
            action={
              <Button
                stretched
                size="l"
                mode="secondary"
                onClick={() => {
                  router.activePanel = "default";
                }}
              >
                {t("backToList")}
              </Button>
            }
          />
        </Group>
      );
    };

    return (
      <Panel id={util.id}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {util.component}
        </ErrorBoundary>
      </Panel>
    );
  };

  return (
    // EBANIY TYPESCRIPT SUKA YA HUI ZNAET V CHEM OSHIBKA BLYATB, but it's working right
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <View activePanel={router.activePanel || "default"}>
      <Panel id="default">
        <Group
          description={
            <>
              <MiniInfoCell
                textWrap="full"
                before={<Icon28SmartphoneOutline />}
              >
                {t("onlyMobile")}
              </MiniInfoCell>
              <MiniInfoCell textWrap="full" before={<Icon28ComputerOutline />}>
                {t("onlyDesktop")}
              </MiniInfoCell>
              <MiniInfoCell
                textWrap="full"
                before={<Icon28ComputerSmartphoneOutline />}
              >
                {t("multiplatform")}
              </MiniInfoCell>
            </>
          }
        >
          <Search
            placeholder={t("filters.search").toString()}
            value={searchFilter}
            onChange={(event): void => {
              setSearchFilter(event.target.value);
            }}
            icon={
              <IconButton
                onClick={(): void => {
                  router.activeModal = "utils-filter";
                }}
              >
                <Icon24Filter />
              </IconButton>
            }
          />
          {filteredUtils.length > 0 ? (
            filteredUtils.map(UtilNavBlock)
          ) : (
            <Placeholder>{t("notFound") as unknown as string}</Placeholder>
          )}
        </Group>
      </Panel>
      {utils.map(UtilCell) as unknown as ReactElement}
    </View>
  );
};

export default observer(UtilsView);

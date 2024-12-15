import React from "react";

import {
  Cell,
  Group,
  PanelHeader,
  PanelHeaderBack,
  Separator,
  Spacing,
  SplitCol,
} from "@vkontakte/vkui";

import {
  Icon28ArticlesOutline,
  Icon28CubeBoxOutline,
  Icon28HomeOutline,
  Icon28InfoCircleOutline,
  Icon28ServicesOutline,
  Icon28UserOutline,
} from "@vkontakte/icons";

import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import router from "../../TS/store/router";
import HeaderLeftButtons from "./HeaderLeftButtons";
import RusAnonymTitle from "./RusAnonymTitle";

const NavigationCell = ({
  path,
  icon,
  text,
}: {
  path: string;
  icon: React.ReactNode;
  text: string;
}): JSX.Element => {
  return (
    <Cell
      onClick={(): void => {
        router.activeView = path;
      }}
      hasHover={false}
      hasActive={false}
      hovered={router.activeView === path}
      before={icon}
      after={
        router.activeView === path &&
        router.activePanel !== null && (
          <PanelHeaderBack
            size={24}
            onClick={(): void => {
              router.activePanel = null;
            }}
          />
        )
      }
    >
      {text}
    </Cell>
  );
};

const ObserverNavigationCell = observer(NavigationCell);

const DesktopNavPanel = (): JSX.Element => {
  const { t } = useTranslation("translation", {
    keyPrefix: "pages",
  });

  return (
    <SplitCol width={"20vw"} maxWidth={"20vw"}>
      <PanelHeader delimiter="separator" before={<HeaderLeftButtons />}>
        <RusAnonymTitle />
      </PanelHeader>

      <Group>
        <ObserverNavigationCell
          text={t("main.title")}
          icon={<Icon28HomeOutline />}
          path=""
        />
        <Spacing />
        <ObserverNavigationCell
          text={t("about.title")}
          icon={<Icon28UserOutline />}
          path="about"
        />
        <Spacing />
        <ObserverNavigationCell
          text={t("articles.title")}
          icon={<Icon28ArticlesOutline />}
          path="articles"
        />
        <Spacing />
        <ObserverNavigationCell
          text={t("utils.title")}
          icon={<Icon28ServicesOutline />}
          path="utils"
        />
        <Spacing />
        <ObserverNavigationCell
          text={t("prototypes.title")}
          icon={<Icon28CubeBoxOutline />}
          path="prototypes"
        />
        <Spacing />
        <Separator />
        <Spacing />
        <ObserverNavigationCell
          text={t("aboutSite.title")}
          icon={<Icon28InfoCircleOutline />}
          path="about-site"
        />
      </Group>
    </SplitCol>
  );
};

export default DesktopNavPanel;

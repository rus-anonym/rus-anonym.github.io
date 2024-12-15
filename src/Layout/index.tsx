import React, { useMemo } from "react";

import {
  Epic,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Platform,
  SplitCol,
  SplitLayout,
  useAdaptivityWithJSMediaQueries,
  usePlatform,
  View,
} from "@vkontakte/vkui";

import { observer } from "mobx-react";

import router from "../TS/store/router";

import DesktopNavPanel from "./components/DesktopNavPanels";
import HeaderLeftButtons from "./components/HeaderLeftButtons";
import MobileTabbar from "./components/MobileTabbar";
import RusAnonymTitle from "./components/RusAnonymTitle";
import ModalRoot from "./modal";

import MainPage from "../pages/Main";

import LazyLoadComponent from "../utils/LazyLoad";

const Page = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}): JSX.Element => {
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  const title = useMemo(() => {
    if (router.activeView === "team") {
      return "RusAnonymTeam";
    }

    if (isDesktop) {
      return null;
    } else {
      return <RusAnonymTitle />;
    }
  }, []);

  return (
    <View id={id} activePanel="default">
      <Panel id="default">
        <PanelHeader
          style={
            router.activeView === "team" && isDesktop
              ? {
                  textAlign: "center",
                }
              : {}
          }
          delimiter={isDesktop ? "separator" : "none"}
          before={!isDesktop && <HeaderLeftButtons />}
          after={
            !isDesktop &&
            router.activePanel !== null && (
              <PanelHeaderBack
                onClick={(): void => {
                  router.activePanel = null;
                }}
              />
            )
          }
        >
          {title}
        </PanelHeader>
        {children}
      </Panel>
    </View>
  );
};

const Layout = (): JSX.Element => {
  const platform = usePlatform();

  const hasHeader = platform !== Platform.VKCOM;
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  return (
    <SplitLayout
      style={{
        justifyContent: "center",
      }}
      header={hasHeader && <PanelHeader delimiter="none" />}
      popout={router.popout}
    >
      {isDesktop && <DesktopNavPanel />}

      <SplitCol stretchedOnMobile autoSpaced maxWidth={"45vw"}>
        <Epic
          id="default"
          activeStory={router.activeView}
          tabbar={!isDesktop && <MobileTabbar />}
        >
          <Page id="utils">
            <LazyLoadComponent callbacks={[() => import("../pages/Utils")]} />
          </Page>
          <Page id="">
            <MainPage />
          </Page>
          <Page id="about">
            <LazyLoadComponent callbacks={[() => import("../pages/About")]} />
          </Page>
          <Page id="prototypes">
            <LazyLoadComponent
              callbacks={[() => import("../pages/Prototypes")]}
            />
          </Page>
          <Page id="articles">
            <LazyLoadComponent
              callbacks={[() => import("../pages/Articles")]}
            />
          </Page>
          <Page id="about-site">
            <LazyLoadComponent
              callbacks={[() => import("../pages/AboutSite")]}
            />
          </Page>
          <Page id="team">
            <LazyLoadComponent callbacks={[() => import("../pages/Team")]} />
          </Page>
        </Epic>
      </SplitCol>
      <ModalRoot />
    </SplitLayout>
  );
};

export default observer(Layout);

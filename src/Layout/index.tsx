import React, { useMemo } from "react";

import {
  Epic,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  SplitCol,
  SplitLayout,
  useAdaptivityWithJSMediaQueries,
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
  }, [isDesktop]);

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

const ObservedPage = observer(Page);

const Layout = (): JSX.Element => {
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  return (
    <SplitLayout
      style={{
        justifyContent: "center",
      }}
      header={<PanelHeader delimiter="spacing" />}
    >
      {isDesktop && <DesktopNavPanel />}

      <SplitCol stretchedOnMobile autoSpaced maxWidth={"45vw"}>
        {isDesktop && (
          <PanelHeader delimiter="separator" float>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <RusAnonymTitle />
            </div>
          </PanelHeader>
        )}
        <Epic
          id="default"
          activeStory={router.activeView}
          tabbar={!isDesktop && <MobileTabbar />}
        >
          <ObservedPage id="utils">
            <LazyLoadComponent callbacks={[() => import("../pages/Utils")]} />
          </ObservedPage>
          <ObservedPage id="">
            <MainPage />
          </ObservedPage>
          <ObservedPage id="about">
            <LazyLoadComponent callbacks={[() => import("../pages/About")]} />
          </ObservedPage>
          <ObservedPage id="prototypes">
            <LazyLoadComponent
              callbacks={[() => import("../pages/Prototypes")]}
            />
          </ObservedPage>
          <ObservedPage id="articles">
            <LazyLoadComponent
              callbacks={[() => import("../pages/Articles")]}
            />
          </ObservedPage>
          <ObservedPage id="about-site">
            <LazyLoadComponent
              callbacks={[() => import("../pages/AboutSite")]}
            />
          </ObservedPage>
          <ObservedPage id="team">
            <LazyLoadComponent callbacks={[() => import("../pages/Team")]} />
          </ObservedPage>
        </Epic>
      </SplitCol>
      <ModalRoot />
      {router.popout}
    </SplitLayout>
  );
};

const ObservedLayout = observer(Layout);
export default ObservedLayout;

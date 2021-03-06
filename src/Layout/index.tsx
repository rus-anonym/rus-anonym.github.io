import React from "react";

import {
    useAdaptivity,
    ViewWidth,
    Epic,
    PanelHeader,
    SplitCol,
    SplitLayout,
    usePlatform,
    VKCOM,
    PanelHeaderBack,
} from "@vkontakte/vkui";

import { observer } from "mobx-react";

import router from "../TS/store/router";

import DesktopNavPanel from "./components/DesktopNavPanels";
import HeaderLeftButtons from "./components/HeaderLeftButtons";
import MobileTabbar from "./components/MobileTabbar";

import MainView from "../pages/Main";
import AboutView from "../pages/About";
import ArticlesView from "../pages/Articles";
import PrototypesView from "../pages/Prototypes";
import UtilsView from "../pages/Utils";

const Layout = (): JSX.Element => {
    const platform = usePlatform();
    const { viewWidth } = useAdaptivity();

    const hasHeader = platform !== VKCOM;
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    return (
        <SplitLayout
            style={{ justifyContent: "center" }}
            header={hasHeader && <PanelHeader separator={false} />}
            popout={router.popout}
        >
            {isDesktop && <DesktopNavPanel />}

            <SplitCol
                animate={!isDesktop}
                spaced={isDesktop}
                width={isDesktop ? "45vw" : "100%"}
                maxWidth={isDesktop ? "45vw" : "100%"}
            >
                <PanelHeader
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
                    {!isDesktop && "RusAnonym"}
                </PanelHeader>

                <Epic
                    id="default"
                    activeStory={router.activeView}
                    tabbar={!isDesktop && <MobileTabbar />}
                >
                    <MainView id="" />
                    <AboutView id="about" />
                    <PrototypesView id="prototypes" />
                    <ArticlesView id="articles" />
                    <UtilsView id="utils" />
                </Epic>
            </SplitCol>
        </SplitLayout>
    );
};

export default observer(Layout);

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
    View,
    Panel,
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
    return (
        <View id={id} activePanel="default">
            <Panel id="default" children={children} />
        </View>
    );
};

const Layout = (): JSX.Element => {
    const platform = usePlatform();
    const { viewWidth } = useAdaptivity();

    const hasHeader = platform !== VKCOM;
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    return (
        <SplitLayout
            style={{
                justifyContent: "center" 
            }}
            header={hasHeader && <PanelHeader separator={false} />}
            popout={router.popout}
            modal={<ModalRoot />}
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
                    {!isDesktop && <RusAnonymTitle />}
                </PanelHeader>

                <Epic
                    id="default"
                    activeStory={router.activeView}
                    tabbar={!isDesktop && <MobileTabbar />}
                >
                    <Page id="utils">
                        <LazyLoadComponent
                            callbacks={[() => import("../pages/Utils")]}
                        />
                    </Page>
                    <Page id="">
                        <MainPage />
                    </Page>
                    <Page id="about">
                        <LazyLoadComponent
                            callbacks={[() => import("../pages/About")]}
                        />
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
                </Epic>
            </SplitCol>
        </SplitLayout>
    );
};

export default observer(Layout);

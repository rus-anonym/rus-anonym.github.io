/* eslint-disable indent */

import React from "react";

import {
    SplitCol,
    PanelHeader,
    Group,
    Cell,
    Spacing,
    useAdaptivity,
    ViewWidth,
} from "@vkontakte/vkui";

import {
    Icon28ArticlesOutline,
    Icon28CubeBoxOutline,
    Icon28HomeOutline,
    Icon28ServicesOutline,
    Icon28UserOutline,
} from "@vkontakte/icons";

import HeaderLeftButtons from "./HeaderLeftButtons";
import router from "../../TS/store/router";
import { useTranslation } from "react-i18next";

const DesktopNavPanel = (): JSX.Element => {
    const { viewWidth } = useAdaptivity();
    const { t } = useTranslation("translation", { keyPrefix: "pages" });

    const isDesktop = viewWidth >= ViewWidth.TABLET;

    const activeViewStyle: React.CSSProperties = {
        backgroundColor: "var(--button_secondary_background)",
        borderRadius: 8,
    };

    return (
        <SplitCol fixed width={"20vw"} maxWidth={"20vw"}>
            <PanelHeader separator={isDesktop} before={<HeaderLeftButtons />}>
                RusAnonym
            </PanelHeader>

            <Group>
                <Cell
                    onClick={(): void => {
                        router.activeView = "";
                    }}
                    disabled={router.activeView === ""}
                    style={router.activeView === "" ? activeViewStyle : {}}
                    before={<Icon28HomeOutline />}
                >
                    {t("main.title")}
                </Cell>
                <Spacing />
                <Cell
                    onClick={(): void => {
                        router.activeView = "about";
                    }}
                    disabled={router.activeView === "about"}
                    style={router.activeView === "about" ? activeViewStyle : {}}
                    before={<Icon28UserOutline />}
                >
                    {t("about.title")}
                </Cell>
                <Spacing />
                <Cell
                    onClick={(): void => {
                        router.activeView = "articles";
                    }}
                    disabled={router.activeView === "articles"}
                    style={
                        router.activeView === "articles" ? activeViewStyle : {}
                    }
                    before={<Icon28ArticlesOutline />}
                >
                    {t("articles.title")}
                </Cell>
                <Spacing />
                <Cell
                    onClick={(): void => {
                        router.activeView = "utils";
                    }}
                    disabled={router.activeView === "utils"}
                    style={router.activeView === "utils" ? activeViewStyle : {}}
                    before={<Icon28ServicesOutline />}
                >
                    {t("utils.title")}
                </Cell>
                <Spacing separator />
                <Cell
                    onClick={(): void => {
                        router.activeView = "prototypes";
                    }}
                    disabled={router.activeView === "prototypes"}
                    style={
                        router.activeView === "prototypes"
                            ? activeViewStyle
                            : {}
                    }
                    before={<Icon28CubeBoxOutline />}
                >
                    {t("prototypes.title")}
                </Cell>
            </Group>
        </SplitCol>
    );
};

export default DesktopNavPanel;

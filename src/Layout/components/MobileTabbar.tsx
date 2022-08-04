import React from "react";
import { useTranslation } from "react-i18next";

import { Tabbar, TabbarItem } from "@vkontakte/vkui";

import {
    Icon28HomeOutline,
    Icon28ArticlesOutline,
    Icon28ServicesOutline,
    Icon28CubeBoxOutline,
    Icon28UserOutline,
} from "@vkontakte/icons";

import router from "../../TS/store/router";

const MobileTabbar = (): JSX.Element => {
    const { t } = useTranslation("translation", { keyPrefix: "pages" });

    return (
        <Tabbar itemsLayout="vertical">
            <TabbarItem
                onClick={(): void => {
                    router.activeView = "prototypes";
                }}
                selected={router.activeView === "prototypes"}
                disabled={router.activeView === "prototypes"}
                text={t("prototypes.title")}
            >
                <Icon28CubeBoxOutline />
            </TabbarItem>
            <TabbarItem
                onClick={(): void => {
                    router.activeView = "utils";
                }}
                selected={router.activeView === "utils"}
                disabled={router.activeView === "utils"}
                text={t("utils.title")}
            >
                <Icon28ServicesOutline />
            </TabbarItem>
            <TabbarItem
                onClick={(): void => {
                    router.activeView = "";
                }}
                selected={router.activeView === ""}
                disabled={router.activeView === ""}
                text={t("main.title")}
            >
                <Icon28HomeOutline />
            </TabbarItem>
            <TabbarItem
                onClick={(): void => {
                    router.activeView = "articles";
                }}
                selected={router.activeView === "articles"}
                disabled={router.activeView === "articles"}
                text={t("articles.title")}
            >
                <Icon28ArticlesOutline />
            </TabbarItem>
            <TabbarItem
                onClick={(): void => {
                    router.activeView = "about";
                }}
                selected={router.activeView === "about"}
                disabled={router.activeView === "about"}
                text={t("about.title")}
            >
                <Icon28UserOutline />
            </TabbarItem>
        </Tabbar>
    );
};

export default MobileTabbar;

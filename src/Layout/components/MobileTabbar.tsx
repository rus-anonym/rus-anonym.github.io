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

const ViewButton = ({
    path,
    text,
    icon,
}: {
    path: string;
    text: string;
    icon: React.ReactNode;
}): JSX.Element => {
    return (
        <TabbarItem
            onClick={(): void => {
                router.activeView = path;
            }}
            selected={router.activeView === path}
            disabled={router.activeView === path && router.activePanel === null}
            text={text}
        >
            {icon}
        </TabbarItem>
    );
};

const MobileTabbar = (): JSX.Element => {
    const { t } = useTranslation("translation", { keyPrefix: "pages" });

    return (
        <Tabbar itemsLayout="vertical">
            <ViewButton
                path="prototypes"
                text={t("prototypes.title")}
                icon={<Icon28CubeBoxOutline />}
            />
            <ViewButton
                path="utils"
                text={t("utils.title")}
                icon={<Icon28ServicesOutline />}
            />
            <ViewButton
                path=""
                text={t("main.title")}
                icon={<Icon28HomeOutline />}
            />
            <ViewButton
                path="articles"
                text={t("articles.title")}
                icon={<Icon28ArticlesOutline />}
            />
            <ViewButton
                path="about"
                text={t("about.title")}
                icon={<Icon28UserOutline />}
            />
        </Tabbar>
    );
};

export default MobileTabbar;

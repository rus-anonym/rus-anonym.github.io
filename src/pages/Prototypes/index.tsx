import React, { useEffect } from "react";

import {
    Button,
    CellButton,
    Div,
    Group,
    Header,
    Panel,
    Placeholder,
    useAdaptivity,
    View,
    ViewWidth,
} from "@vkontakte/vkui";

import RolePlayChat from "./List/RolePlayChat";
import AboutMe from "./List/AboutMe";
import RusAnonym from "./List/RusAnonym";
import { useTranslation } from "react-i18next";
import router from "../../TS/store/router";
import { observer } from "mobx-react";

interface IPrototype {
    id: string;
    title: string;
    description: string;
    isMobile: boolean;
    isDesktop: boolean;
    component: () => JSX.Element;
}

const prototypes: IPrototype[] = [
    {
        id: "rus-anonym",
        title: "RusAnonym",
        description: "",
        isMobile: true,
        isDesktop: true,
        component: RusAnonym,
    },
    {
        id: "rp-chat",
        title: "RolePlay chat",
        description: "",
        isMobile: true,
        isDesktop: true,
        component: RolePlayChat,
    },
    {
        id: "about-me",
        title: "AboutMe",
        description: "Предварительная версия",
        isMobile: true,
        isDesktop: true,
        component: AboutMe,
    },
];

const PrototypesView = ({ id }: { id: string }): JSX.Element => {
    const { viewWidth } = useAdaptivity();
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    const { t, i18n } = useTranslation("translation", {
        keyPrefix: "pages.prototypes",
    });

    useEffect(() => {
        if (
            !prototypes.some((prototype) => prototype.id === router.activePanel)
        ) {
            router.activePanel = null;
        }
    });

    const filteredPrototypes = prototypes.filter(
        (x) => x.isDesktop === isDesktop || x.isMobile === !isDesktop
    );

    const UtilNavBlock = (prototype: IPrototype): JSX.Element => {
        return (
            <Group>
                <Header
                    mode="primary"
                    multiline
                    subtitle={prototype.description}
                >
                    {prototype.title}
                </Header>
                <CellButton
                    onClick={(): void => {
                        router.activePanel = prototype.id;
                    }}
                >
                    {t("start")}
                </CellButton>
            </Group>
        );
    };

    const UtilCell = (prototype: IPrototype): JSX.Element => {
        return (
            <Panel id={prototype.id}>
                <prototype.component />
                <Group>
                    <Div>
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
                    </Div>
                </Group>
            </Panel>
        );
    };

    if (filteredPrototypes.length === 0) {
        return (
            <View id={id} activePanel="default">
                <Panel id="default">
                    <Group>
                        <Placeholder>
                            {i18n.t("utils.feature") as unknown as string}
                        </Placeholder>
                    </Group>
                </Panel>
            </View>
        );
    }

    return (
        <View id={id} activePanel={router.activePanel || "default"}>
            <Panel id="default">
                <Group>{filteredPrototypes.map(UtilNavBlock)}</Group>
            </Panel>
            {filteredPrototypes.map(UtilCell)}
        </View>
    );
};

export default observer(PrototypesView);

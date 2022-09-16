import React, { useEffect } from "react";

import {
    CellButton,
    Group,
    Header,
    Panel,
    Placeholder,
    useAdaptivity,
    View,
    ViewWidth,
} from "@vkontakte/vkui";

import { useTranslation } from "react-i18next";
import router from "../../TS/store/router";
import { observer } from "mobx-react";
import LazyLoadComponent from "../../utils/LazyLoad";

interface IPrototype {
    id: string;
    title: string;
    description: string;
    isMobile: boolean;
    isDesktop: boolean;
    component: React.ReactNode;
}

const prototypes: IPrototype[] = [
    {
        id: "rp-chat",
        title: "RolePlay chat",
        description: "",
        isMobile: true,
        isDesktop: true,
        component: (
            <LazyLoadComponent
                callbacks={[() => import("./List/RolePlayChat")]}
            />
        ),
    },
    {
        id: "MPT",
        title: "MPT Assistant",
        description: "MPT Assistant prototype",
        isMobile: true,
        isDesktop: true,
        component: (
            <LazyLoadComponent callbacks={[() => import("./List/MPT")]} />
        ),
    },
    {
        id: "love-meme-generator",
        title: "Love Meme generator",
        description: "",
        isMobile: true,
        isDesktop: true,
        component: (
            <LazyLoadComponent
                callbacks={[() => import("./List/LoveMemeGenerator")]}
            />
        ),
    },
];

const PrototypesView = (): JSX.Element => {
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
        return <Panel id={prototype.id}>{prototype.component}</Panel>;
    };

    if (filteredPrototypes.length === 0) {
        return (
            <View activePanel="default">
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
        <View activePanel={router.activePanel || "default"}>
            <Panel id="default">
                <Group>
                    {filteredPrototypes.map(UtilNavBlock)}
                </Group>
            </Panel>
            {filteredPrototypes.map(UtilCell)}
        </View>
    );
};

export default observer(PrototypesView);

import React, { useEffect, useState } from "react";
import {
    Button,
    Cell,
    CellButton,
    Group,
    IconButton,
    MiniInfoCell,
    Panel,
    Placeholder,
    Search,
    useAdaptivity,
    View,
    ViewWidth,
} from "@vkontakte/vkui";
import {
    Icon28ComputerOutline,
    Icon28SmartphoneOutline,
    Icon28ComputerSmartphoneOutline,
    Icon56ComputerOutline,
    Icon56SmartphoneOutline,
    Icon24Filter,
} from "@vkontakte/icons";

import router from "../../TS/store/router";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react";
import { TextTooltip } from "@vkontakte/vkui/dist/unstable";
import LazyLoadComponent from "../../utils/LazyLoad";
import session from "../../TS/store/session";
import storage from "../../TS/store/storage";

interface IUtil {
    id: string;
    title: string;
    description: string;
    isMobile: boolean;
    isDesktop: boolean;
    component: React.ReactNode;
    languages: typeof session.language[];
}

const UtilsView = ({ id }: { id: string }): JSX.Element => {
    const { viewWidth } = useAdaptivity();
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    const [searchFilter, setSearchFilter] = useState("");

    const { t } = useTranslation("translation", {
        keyPrefix: "pages.utils",
    });

    const { isLanguageFilter } = storage.utils.filters;

    const utils: IUtil[] = [
        {
            id: "qr",
            title: "QR Scanner",
            description: "Simple QR scanner",
            isMobile: true,
            isDesktop: false,
            component: (
                <LazyLoadComponent callbacks={[() => import("./List/QR")]} />
            ),
            languages: ["en", "ru"],
        },
        {
            id: "cat",
            title: "Cat",
            description: t("list.cat.description"),
            isMobile: true,
            isDesktop: true,
            component: (
                <LazyLoadComponent callbacks={[() => import("./List/Cat")]} />
            ),
            languages: ["en", "ru"],
        },
        {
            id: "speedtype",
            title: "Speedtype",
            description: t("list.speedtype.description"),
            isMobile: false,
            isDesktop: true,
            component: (
                <LazyLoadComponent
                    callbacks={[() => import("./List/Speedtype")]}
                />
            ),
            languages: ["en", "ru"],
        },
        {
            id: "feminizator",
            title: "Feminizator",
            description: "Феминизаторка словесс",
            isMobile: true,
            isDesktop: true,
            component: (
                <LazyLoadComponent
                    callbacks={[() => import("./List/Feminizator")]}
                />
            ),
            languages: ["ru"],
        },
        {
            id: "vk-stickers",
            title: "VK Stickers",
            description: "Приложение для просмотра всех стикеров ВКонтакте",
            isMobile: true,
            isDesktop: true,
            component: (
                <LazyLoadComponent
                    callbacks={[() => import("./List/VKStickers")]}
                />
            ),
            languages: ["ru"],
        },
        {
            id: "winrate-calculator",
            title: "Winrate Calculator",
            description: "Предварительная версия",
            isMobile: true,
            isDesktop: true,
            component: (
                <LazyLoadComponent
                    callbacks={[() => import("./List/WinRateCalculator")]}
                />
            ),
            languages: ["ru"],
        },
    ];

    const filter = (util: IUtil): boolean => {
        if (util.isDesktop !== isDesktop && util.isMobile !== !isDesktop) {
            return false;
        }

        if (isLanguageFilter && !util.languages.includes(session.language)) {
            return false;
        }

        if (
            searchFilter !== "" &&
            !util.title.toLowerCase().includes(searchFilter.toLowerCase())
        ) {
            return false;
        }

        return true;
    };

    const filteredUtils = utils.filter(filter);

    useEffect(() => {
        if (!utils.some((util) => util.id === router.activePanel)) {
            router.activePanel = null;
        }
    });

    const UtilNavBlock = (util: IUtil): JSX.Element => {
        return (
            <Group mode="plain">
                <Cell
                    disabled
                    description={util.description}
                    badge={
                        <TextTooltip
                            shown={!isDesktop ? false : undefined}
                            text={
                                util.isDesktop && util.isMobile
                                    ? t("multiplatform")
                                    : util.isDesktop
                                    ? t("onlyDesktop")
                                    : t("onlyMobile")
                            }
                        >
                            {util.isDesktop && util.isMobile ? (
                                <Icon28ComputerSmartphoneOutline width={20} />
                            ) : util.isDesktop ? (
                                <Icon28ComputerOutline width={20} />
                            ) : (
                                <Icon28SmartphoneOutline width={20} />
                            )}
                        </TextTooltip>
                    }
                >
                    {util.title}
                </Cell>
                <CellButton
                    onClick={(): void => {
                        router.activePanel = util.id;
                    }}
                >
                    {t("start")}
                </CellButton>
            </Group>
        );
    };
    const UtilCell = (util: IUtil): JSX.Element => {
        if ((isDesktop && !util.isDesktop) || (!isDesktop && !util.isMobile)) {
            return (
                <Panel id={util.id}>
                    <Group>
                        <Placeholder
                            icon={
                                isDesktop ? (
                                    <Icon56SmartphoneOutline />
                                ) : (
                                    <Icon56ComputerOutline />
                                )
                            }
                            header={t("notAvailable")}
                            action={
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
                            }
                            stretched={!isDesktop}
                        >
                            {isDesktop ? t("onlyMobile") : t("onlyDesktop")}
                        </Placeholder>
                    </Group>
                </Panel>
            );
        }

        return <Panel id={util.id}>{util.component}</Panel>;
    };

    return (
        <View id={id} activePanel={router.activePanel || "default"}>
            <Panel id="default">
                <Group
                    description={
                        <>
                            <MiniInfoCell
                                textWrap="full"
                                before={<Icon28SmartphoneOutline />}
                            >
                                {t("onlyMobile")}
                            </MiniInfoCell>
                            <MiniInfoCell
                                textWrap="full"
                                before={<Icon28ComputerOutline />}
                            >
                                {t("onlyDesktop")}
                            </MiniInfoCell>
                            <MiniInfoCell
                                textWrap="full"
                                before={<Icon28ComputerSmartphoneOutline />}
                            >
                                {t("multiplatform")}
                            </MiniInfoCell>
                        </>
                    }
                >
                    <Search
                        placeholder={t("filters.search")}
                        value={searchFilter}
                        onChange={(event): void => {
                            setSearchFilter(event.target.value);
                        }}
                        icon={
                            <IconButton
                                onClick={(): void => {
                                    router.activeModal = "utils-filter";
                                }}
                            >
                                <Icon24Filter />
                            </IconButton>
                        }
                    />
                    {filteredUtils.length > 0 ? (
                        filteredUtils.map(UtilNavBlock)
                    ) : (
                        <Placeholder>
                            {t("notFound") as unknown as string}
                        </Placeholder>
                    )}
                </Group>
            </Panel>
            {utils.map(UtilCell)}
        </View>
    );
};

export default observer(UtilsView);

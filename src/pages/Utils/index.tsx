import React, { useEffect, useState } from "react";
import {
    Button,
    Cell,
    CellButton,
    Checkbox,
    Div,
    FormItem,
    Group,
    Header,
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
import { Dropdown, TextTooltip } from "@vkontakte/vkui/dist/unstable";
import lazyLoad from "../../utils/lazyLoad";
import session from "../../TS/store/session";

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

    const [isLanguageFilter, setLanguageFilter] = useState(true);
    const [searchFilter, setSearchFilter] = useState("");

    const { t, i18n } = useTranslation("translation", {
        keyPrefix: "pages.utils",
    });

    const utils: IUtil[] = [
        {
            id: "qr",
            title: "QR Scanner",
            description: "Simple QR scanner",
            isMobile: true,
            isDesktop: false,
            component: lazyLoad(() => import("./List/QR")),
            languages: ["en", "ru"],
        },
        {
            id: "cat",
            title: "Cat",
            description: t("list.cat.description"),
            isMobile: true,
            isDesktop: true,
            component: lazyLoad(() => import("./List/Cat")),
            languages: ["en", "ru"],
        },
        {
            id: "speedtype",
            title: "Speedtype",
            description: t("list.speedtype.description"),
            isMobile: false,
            isDesktop: true,
            component: lazyLoad(() => import("./List/Speedtype")),
            languages: ["en", "ru"],
        },
        {
            id: "feminizator",
            title: "Feminizator",
            description: "",
            isMobile: true,
            isDesktop: true,
            component: lazyLoad(() => import("./List/Feminizator")),
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

    if (filteredUtils.length === 0) {
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
                            <Dropdown
                                action={isDesktop ? "hover" : "click"}
                                content={
                                    <Div>
                                        <Header>{t("filters.title")}</Header>
                                        <FormItem>
                                            <Checkbox
                                                checked={!isLanguageFilter}
                                                onClick={(): void => {
                                                    setLanguageFilter(
                                                        !isLanguageFilter
                                                    );
                                                }}
                                            >
                                                {t("filters.anotherLanguage")}
                                            </Checkbox>
                                        </FormItem>
                                    </Div>
                                }
                            >
                                <IconButton disabled={isDesktop}>
                                    <Icon24Filter />
                                </IconButton>
                            </Dropdown>
                        }
                    />
                    {filteredUtils.map(UtilNavBlock)}
                </Group>
            </Panel>
            {utils.map(UtilCell)}
        </View>
    );
};

export default observer(UtilsView);

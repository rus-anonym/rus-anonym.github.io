import React, { useEffect } from "react";

import {
    Cell,
    Group,
    MiniInfoCell,
    RichCell,
} from "@vkontakte/vkui";
import { useTranslation } from "react-i18next";
import router from "../../TS/store/router";
import {
    Icon28PlaceOutline,
    Icon28CalendarOutline,
    Icon28PhoneOutline,
    Icon28MailOutline,
    Icon20MoneyCircleOutline,
    Icon20GlobeOutline,
    Icon20NotebookCheckOutline,
    Icon20CalendarOutline,
    Icon20GovernmentOutline,
    Icon20HieroglyphCharacterOutline,
    Icon56UserCircleOutline,
} from "@vkontakte/icons";

import moment from "moment";

const ageCount = moment().diff(
    moment("05.04.2004", "DD.MM.YYYY"),
    "years",
    false
);

const AboutView = (): JSX.Element => {
    const { t } = useTranslation("translation", {
        keyPrefix: "pages.about" 
    });

    useEffect(() => {
        router.activePanel = null;
    });

    return (
        <Group>
            <Group mode="plain">
                <RichCell
                    disabled
                    before={<Icon56UserCircleOutline width={72} height={72} />}
                    caption={t("specialty")}
                >
                    {t("fullName")}
                </RichCell>
                <Cell
                    disabled
                    before={<Icon28PlaceOutline />}
                    subtitle={t("place", {
                        context: "value" 
                    })}
                    indicator={t("relocation")}
                >
                    {t("place")}
                </Cell>
                <Cell
                    subtitle="05.04.2004"
                    disabled
                    before={<Icon28CalendarOutline />}
                    indicator={`${ageCount} ${t("years", {
                        count: ageCount,
                    })}`}
                >
                    {t("birthday")}
                </Cell>
                <Cell
                    subtitle="+7 909 623-05-55"
                    disabled
                    before={<Icon28PhoneOutline />}
                >
                    {t("phone")}
                </Cell>
                <Cell
                    subtitle="alexandrsemin2033@gmail.com"
                    disabled
                    before={<Icon28MailOutline />}
                >
                    {t("email")}
                </Cell>
            </Group>

            <Group mode="plain">
                <MiniInfoCell before={<Icon20MoneyCircleOutline />}>
                    {`${t("salary")}: ${t("salary", {
                        context: "value",
                    })}`}
                </MiniInfoCell>
                <MiniInfoCell before={<Icon20GlobeOutline />}>
                    {`${t("willingessToBusinessTrip")}: ${t(
                        "willingessToBusinessTrip",
                        {
                            context: "value",
                        }
                    )}`}
                </MiniInfoCell>
                <MiniInfoCell before={<Icon20NotebookCheckOutline />}>
                    {`${t("employment")}: ${t("employment", {
                        context: "value",
                    })}`}
                </MiniInfoCell>
                <MiniInfoCell before={<Icon20CalendarOutline />}>
                    {`${t("sсheduleOfWork")}: ${t("sсheduleOfWork", {
                        context: "value",
                    })}`}
                </MiniInfoCell>
                <MiniInfoCell before={<Icon20GovernmentOutline />}>
                    {`${t("citizenship")}: ${t("citizenship", {
                        context: "value",
                    })}`}
                </MiniInfoCell>
                <MiniInfoCell before={<Icon20HieroglyphCharacterOutline />}>
                    {`${t("languages")}: ${t("languages", {
                        context: "value",
                    })}`}
                </MiniInfoCell>
            </Group>
        </Group>
    );
};

export default AboutView;

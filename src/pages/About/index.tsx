import React, { useEffect } from "react";

import { Group, Panel, Placeholder, View } from "@vkontakte/vkui";
import { useTranslation } from "react-i18next";
import router from "../../TS/store/router";

const AboutView = ({ id }: { id: string }): JSX.Element => {
    const { t } = useTranslation("translation", { keyPrefix: "utils" });

    useEffect(() => {
        router.activePanel = null;
    });

    return (
        <View id={id} activePanel="default">
            <Panel id="default">
                <Group>
                    <Placeholder>{t("feature")}</Placeholder>
                </Group>
            </Panel>
        </View>
    );
};

export default AboutView;

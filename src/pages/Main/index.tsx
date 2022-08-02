import React, { useEffect } from "react";
import { Group, Panel, View } from "@vkontakte/vkui";

import Socials from "./components/socials";
import Donates from "./components/donates";
import router from "../../TS/store/router";

const MainPage = ({ id }: { id: string }): JSX.Element => {
    useEffect(() => {
        router.activePanel = null;
    });

    return (
        <View id={id} activePanel="default">
            <Panel id="default">
                <Group>
                    <Socials />
                    <Donates />
                </Group>
            </Panel>
        </View>
    );
};

export default MainPage;

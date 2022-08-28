import React, { useEffect } from "react";
import { Group } from "@vkontakte/vkui";

import router from "../../TS/store/router";

import Socials from "./components/socials";
import Donates from "./components/donates";

const MainPage = (): JSX.Element => {
    useEffect(() => {
        router.activePanel = null;
    });

    return (
        <Group>
            <Socials />
            <Donates />
        </Group>
    );
};

export default MainPage;

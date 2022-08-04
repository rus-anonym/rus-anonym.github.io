import React, { useEffect } from "react";
import { Group, Panel, View } from "@vkontakte/vkui";

import router from "../../TS/store/router";

import lazyLoad from "../../utils/lazyLoad";

const MainPage = ({ id }: { id: string }): JSX.Element => {
    useEffect(() => {
        router.activePanel = null;
    });

    return (
        <View id={id} activePanel="default">
            <Panel id="default">
                <Group>
                    {lazyLoad(
                        () => import("./components/socials"),
                        () => import("./components/donates")
                    )}
                </Group>
            </Panel>
        </View>
    );
};

export default MainPage;

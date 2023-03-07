import React, { useState } from "react";
import { useAdaptivityWithJSMediaQueries } from "@vkontakte/vkui";
import { animated, useSpring } from "react-spring";

import router from "../../TS/store/router";

const RusAnonym = (): JSX.Element => {
    const { isDesktop } = useAdaptivityWithJSMediaQueries();

    const [title, setTitle] = useState("RusAnonym");
    const [styles, api] = useSpring(() => ({
        filter: "" 
    }));

    const changeTitle = (title: string): void => {
        api.start({
            reset: true,
            config: {
                duration: 500,
            },
            to: async (next) => {
                await next({
                    filter: "blur(3px)" 
                });
                setTitle(title);
                await next({
                    filter: "blur(0)" 
                });
            },
        });
    };

    return (
        <animated.div
            style={styles}
            onMouseLeave={(): void => changeTitle("RusAnonym")}
            onMouseEnter={(): void => changeTitle("RusCybersec")}
            onClick={(): void => {
                if (isDesktop) {
                    router.activeView = "";
                    router.activePanel = null;
                } else {
                    changeTitle(
                        title === "RusAnonym" ? "RusCybersec" : "RusAnonym"
                    );
                }
            }}
        >
            {title}
        </animated.div>
    );
};

export default RusAnonym;

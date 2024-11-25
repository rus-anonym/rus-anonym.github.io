import { useAdaptivityWithJSMediaQueries } from "@vkontakte/vkui";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

import router from "../../TS/store/router";

const titles = ["RusAnonym", "RusCybersec"] as const;

const RusAnonym = (): JSX.Element => {
    const { isDesktop } = useAdaptivityWithJSMediaQueries();

    const [title, setTitle] = useState<string>("RusAnonym");
    const [styles, api] = useSpring(() => ({
        filter: "",
    }));

    const changeTitle = (title: string): void => {
        api.start({
            reset: true,
            config: {
                duration: 500,
            },
            to: async (next) => {
                await next({
                    filter: "blur(3px)",
                });
                setTitle(title);
                await next({
                    filter: "blur(0)",
                });
            },
        });
    };

    useEffect(() => {
        let currentTitleIndex = 0;
        const interval = setInterval(() => {
            currentTitleIndex =
                currentTitleIndex + 1 >= titles.length
                    ? 0
                    : currentTitleIndex + 1;
            changeTitle(titles[currentTitleIndex]);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <animated.div
            style={styles}
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

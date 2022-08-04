import React, { Suspense, useEffect } from "react";

import { observer } from "mobx-react";

import {
    AppRoot,
    AdaptivityProvider,
    ConfigProvider,
    WebviewType,
    SplitLayout,
    ScreenSpinner,
} from "@vkontakte/vkui";

import session from "./TS/store/session";
import router from "./TS/store/router";

import i18next, { init as initI18N } from "./TS/i18n";

const Layout = React.lazy(() => import("./Layout"));

const App = (): JSX.Element => {
    useEffect(() => {
        void (async (): Promise<void> => {
            await initI18N();
            await i18next.changeLanguage(session.language);

            router.isGlobalLoading = false;
        })();
    }, []);

    return (
        <ConfigProvider
            appearance={session.theme}
            webviewType={WebviewType.INTERNAL}
            transitionMotionEnabled={false}
        >
            <AdaptivityProvider>
                <AppRoot mode="full">
                    {router.isGlobalLoading ? (
                        <SplitLayout
                            popout={<ScreenSpinner state="loading" />}
                        />
                    ) : (
                        <Suspense
                            fallback={
                                <SplitLayout
                                    popout={<ScreenSpinner state="loading" />}
                                />
                            }
                        >
                            <Layout />
                        </Suspense>
                    )}
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
};

const ObservedApp = observer(App);

export default ObservedApp;

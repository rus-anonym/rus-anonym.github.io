import React from "react";
import { ModalRoot } from "@vkontakte/vkui";
import router from "../TS/store/router";
import { observer } from "mobx-react";

import PrototypesRpChatCreateProfile from "./modals/cards/PrototypesRpChatCreateProfile";
import ArticlesFilter from "./modals/cards/ArticlesFilter";
import UtilsFilter from "./modals/cards/UtilsFilter";

const ModalRootComponent = (): JSX.Element => {
    return (
        <ModalRoot
            activeModal={router.activeModal}
            onClose={(): void => {
                router.activeModal = null;
            }}
        >
            <PrototypesRpChatCreateProfile id="prototypes-rpchat-createProfile" />
            <ArticlesFilter id="articles-filter" />
            <UtilsFilter id="utils-filter" />
        </ModalRoot>
    );
};

export default observer(ModalRootComponent);

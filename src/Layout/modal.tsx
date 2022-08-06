import React from "react";
import { ModalRoot } from "@vkontakte/vkui";
import router from "../TS/store/router";
import { observer } from "mobx-react";

import PrototypesRpChatCreateProfile from "./modals/cards/PrototypesRpChatCreateProfile";

const ModalRootComponent = (): JSX.Element => {
    return (
        <ModalRoot activeModal={router.modals.active}>
            <PrototypesRpChatCreateProfile id="prototypes-rpchat-createProfile" />
        </ModalRoot>
    );
};

export default observer(ModalRootComponent);

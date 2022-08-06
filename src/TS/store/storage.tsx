import { makeAutoObservable } from "mobx";

import React from "react";
import { InitialsAvatar } from "@vkontakte/vkui";

export interface IPrototypesRpChatProfile {
    name: string;
    avatar: JSX.Element;
}

export interface IStorage {
    articles: {
        filters: {
            isLanguageFilter: boolean;
            isExplicitFilter: boolean;
        };
    };
    utils: {
        filters: {
            isLanguageFilter: boolean;
        };
    };
    prototypes: {
        rpchat: {
            profiles: IPrototypesRpChatProfile[];
        };
    };
}

class Storage implements IStorage {
    public articles = {
        filters: { isLanguageFilter: true, isExplicitFilter: true },
    };

    public utils = {
        filters: { isLanguageFilter: true },
    };

    public prototypes = {
        rpchat: {
            profiles: [
                {
                    name: "Profile I",
                    avatar: (
                        <InitialsAvatar size={32} gradientColor="blue">
                            1
                        </InitialsAvatar>
                    ),
                },
                {
                    name: "Profile II",
                    avatar: (
                        <InitialsAvatar size={32} gradientColor="red">
                            2
                        </InitialsAvatar>
                    ),
                },
                {
                    name: "Profile III",
                    avatar: (
                        <InitialsAvatar size={32} gradientColor="yellow">
                            3
                        </InitialsAvatar>
                    ),
                },
            ],
        },
    };

    constructor() {
        makeAutoObservable(this, {}, { deep: true });
    }
}

export default new Storage();

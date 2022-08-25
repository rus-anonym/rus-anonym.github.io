import React, { useEffect, useState } from "react";
import axios from "axios";

import {
    View,
    Panel,
    Group,
    RichCell,
    Avatar,
    InitialsAvatar,
    calcInitialsAvatarColor,
    Header,
    Link,
    SimpleCell,
} from "@vkontakte/vkui";

import { Icon28LinkOutline } from "@vkontakte/icons";

import session from "../../TS/store/session";

import LogoVK from "../../SVG/socials/VK.svg";

import LogoGitHubDark from "../../PNG/socials/GitHub-dark.png";
import LogoGitHubLight from "../../PNG/socials/GitHub-light.png";

interface IHuman {
    name: string;
    surname: string;
    nickname: string;
    avatar?: string;
    url: {
        personal?: string;
        vk?: string;
        github?: string;
    };
}

const Human = ({
    name,
    surname,
    nickname,
    avatar,
    url,
}: IHuman): JSX.Element => {
    const avatarElement = avatar ? (
        <Avatar size={48} src={avatar} />
    ) : (
        <InitialsAvatar
            size={48}
            gradientColor={calcInitialsAvatarColor(
                [...name.split(""), ...surname.split("")]
                    .map((x) => x.charCodeAt(0))
                    .reduce((accumulator, value) => {
                        return accumulator + value;
                    }, 0)
            )}
        >
            {name[0]}
            {surname[0]}
        </InitialsAvatar>
    );

    return (
        <Group mode="plain" separator="hide">
            <RichCell
                multiline
                disabled
                before={avatarElement}
                caption={
                    <>
                        {nickname}
                        {url.personal && (
                            <>
                                <br />
                                <Link target="_blank" href={url.personal}>
                                    {url.personal}
                                </Link>
                            </>
                        )}
                    </>
                }
                after={
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        {url.github && (
                            <Link href={url.github} target="_blank">
                                <Avatar
                                    style={{ margin: "5px" }}
                                    size={36}
                                    src={
                                        session.theme === "dark"
                                            ? LogoGitHubLight
                                            : LogoGitHubDark
                                    }
                                />
                            </Link>
                        )}

                        {url.vk && (
                            <Link href={url.vk} target="_blank">
                                <Avatar
                                    style={{ margin: "5px" }}
                                    size={36}
                                    src={LogoVK}
                                />
                            </Link>
                        )}
                    </div>
                }
            >
                {name} {surname}
            </RichCell>
        </Group>
    );
};

const humans: IHuman[] = [
    {
        name: "Андрей",
        surname: "Пшеничный",
        nickname: "girl_dev",
        url: {
            personal: "https://girl-dev.me/",
            vk: "https://vk.com/girl_dev",
            github: "https://github.com/GirlDev1337",
        },
    },
    {
        name: "Никита",
        surname: "Смирнов",
        nickname: "sm1rnovdev",
        url: {
            vk: "https://vk.com/sm1rnovdev",
            github: "https://github.com/sm1rnovdev",
        },
    },
    {
        name: "Женя",
        surname: "Матеюк",
        nickname: "zhenya00000",
        url: {
            personal: "https://zhenya00000.github.io/",
            vk: "https://vk.com/zhenya00000",
            github: "https://github.com/zhenya00000",
        },
    },
    {
        name: "Дмитрий",
        surname: "Волков",
        nickname: "dimondaf",
        url: {
            vk: "https://vk.com/dimondaf",
        },
    },
    {
        name: "Сергей",
        surname: "Стёпочкин",
        nickname: "kolesto65",
        url: {
            vk: "https://vk.com/kolesto65",
            github: "https://github.com/kolesto65",
        },
    },
];

interface IRepositoryStat {
    stars: number;
    issues: number;
    forks: number;
}

const getRepositoryStat = async (): Promise<IRepositoryStat> => {
    const response = (await axios.get(
        "https://api.github.com/repos/rus-anonym/rus-anonym.github.io"
    )) as unknown as {
        data: {
            stargazers_count: number;
            open_issues_count: number;
            forks: number;
        };
    };

    return {
        stars: response.data.stargazers_count,
        issues: response.data.open_issues_count,
        forks: response.data.forks,
    };
};

const SiteInfoView = ({ id }: { id: string }): JSX.Element => {
    const [stats, setStats] = useState<IRepositoryStat | null>();

    useEffect(() => {
        void getRepositoryStat().then(setStats);
    }, []);

    return (
        <View id={id} activePanel="default">
            <Panel id="default">
                <Group>
                    <Link
                        target="_blank"
                        href="https://github.com/rus-anonym/rus-anonym.github.io"
                    >
                        <SimpleCell
                            before={
                                <Avatar
                                    size={36}
                                    src={
                                        session.theme === "dark"
                                            ? LogoGitHubLight
                                            : LogoGitHubDark
                                    }
                                />
                            }
                            after={<Icon28LinkOutline />}
                        >
                            Сайт на Github
                        </SimpleCell>
                    </Link>
                    {stats && <></>}
                </Group>
                <Group
                    header={
                        <Header subtitle="Помогали в разработке">
                            Отряд крутышек
                        </Header>
                    }
                    children={humans.map(Human)}
                />
            </Panel>
        </View>
    );
};

export default SiteInfoView;

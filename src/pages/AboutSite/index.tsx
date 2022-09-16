import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";

import {
    Group,
    RichCell,
    Avatar,
    InitialsAvatar,
    calcInitialsAvatarColor,
    Header,
    Link,
    SimpleCell,
    Cell,
    useAdaptivity,
    ViewWidth,
    Placeholder,
} from "@vkontakte/vkui";
import {
    VscIssues, VscRepoForked, VscStarFull 
} from "react-icons/vsc";
import { BsFillSuitHeartFill } from "react-icons/bs";

import { Icon28LinkOutline } from "@vkontakte/icons";

import session from "../../TS/store/session";

import LogoVK from "../../SVG/socials/VK.svg";
import LogoTelegram from "../../SVG/socials/Telegram.svg";

import LogoGitHubDark from "../../PNG/socials/GitHub-dark.png";
import LogoGitHubLight from "../../PNG/socials/GitHub-light.png";
import { useTranslation } from "react-i18next";

interface IHuman {
    name: string;
    surname: string;
    nickname: string;
    avatar?: string;
    url: {
        personal?: string;
        vk?: string;
        github?: string;
        telegram?: string;
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
            bottom={
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    {url.github && (
                        <Link href={url.github} target="_blank">
                            <Avatar
                                style={{
                                    margin: "5px" 
                                }}
                                size={24}
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
                                style={{
                                    margin: "5px" 
                                }}
                                size={24}
                                src={LogoVK}
                            />
                        </Link>
                    )}

                    {url.telegram && (
                        <Link href={url.telegram} target="_blank">
                            <Avatar
                                style={{
                                    margin: "5px" 
                                }}
                                size={24}
                                src={LogoTelegram}
                            />
                        </Link>
                    )}
                </div>
            }
        >
            {name} {surname}
        </RichCell>
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
            telegram: "https://t.me/girl_dev",
        },
    },
    {
        name: "Никита",
        surname: "Смирнов",
        nickname: "sm1rnovdev",
        url: {
            vk: "https://vk.com/sm1rnovdev",
            github: "https://github.com/sm1rnovdev",
            telegram: "https://t.me/sm1rnovdev",
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
            telegram: "https://t.me/dimondaf",
        },
    },
    {
        name: "Всеволод",
        surname: "Кравец",
        nickname: "sevakravets",
        url: {
            vk: "https://vk.com/sevakravets",
            telegram: "https://t.me/noname2544",
            github: "https://github.com/kravetsone"
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
    {
        name: "Иван",
        surname: "Ивлепенко",
        nickname: "ivlepenko",
        url: {
            vk: "https://vk.com/ivlepenko",
        },
    },
    {
        name: "Ярослав",
        surname: "Клопенко",
        nickname: "klopenkooff",
        url: {
            vk: "https://vk.com/klopenkooff",
            telegram: "https://t.me/klopenkooff",
            github: "https://github.com/MrSlavik0",
        },
    },
    {
        name: "Вадим",
        surname: "Филатов",
        nickname: "flxpr",
        url: {
            vk: "https://vk.com/id649590332",
            telegram: "https://t.me/flxpr",
            github: "https://github.com/flxprhub",
        },
    },
    {
        name: "Юлий",
        surname: "Цезарев",
        nickname: "",
        url: {
            vk: "https://vk.com/id496798589",
        },
    },
];

interface IRepositoryStat {
    stars: number;
    issues: number;
    forks: number;
}

const getRepositoryStat = async (): Promise<IRepositoryStat> => {
    const octokit = new Octokit();
    const response = await octokit.repos.get({
        owner: "rus-anonym",
        repo: "rus-anonym.github.io",
    });

    return {
        stars: response.data.stargazers_count,
        issues: response.data.open_issues_count,
        forks: response.data.forks,
    };
};

const SiteInfoView = (): JSX.Element => {
    const [stats, setStats] = useState<IRepositoryStat | null>();
    const { t } = useTranslation("translation", {
        keyPrefix: "pages.aboutSite",
    });

    const { viewWidth } = useAdaptivity();
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    useEffect(() => {
        void getRepositoryStat().then(setStats);
    }, []);

    return (
        <>
            <Group>
                {stats && (
                    <div style={{
                        display: "flex", flexDirection: "row" 
                    }}>
                        <Cell after={<VscStarFull size={24} />} disabled>
                            {stats.stars}
                        </Cell>
                        <Cell
                            after={
                                <VscIssues
                                    size={24}
                                    style={{
                                        marginLeft: "5px",
                                        marginTop: "5px",
                                    }}
                                />
                            }
                            disabled
                        >
                            {stats.issues}
                        </Cell>
                        <Cell after={<VscRepoForked size={24} />} disabled>
                            {stats.forks}
                        </Cell>
                    </div>
                )}
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
                        {t("github")}
                    </SimpleCell>
                </Link>
            </Group>
            <Group
                header={
                    <Header subtitle={t("dreamTeamDescription")}>
                        {t("dreamTeam")}
                    </Header>
                }
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: isDesktop ? "row" : "column",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                    children={humans.map(Human)}
                />
                <Placeholder
                    icon={
                        <BsFillSuitHeartFill
                            size={56}
                            style={{
                                color: "red" 
                            }}
                        />
                    }
                >
                    {t("RusAnonymTeam") + " "}
                    <Link target="_blank" href="https://vk.com/rus_anonym_team">
                        RusAnonym Team
                    </Link>
                </Placeholder>
            </Group>
        </>
    );
};

export default SiteInfoView;

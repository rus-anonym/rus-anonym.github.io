import React, {
    useEffect, useMemo, useState 
} from "react";

import {
    Group,
    RichCell,
    Avatar,
    InitialsAvatar,
    calcInitialsAvatarColor,
    Header,
    Link,
    useAdaptivity,
    ViewWidth,
    Placeholder,
} from "@vkontakte/vkui";

import { BsFillSuitHeartFill } from "react-icons/bs";

import session from "../../TS/store/session";

import LogoVK from "../../SVG/socials/VK.svg";
import LogoTelegram from "../../SVG/socials/Telegram.svg";

import LogoGitHubDark from "../../PNG/socials/GitHub-dark.png";
import LogoGitHubLight from "../../PNG/socials/GitHub-light.png";
import { useTranslation } from "react-i18next";
import axios from "axios";

interface IHuman {
    id: number;
    name: string
    surname: string
    photo: string;
    telegram?: string;
    github?: string;
}

const Human = ({ user }: {user: IHuman}): JSX.Element => {
    const {
        id,
        name,
        surname,
        photo,
        github,
        telegram,
    } = user;

    const [isLoadAvatar, setIsLoadAvatar] = useState(true);

    const avatar = useMemo(() => {
        return <>
            {isLoadAvatar && <InitialsAvatar
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
            </InitialsAvatar>}
            <Avatar
                style={{
                    display: isLoadAvatar ? "none" : undefined 
                }}
                size={48}
                src={photo}
                onLoad={() => setIsLoadAvatar(false)}
            />
        </>;
    }, [isLoadAvatar]);

    return (
        <RichCell
            multiline
            hasActive={false}
            hasHover={false}
            before={avatar}
            bottom={
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    {github && (
                        <Link href={`https://github.com/${github}`} target="_blank">
                            <Avatar
                                style={{
                                    margin: "5px",
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

                    <Link href={`https://vk.com/id${id}`} target="_blank">
                        <Avatar
                            style={{
                                margin: "5px",
                            }}
                            size={24}
                            src={LogoVK}
                        />
                    </Link>

                    {telegram && (
                        <Link href={`https://t.me/${telegram}`} target="_blank">
                            <Avatar
                                style={{
                                    margin: "5px",
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

const getDreamteamList = async (): Promise<IHuman[]> => {
    const list = await axios.post<{
        response: IHuman[];
    }>("https://api.rus-anonym-team.ru/dreamteam.get");

    return list.data.response;
};

const RusAnonymTeam = (): JSX.Element => {
    const [dreamteamList, setDreamteamList] = useState<IHuman[] | null>(null);

    const { t } = useTranslation("translation", {
        keyPrefix: "pages.aboutSite",
    });

    const { viewWidth } = useAdaptivity();
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    useEffect(() => {
        void getDreamteamList().then(setDreamteamList);
    }, []);

    return (
        <Group
            header={
                <Header subtitle={t("dreamTeamDescription")}>
                    {t("dreamTeam")}
                </Header>
            }
        >
            {dreamteamList && <div
                style={{
                    display: "flex",
                    flexDirection: isDesktop ? "row" : "column",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "flex-start",
                }}
                children={dreamteamList.map(user => {
                    return <Human user={user}/>;
                }) }
            />}
            <Placeholder
                icon={
                    <BsFillSuitHeartFill
                        size={56}
                        style={{
                            color: "red",
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
    );
};

export default RusAnonymTeam;

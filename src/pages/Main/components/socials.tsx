import React, { useState } from "react";
import {
    Link,
    Group,
    HorizontalCell,
    Avatar,
    Header,
    ViewWidth,
    useAdaptivity,
    Spinner,
    Placeholder,
    Button,
    RichCell,
    Div,
    SimpleCell,
    Separator,
} from "@vkontakte/vkui";
import copy from "copy-to-clipboard";

import { RichTooltip } from "@vkontakte/vkui/dist/unstable";

import LogoVK from "../../../SVG/socials/VK.svg";
import LogoTelegram from "../../../SVG/socials/Telegram.svg";

import LogoNPM from "../../../SVG/socials/NPM.svg";
import LogoGitHubDark from "../../../PNG/socials/GitHub-dark.png";
import LogoGitHubLight from "../../../PNG/socials/GitHub-light.png";

import LogoTwitter from "../../../PNG/socials/Twitter.png";
import Logo4PDA from "../../../PNG/socials/4PDA.png";
import LogoDiscord from "../../../PNG/socials/Discord.png";
import LogoICQ from "../../../PNG/socials/ICQ.png";
import LogoLinkedIn from "../../../PNG/socials/LinkedIn.png";
import LogoPikabu from "../../../PNG/socials/Pikabu.png";
import LogoPinterest from "../../../PNG/socials/Pinterest.png";
import LogoPlayground from "../../../PNG/socials/Playground.png";
import LogoReddit from "../../../PNG/socials/Reddit.png";
import LogoSkype from "../../../PNG/socials/Skype.png";
import LogoSteam from "../../../PNG/socials/Steam.png";
import LogoWakatime from "../../../PNG/socials/Wakatime.png";
import LogoWhatsApp from "../../../PNG/socials/Whatsapp.png";
import LogoWorldOfTanks from "../../../PNG/socials/WorldOfTanks.png";
import LogoYouTube from "../../../PNG/socials/Youtube.png";
import LogoTikTok from "../../../SVG/socials/TikTok.svg";
import LogoMLBB from "../../../PNG/socials/MLBB.png";
import { useTranslation } from "react-i18next";
import session from "../../../TS/store/session";

interface ISocialElementParams {
    name: string;
    logo: string;
    url?: string;
    backgroundColor?: string;
    method: "avatar" | "native";
    tooltipContent?: () => JSX.Element;
}

const ImageLoader = ({ src: url }: { src: string }): JSX.Element => {
    const [isLoad, setLoad] = useState(true);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
            }}
        >
            {isLoad && (
                <Placeholder>
                    <Spinner size="large" />
                </Placeholder>
            )}
            <img onLoad={(): void => setLoad(false)} alt="" src={url} />
        </div>
    );
};

const SocialElement = ({
    method = "avatar",
    name,
    logo,
    url,
    backgroundColor = undefined,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    tooltipContent: TooltipContent,
}: ISocialElementParams): JSX.Element => {
    const { viewWidth } = useAdaptivity();
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    const [isShowTooltip, setShowTooltip] = useState(false);

    const image =
        method === "avatar" ? (
            <Avatar size={84} src={logo} style={{
                backgroundColor 
            }} />
        ) : (
            <img
                alt=""
                src={logo}
                width={84}
                height={84}
                style={{
                    backgroundColor 
                }}
            />
        );

    const element = (
        <div
            onClick={(): void => {
                if (!isDesktop) {
                    setShowTooltip(!isShowTooltip);
                }
            }}
        >
            <HorizontalCell
                size="l"
                header={
                    <Header style={{
                        justifyContent: "center" 
                    }}>{name}</Header>
                }
                disabled
            >
                {url ? (
                    <Link href={url} target="_blank">
                        {image}
                    </Link>
                ) : (
                    image
                )}
            </HorizontalCell>
        </div>
    );

    if (TooltipContent && (isDesktop || !url)) {
        return (
            <RichTooltip
                content={<TooltipContent />}
                children={element}
                shown={isDesktop ? undefined : isShowTooltip}
            />
        );
    } else {
        return element;
    }
};

const SocialsList = ({ list, }: {
    list: ISocialElementParams[];
}): JSX.Element => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignItems: "flex-end",
            }}
        >
            {list.map(SocialElement)}
        </div>
    );
};

const Socials = (): JSX.Element => {
    const { t } = useTranslation("translation", {
        keyPrefix: "pages.main.socials",
    });

    return (
        <>
            <Group
                mode="plain"
                separator="hide"
                header={
                    <Header style={{
                        justifyContent: "center" 
                    }}>
                        {t("contactMe")}
                    </Header>
                }
            >
                <SocialsList
                    list={[
                        {
                            name: "VK",
                            url: "https://vk.me/rus_cybersec",
                            logo: LogoVK,
                            method: "avatar",
                        },
                        {
                            name: "Telegram",
                            url: "https://t.me/rus_anonym",
                            logo: LogoTelegram,
                            method: "avatar",
                        },
                    ]}
                />
            </Group>

            <Group
                mode="plain"
                header={
                    <Header style={{
                        justifyContent: "center" 
                    }}>
                        {t("alsoExist")}
                    </Header>
                }
            >
                <Group
                    separator="hide"
                    mode="plain"
                    header={
                        <Header style={{
                            justifyContent: "center" 
                        }}>
                            Code
                        </Header>
                    }
                >
                    <SocialsList
                        list={[
                            {
                                name: "GitHub",
                                url: "https://github.com/RusAnonym",
                                logo:
                                    session.theme === "dark"
                                        ? LogoGitHubLight
                                        : LogoGitHubDark,
                                method: "avatar",
                                tooltipContent: (): JSX.Element => {
                                    const images = [
                                        `https://github-readme-stats.vercel.app/api?username=RusAnonym&show_icons=true&theme=${session.theme}&count_private=true&hide_title=true&include_all_commits=true&hide_border=true`,
                                        `https://github-readme-streak-stats.herokuapp.com/?user=RusAnonym&theme=${session.theme}&hide_border=true`,
                                    ];

                                    return (
                                        <div
                                            style={{
                                                flexDirection: "column",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            {images.map((src) => (
                                                <ImageLoader src={src} />
                                            ))}
                                        </div>
                                    );
                                },
                            },
                            {
                                name: "NPM",
                                url: "https://www.npmjs.com/~rus_anonym",
                                logo: LogoNPM,
                                method: "native",
                                tooltipContent: (): JSX.Element => {
                                    return (
                                        <React.Fragment>
                                            <SimpleCell
                                                hasActive={false}
                                                hasHover={false}
                                                description={t("npm.utils")}
                                                after={
                                                    <React.Fragment>
                                                        <Separator />
                                                        <Link
                                                            target="_blank"
                                                            href="https://npmjs.com/package/@rus-anonym/node-utils"
                                                        >
                                                            <img
                                                                alt=""
                                                                src={LogoNPM}
                                                                width={36}
                                                                height={36}
                                                            />
                                                        </Link>
                                                        <Separator />
                                                        <Link
                                                            target="_blank"
                                                            href="https://github.com/rus-anonym/node-utils"
                                                        >
                                                            <img
                                                                alt=""
                                                                src={
                                                                    session.theme ===
                                                                    "dark"
                                                                        ? LogoGitHubLight
                                                                        : LogoGitHubDark
                                                                }
                                                                width={36}
                                                                height={36}
                                                            />
                                                        </Link>
                                                    </React.Fragment>
                                                }
                                            >
                                                @rus-anonym/node-utils
                                            </SimpleCell>
                                            <SimpleCell
                                                hasActive={false}
                                                hasHover={false}
                                                description={t("npm.utils")}
                                                after={
                                                    <React.Fragment>
                                                        <Separator />
                                                        <Link
                                                            target="_blank"
                                                            href="https://npmjs.com/package/@rus-anonym/web-utils"
                                                        >
                                                            <img
                                                                alt=""
                                                                src={LogoNPM}
                                                                width={36}
                                                                height={36}
                                                            />
                                                        </Link>
                                                        <Separator />
                                                        <Link
                                                            target="_blank"
                                                            href="https://github.com/rus-anonym/web-utils"
                                                        >
                                                            <img
                                                                alt=""
                                                                src={
                                                                    session.theme ===
                                                                    "dark"
                                                                        ? LogoGitHubLight
                                                                        : LogoGitHubDark
                                                                }
                                                                width={36}
                                                                height={36}
                                                            />
                                                        </Link>
                                                    </React.Fragment>
                                                }
                                            >
                                                @rus-anonym/web-utils
                                            </SimpleCell>
                                            <SimpleCell
                                                hasActive={false}
                                                hasHover={false}
                                                description={t("npm.scheduler")}
                                                after={
                                                    <React.Fragment>
                                                        <Separator />
                                                        <Link
                                                            target="_blank"
                                                            href="https://npmjs.com/package/@rus-anonym/scheduler"
                                                        >
                                                            <img
                                                                alt=""
                                                                src={LogoNPM}
                                                                width={36}
                                                                height={36}
                                                            />
                                                        </Link>
                                                        <Separator />
                                                        <Link
                                                            target="_blank"
                                                            href="https://github.com/rus-anonym/node-scheduler"
                                                        >
                                                            <img
                                                                alt=""
                                                                src={
                                                                    session.theme ===
                                                                    "dark"
                                                                        ? LogoGitHubLight
                                                                        : LogoGitHubDark
                                                                }
                                                                width={36}
                                                                height={36}
                                                            />
                                                        </Link>
                                                    </React.Fragment>
                                                }
                                            >
                                                @rus-anonym/node-scheduler
                                            </SimpleCell>
                                        </React.Fragment>
                                    );
                                },
                            },
                            {
                                name: "Wakatime",
                                url: "https://wakatime.com/@rus_anonym",
                                logo: LogoWakatime,
                                method: "native",
                                tooltipContent: (): JSX.Element => {
                                    const url = `https://github-readme-stats.vercel.app/api/wakatime?username=rus_anonym&range=last_7_days&theme=${session.theme}&hide_border=true&hide_title=true`;
                                    return <ImageLoader src={url} />;
                                },
                            },
                        ]}
                    />
                </Group>

                <Group
                    separator="hide"
                    mode="plain"
                    header={
                        <Header style={{
                            justifyContent: "center" 
                        }}>
                            {t("occasionallyLook")}
                        </Header>
                    }
                >
                    <SocialsList
                        list={[
                            {
                                name: "Twitter",
                                url: "https://twitter.com/rus_anonymchik",
                                logo: LogoTwitter,
                                method: "native",
                            },
                            {
                                name: "4PDA",
                                url: "https://4pda.to/forum/index.php?showuser=8270750",
                                logo: Logo4PDA,
                                method: "native",
                            },
                            {
                                name: "Discord",
                                url: "https://discord.com/users/392598481681907713",
                                logo: LogoDiscord,
                                method: "native",
                            },

                            {
                                name: "ICQ",
                                url: "https://icq.im/rus_anonym",
                                logo: LogoICQ,
                                method: "avatar",
                            },
                            {
                                name: "LinkedIn",
                                url: "https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D1%81%D0%B5%D0%BC%D0%B8%D0%BD-6bbb2b1b3/",
                                logo: LogoLinkedIn,
                                method: "native",
                            },
                            {
                                name: "Pikabu",
                                url: "https://pikabu.ru/@RusAnonym",
                                logo: LogoPikabu,
                                method: "avatar",
                            },

                            {
                                name: "Reddit",
                                url: "https://www.reddit.com/user/rus_anonym",
                                logo: LogoReddit,
                                method: "avatar",
                            },
                            {
                                name: "Pinterest",
                                url: "https://www.pinterest.ru/rus_anonym/",
                                logo: LogoPinterest,
                                method: "avatar",
                            },
                            {
                                name: "Playground",
                                url: "https://users.playground.ru/2444466/",
                                logo: LogoPlayground,
                                method: "avatar",
                            },
                            {
                                name: "Skype",
                                url: "skype:live:4b1f037147ec6fdb",
                                logo: LogoSkype,
                                method: "native",
                            },
                            {
                                name: "Steam",
                                url: "https://steamcommunity.com/id/rus_anonym/",
                                logo: LogoSteam,
                                method: "native",
                            },
                            {
                                name: "WhatsApp",
                                url: "https://wa.me/79096230555",
                                logo: LogoWhatsApp,
                                method: "native",
                            },
                            {
                                name: "YouTube",
                                url: "https://www.youtube.com/channel/UCzbQsGQhIUk98Zu02Hd_OxQ",
                                logo: LogoYouTube,
                                method: "native",
                            },
                            {
                                name: "TikTok",
                                url: "https://www.tiktok.com/@rus_anonym",
                                logo: LogoTikTok,
                                method: "avatar",
                            },
                            {
                                name: "Mobile Legends: Bang Bang",
                                logo: LogoMLBB,
                                method: "native",
                                tooltipContent: (): JSX.Element => {
                                    const Action = ({ id, }: {
                                        id: number;
                                    }): JSX.Element => {
                                        const [isCopied, setCopied] =
                                            useState(false);

                                        return (
                                            <React.Fragment>
                                                <Button
                                                    disabled={isCopied}
                                                    onClick={(): void => {
                                                        copy(id.toString());
                                                        setCopied(true);
                                                        setTimeout(
                                                            () =>
                                                                setCopied(
                                                                    false
                                                                ),
                                                            2500
                                                        );
                                                    }}
                                                >
                                                    {isCopied
                                                        ? t("mlbb.copied")
                                                        : t("mlbb.copyID")}
                                                </Button>
                                            </React.Fragment>
                                        );
                                    };

                                    return (
                                        <Div>
                                            <div style={{
                                                display: "flex" 
                                            }}>
                                                <RichCell
                                                    hasActive={false}
                                                    hasHover={false}
                                                    text="ID: 339158807"
                                                    caption={t("mlbb.mainAcc")}
                                                    actions={
                                                        <Action
                                                            id={339158807}
                                                        />
                                                    }
                                                >
                                                    rus_anonym
                                                </RichCell>
                                                <RichCell
                                                    hasActive={false}
                                                    hasHover={false}
                                                    text="ID: 1158262934"
                                                    caption={t(
                                                        "mlbb.secondAcc"
                                                    )}
                                                    actions={
                                                        <Action
                                                            id={1158262934}
                                                        />
                                                    }
                                                >
                                                    rus_anonym
                                                </RichCell>
                                            </div>
                                            <div style={{
                                                display: "flex" 
                                            }}>
                                                <RichCell
                                                    hasActive={false}
                                                    hasHover={false}
                                                    text="ID: 3346392"
                                                    caption={t("mlbb.group")}
                                                    actions={
                                                        <Action id={3346392} />
                                                    }
                                                >
                                                    RusCringe
                                                </RichCell>
                                                <RichCell
                                                    hasActive={false}
                                                    hasHover={false}
                                                    text="ID: 4415974"
                                                    caption={t("mlbb.team")}
                                                    after="MVP"
                                                    actions={
                                                        <Action id={4415974} />
                                                    }
                                                >
                                                    RusCringe
                                                </RichCell>
                                            </div>
                                        </Div>
                                    );
                                },
                            },
                            {
                                name: "World of Tanks",
                                url: "https://worldoftanks.ru/ru/community/accounts/91518416",
                                logo: LogoWorldOfTanks,
                                method: "native",
                            },
                        ]}
                    />
                </Group>
            </Group>
        </>
    );
};

export default Socials;

import {
  Avatar,
  Button,
  Div,
  Flex,
  Group,
  Header,
  Link,
  Placeholder,
  RichCell,
  SimpleCell,
  Spinner,
  Text,
  useAdaptivityWithJSMediaQueries,
} from "@vkontakte/vkui";
import copy from "copy-to-clipboard";
import React, { useState } from "react";

import { Tooltip } from "@vkontakte/vkui";

import LogoTelegram from "../../../SVG/socials/Telegram.svg";
import LogoVK from "../../../SVG/socials/VK.svg";

import LogoGitHubDark from "../../../PNG/socials/GitHub-dark.png";
import LogoGitHubLight from "../../../PNG/socials/GitHub-light.png";
import LogoNPM from "../../../SVG/socials/NPM.svg";

import { useTranslation } from "react-i18next";
import Logo4PDA from "../../../PNG/socials/4PDA.png";
import LogoMLBB from "../../../PNG/socials/MLBB.png";
import LogoPinterest from "../../../PNG/socials/Pinterest.png";
import LogoPlayground from "../../../PNG/socials/Playground.png";
import LogoReddit from "../../../PNG/socials/Reddit.png";
import LogoSteam from "../../../PNG/socials/Steam.png";
import LogoWakatime from "../../../PNG/socials/Wakatime.png";
import LogoWhatsApp from "../../../PNG/socials/Whatsapp.png";
import LogoWorldOfTanks from "../../../PNG/socials/WorldOfTanks.png";
import LogoYouTube from "../../../PNG/socials/Youtube.png";
import LogoTikTok from "../../../SVG/socials/TikTok.svg";
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
          <Spinner size="xl" />
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

  tooltipContent: TooltipContent,
}: ISocialElementParams): JSX.Element => {
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  const [isShowTooltip, setShowTooltip] = useState(false);

  const image =
    method === "avatar" ? (
      <Avatar
        size={84}
        src={logo}
        style={{
          backgroundColor,
        }}
      />
    ) : (
      <img
        alt=""
        src={logo}
        width={84}
        height={84}
        style={{
          backgroundColor,
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
      <SimpleCell hasActive={false} hasHover={false}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {url ? (
            <Link href={url} target="_blank">
              {image}
            </Link>
          ) : (
            image
          )}
          <Header>{name}</Header>
        </div>
      </SimpleCell>
    </div>
  );

  if (TooltipContent && (isDesktop || !url)) {
    return (
      <Tooltip
        shown={isDesktop ? undefined : isShowTooltip}
        enableInteractive
        placement="auto"
        maxWidth={null}
        description={<TooltipContent />}
      >
        {element}
      </Tooltip>
    );
  } else {
    return element;
  }
};

const SocialsList = ({
  list,
}: {
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
          <h4
            style={{
              textAlign: "center",
            }}
          >
            {t("contactMe")}
          </h4>
        }
      >
        <SocialsList
          list={[
            {
              name: "VK",
              url: "https://vk.com/id842917178",
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
          <h4
            style={{
              textAlign: "center",
            }}
          >
            {t("alsoExist")}
          </h4>
        }
      >
        <Group
          separator="hide"
          mode="plain"
          header={
            <h5
              style={{
                textAlign: "center",
              }}
            >
              Code
            </h5>
          }
        >
          <SocialsList
            list={[
              {
                name: "GitHub",
                url: "https://github.com/RusAnonym",
                logo:
                  session.theme === "dark" ? LogoGitHubLight : LogoGitHubDark,
                method: "avatar",
                tooltipContent: (): JSX.Element => {
                  const images = [
                    `https://github-readme-stats.vercel.app/api?username=RusAnonym&show_icons=true&theme=${session.theme}&count_private=true&hide_title=true&include_all_commits=true&hide_border=true`,
                    `https://github-readme-streak-stats.herokuapp.com/?user=RusAnonym&theme=${session.theme}&hide_border=true`,
                  ];

                  return (
                    <Flex direction="column" align="center">
                      {images.map((src) => (
                        <ImageLoader src={src} />
                      ))}
                    </Flex>
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
                    <Flex direction="column">
                      <SimpleCell
                        hasActive={false}
                        hasHover={false}
                        subtitle={t("npm.utils")}
                        after={
                          <React.Fragment>
                            <div style={{ margin: "5px" }} />
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
                            <div style={{ margin: "5px" }} />
                            <Link
                              target="_blank"
                              href="https://github.com/rus-anonym/node-utils"
                            >
                              <img
                                alt=""
                                src={
                                  session.theme === "dark"
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
                        subtitle={t("npm.utils")}
                        after={
                          <React.Fragment>
                            <div style={{ margin: "5px" }} />
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
                            <div style={{ margin: "5px" }} />
                            <Link
                              target="_blank"
                              href="https://github.com/rus-anonym/web-utils"
                            >
                              <img
                                alt=""
                                src={
                                  session.theme === "dark"
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
                        subtitle={t("npm.scheduler")}
                        after={
                          <React.Fragment>
                            <div style={{ margin: "5px" }} />
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
                            <div style={{ margin: "5px" }} />
                            <Link
                              target="_blank"
                              href="https://github.com/rus-anonym/node-scheduler"
                            >
                              <img
                                alt=""
                                src={
                                  session.theme === "dark"
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
                      <SimpleCell
                        hasActive={false}
                        hasHover={false}
                        subtitle={t("npm.commandsManager")}
                        after={
                          <React.Fragment>
                            <div style={{ margin: "5px" }} />
                            <Link
                              target="_blank"
                              href="https://npmjs.com/package/@rus-anonym/commands-manager"
                            >
                              <img
                                alt=""
                                src={LogoNPM}
                                width={36}
                                height={36}
                              />
                            </Link>
                            <div style={{ margin: "5px" }} />
                            <Link
                              target="_blank"
                              href="https://github.com/rus-anonym/commands-manager"
                            >
                              <img
                                alt=""
                                src={
                                  session.theme === "dark"
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
                        @rus-anonym/commands-manager
                      </SimpleCell>
                    </Flex>
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
            <h5
              style={{
                textAlign: "center",
              }}
            >
              {t("occasionallyLook")}
            </h5>
          }
        >
          <SocialsList
            list={[
              {
                name: "4PDA",
                url: "https://4pda.to/forum/index.php?showuser=8270750",
                logo: Logo4PDA,
                method: "native",
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
                  const Action = ({ id }: { id: number }): JSX.Element => {
                    const [isCopied, setCopied] = useState(false);

                    return (
                      <React.Fragment>
                        <Button
                          disabled={isCopied}
                          onClick={(): void => {
                            copy(id.toString());
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2500);
                          }}
                        >
                          {isCopied ? t("mlbb.copied") : t("mlbb.copyID")}
                        </Button>
                      </React.Fragment>
                    );
                  };

                  return (
                    <Div>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <RichCell
                          hasActive={false}
                          hasHover={false}
                          subtitle="ID: 339158807"
                          extraSubtitle={t("mlbb.mainAcc")}
                          actions={<Action id={339158807} />}
                        >
                          rus_anonym
                        </RichCell>
                      </div>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <RichCell
                          hasActive={false}
                          hasHover={false}
                          subtitle="ID: 4415974"
                          extraSubtitle={t("mlbb.team")}
                          actions={<Action id={4415974} />}
                        >
                          <Text inline>RusCringe</Text>
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

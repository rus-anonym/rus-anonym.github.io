import React from "react";
import {
    Group, Header, Link 
} from "@vkontakte/vkui";

import { useTranslation } from "react-i18next";

import session from "../../../TS/store/session";

import LogoTinkoffRu from "../../../SVG/donate/Tinkoff-ru.svg";
import LogoTinkoffEn from "../../../SVG/donate/Tinkoff-en.svg";
import LogoQIWI from "../../../SVG/donate/QIWI.svg";

import LogoYoomoneyLight from "../../../SVG/donate/YooMoney-light.svg";
import LogoYoomoneyDark from "../../../SVG/donate/YooMoney-dark.svg";

const Donate = (): JSX.Element => {
    const { t } = useTranslation("translation", {
        keyPrefix: "pages.main" 
    });

    return (
        <Group
            mode="plain"
            separator="hide"
            header={
                <Header style={{
                    justifyContent: "center" 
                }}>
                    {t("donateToMe")}
                </Header>
            }
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                    flexDirection: "column",
                }}
            >
                <Link
                    href="https://www.tinkoff.ru/rm/semin.aleksandr89/z1sI169648/"
                    target="_blank"
                >
                    <img
                        alt=""
                        src={
                            session.language === "en"
                                ? LogoTinkoffEn
                                : LogoTinkoffRu
                        }
                        height={128}
                    />
                </Link>

                <Link
                    href="https://qiwi.com/n/ANONYMOUS&amp;blocked[0]=account"
                    target="_blank"
                >
                    <img alt="" src={LogoQIWI} width={96} height={96} />
                </Link>

                <Link
                    href="https://yoomoney.ru/to/410018151299815"
                    target="_blank"
                >
                    <img
                        alt=""
                        src={
                            session.theme === "dark"
                                ? LogoYoomoneyLight
                                : LogoYoomoneyDark
                        }
                        width={64 * 4}
                        height={64}
                    />
                </Link>
            </div>
        </Group>
    );
};

export default Donate;

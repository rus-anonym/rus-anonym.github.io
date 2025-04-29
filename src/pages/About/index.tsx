import { useEffect, useMemo, useState } from "react";

import {
  Icon16Cloud,
  Icon16CloudRain,
  Icon16Fog,
  Icon16Snowflake,
  Icon16Sun,
  Icon20CalendarOutline,
  Icon20GlobeOutline,
  Icon20GovernmentOutline,
  Icon20HieroglyphCharacterOutline,
  Icon20MoneyCircleOutline,
  Icon20NotebookCheckOutline,
  Icon28CalendarOutline,
  Icon28MailOutline,
  Icon28PhoneOutline,
  Icon28PlaceOutline,
} from "@vkontakte/icons";
import {
  Avatar,
  Cell,
  Div,
  Group,
  IconButton,
  MiniInfoCell,
  RichCell,
  Tooltip,
} from "@vkontakte/vkui";
import { useTranslation } from "react-i18next";
import router from "../../TS/store/router";

import moment from "moment";

import { fetchWeatherApi } from "openmeteo";
import SelfAvatar from "../../PNG/about/avatar.png";

const ageCount = moment().diff(
  moment("05.04.2004", "DD.MM.YYYY"),
  "years",
  false
);

interface IWeatherData {
  temperature: number;
  status: "sunny" | "cloudy" | "rain" | "snow" | "fog" | "unknown";
}

const getWeather = async (): Promise<IWeatherData> => {
  const params = {
    latitude: 55.751244,
    longitude: 37.618423,
    current: ["temperature_2m", "weather_code"],
    timezone: "Europe/Moscow",
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);
  const response = responses[0];

  const current = response.current();
  const weatherCode = current!.variables(1)!.value();

  const weatherStatus =
    (
      {
        0: "sunny",
        1: "sunny",
        2: "cloudy",
        3: "cloudy",
        45: "fog",
        48: "fog",
        51: "rain",
        53: "rain",
        55: "rain",
        61: "rain",
        63: "rain",
        65: "rain",
        71: "snow",
        73: "snow",
        75: "snow",
      } satisfies Record<number, "sunny" | "cloudy" | "rain" | "snow" | "fog">
    )[weatherCode] || "unknown";

  return {
    temperature: current!.variables(0)!.value(),
    status: weatherStatus,
  };
};

const AboutView = (): JSX.Element => {
  const { t } = useTranslation("translation", {
    keyPrefix: "pages.about",
  });

  const redirect = (url: string) => {
    const element = document.createElement("a");
    element.href = url;
    element.target = "_blank";
    element.click();
  };

  const [weather, setWeather] = useState<null | IWeatherData>(null);
  const weatherIcon = useMemo(() => {
    if (weather === null) {
      return null;
    }

    if (weather.status === "sunny") {
      return <Icon16Sun />;
    }

    if (weather.status === "cloudy") {
      return <Icon16Cloud />;
    }

    if (weather.status === "rain") {
      return <Icon16CloudRain />;
    }

    if (weather.status === "snow") {
      return <Icon16Snowflake />;
    }

    if (weather.status === "fog") {
      return <Icon16Fog />;
    }
  }, [weather]);

  useEffect(() => {
    router.activePanel = null;
  });

  useEffect(() => {
    getWeather().then(setWeather);
  }, []);

  return (
    <Group>
      <Group mode="plain">
        <RichCell
          before={
            <Avatar
              src={SelfAvatar}
              width={72}
              height={72}
              withTransparentBackground
              noBorder
            />
          }
          extraSubtitle={t("specialty")}
        >
          {t("fullName")}
        </RichCell>
        <Cell
          before={
            <IconButton
              onClick={() => redirect("geo:55.7522453,37.6204103")}
              aria-label={t("place", {
                context: "value",
              }).toString()}
            >
              <Icon28PlaceOutline />
            </IconButton>
          }
          subtitle={t("place", {
            context: "value",
          })}
          indicator={t("relocation")}
          after={
            weather && (
              <Div>
                <Tooltip description={`${weather.temperature.toFixed(1)}°C`}>
                  {weatherIcon!}
                </Tooltip>
              </Div>
            )
          }
        >
          {t("place")}
        </Cell>
        <Cell
          subtitle="05.04.2004"
          before={
            <IconButton
              onClick={() => {
                const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//rus-anonym.xyz/@rus_cybersec
CALSCALE:GREGORIAN
BEGIN:VTIMEZONE
TZID:Europe/Moscow
LAST-MODIFIED:20240422T053450Z
TZURL:https://www.tzurl.org/zoneinfo-outlook/Europe/Moscow
X-LIC-LOCATION:Europe/Moscow
BEGIN:STANDARD
TZNAME:+03
TZOFFSETFROM:+0300
TZOFFSETTO:+0300
DTSTART:19700101T000000
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTAMP:20241215T222845Z
UID:1734300869209-47949@rus-anonym.xyz
DTSTART;VALUE=DATE:20040405
RRULE:FREQ=YEARLY;BYMONTH=4;BYMONTHDAY=5
DTEND;VALUE=DATE:20040406
SUMMARY:Alexandr Semin birthday
LOCATION:Russia, Moscow
END:VEVENT
END:VCALENDAR`;
                const blob = new Blob([ics], { type: "text/calendar" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "rus_cybersec|birthday.ics";
                a.click();
                URL.revokeObjectURL(url);
              }}
              aria-label={t("birthday").toString()}
            >
              <Icon28CalendarOutline />
            </IconButton>
          }
          indicator={`${ageCount} ${t("years", {
            count: ageCount,
          })}`}
        >
          {t("birthday")}
        </Cell>
        <Cell
          subtitle="+7 909 623-05-55"
          before={
            <IconButton
              onClick={() => redirect("tel:+7.909.623.05.55")}
              aria-label={t("phone").toString()}
            >
              <Icon28PhoneOutline />
            </IconButton>
          }
        >
          {t("phone")}
        </Cell>
        <Cell
          subtitle="rus_cybersec@vk.com"
          before={
            <IconButton
              onClick={() =>
                redirect(
                  "mailto:rus_cybersec@vk.com?body=Hello%20from%20your%20site%20%3A)"
                )
              }
              aria-label={t("email").toString()}
            >
              <Icon28MailOutline />
            </IconButton>
          }
        >
          {t("email")}
        </Cell>
      </Group>
      <Group mode="plain">
        <MiniInfoCell before={<Icon20MoneyCircleOutline />}>
          {`${t("salary")}: ${t("salary", {
            context: "value",
          })}`}
        </MiniInfoCell>
        <MiniInfoCell before={<Icon20GlobeOutline />}>
          {`${t("willingessToBusinessTrip")}: ${t("willingessToBusinessTrip", {
            context: "value",
          })}`}
        </MiniInfoCell>
        <MiniInfoCell before={<Icon20NotebookCheckOutline />}>
          {`${t("employment")}: ${t("employment", {
            context: "value",
          })}`}
        </MiniInfoCell>
        <MiniInfoCell before={<Icon20CalendarOutline />}>
          {`${t("sсheduleOfWork")}: ${t("sсheduleOfWork", {
            context: "value",
          })}`}
        </MiniInfoCell>
        <MiniInfoCell before={<Icon20GovernmentOutline />}>
          {`${t("citizenship")}: ${t("citizenship", {
            context: "value",
          })}`}
        </MiniInfoCell>
        <MiniInfoCell before={<Icon20HieroglyphCharacterOutline />}>
          {`${t("languages")}: ${t("languages", {
            context: "value",
          })}`}
        </MiniInfoCell>
      </Group>
    </Group>
  );
};

export default AboutView;

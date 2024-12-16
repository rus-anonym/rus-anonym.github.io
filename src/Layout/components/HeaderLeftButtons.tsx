import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Button,
  ButtonGroup,
  Div,
  PanelHeaderButton,
  Popover,
  Tooltip,
  useAdaptivityWithJSMediaQueries,
} from "@vkontakte/vkui";

import {
  Icon28ComputerOutline,
  Icon28GlobeOutline,
  Icon28MoonOutline,
  Icon28SmartphoneOutline,
  Icon28SunOutline,
} from "@vkontakte/icons";

import { observer } from "mobx-react";
import session from "../../TS/store/session";

const useForceUpdate = (): (() => void) => {
  const [value, setValue] = useState(false);
  return () => setValue(!value);
};

const HeaderLeftButtons = (): JSX.Element => {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "utils",
  });

  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  const forceUpdate = useForceUpdate();

  const DropdownContent = (): JSX.Element => {
    const prefersColorScheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    return (
      <Div>
        <ButtonGroup mode="vertical" gap="s" stretched>
          <Button
            size="m"
            disabled={session["_theme"] === "dark"}
            stretched
            before={<Icon28MoonOutline />}
            onClick={(): void => {
              session.theme = "dark";
              forceUpdate();
            }}
          >
            {i18n.t("themes.dark") as unknown as string}
          </Button>
          <Button
            size="m"
            disabled={session["_theme"] === "light"}
            stretched
            before={<Icon28SunOutline />}
            onClick={(): void => {
              session.theme = "light";
              forceUpdate();
            }}
          >
            {i18n.t("themes.light") as unknown as string}
          </Button>
          <Button
            size="m"
            disabled={session["_theme"] === "auto"}
            stretched
            before={
              isDesktop ? (
                <Icon28ComputerOutline />
              ) : (
                <Icon28SmartphoneOutline />
              )
            }
            onClick={(): void => {
              session.theme = "auto";
              forceUpdate();
            }}
          >
            {i18n.t("themes.auto") as unknown as string} (
            {i18n.t("themes." + prefersColorScheme) as unknown as string})
          </Button>
        </ButtonGroup>
      </Div>
    );
  };

  return (
    <>
      <Popover
        trigger={isDesktop ? "hover" : "click"}
        content={<DropdownContent />}
      >
        <PanelHeaderButton
          hasActive={!isDesktop}
          hasHover={false}
          aria-label={t("changeLanguage").toString()}
        >
          {session.theme === "light" ? (
            <Icon28SunOutline />
          ) : (
            <Icon28MoonOutline />
          )}
        </PanelHeaderButton>
      </Popover>
      <Tooltip title={t("changeLanguage")} disableCloseAfterClick={isDesktop}>
        <PanelHeaderButton
          aria-label={t("changeLanguage").toString()}
          onClick={(): void => {
            session.language = session.language === "en" ? "ru" : "en";
          }}
        >
          <Icon28GlobeOutline />
        </PanelHeaderButton>
      </Tooltip>
    </>
  );
};

const ObservedHeaderLeftButtons = observer(HeaderLeftButtons);
export default ObservedHeaderLeftButtons;

import { Icon56InfoOutline } from "@vkontakte/icons";
import {
  Group,
  HorizontalCell,
  ModalPage,
  ModalPageHeader,
  PanelHeaderClose,
} from "@vkontakte/vkui";
import { useTranslation } from "react-i18next";
import router from "../../../TS/store/router";

const NavigationItem = ({
  name,
  path,

  icon,
}: {
  name: string;
  path: string;
  icon: JSX.Element;
}): JSX.Element => {
  return (
    <HorizontalCell
      size="l"
      title={name}
      onClick={(): void => {
        router.activeView = path;
        router.activeModal = null;
      }}
      disabled={router.activeView === path}
    >
      {icon}
    </HorizontalCell>
  );
};

const AdditionalNavigation = ({ id }: { id: string }): JSX.Element => {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "pages",
  });

  return (
    <ModalPage
      id={id}
      settlingHeight={100}
      header={
        <ModalPageHeader
          before={
            <PanelHeaderClose onClick={() => (router.activeModal = null)} />
          }
        >
          {i18n.t("utils.additionalNavigationMenu") as unknown as string}
        </ModalPageHeader>
      }
    >
      <Group>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <NavigationItem
            name={t("aboutSite.title")}
            path="about-site"
            icon={<Icon56InfoOutline fill="rgb(0, 140, 255)" />}
          />
        </div>
      </Group>
    </ModalPage>
  );
};

export default AdditionalNavigation;

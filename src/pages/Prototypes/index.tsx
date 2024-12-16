import React, { ReactElement, useEffect } from "react";

import {
  CellButton,
  Group,
  Header,
  Panel,
  Placeholder,
  useAdaptivityWithJSMediaQueries,
  View,
} from "@vkontakte/vkui";

import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import router from "../../TS/store/router";
import LazyLoadComponent from "../../utils/LazyLoad";

interface IPrototype {
  id: string;
  title: string;
  description: string;
  isMobile: boolean;
  isDesktop: boolean;
  component: React.ReactNode;
}

const prototypes: IPrototype[] = [
  {
    id: "love-meme-generator",
    title: "Love Meme generator",
    description: "",
    isMobile: true,
    isDesktop: true,
    component: (
      <LazyLoadComponent
        callbacks={[() => import("./List/LoveMemeGenerator")]}
      />
    ),
  },
];

const PrototypesView = (): JSX.Element => {
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "pages.prototypes",
  });

  useEffect(() => {
    if (!prototypes.some((prototype) => prototype.id === router.activePanel)) {
      router.activePanel = null;
    }
  });

  const filteredPrototypes = prototypes.filter(
    (x) => x.isDesktop === isDesktop || x.isMobile === !isDesktop
  );

  const UtilNavBlock = (prototype: IPrototype): JSX.Element => {
    return (
      <Group>
        <Header size="m" multiline subtitle={prototype.description}>
          {prototype.title}
        </Header>
        <CellButton
          onClick={(): void => {
            router.activePanel = prototype.id;
          }}
        >
          {t("start")}
        </CellButton>
      </Group>
    );
  };

  const UtilCell = (prototype: IPrototype): JSX.Element => {
    return <Panel id={prototype.id}>{prototype.component}</Panel>;
  };

  if (filteredPrototypes.length === 0) {
    return (
      <View activePanel="default">
        <Panel id="default">
          <Group>
            <Placeholder>
              {i18n.t("utils.feature") as unknown as string}
            </Placeholder>
          </Group>
        </Panel>
      </View>
    );
  }

  return (
    <View activePanel={router.activePanel || "default"}>
      <Panel id="default">
        <Group>{filteredPrototypes.map(UtilNavBlock)}</Group>
      </Panel>
      {filteredPrototypes.map(UtilCell) as unknown as ReactElement}
    </View>
  );
};

const ObservedPrototypesView = observer(PrototypesView);
export default ObservedPrototypesView;

import { Group } from "@vkontakte/vkui";
import { useEffect } from "react";

import router from "../../TS/store/router";

import Donates from "./components/donates";
import Socials from "./components/socials";

const MainPage = (): JSX.Element => {
  useEffect(() => {
    router.activePanel = null;
  });

  return (
    <Group>
      <Socials />
      <Donates />
    </Group>
  );
};

export default MainPage;

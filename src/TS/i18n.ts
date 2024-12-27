import i18next, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";

import EN from "../JSON/locales/en.json";
import RU from "../JSON/locales/ru.json";

const options: InitOptions = {
  fallbackLng: "en",
  resources: {
    en: EN as unknown as Record<string, string>,
    ru: RU as unknown as Record<string, string>,
  },
  interpolation: {
    escapeValue: false,
  },
};

export const init = async (): Promise<void> => {
  i18next.use(initReactI18next);
  await i18next.init(options);
};

export default i18next;

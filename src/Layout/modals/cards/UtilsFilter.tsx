import { ModalCard, SimpleCell, Switch } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import storage from "../../../TS/store/storage";

const UtilsFilter = ({ id }: { id: string }): JSX.Element => {
  const { t } = useTranslation("translation", {
    keyPrefix: "pages.utils",
  });

  const filters = storage.utils.filters;

  return (
    <ModalCard id={id} title={t("filters.title")}>
      <SimpleCell
        hasActive={false}
        hasHover={false}
        multiline
        after={
          <Switch
            checked={!filters.isLanguageFilter}
            onChange={(): void => {
              filters.isLanguageFilter = !filters.isLanguageFilter;
            }}
          />
        }
      >
        {t("filters.anotherLanguage")}
      </SimpleCell>
    </ModalCard>
  );
};

export default observer(UtilsFilter);

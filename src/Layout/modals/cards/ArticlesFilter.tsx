import React from "react";

import {
    ModalCard, SimpleCell, Switch 
} from "@vkontakte/vkui";
import { useTranslation } from "react-i18next";
import storage from "../../../TS/store/storage";
import { observer } from "mobx-react";

const ArticlesFilter = ({ id }: { id: string }): JSX.Element => {
    const { t } = useTranslation("translation", {
        keyPrefix: "pages.articles",
    });

    const filters = storage.articles.filters;

    return (
        <ModalCard id={id} header={t("filters.title")}>
            <SimpleCell
                disabled
                multiline
                after={
                    <Switch
                        checked={!filters.isLanguageFilter}
                        onChange={(): void => {
                            filters.isLanguageFilter =
                                !filters.isLanguageFilter;
                        }}
                    />
                }
            >
                {t("filters.anotherLanguage")}
            </SimpleCell>
            <SimpleCell
                hasActive={false}
                hasHover={false}
                multiline
                after={
                    <Switch
                        checked={!filters.isExplicitFilter}
                        onChange={(): void => {
                            filters.isExplicitFilter =
                                !filters.isExplicitFilter;
                        }}
                    />
                }
            >
                {t("filters.explicit")}
            </SimpleCell>
        </ModalCard>
    );
};

export default observer(ArticlesFilter);

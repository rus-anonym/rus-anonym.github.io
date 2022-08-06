import React, { useState } from "react";

import {
    Button,
    ModalCard,
    SimpleCell,
    Switch,
} from "@vkontakte/vkui";
import router from "../../../TS/store/router";
import { useTranslation } from "react-i18next";

const ArticlesFilter = ({ id }: { id: string }): JSX.Element => {
    const { t } = useTranslation("translation", {
        keyPrefix: "pages.articles",
    });

    const [isLanguageFilter, setLanguageFilter] = useState(
        router.modals.params?.isLanguageFilter as boolean
    );
    const [isExplicitFilter, setExplicitFilter] = useState(
        router.modals.params?.isExplicitFilter as boolean
    );

    return (
        <ModalCard
            id={id}
            onClose={(): void => {
                router.modals.reject();
            }}
            header={t("filters.title")}
            actions={
                <Button
                    mode="primary"
                    size="l"
                    onClick={(): void => {
                        router.modals.resolve({
                            isLanguageFilter,
                            isExplicitFilter,
                        });
                    }}
                >
                    Применить
                </Button>
            }
        >
            <SimpleCell
                multiline
                onClick={(): void => {
                    setLanguageFilter(!isLanguageFilter);
                }}
                after={<Switch checked={!isLanguageFilter} />}
            >
                {t("filters.anotherLanguage")}
            </SimpleCell>
            <SimpleCell
                multiline
                onClick={(): void => {
                    setExplicitFilter(!isExplicitFilter);
                }}
                after={<Switch checked={!isExplicitFilter} />}
            >
                {t("filters.explicit")}
            </SimpleCell>
        </ModalCard>
    );
};

export default ArticlesFilter;

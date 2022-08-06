import React, { useEffect, useState } from "react";
import axios from "axios";

import {
    Button,
    ButtonGroup,
    Checkbox,
    Div,
    Group,
    Header,
    HorizontalScroll,
    IconButton,
    Link,
    Placeholder,
    RichCell,
    Search,
    Snackbar,
    Spacing,
    Spinner,
    useAdaptivity,
    ViewWidth,
} from "@vkontakte/vkui";
import { Icon24Filter } from "@vkontakte/icons";
import { Dropdown } from "@vkontakte/vkui/dist/unstable";
import router from "../../../TS/store/router";
import { copyTextToClipboard } from "@vkontakte/vkjs";

interface ISticker {
    id: number;
    images: number[];
}

interface IPack {
    id: number;
    type: "simple";
    author: string;
    title: string;
    description: string;
    url: string;
    previews: number[];
    stickers: ISticker[];
}

interface IAnimatedPack extends Omit<IPack, "type" | "stickers"> {
    type: "animated";
    stickers: number[];
}

type TPack = IPack | IAnimatedPack;
type TMeta = TPack[];

const SimplePack = ({ pack }: { pack: IPack }): JSX.Element => {
    const { viewWidth } = useAdaptivity();
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    return (
        <>
            <HorizontalScroll
                showArrows
                getScrollToLeft={(i): number => i - 120}
                getScrollToRight={(i): number => i + 120}
            >
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {pack.stickers.map((sticker) => {
                        return (
                            <Dropdown
                                action={isDesktop ? "hover" : "click"}
                                content={
                                    <Div>
                                        <ButtonGroup mode="vertical">
                                            {sticker.images.map((image) => {
                                                return (
                                                    <Link
                                                        target="_blank"
                                                        href={`https://rus-anonym.github.io/vk-stickers-storage/${pack.id}/stickers/${sticker.id}/${image}.png`}
                                                    >
                                                        {image}.png
                                                    </Link>
                                                );
                                            })}
                                        </ButtonGroup>
                                    </Div>
                                }
                            >
                                <img
                                    width={56}
                                    src={`https://rus-anonym.github.io/vk-stickers-storage/${pack.id}/stickers/${sticker.id}/${sticker.images[0]}.png`}
                                />
                            </Dropdown>
                        );
                    })}
                </div>
            </HorizontalScroll>
        </>
    );
};

const AnimatedPack = (): JSX.Element => {
    return (
        <Group mode="plain" separator="hide">
            <Placeholder>Анимированные паки в разработке</Placeholder>
        </Group>
    );
};

const Pack = ({
    pack,
    exit,
}: {
    pack: TPack;
    exit: () => void;
}): JSX.Element => {
    const [snackbar, setSnackbar] = useState<JSX.Element | null>(null);

    return (
        <Group header={<Header>{pack.title}</Header>}>
            <img
                style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
                src={`https://rus-anonym.github.io/vk-stickers-storage/${
                    pack.id
                }/previews/${pack.previews[pack.previews.length - 1]}.jpeg`}
            />
            {pack.type === "simple" ? (
                <SimplePack pack={pack} />
            ) : (
                <AnimatedPack />
            )}
            <Spacing />
            <Group mode="plain">
                <ButtonGroup mode="vertical" stretched>
                    <Button
                        size="m"
                        onClick={(): void => {
                            const url = `${router.url}?pack=${pack.id}`;
                            void copyTextToClipboard(url).then(() => {
                                setSnackbar(
                                    <Snackbar
                                        onClose={(): void => setSnackbar(null)}
                                    >
                                        Ссылка скопирована в буфер обмен
                                    </Snackbar>
                                );
                            });
                        }}
                        stretched
                        appearance="neutral"
                    >
                        Скопировать ссылку на пак
                    </Button>
                    <Button
                        size="m"
                        onClick={exit}
                        stretched
                        appearance="neutral"
                    >
                        Назад
                    </Button>
                </ButtonGroup>
            </Group>
            {snackbar !== null && snackbar}
        </Group>
    );
};

const PackPreview = ({
    pack: { id, author, description, title, type, url },
    enter,
}: {
    pack: TPack;
    enter: () => void;
}): JSX.Element => {
    return (
        <RichCell
            before={
                <img
                    src={`https://rus-anonym.github.io/vk-stickers-storage/${id}/previews/140.jpeg`}
                />
            }
            disabled
            subhead={type === "simple" ? "Обычный" : "Анимированный"}
            text={description}
            caption={author}
            multiline
            actions={
                <ButtonGroup stretched>
                    <Button onClick={enter}>Открыть</Button>
                    <Button
                        appearance="neutral"
                        onClick={(): void => {
                            const element = document.createElement("a");
                            element.href = url;
                            element.target = "_blank";
                            element.click();
                        }}
                    >
                        Открыть в ВК
                    </Button>
                </ButtonGroup>
            }
        >
            {title}
        </RichCell>
    );
};

const VKStickers = ({ meta }: { meta: TMeta }): JSX.Element => {
    const { viewWidth } = useAdaptivity();
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    const [searchFilter, setSearchFilter] = useState("");
    const [isSimpleFilter, setSimpleFilter] = useState(true);
    const [isAnimatedFilter, setAnimatedFilter] = useState(true);
    const [activePack, setActivePack] = useState<TPack | null>(null);

    const filteredPacks = meta.filter((pack: TPack): boolean => {
        if (
            searchFilter !== "" &&
            !pack.title.toLowerCase().includes(searchFilter.toLowerCase())
        ) {
            return false;
        }

        if (isSimpleFilter && isAnimatedFilter) {
            return true;
        }

        if (!isSimpleFilter && !isAnimatedFilter) {
            return false;
        }

        if (isSimpleFilter && pack.type === "animated") {
            return false;
        }

        if (isAnimatedFilter && pack.type === "simple") {
            return false;
        }

        return true;
    });

    useEffect(() => {
        const packId = parseInt(router.queryParams.pack);
        if (!isNaN(packId)) {
            const pack = meta.find((x) => x.id === packId);
            if (pack) {
                setActivePack(pack);
            }
        }
    }, []);

    if (activePack !== null) {
        return (
            <Pack pack={activePack} exit={(): void => setActivePack(null)} />
        );
    }

    return (
        <Group>
            <Search
                placeholder={"Поиск"}
                value={searchFilter}
                onChange={(event): void => {
                    setSearchFilter(event.target.value);
                }}
                icon={
                    <Dropdown
                        action={isDesktop ? "hover" : "click"}
                        content={
                            <Div>
                                <Header>Фильтры</Header>
                                <Checkbox
                                    checked={isSimpleFilter}
                                    onClick={(): void => {
                                        setSimpleFilter(!isSimpleFilter);
                                    }}
                                >
                                    Обычные
                                </Checkbox>
                                <Checkbox
                                    checked={isAnimatedFilter}
                                    onClick={(): void => {
                                        setAnimatedFilter(!isAnimatedFilter);
                                    }}
                                >
                                    Анимированные
                                </Checkbox>
                            </Div>
                        }
                    >
                        <IconButton disabled={isDesktop}>
                            <Icon24Filter />
                        </IconButton>
                    </Dropdown>
                }
            />

            {filteredPacks.length === 0 ? (
                <Placeholder
                    action={
                        <Button
                            onClick={(): void => {
                                setSearchFilter("");
                                setAnimatedFilter(true);
                                setSimpleFilter(true);
                            }}
                        >
                            Убрать фильтры
                        </Button>
                    }
                >
                    По выбранным фильтрам ничего не найдено
                </Placeholder>
            ) : (
                filteredPacks.map((pack) => (
                    <PackPreview
                        pack={pack}
                        enter={(): void => setActivePack(pack)}
                        key={pack.id}
                    />
                ))
            )}
        </Group>
    );
};

const VKStickersLoader = (): JSX.Element => {
    const [meta, setMeta] = useState<TMeta | null>(null);

    useEffect(() => {
        void (async (): Promise<void> => {
            const response = await axios({
                method: "GET",
                baseURL: "https://rus-anonym.github.io/vk-stickers-storage",
                url: "meta.json",
            });

            setMeta(response.data as TMeta);
        })();
    }, []);

    if (meta === null) {
        return (
            <Group>
                <Placeholder>
                    <Spinner size="large" />
                </Placeholder>
            </Group>
        );
    }

    return <VKStickers meta={meta} />;
};

export default VKStickersLoader;

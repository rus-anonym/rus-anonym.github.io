import React, {
    useEffect, useState, useMemo, useRef 
} from "react";
import axios from "axios";

import {
    Button,
    ButtonGroup,
    Card,
    CardScroll,
    Div,
    Group,
    Header,
    IconButton,
    Link,
    Pagination,
    Placeholder,
    RichCell,
    Search,
    SimpleCell,
    Snackbar,
    Spacing,
    Spinner,
    Switch,
    useAdaptivity,
    ViewWidth,
} from "@vkontakte/vkui";
import { Icon24Filter } from "@vkontakte/icons";
import { Dropdown } from "@vkontakte/vkui/dist/unstable";
import router from "../../../TS/store/router";
import { copyTextToClipboard } from "@vkontakte/vkjs";
import lottie, { AnimationItem } from "lottie-web";

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

    const stickersChunk = useMemo(() => {
        const response: ISticker[][] = [];

        for (let i = 0; i < pack.stickers.length; i += 8) {
            response.push(pack.stickers.slice(i, i + 8));
        }

        return response;
    }, []);

    const sticker = (sticker: ISticker): JSX.Element => {
        const stickerSize = useMemo(() => {
            return sticker.images.find((x) => x >= 128) || sticker.images[0];
        }, []);

        return (
            <Dropdown
                action={isDesktop ? "hover" : "click"}
                content={
                    <Div
                        style={{
                            width: "128px",
                            textAlign: "center",
                        }}
                    >
                        <img
                            width="128px"
                            src={`https://rus-anonym.github.io/vk-stickers-storage/${pack.id}/stickers/${sticker.id}/${stickerSize}.png`}
                        />
                        <RichCell disabled>ID: {sticker.id}</RichCell>
                        <ButtonGroup mode="vertical" stretched>
                            {sticker.images.map((image) => {
                                return (
                                    <Link
                                        target="_blank"
                                        href={`https://rus-anonym.github.io/vk-stickers-storage/${pack.id}/stickers/${sticker.id}/${image}.png`}
                                    >
                                        {image}
                                        .png
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
    };

    return (
        <Div>
            <CardScroll size="l">
                {stickersChunk.map((chunk) => {
                    return (
                        <Card>
                            <Div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(4, 25%)",
                                    justifyItems: "center",
                                }}
                            >
                                {chunk.map(sticker)}
                            </Div>
                        </Card>
                    );
                })}
            </CardScroll>
        </Div>
    );
};

const AnimatedPack = ({ pack }: { pack: IAnimatedPack }): JSX.Element => {
    const { viewWidth } = useAdaptivity();
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    const stickersChunk = useMemo(() => {
        const response: number[][] = [];

        for (let i = 0; i < pack.stickers.length; i += 8) {
            response.push(pack.stickers.slice(i, i + 8));
        }

        return response;
    }, []);

    const Sticker = ({ id }: { id: number }): JSX.Element => {
        const containerRef = useRef<HTMLDivElement | null>(null);

        const animationUrl = `https://rus-anonym.github.io/vk-stickers-storage/${pack.id}/stickers/${id}.json`;
        const [animation, setAnimation] = useState<AnimationItem | null>(null);

        const container = (
            <div
                onMouseEnter={() => isDesktop && animation?.play()}
                onMouseLeave={() => isDesktop && animation?.stop()}
                ref={containerRef}
            >
                {animation === null && <Spinner />}
            </div>
        );

        useEffect(() => {
            void (async (): Promise<void> => {
                const response = await axios({
                    method: "GET",
                    url: animationUrl,
                });

                const animation = lottie.loadAnimation({
                    animationData: response.data as string,
                    container: containerRef.current as Element,
                    renderer: "svg",
                    loop: true,
                });
                animation.stop();

                setAnimation(animation);
            })();

            return () => {
                animation?.destroy();
            };
        }, []);

        return (
            <Dropdown
                onShownChange={() =>
                    !isDesktop &&
                    (animation?.isPaused
                        ? animation?.play()
                        : animation?.stop())
                }
                action={isDesktop ? "hover" : "click"}
                content={
                    <Div
                        style={{
                            width: "128px",
                            textAlign: "center",
                        }}
                    >
                        <RichCell disabled>ID: {id}</RichCell>
                        <ButtonGroup mode="vertical" stretched>
                            <Link target="_blank" href={animationUrl}>
                                animation.json
                            </Link>
                        </ButtonGroup>
                    </Div>
                }
            >
                <div style={{
                    width: "64px", height: "64px" 
                }}>{container}</div>
            </Dropdown>
        );
    };

    return (
        <Div>
            <CardScroll size="l">
                {stickersChunk.map((chunk) => {
                    return (
                        <Card>
                            <Div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(4, 25%)",
                                    justifyItems: "center",
                                }}
                            >
                                {chunk.map((id) => (
                                    <Sticker id={id} />
                                ))}
                            </Div>
                        </Card>
                    );
                })}
            </CardScroll>
        </Div>
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
    const { viewWidth } = useAdaptivity();
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    useEffect(() => {
        router.addQueryParam("id", pack.id.toString());
    }, []);

    return (
        <Group>
            <div
                style={
                    isDesktop
                        ? {
                            display: "flex", flexDirection: "row" 
                        }
                        : undefined
                }
            >
                <img
                    style={{
                        display: "block",
                        float: isDesktop ? "left" : undefined,
                        width: isDesktop ? "20vw" : "90%",
                        borderRadius: "10px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                    src={`https://rus-anonym.github.io/vk-stickers-storage/${
                        pack.id
                    }/previews/${pack.previews[pack.previews.length - 1]}.jpeg`}
                />
                <Div>
                    <RichCell
                        subhead={
                            pack.type === "simple" ? "Обычный" : "Анимированный"
                        }
                        text={pack.description}
                        caption={pack.author}
                        after="Идентификатор пака"
                        afterCaption={pack.id}
                        multiline
                        disabled
                        actions={
                            <ButtonGroup mode="vertical" stretched>
                                <Button
                                    size="m"
                                    onClick={(): void => {
                                        const url = `${router.url}?id=${pack.id}`;
                                        void copyTextToClipboard(url).then(
                                            () => {
                                                setSnackbar(
                                                    <Snackbar
                                                        onClose={(): void =>
                                                            setSnackbar(null)
                                                        }
                                                    >
                                                        Ссылка скопирована в
                                                        буфер обмен
                                                    </Snackbar>
                                                );
                                            }
                                        );
                                    }}
                                    stretched
                                    appearance="accent"
                                >
                                    Скопировать ссылку на страницу
                                </Button>
                                <Button
                                    size="m"
                                    onClick={(): void => {
                                        const element =
                                            document.createElement("a");
                                        element.href = pack.url;
                                        element.target = "_blank";
                                        element.click();
                                    }}
                                    stretched
                                    appearance="neutral"
                                >
                                    Открыть пак в ВКонтакте
                                </Button>
                            </ButtonGroup>
                        }
                    >
                        {pack.title}
                    </RichCell>
                </Div>
            </div>

            {pack.type === "simple" ? (
                <SimplePack pack={pack} />
            ) : (
                <AnimatedPack pack={pack} />
            )}
            <Spacing />
            <Group mode="plain">
                <ButtonGroup mode="vertical" stretched>
                    <Button
                        size="m"
                        onClick={(): void => {
                            router.clearQueryParams();
                            exit();
                        }}
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
    pack: { id, author, description, title, type, url, previews },
    enter,
}: {
    pack: TPack;
    enter: () => void;
}): JSX.Element => {
    const previewSize = useMemo(() => {
        return previews.find((x) => x >= 140) || previews[0];
    }, []);

    return (
        <RichCell
            before={
                <img
                    width={"140px"}
                    src={`https://rus-anonym.github.io/vk-stickers-storage/${id}/previews/${previewSize}.jpeg`}
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
        if (searchFilter !== "") {
            const packId = /^(pack|sticker)=(\d+)$/.exec(searchFilter);
            if (packId) {
                if (
                    packId[1] === "sticker" &&
                    pack.stickers.some((x) =>
                        typeof x === "object"
                            ? x.id === Number(packId[2])
                            : x === Number(packId[2])
                    )
                ) {
                    return true;
                } else if (
                    packId[1] === "pack" &&
                    pack.id === Number(packId[2])
                ) {
                    return true;
                }
            }

            if (
                !pack.title.toLowerCase().includes(searchFilter.toLowerCase())
            ) {
                return false;
            }
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

    const [currentPage, setCurrentPage] = useState(1);
    const filteredPacksChunk = useMemo(() => {
        setCurrentPage(1);

        const response: TPack[][] = [];

        for (let i = 0; i < filteredPacks.length; i += 25) {
            response.push(filteredPacks.slice(i, i + 25));
        }

        return response;
    }, [searchFilter, isSimpleFilter, isAnimatedFilter]);

    useEffect(() => {
        const packId = parseInt(router.queryParams.id);
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

    const pagination = (
        <div style={{
            display: "flex", justifyContent: "center" 
        }}>
            <Pagination
                currentPage={currentPage}
                onChange={(page): void => setCurrentPage(page)}
                totalPages={filteredPacksChunk.length}
            />
        </div>
    );

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
                                <SimpleCell
                                    disabled
                                    multiline
                                    after={
                                        <Switch
                                            checked={isSimpleFilter}
                                            onChange={(): void => {
                                                setSimpleFilter(
                                                    !isSimpleFilter
                                                );
                                            }}
                                        />
                                    }
                                >
                                    Обычные
                                </SimpleCell>
                                <SimpleCell
                                    disabled
                                    multiline
                                    after={
                                        <Switch
                                            checked={isAnimatedFilter}
                                            onChange={(): void => {
                                                setAnimatedFilter(
                                                    !isAnimatedFilter
                                                );
                                            }}
                                        />
                                    }
                                >
                                    Анимированные
                                </SimpleCell>
                            </Div>
                        }
                    >
                        <IconButton
                            hasActive={!isDesktop}
                            hasHover={!isDesktop}
                        >
                            <Icon24Filter />
                        </IconButton>
                    </Dropdown>
                }
            />

            {filteredPacksChunk.length === 0 ? (
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
                    <Spacing />
                    Для дополнительной фильтрации в поиске можно использовать
                    аргументы pack и sticker
                    <Spacing />
                    Например: pack=1 или sticker=100
                </Placeholder>
            ) : (
                <>
                    {pagination}
                    {filteredPacksChunk[currentPage - 1].map((pack) => (
                        <PackPreview
                            pack={pack}
                            enter={(): void => setActivePack(pack)}
                            key={pack.id}
                        />
                    ))}
                    {pagination}
                </>
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

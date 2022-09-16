import React, {
    useDeferredValue, useEffect, useMemo, useState 
} from "react";
import axios from "axios";
import moment from "moment";

import {
    Avatar,
    Button,
    ButtonGroup,
    calcInitialsAvatarColor,
    Div,
    FixedLayout,
    FormItem,
    Group,
    Header,
    IconButton,
    InitialsAvatar,
    Link,
    Pagination,
    Placeholder,
    RichCell,
    Search,
    SegmentedControl,
    SimpleCell,
    Spacing,
    Spinner,
    Switch,
    useAdaptivity,
    ViewWidth,
} from "@vkontakte/vkui";
import { copyTextToClipboard } from "@vkontakte/vkjs";
import { Dropdown } from "@vkontakte/vkui/dist/unstable";
import { Icon24Sort } from "@vkontakte/icons";
import InfiniteScroll from "react-infinite-scroll-component";

interface IChat {
    photo: null | {
        photo_50: string;
        photo_100: string;
        photo_200: string;
        is_default_photo: false;
    };
    creator: null | {
        id: number;
        first_name: string;
        last_name: string;
    };
    dateOfPublication: number;
    numberOfParticipants: number;
    title: string;
    key: string;
    update: number;
}

interface IAPIParams {
    sort: {
        dateOfPublication?: -1 | 1;
        numberOfParticipants?: -1 | 1;
    };
    limit: number;
    offset: number;
    title: string;
}

interface IAPIResponse {
    found: number;
    chats: IChat[];
}

const getConversations = async (
    params?: Partial<IAPIParams>
): Promise<IAPIResponse> => {
    const response = await axios.get(
        "https://search-for-chats-of-vk.ru/api/chats",
        {
            params: {
                limit: 25,
                ...params,
            },
        }
    );

    return response.data as IAPIResponse;
};

const Chat = ({ chat }: { chat: IChat }): JSX.Element => {
    const [isCopied, setIsCopied] = useState(false);

    let avatar: JSX.Element;

    const generateInitialsAvatar = (): JSX.Element => {
        return (
            <InitialsAvatar
                size={36}
                gradientColor={calcInitialsAvatarColor(chat.dateOfPublication)}
            >
                {chat.title
                    .split(" ")
                    .map((x) => x[0])
                    .slice(0, 2)
                    .join("")}
            </InitialsAvatar>
        );
    };

    if (chat.photo === null) {
        avatar = generateInitialsAvatar();
    } else {
        const { photo } = chat;
        const img =
            photo.photo_200 ??
            photo.photo_100 ??
            photo.photo_50 ??
            "userapi.com";

        if (img.includes("userapi.com")) {
            avatar = <Avatar size={36} src={img} />;
        } else {
            avatar = generateInitialsAvatar();
        }
    }

    return (
        <RichCell
            before={avatar}
            disabled
            multiline
            text={
                chat.creator === null ? undefined : (
                    <>
                        Создатель{": "}
                        <Link
                            target="_blank"
                            href={`https://vk.com/id${chat.creator.id}`}
                        >
                            {`${chat.creator.first_name} ${chat.creator.last_name}`}
                        </Link>
                    </>
                )
            }
            caption={
                <div>
                    {`Добавлена: ${moment(chat.dateOfPublication).format(
                        "DD.MM.YYYY HH:mm:ss"
                    )}`}
                    <br />
                    {`Обновлено: ${moment(chat.update).format(
                        "DD.MM.YYYY HH:mm:ss"
                    )}`}
                </div>
            }
            afterCaption={`${chat.numberOfParticipants} участников`}
            actions={
                <ButtonGroup mode="horizontal" gap="s" stretched>
                    <Button
                        mode="primary"
                        size="s"
                        onClick={(): void => {
                            const element = document.createElement("a");
                            element.href = `https://vk.me/join/${chat.key}`;
                            element.target = "_blank";
                            element.click();
                        }}
                    >
                        Открыть
                    </Button>
                    <Button
                        disabled={isCopied}
                        mode="secondary"
                        size="s"
                        onClick={() => {
                            void copyTextToClipboard(
                                `https://vk.me/join/${chat.key}`
                            ).then(() => {
                                setIsCopied(true);
                                setTimeout(() => setIsCopied(false), 2000);
                            });
                        }}
                    >
                        {isCopied ? "Скопировано" : "Скопировать ссылку"}
                    </Button>
                </ButtonGroup>
            }
        >
            {chat.title}
        </RichCell>
    );
};

interface IViewerParams {
    isLoad: boolean;
    isDesktop: boolean;
    search: string;
    sortParams:
        | { dateOfPublication: 1 | -1 }
        | { numberOfParticipants: 1 | -1 };
    setLoad: React.Dispatch<React.SetStateAction<boolean>>;
    setNotFound: React.Dispatch<React.SetStateAction<boolean>>;
    setSearchFooter: React.Dispatch<React.SetStateAction<JSX.Element | null>>;
}

const Pages = ({
    search,
    sortParams,
    setLoad,
    setNotFound,
    setSearchFooter,
    isDesktop,
    isLoad,
}: IViewerParams): JSX.Element => {
    const [currentPage, setCurrentPage] = useState(1);
    const [response, setResponse] = useState<IAPIResponse | null>();

    const pagination = useMemo(() => {
        if (response?.found === 0) {
            return null;
        } else {
            return (
                <div style={{
                    display: "flex", justifyContent: "center" 
                }}>
                    <Pagination
                        currentPage={currentPage}
                        onChange={(page): void => setCurrentPage(page)}
                        totalPages={Math.ceil((response?.found as number) / 25)}
                    />
                </div>
            );
        }
    }, [response]);

    useEffect(() => {
        setSearchFooter(response ? pagination : null);

        return () => setSearchFooter(null);
    }, [pagination]);

    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    useEffect(() => {
        setLoad(true);

        void getConversations({
            offset: (currentPage - 1) * 25,
            title: search,
            sort: sortParams,
        }).then((res) => {
            setResponse(res);
            if (res.found === 0) {
                setNotFound(true);
            } else {
                setNotFound(false);
            }
            setLoad(false);
        });
    }, [currentPage, search, sortParams]);

    return (
        <>
            {!isLoad && response?.chats.map((chat) => <Chat chat={chat} />)}
            {isDesktop && pagination}
        </>
    );
};

const Scroller = ({
    search,
    sortParams,
    setLoad,
    setNotFound,
}: IViewerParams): JSX.Element => {
    const [chats, setChats] = useState<IChat[]>([]);
    const [lastResponse, setLastResponse] = useState<IAPIResponse | null>();

    useEffect(() => {
        setLoad(false);
        void loadNext();
    }, []);

    useEffect(() => {
        setChats([]);
        setLastResponse(null);
        void loadNext();
    }, [search]);

    const loadNext = async (): Promise<void> => {
        const response = await getConversations({
            offset: Math.ceil((lastResponse?.found ?? 0 - chats.length) / 25),
            title: search,
            sort: sortParams,
        });

        setLastResponse(response);
        if (response.found === 0) {
            setNotFound(true);
            setChats([]);
        } else {
            setNotFound(false);
            setChats([...chats, ...response.chats]);
        }
    };

    return (
        <InfiniteScroll
            dataLength={chats.length}
            next={loadNext}
            hasMore={lastResponse ? lastResponse.found > chats.length : true}
            loader={
                <Placeholder>
                    <Spinner size="large" />
                </Placeholder>
            }
        >
            {chats.map((chat) => (
                <Chat chat={chat} />
            ))}
        </InfiniteScroll>
    );
};

const VKConversations = (): JSX.Element => {
    const { viewWidth } = useAdaptivity();
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    const [isLoad, setLoad] = useState(true);
    const [isNotFound, setNotFound] = useState(false);

    const [searchFilter, setSearchFilter] = useState("");
    const [searchFooter, setSearchFooter] = useState<JSX.Element | null>(null);
    const deferredSearchFilter = useDeferredValue(searchFilter);
    const [sort, setSort] = useState<
        "dateOfPublication" | "numberOfParticipants"
    >("dateOfPublication");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [viewMethod, setViewMethod] = useState<"pages" | "scroller">("pages");

    const description = (
        <>
            Работает при помощи{" «"}
            <Link target="_blank" href="https://vk.com/club215201153">
                ПоискЧата
            </Link>
            {"» "}
            (автор{" "}
            <Link target="_blank" href="https://vk.com/id378585349">
                Александр Стояк
            </Link>
            )
            <br />
            <Link target="_blank" href="https://vk.com/app51408389">
                VK Miniapp
            </Link>{" "}
            разработана командой{" «"}
            <Link target="_blank" href="https://github.com/Non-Coders">
                NonCoders
            </Link>
            {"» "}
            (при поддержке{" "}
            <Link target="_blank" href="https://vk.com/club209683412">
                RusAnonym Team
            </Link>
            )
        </>
    );

    const search = (
        <>
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
                                <Header>Сортировка по</Header>
                                <SimpleCell
                                    disabled
                                    multiline
                                    after={
                                        <Switch
                                            checked={
                                                sort === "dateOfPublication"
                                            }
                                            onChange={(): void => {
                                                setSort("dateOfPublication");
                                            }}
                                        />
                                    }
                                >
                                    Дате публикации
                                </SimpleCell>
                                <SimpleCell
                                    disabled
                                    multiline
                                    after={
                                        <Switch
                                            checked={
                                                sort === "numberOfParticipants"
                                            }
                                            onChange={(): void => {
                                                setSort("numberOfParticipants");
                                            }}
                                        />
                                    }
                                >
                                    Количеству участников
                                </SimpleCell>
                                <FormItem top="Сортировать по">
                                    <SegmentedControl
                                        value={sortOrder}
                                        options={[
                                            {
                                                label: "Возрастанию",
                                                value: "asc",
                                            },
                                            {
                                                label: "Убыванию",
                                                value: "desc",
                                            },
                                        ]}
                                        onChange={(val) => {
                                            setSortOrder(val as "asc" | "desc");
                                        }}
                                    />
                                </FormItem>
                                <FormItem top="Вывод в">
                                    <SegmentedControl
                                        value={viewMethod}
                                        options={[
                                            {
                                                label: "Страницах",
                                                value: "pages",
                                            },
                                            {
                                                label: "Ленте",
                                                value: "scroller",
                                            },
                                        ]}
                                        onChange={(val) => {
                                            setViewMethod(
                                                val as "pages" | "scroller"
                                            );
                                        }}
                                    />
                                </FormItem>
                            </Div>
                        }
                    >
                        <IconButton
                            hasActive={!isDesktop}
                            hasHover={!isDesktop}
                        >
                            <Icon24Sort />
                        </IconButton>
                    </Dropdown>
                }
            />
            {searchFooter}
        </>
    );

    const sortParams = useMemo<
        { dateOfPublication: 1 | -1 } | { numberOfParticipants: 1 | -1 }
    >(() => {
        if (sort === "dateOfPublication") {
            return {
                dateOfPublication: sortOrder === "asc" ? 1 : -1 
            };
        } else {
            return {
                numberOfParticipants: sortOrder === "asc" ? 1 : -1 
            };
        }
    }, [sort, sortOrder]);

    return (
        <>
            {!isDesktop && (
                <FixedLayout vertical="top" filled>
                    {search}
                    <Spacing />
                </FixedLayout>
            )}

            <Group
                description={description}
                style={{
                    paddingTop: isDesktop ? undefined : searchFooter ? 100 : 50,
                }}
            >
                {isDesktop && search}
                {isLoad && (
                    <Placeholder>
                        <Spinner size="large" />
                    </Placeholder>
                )}
                {isNotFound && (
                    <Placeholder>По фильтру ничего не найдено</Placeholder>
                )}
                {viewMethod === "pages" && (
                    <Pages
                        search={deferredSearchFilter}
                        sortParams={sortParams}
                        setLoad={setLoad}
                        setNotFound={setNotFound}
                        setSearchFooter={setSearchFooter}
                        isDesktop={isDesktop}
                        isLoad={isLoad}
                    />
                )}
                {viewMethod === "scroller" && (
                    <Scroller
                        search={deferredSearchFilter}
                        sortParams={sortParams}
                        setLoad={setLoad}
                        setNotFound={setNotFound}
                        setSearchFooter={setSearchFooter}
                        isDesktop={isDesktop}
                        isLoad={isLoad}
                    />
                )}
            </Group>
        </>
    );
};

export default VKConversations;

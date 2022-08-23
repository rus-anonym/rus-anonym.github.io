import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import axios from "axios";
import moment from "moment";

import {
    Avatar,
    Button,
    ButtonGroup,
    calcInitialsAvatarColor,
    Div,
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
    Spinner,
    Switch,
    useAdaptivity,
    ViewWidth,
} from "@vkontakte/vkui";
import { copyTextToClipboard } from "@vkontakte/vkjs";
import { Dropdown } from "@vkontakte/vkui/dist/unstable";
import { Icon24Sort } from "@vkontakte/icons";

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
    totalСonversation: number;
    chats: IChat[];
}

const getConversations = async (
    params?: Partial<IAPIParams>
): Promise<IAPIResponse> => {
    const response = await axios.get("https://search-for-chats-of-vk.ru/", {
        params: {
            limit: 25,
            ...params,
        },
    });

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

const VKConversations = (): JSX.Element => {
    const { viewWidth } = useAdaptivity();
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    const [isLoad, setIsLoad] = useState(true);
    const [searchFilter, setSearchFilter] = useState("");
    const deferredSearchFilter = useDeferredValue(searchFilter);
    const [sort, setSort] = useState<
        "dateOfPublication" | "numberOfParticipants"
    >("dateOfPublication");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [response, setResponse] = useState<IAPIResponse | null>();

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
        </>
    );

    const pagination = useMemo(() => {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Pagination
                    currentPage={currentPage}
                    onChange={(page): void => setCurrentPage(page)}
                    totalPages={Math.ceil((response?.found as number) / 25)}
                />
            </div>
        );
    }, [response]);

    const sortParams = useMemo<
        { dateOfPublication: 1 | -1 } | { numberOfParticipants: 1 | -1 }
    >(() => {
        if (sort === "dateOfPublication") {
            return { dateOfPublication: sortOrder === "asc" ? 1 : -1 };
        } else {
            return { numberOfParticipants: sortOrder === "asc" ? 1 : -1 };
        }
    }, [sort, sortOrder]);

    useEffect(() => {
        setIsLoad(true);

        void getConversations({
            offset: (currentPage - 1) * 25,
            title: deferredSearchFilter,
            sort: sortParams,
        }).then((res) => {
            setResponse(res);
            setIsLoad(false);
        });
    }, [currentPage, deferredSearchFilter, sortParams]);

    const content = (
        <>
            {pagination}
            {response?.chats.map((chat) => (
                <Chat chat={chat} />
            ))}
            {pagination}
        </>
    );

    return (
        <Group description={description}>
            <Search
                placeholder={"Поиск"}
                value={searchFilter}
                onChange={(event): void => {
                    setSearchFilter(event.target.value);
                    setCurrentPage(1);
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
            {isLoad ? (
                <Placeholder>
                    <Spinner size="large" />
                </Placeholder>
            ) : response?.chats.length === 0 ? (
                <Placeholder>По фильтру ничего не найдено</Placeholder>
            ) : (
                content
            )}
        </Group>
    );
};

export default VKConversations;

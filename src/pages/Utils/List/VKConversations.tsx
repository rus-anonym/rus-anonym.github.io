import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import axios from "axios";
import moment from "moment";

import {
    Avatar,
    Button,
    ButtonGroup,
    calcInitialsAvatarColor,
    Group,
    InitialsAvatar,
    Link,
    Pagination,
    Placeholder,
    RichCell,
    Search,
    Spinner,
} from "@vkontakte/vkui";

interface IChat {
    photo: null | {
        photo_50: string;
        photo_100: string;
        photo_200: string;
        is_default_photo: false;
    };
    dateOfPublication: number;
    numberOfParticipants: number;
    title: string;
    key: string;
    update: number;
}

interface IAPIParams {
    sort: {
        dateOfPublication: -1 | 1;
        numberOfParticipants: -1 | 1;
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
    const avatar =
        chat.photo === null ? (
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
        ) : (
            <Avatar size={36} src={chat.photo.photo_200} />
        );

    return (
        <RichCell
            before={avatar}
            disabled
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
                    <Button mode="primary" size="s">
                        Открыть
                    </Button>
                    <Button mode="secondary" size="s">
                        Скопировать ссылку
                    </Button>
                </ButtonGroup>
            }
        >
            {chat.title}
        </RichCell>
    );
};

const VKConversations = (): JSX.Element => {
    const [isLoad, setIsLoad] = useState(true);
    const [searchFilter, setSearchFilter] = useState("");
    const deferredSearchFilter = useDeferredValue(searchFilter);
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

    useEffect(() => {
        setIsLoad(true);
        void getConversations({
            offset: (currentPage - 1) * 25,
            title: deferredSearchFilter,
        }).then((res) => {
            setResponse(res);
            setIsLoad(false);
        });
    }, [currentPage, deferredSearchFilter]);

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
                }}
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

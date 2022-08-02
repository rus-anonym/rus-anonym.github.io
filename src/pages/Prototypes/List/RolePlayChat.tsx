import React from "react";
import { useState } from "react";

import {
    Button,
    Div,
    Group,
    InitialsAvatar,
    RichCell,
    WriteBar,
    WriteBarIcon,
} from "@vkontakte/vkui";

import moment from "moment";
import { Dropdown } from "@vkontakte/vkui/dist/unstable";

interface IUser {
    name: string;
    avatar: JSX.Element;
}

const Message = ({
    text,
    user,
    time,
}: {
    user: IUser;
    text: string;
    time: Date;
}): JSX.Element => {
    return (
        <RichCell
            multiline
            disabled
            before={user.avatar}
            text={text}
            after={moment(time).format("HH:mm:ss")}
        >
            {user.name}
        </RichCell>
    );
};

const profiles: IUser[] = [
    {
        name: "Profile I",
        avatar: (
            <InitialsAvatar size={32} gradientColor="blue">
                1
            </InitialsAvatar>
        ),
    },
    {
        name: "Profile II",
        avatar: (
            <InitialsAvatar size={32} gradientColor="red">
                2
            </InitialsAvatar>
        ),
    },
    {
        name: "Profile III",
        avatar: (
            <InitialsAvatar size={32} gradientColor="yellow">
                3
            </InitialsAvatar>
        ),
    },
];

const RolePlayChat = (): JSX.Element => {
    const [text, setText] = useState("");
    const [messages, setMessages] = useState<
        { text: string; user: IUser; time: Date }[]
    >([]);
    const [activeProfile, setActiveProfile] = useState<number>(0);
    const [isShow, setShow] = useState(false);

    return (
        <Group>
            <Group>{messages.map(Message)}</Group>
            <WriteBar
                before={
                    <Dropdown
                        shown={isShow}
                        onShownChange={setShow}
                        placement="right"
                        content={
                            <Div>
                                {profiles.map((x, i) => {
                                    return (
                                        <RichCell
                                            disabled
                                            before={x.avatar}
                                            actions={
                                                <Button
                                                    disabled={
                                                        i === activeProfile
                                                    }
                                                    onClick={(): void => {
                                                        setActiveProfile(i);
                                                        setShow(false);
                                                    }}
                                                >
                                                    {i === activeProfile
                                                        ? "Активный"
                                                        : "Выбрать"}
                                                </Button>
                                            }
                                        >
                                            {x.name}
                                        </RichCell>
                                    );
                                })}
                            </Div>
                        }
                    >
                        <WriteBarIcon aria-label="Профиль">
                            {profiles[activeProfile].avatar}
                        </WriteBarIcon>
                    </Dropdown>
                }
                after={
                    <WriteBarIcon
                        onClick={(): void => {
                            setMessages((arr) => [
                                ...arr,
                                {
                                    text,
                                    time: new Date(),
                                    user: profiles[activeProfile],
                                },
                            ]);
                            setText("");
                        }}
                        mode="send"
                        disabled={text.length === 0}
                    />
                }
                value={text}
                onChange={(event): void => {
                    setText(event.target.value);
                }}
                placeholder="Write a message..."
            />
        </Group>
    );
};

export default RolePlayChat;

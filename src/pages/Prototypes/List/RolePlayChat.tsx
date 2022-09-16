import React, { useEffect } from "react";
import { useState } from "react";

import {
    Avatar,
    Button,
    ButtonGroup,
    Div,
    FixedLayout,
    Group,
    InitialsAvatar,
    RichCell,
    Spacing,
    WriteBar,
    WriteBarIcon,
} from "@vkontakte/vkui";

import moment from "moment";
import { Dropdown } from "@vkontakte/vkui/dist/unstable";
import router from "../../../TS/store/router";
import { Icon24DeleteOutline } from "@vkontakte/icons";
import { observer } from "mobx-react";
import session from "../../../TS/store/session";

const Message = ({
    text,
    user,
    time,
}: {
    user: IPrototypesRpChatProfile;
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

interface IPrototypesRpChatProfile {
    name: string;
    avatar: JSX.Element;
}

const RolePlayChat = (): JSX.Element => {
    const [text, setText] = useState("");
    const [messages, setMessages] = useState<
        { text: string; user: IPrototypesRpChatProfile; time: Date }[]
    >([]);
    const [activeProfile, setActiveProfile] = useState<number>(0);
    const [isShow, setShow] = useState(false);
    const [profiles, setProfiles] = useState<IPrototypesRpChatProfile[]>([
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
    ]);

    useEffect(() => {
        session.events.on("prototypes.rpchat.addUser", (user) => {
            console.log(user);
            if (user.type === "custom") {
                setProfiles([
                    ...profiles,
                    {
                        name: user.name,
                        avatar: <Avatar size={32} src={user.avatar} />,
                    },
                ]);
            } else {
                setProfiles([
                    ...profiles,
                    {
                        name: user.name,
                        avatar: (
                            <InitialsAvatar
                                size={32}
                                gradientColor={user.avatar}
                            >
                                {user.name
                                    .split(" ")
                                    .slice(0, 2)
                                    .map((x) => x.split("")[0])
                                    .join("")}
                            </InitialsAvatar>
                        ),
                    },
                ]);
            }
        });

        return () => {
            session.events.removeAllListeners("prototypes.rpchat.addUser");
        };
    }, []);

    return (
        <FixedLayout vertical="bottom" filled>
            <Group mode="plain" style={{
                height: "100vh" 
            }} />
            <Group mode="plain">{messages.map(Message)}</Group>
            <WriteBar
                before={
                    <Dropdown
                        shown={isShow}
                        content={
                            <Div>
                                {profiles.map((x, i) => {
                                    return (
                                        <RichCell
                                            disabled
                                            before={x.avatar}
                                            actions={
                                                <ButtonGroup mode="horizontal">
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
                                                    <Button
                                                        mode="destructive"
                                                        disabled={
                                                            profiles.length ===
                                                            1
                                                        }
                                                        onClick={(): void => {
                                                            profiles.splice(
                                                                i,
                                                                1
                                                            );
                                                            setActiveProfile(0);
                                                        }}
                                                    >
                                                        <Icon24DeleteOutline />
                                                    </Button>
                                                </ButtonGroup>
                                            }
                                        >
                                            {x.name}
                                        </RichCell>
                                    );
                                })}
                                <Spacing />
                                {profiles.length < 5 && (
                                    <Button
                                        stretched
                                        onClick={(): void => {
                                            setShow(false);
                                            const profileLength =
                                                profiles.length;
                                            router.activeModal =
                                                "prototypes-rpchat-createProfile";
                                            router.events.once(
                                                "onModalClosed",
                                                () => {
                                                    if (
                                                        profileLength !==
                                                        profiles.length
                                                    ) {
                                                        setActiveProfile(
                                                            profiles.length - 1
                                                        );
                                                    }
                                                }
                                            );
                                        }}
                                    >
                                        Create user
                                    </Button>
                                )}
                            </Div>
                        }
                    >
                        <WriteBarIcon
                            aria-label="Профиль"
                            onClick={(): void => setShow(!isShow)}
                        >
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
                onKeyDown={(event): void => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        setMessages((arr) => [
                            ...arr,
                            {
                                text,
                                time: new Date(),
                                user: profiles[activeProfile],
                            },
                        ]);
                        setText("");
                    }
                }}
                placeholder="Write a message..."
            />
        </FixedLayout>
    );
};

export default observer(RolePlayChat);

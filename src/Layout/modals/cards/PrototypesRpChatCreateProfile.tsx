import React, { useState } from "react";

import {
    ModalCard,
    Button,
    FormLayout,
    FormItem,
    Input,
    Radio,
    File,
    Avatar,
    Spacing,
    Div,
} from "@vkontakte/vkui";

import { observer } from "mobx-react";

import { Icon24Camera } from "@vkontakte/icons";
import router from "../../../TS/store/router";
import session from "../../../TS/store/session";
import { InitialsAvatarTextGradients } from "@vkontakte/vkui/dist/components/Avatar/Avatar";

const PrototypesRpChatCreateProfile = ({ id }: { id: string }): JSX.Element => {
    const [name, setName] = useState("");
    const [isNicknameMax, setIsNicknameMax] = useState(false);
    const [avatarColor, setAvatarColor] =
        useState<InitialsAvatarTextGradients>("red");

    const [customAvatarSrc, setCustomAvatarSrc] = useState<string>();

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.value.length > 20) {
            setIsNicknameMax(true);
            return;
        } else {
            setIsNicknameMax(false);
            setName(event.target.value);
        }
    };

    const InitialsAvatarList = (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
            }}
        >
            <Div>
                <Radio
                    name="radio"
                    defaultChecked
                    onClick={(): void => {
                        setAvatarColor("red");
                    }}
                >
                    <Avatar size={32} gradientColor="red" />
                </Radio>
            </Div>

            {(
                [
                    "orange",
                    "yellow",
                    "green",
                    "l-blue",
                    "blue",
                    "violet",
                ] as const
            ).map((color) => {
                return (
                    <Div>
                        <Radio
                            name="radio"
                            onClick={(): void => {
                                setAvatarColor(color);
                            }}
                        >
                            <Avatar size={32} gradientColor={color} />
                        </Radio>
                    </Div>
                );
            })}
        </div>
    );

    return (
        <ModalCard
            id={id}
            header="Создание профиля"
            actions={
                <Button
                    size="l"
                    mode="primary"
                    disabled={name === "" && name.length <= 20}
                    onClick={(): void => {
                        session.events.emit("prototypes.rpchat.addUser", {
                            type: customAvatarSrc ? "custom" : "default",
                            name,
                            avatar: customAvatarSrc || avatarColor,
                        });

                        router.activeModal = null;
                    }}
                >
                    Добавить
                </Button>
            }
        >
            <FormLayout>
                <FormItem
                    top="Имя"
                    status={isNicknameMax ? "error" : undefined}
                    bottom={
                        isNicknameMax
                            ? "Максимальная длина ника 20 символов"
                            : undefined
                    }
                >
                    <Input type="text" value={name} onChange={onChangeName} />
                </FormItem>
                <FormItem top="Аватар">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        {customAvatarSrc !== undefined && (
                            <Avatar size={72} src={customAvatarSrc} />
                        )}
                        <Spacing />
                        {customAvatarSrc !== undefined ? (
                            <Button
                                onClick={(): void =>
                                    setCustomAvatarSrc(undefined)
                                }
                            >
                                Выбрать из набора
                            </Button>
                        ) : (
                            InitialsAvatarList
                        )}
                        {customAvatarSrc !== undefined && <Spacing />}
                        {customAvatarSrc === undefined && (
                            <File
                                stretched
                                size="l"
                                before={<Icon24Camera role="presentation" />}
                                accept=".jpg, .jpeg, .png"
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ): void => {
                                    if (
                                        !event.target.files ||
                                        event.target.files.length === 0
                                    ) {
                                        return;
                                    }

                                    const url = URL.createObjectURL(
                                        event.target.files[0]
                                    );

                                    setCustomAvatarSrc(url);
                                }}
                            >
                                Загрузить свою
                            </File>
                        )}
                    </div>
                </FormItem>
            </FormLayout>
        </ModalCard>
    );
};

export default observer(PrototypesRpChatCreateProfile);

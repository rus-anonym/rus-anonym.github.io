import React, { useState } from "react";

import {
    ModalCard,
    Button,
    FormLayout,
    FormItem,
    Input,
    RadioGroup,
    Radio,
    InitialsAvatar,
    File,
    Avatar,
    Spacing,
} from "@vkontakte/vkui";

import router from "../../../TS/store/router";
import { observer } from "mobx-react";

import tempStorage from "../../../TS/store/tempStorage";
import { InitialsAvatarTextGradients } from "@vkontakte/vkui/dist/components/InitialsAvatar/InitialsAvatar";
import { Icon24Camera } from "@vkontakte/icons";

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
        <>
            <RadioGroup mode="horizontal">
                <Radio
                    name="radio"
                    defaultChecked
                    onClick={(): void => {
                        setAvatarColor("red");
                    }}
                >
                    <InitialsAvatar size={32} gradientColor="red" />
                </Radio>
                {(["pink", "orange", "yellow"] as const).map((color) => {
                    return (
                        <Radio
                            name="radio"
                            onClick={(): void => {
                                setAvatarColor(color);
                            }}
                        >
                            <InitialsAvatar size={32} gradientColor={color} />
                        </Radio>
                    );
                })}
            </RadioGroup>
            <RadioGroup mode="horizontal">
                {(["green", "l-blue", "blue", "violet"] as const).map(
                    (color) => {
                        return (
                            <Radio
                                name="radio"
                                onClick={(): void => {
                                    setAvatarColor(color);
                                }}
                            >
                                <InitialsAvatar
                                    size={32}
                                    gradientColor={color}
                                />
                            </Radio>
                        );
                    }
                )}
            </RadioGroup>
        </>
    );

    return (
        <ModalCard
            id={id}
            onClose={(): void => {
                router.activeModal = null;
            }}
            header="Создание профиля"
            actions={
                <Button
                    size="l"
                    mode="primary"
                    disabled={name === "" && name.length <= 20}
                    onClick={(): void => {
                        router.activeModal = null;
                        tempStorage.prototypes.rpchat.profiles.push({
                            name,
                            avatar:
                                customAvatarSrc === undefined ? (
                                    <InitialsAvatar
                                        size={32}
                                        gradientColor={avatarColor}
                                    >
                                        {name
                                            .split(" ")
                                            .slice(0, 2)
                                            .map((x) => x.split("")[0])
                                            .join("")}
                                    </InitialsAvatar>
                                ) : (
                                    <Avatar size={32} src={customAvatarSrc} />
                                ),
                        });
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

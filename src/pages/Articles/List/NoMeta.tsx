import React from "react";

import {
    Group,
    Header,
    InfoRow,
    InitialsAvatar,
    Link,
    Placeholder,
    RichCell,
    SimpleCell,
    Title,
    Spacing,
    Headline,
    Div,
    Button,
} from "@vkontakte/vkui";
import { useState } from "react";
import { Icon28BrainOutline } from "@vkontakte/icons";

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
    time: string;
}): JSX.Element => {
    return (
        <RichCell
            multiline
            hasActive={false}
            hasHover={false}
            before={user.avatar}
            text={text}
            after={time}
        >
            {user.name}
        </RichCell>
    );
};

const users: {
    you: IUser;
    colleague: IUser;
} = {
    you: {
        name: "Вы",
        avatar: (
            <InitialsAvatar size={32} gradientColor="red">
                Т
            </InitialsAvatar>
        ),
    },
    colleague: {
        name: "Ваш коллега",
        avatar: (
            <InitialsAvatar size={32} gradientColor="green">
                Б
            </InitialsAvatar>
        ),
    },
} as const;

const NoMeta = (): JSX.Element => {
    const description = (
        <>
            Inspired by{" "}
            <Link target="_blank" href="https://nometa.xyz/">
                nometa.xyz
            </Link>{" "}
            (автор{" "}
            <Link target="_blank" href="https://github.com/leshark">
                leshark
            </Link>
            )
        </>
    );

    const philosophy = (
        <Div>
            <Spacing />
            <Headline weight="regular">
                Мета-вопрос — это вопрос, который подразумевает другие вопросы,
                например:
            </Headline>
            <Div>
                <Message
                    text="Можно ли задать вопрос?"
                    user={users.you}
                    time=""
                />
                <Message
                    text="Есть, кто разбирается в N?"
                    user={users.you}
                    time=""
                />
                <Message
                    text="А кто-нибудь тут проходил курс от Яндекса на курсере? Есть вопрос по анализу текста…"
                    user={users.you}
                    time=""
                />
                <Message
                    text="Ребят, есть вопросик по React"
                    user={users.you}
                    time=""
                />
            </Div>
            <Headline weight="regular">
                — «Понятно, но что плохого в этих вопросах и почему мне не стоит
                их задавать?»
            </Headline>
            <Spacing size={20} />
            <Headline weight="regular">
                — Они тратят время! И ваше, и других людей, которые пытаются вам
                помочь! Вы стараетесь быть вежливым, не переходя сразу к своей
                проблеме, как люди делают при личной встрече. Но чат — это
                совсем другое. Люди печатают намного медленнее, чем говорят.
                Вместо проявления вежливости, вы заставляете другого человека
                ждать, пока сформулируете вопрос, что приводит к потере
                производительности.
            </Headline>
            <Spacing size={20} />
            <Headline weight="regular">
                То же самое относится к таким сообщениям: «Здравствуйте»,
                «Привет. Ты здесь?», «Есть минутка?», «Пинг». Просто задавайте
                вопрос!
            </Headline>
            <Spacing size={20} />
            <Headline weight="regular">
                К тому же, когда вы задаете вопрос сразу, открывается
                возможность асинхронного взаимодействия. Если собеседник
                недоступен, а вы уйдёте до того как он вернется, он по-прежнему
                может ответить на вопрос, вместо того, чтобы смотреть на ваш
                «Привет» и думать, что же случилось.
            </Headline>
            <Spacing size={20} />
            <Button
                size="m"
                onClick={(): void => setShowPhilosophy(false)}
                stretched
                appearance="neutral"
            >
                Скрыть философию
            </Button>
        </Div>
    );

    const [isShowPhilosophy, setShowPhilosophy] = useState(false);

    return (
        <Group description={description}>
            <Div>
                <Title level="1" style={{
                    textAlign: "center" 
                }}>
                    Пожалуйста, не задавайте мета-вопросов в чате!
                </Title>
            </Div>

            <Group
                header={
                    <Header style={{
                        justifyContent: "center" 
                    }}>Плохо:</Header>
                }
            >
                <Message text="Привет" user={users.you} time="12:32:12" />
                <Message text="Привет" user={users.colleague} time="12:32:15" />
                <Placeholder header="*Ждёт, пока Вы формулируете вопрос*" />
                <Message
                    text="Я сейчас работаю над тем-то и тем-то и хочу сделать то-то..."
                    user={users.you}
                    time="12:34:01"
                />
                <Message
                    text="Ага, можешь сделать так-то..."
                    user={users.colleague}
                    time="12:35:21"
                />
                <SimpleCell hasActive={false}
                    hasHover={false}>
                    <InfoRow header="Потрачено">3 минуты и 9 секунд</InfoRow>
                </SimpleCell>
            </Group>
            <Group
                header={
                    <Header style={{
                        justifyContent: "center" 
                    }}>
                        Хорошо:
                    </Header>
                }
            >
                <Message
                    text="Привет. Я сейчас работаю над тем-то и тем-то и хочу сделать то-то..."
                    user={users.you}
                    time="12:32:12"
                />
                <Message
                    text="Ага, можешь сделать так-то..."
                    user={users.colleague}
                    time="12:33:32"
                />
                <SimpleCell hasActive={false}
                    hasHover={false}>
                    <InfoRow header="Потрачено">1 минута и 20 секунд</InfoRow>
                </SimpleCell>
            </Group>

            {isShowPhilosophy ? (
                philosophy
            ) : (
                <Placeholder
                    style={{
                        height: "220px" 
                    }}
                    icon={<Icon28BrainOutline height={72} width={72} />}
                    header="Философия статьи"
                    action={
                        <Button
                            size="m"
                            onClick={(): void => setShowPhilosophy(true)}
                        >
                            Показать философию
                        </Button>
                    }
                />
            )}
        </Group>
    );
};

export default NoMeta;

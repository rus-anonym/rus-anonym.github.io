import React from "react";
import {
    Group, Placeholder, InitialsAvatar, RichCell 
} from "@vkontakte/vkui";

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
    daun: IUser;
    ruslan: IUser;
    rus_anonym: IUser;
} = {
    daun: {
        name: "Давидов aka конч",
        avatar: (
            <InitialsAvatar size={32} gradientColor="blue">
                Д
            </InitialsAvatar>
        ),
    },
    ruslan: {
        name: "Руслан",
        avatar: (
            <InitialsAvatar size={32} gradientColor="green">
                Р
            </InitialsAvatar>
        ),
    },
    rus_anonym: {
        name: "RusAnonym",
        avatar: (
            <InitialsAvatar size={32} gradientColor="pink">
                RA
            </InitialsAvatar>
        ),
    },
} as const;

const TextPart = (): JSX.Element => {
    return (
        <Group>
            <Message user={users.ruslan} text="Как там дела?" time="11:48" />
            <Message
                user={users.ruslan}
                text="Тебя приняли на пересдачу?"
                time="11:48"
            />
            <Message
                user={users.daun}
                text="Не знаю сижу жду когда елистратова придёт"
                time="11:48"
            />
            <Message
                user={users.ruslan}
                text="А у вас щас пересдача?"
                time="11:48"
            />
            <Message
                user={users.ruslan}
                text="Уже кто-то сидит пересдает?"
                time="11:48"
            />
            <Message user={users.daun} text="Да Волков" time="11:48" />
            <Message user={users.ruslan} text="Окей" time="11:48" />
            <Message
                user={users.ruslan}
                text="Узнай сколько у тебя времени"
                time="11:49"
            />
            <Message user={users.daun} text="Ещё 2 пары" time="11:49" />
            <Message user={users.ruslan} text="Эта и следующая?" time="11:50" />
            <Message user={users.daun} text="Наверное" time="11:50" />
            <Message
                user={users.ruslan}
                text="Когда узнаешь можно тебе или нет участвовать в пересдаче напиши мне"
                time="11:53"
            />
            <Message user={users.daun} text="Ок" time="11:54" />
            <Message
                user={users.ruslan}
                text="И ещё что надо делать, условия задания"
                time="11:54"
            />
            <Message user={users.daun} text="Ок" time="11:54" />
            <Message user={users.daun} text="Билет 28" time="12:40" />
            <Message user={users.ruslan} text="И зачем?" time="12:42" />
            <Message user={users.daun} text="Помогите мне уёбки" time="12:42" />
            <Message
                user={users.ruslan}
                text="А зачем ты просишь уёбков тебе помогать?"
                time="12:44"
            />
            <Message
                user={users.daun}
                text="ПИДАРАСЫ БЛЯТЬ ВЫ МОЖЕТЕ МНЕ ПОМОЧЬ СУКА ЛЮБИТЕЛИ ПОСМЕЯТЬСЯ"
                time="12:45"
            />
            <Message
                user={users.daun}
                text="извините пожалуйста правда извините просто пожалуйста помогите умоляю"
                time="12:50"
            />
            <Message
                user={users.daun}
                text="Скиньте пока скрин по Erwin для вида чтобы выглядело как будто мне осталось генерацию сделать"
                time="13:38"
            />
            <Message
                user={users.daun}
                text="Много ещё вам там делать?"
                time="13:54"
            />
            <Message user={users.daun} text="Ау" time="13:54" />
            <Message user={users.ruslan} text="Не" time="13:55" />
            <Message
                user={users.daun}
                text="Сколько по времени вам ещё нужно?"
                time="13:55"
            />
            <Message user={users.ruslan} text="Ну минут 40" time="13:57" />
            <Message
                user={users.ruslan}
                text="На физре плюс делать"
                time="13:57"
            />
            <Message
                user={users.ruslan}
                text="Тебе через сколько делать?"
                time="13:57"
            />
            <Message user={users.ruslan} text="Сдавать то есть" time="13:57" />
            <Message user={users.ruslan} text="Тебя торопят?" time="13:57" />
            <Message
                user={users.daun}
                text="Нет просто если в кабинете буду только я и он то лучше поторипитесь"
                time="13:58"
            />
            <Message
                user={users.daun}
                text="Скорее всего в течении этой пары она у меня последняя"
                time="13:58"
            />
            <Message user={users.ruslan} text="Тогда норм" time="13:58" />
            <Placeholder>Coming soon...</Placeholder>
        </Group>
    );
};

const DavidovRetake = (): JSX.Element => {
    return <TextPart />;
};

export default DavidovRetake;

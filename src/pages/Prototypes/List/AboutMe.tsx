import React from "react";
import {
    Icon28PlaceOutline,
    Icon28CalendarOutline,
    Icon28PhoneOutline,
    Icon28MailOutline,
    Icon20MoneyCircleOutline,
    Icon20GlobeOutline,
    Icon20NotebookCheckOutline,
    Icon20CalendarOutline,
    Icon20GovernmentOutline,
    Icon20HieroglyphCharacterOutline,
} from "@vkontakte/icons";
import {
    Group,
    RichCell,
    Avatar,
    Cell,
    Div,
    MiniInfoCell,
} from "@vkontakte/vkui";

import moment from "moment";

const ageCount = moment().diff(
    moment("05.04.2004", "DD.MM.YYYY"),
    "years",
    false
);

const AboutMe = (): JSX.Element => {
    return (
        <Group>
            <RichCell
                disabled
                before={
                    <Avatar
                        size={72}
                        src={
                            "https://sun9-83.userapi.com/impf/TYjt3AVJynERqPP6bTXrXrvDmRnbiVtT5lyScQ/CV-30MQ4fZ0.jpg?size=1000x1001&quality=95&sign=4c7438e1d84a19efe46969c45098614f&type=album"
                        }
                    />
                }
                caption="Техник по защите информации"
            >
                Семин Александр Андреевич
            </RichCell>
            <Cell
                disabled
                before={<Icon28PlaceOutline />}
                description="Москва, Россия"
                indicator="Переезд невозможен"
            >
                Место проживания
            </Cell>
            <Cell
                description="05.04.2004"
                disabled
                before={<Icon28CalendarOutline />}
                indicator={`${ageCount} лет`}
            >
                Дата рождения
            </Cell>
            <Cell
                description="+7 909 623-05-55"
                disabled
                before={<Icon28PhoneOutline />}
            >
                Номер телефона
            </Cell>
            <Cell
                description="alexandrsemin2033@gmail.com"
                disabled
                before={<Icon28MailOutline />}
            >
                E-Mail
            </Cell>

            <Div>
                <MiniInfoCell before={<Icon20MoneyCircleOutline />}>
                    Желаемая зарплата: Не указана
                </MiniInfoCell>
                <MiniInfoCell before={<Icon20GlobeOutline />}>
                    Готовность к командировкам: Нет
                </MiniInfoCell>
                <MiniInfoCell before={<Icon20NotebookCheckOutline />}>
                    Занятость: Стажировка
                </MiniInfoCell>
                <MiniInfoCell before={<Icon20CalendarOutline />}>
                    График работы: Гибкий график
                </MiniInfoCell>
                <MiniInfoCell before={<Icon20GovernmentOutline />}>
                    Гражданство: Россия
                </MiniInfoCell>
                <MiniInfoCell before={<Icon20HieroglyphCharacterOutline />}>
                    Языки: Русский (родной), Английский (A2)
                </MiniInfoCell>
            </Div>
        </Group>
    );
};

export default AboutMe;

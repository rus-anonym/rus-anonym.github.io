import React, { useMemo } from "react";
import {
    Avatar,
    Caption,
    Group,
    Header,
    Headline,
    RichCell,
} from "@vkontakte/vkui";

import MeAvatar from "../../../PNG/articles/MyVKPermanentBan/deleted.png";
import moment from "moment";

interface IMessageParams {
    avatar: string;
    sender: string;
    text: string;
    date: Date;
}

const Message = ({ avatar, sender, text, date }: IMessageParams) => {
    const splittedText = useMemo(() => text.split("\n"), [text]);

    return (
        <RichCell
            before={<Avatar size={36} src={avatar} />}
            text={splittedText.map((x, index) => {
                if (index === 0 || index === splittedText.length - 1) {
                    return x;
                } else {
                    return <p>{x}</p>;
                }
            })}
            bottom={
                <Caption
                    style={{
                        color: "#808080",
                    }}
                >
                    {moment(date).format("DD MMM YYYY, HH:mm")}
                </Caption>
            }
            multiline
            hasActive={false}
            hasHover={false}
        >
            <Headline weight="1">{sender}</Headline>
        </RichCell>
    );
};

interface IMessage {
    date: Date;
    text: string;
    sender: "me" | "agent214" | "agent241" | "agent379" | "agent612";
}

const avatars: Record<IMessage["sender"], string> = {
    me: MeAvatar,
    agent214:
        "https://sun1-21.userapi.com/6VmkPxev3iu2w9k3jUVKcYkd-uGUGiQ5Y78naw/acHjI5hl4ck.png",
    agent241:
        "https://sun1-19.userapi.com/j8OJcKCdUPXaLx6IBoxpLYrBDft5-IsLmhygzw/8dHu61fqiTU.png",
    agent379:
        "https://sun1-21.userapi.com/FLIoO-t0BTMGxP_dpphhS_zg33y8x7JrLuXG8Q/ECstvvdQ1Z8.png",
    agent612:
        "https://sun1-27.userapi.com/3MfK2wXd1N4jWjvvLIXpZgFXv1M-Uzki-JRBjA/9Ck8wqMO6eo.png",
};

const senders: Record<IMessage["sender"], string> = {
    me: "Александр Сёмин",
    agent214: "Агент Поддержки #214",
    agent241: "Агент Поддержки #241",
    agent379: "Агент Поддержки #379",
    agent612: "Агент Поддержки #612",
};

const messages: IMessage[] = [
    {
        date: new Date("2021-11-06T20:40:00.000"),
        sender: "me",
        text: `Здравствуйте!
Обращаюсь к Вам по поводу проблемки с моей страницей. Дело в том, что моя страница недавно была заблокирована за «подозрительную активность», однако я не знаю, в чем эта подозрительная активность проявлялась. Возможно, система внесла меня в бан потому, что для доступа к ВКонтакте я использовал свой личный VPN-сервер, и заходил с одинакового IP-адреса, но я не знаю, может ли это послужить причиной для блокировки страницы.
Могу ли я узнать конкретную причину блокировки моей страницы?

Кроме того, есть ли у меня возможность снять блокировку страницы?
Я могу привести любые доказательства того, что эта страница является моей, начиная с IP-адресов, с которых я заходил на аккаунт, заканчивая квитанциями из банков о всех транзакциях, которые я совершал для ВКонтакте, а таковых много, поскольку я покупал для себя и в подарок много стикерпаков.

Спасибо, надеюсь на Ваш скорейший ответ!`,
    },
    {
        date: new Date("2021-11-07T22:29:00.000"),
        sender: "agent241",
        text: `Здравствуйте, Александр!

Мы предполагаем, что аккаунт велся совсем не по правилам нашей платформы. Пожалуйста, уточните, для какой цели вы регистрировали так много пустых сообществ на уникальные адреса?

Всегда с вами,
Поддержка ВКонтакте`
    },
    {
        date: new Date("2021-11-07T23:41:00.000"),
        sender: "me",
        text: `Я создавал много сообществ для того, чтобы присваивать своим группам в будущем уникальный идентификатор, а иногда просто чтобы позлить друзей тем, что их предыдущий домен кто-то занял. Они будут использоваться для моей команды и будущих проектов.
Если это нарушает правила платформы – я этого не знал, однако был уверен, что создание сообществ или сбор уникальных адресов не является нарушением.`
    },
    {
        date: new Date("2021-11-08T19:49:00.000"),
        sender: "agent612",
        text: `То есть, по сути, занимались киберсквоттингом — недобросовестным использованием коротких адресов.
Сожалею, но разблокировать профиль не получится.`
    },
    {
        date: new Date("2021-11-08T21:39:00.000"),
        sender: "me",
        text: `Нет, я не занимаюсь киберсквоттингом. Я отдавал людям их домен бесплатно, если они просили.
К тому же, начнём с того, что про киберсквоттинг в правилах ничего не говорится, соответственно, «киберсквоттинг» – есть некое негласное правило, которое Вы, похоже, придумали. Не находите это странной причиной?
Вдобавок к блокировке Вы обрекаете на утерю домены моих друзей, кои они сами нередко давали мне на хранение, ведь когда пользователь обращается в техническую поддержку ВКонтакте, ему сообщают, что техническая поддержка не переносит домены на другие аккаунты.`
    },
    {
        date: new Date("2021-11-08T22:56:00.000"),
        sender: "agent612",
        text: `Мы не знаем, делали ли вы это за деньги или бесплатно, но массовое создание сообществ с привязыванием адресов — это недобросовестное использование платформы.

Даже если размышлять логически: занять домен, чтобы его никто не смог использовать в последующем, — уже нельзя назвать чем-то хорошим или позволительным. Если утрировать, то это сравнимо с «хорошими» местами в кинотеатре, которые вы намеренно занимаете, чтобы другие люди не могли воспользоваться ими. Согласитесь, это не какая-то скрытая истина, а общедоступные правила правильного поведения, которые применимы и к нашей площадке.

Аккаунт заблокирован, опираясь на 8.6 vk.com/terms`
    },
    {
        date: new Date("2021-11-08T23:54:00.000"),
        sender: "me",
        text: `Если Вы не знаете, тогда почему Вы утверждаете, что я занимаюсь такими нарушениями? Как же презумпция невиновности?
Разве обычный пользователь не может создавать и хранить домены своих друзей, большинство из которых, к слову, они добровольно отдавали мне на хранение, а некоторые я уже вернул их владельцам, ведь они сами об этом попросили.

Вы, помимо этого, не ответили насчёт несуществующего правила о «киберсквоттинге», а лишь указали на пункт «8.6», что предполагает нарушение, которого я не совершал.

А если ставить мои действия в пример с кинотеатром, – если мы можем заранее занять «хорошие» места, их так или иначе нужно будет освободить для человека, который приобрёл билет на эти места.
Пока полноправный владелец места в нём не нуждается, использование его места никак нельзя назвать «злым» умыслом.`
    },
    {
        date: new Date("2021-11-09T01:04:00.000"),
        sender: "agent612",
        text: "В правилах не укажут все возможные нарушения, за которые может пострадать профиль человека. Версия, что вы забронировали добрую сотню-полторы доменных имен для друзей, если честно, звучит неправдоподобно. Занять один – пять коротких адресов, например, — простительно, ещё можно понять. Однако намеренно использовать сразу несколько десятков доменов — увы, перебор, который мы считаем непозволительным."
    },
    {
        date: new Date("2021-11-09T16:15:00.000"),
        sender: "me",
        text: `В таком случае, Вы действительно считаете, что справедливо выдавать высшую меру наказания за неявное нарушение, которое не прописано в правилах прямым текстом, а лишь косвенно выявляется в связи с правилом 8.6?

Пользователь, изучивший правила платформы, может понятия не иметь, что это считается нарушением, и он может получить за это блокировку аккаунта навечно.

Если модерация ВКонтакте на полном серьёзе выносит подобные приговоры на столь зыбких, в плане описания в правилах, основаниях, считая это справедливым решением, – им следует переосмыслить свою политику.`
    },
    {
        date: new Date("2021-11-10T09:18:00.000"),
        sender: "agent214",
        text: `Приветствую!

Благодарю за ожидание.

Александр, эта ситуация для нас прозрачна. Ошибки в блокировке не было. К тому же это не первое нарушение для вас — разблокировать профиль не получится.
Пользователь, изучивший правила платформы, может понятия не иметь, что это считается нарушением, и он может получить за это блокировку аккаунта навечно.
Всё же не стоит искать лазейки в правилах. Пользователь, который не занимается какими-либо массовыми действиями, не рискует столкнуться с такой блокировкой.

В реальной жизни это работает так же — вас вряд ли накажут за минутное опоздание на работу. Однако опоздание на 500 минут уже обратит на себя внимание.

Всегда ваша,
Команда Поддержки ВКонтакте`
    },
    {
        date: new Date("2021-11-14T03:47:00.000"),
        sender: "me",
        text: `Раз ситуация прозрачна для Вас, не могли бы Вы посвятить и меня в курс дела – почему мне была выдана высшая мера наказания за правило, существующее лишь косвенно?
Если говорить о предыдущей блокировке моего аккаунта – мне так и не сообщили конкретную причину той блокировки, и хотелось бы наконец узнать эту причину.

Как раз от Вас наиболее употребимой «лазейкой в правилах» является вынесение приговора за опосредованное нарушение правил, не прописанных прямо в https://vk.com/terms. Если эти, как Вы их назвали «массовые действия» противоречили бы правилам ВКонтакте, я бы не стал их совершать.
В настоящем перечне правил, как и в законодательстве, не должно быть подобных «лазеек», при которых правила могут придумываться администрацией на ходу, чтобы найти основание для блокировки, причём не простой блокировки на ограниченный срок, – а высшей её меры.

Учитывая, что правило косвенное, не следовало ли, как минимум, установить блокировку на временной основе? Скажем, блокировка на месяц, полгода, год.
Конечно, даже так блокировка за не непосредственное нарушение была бы несправедливой, однако самое строгое наказание в такой ситуации кажется мне совершенно несуразным.

Также у меня возник ещё один вопрос:
Почему я не мог оставить в этом вопросе комментарий на протяжении практически четырех дней? Неужели это Вы временно ограничили мне доступ к публикации новых комментариев?`
    },
    {
        date: new Date("2021-11-15T09:35:00.000"),
        sender: "agent379",
        text: `Приветствуем!

Мы не можем предоставлять детали, так как это внутренняя информация, увы. Мы никогда не раскрываем подробностей, чтобы избежать злоупотреблений. Но основания для блокировки были вполне достаточными.

All day, all night
Команда Поддержки ВКонтакте 🍂`
    }
];

const TSVK = () => {
    return (
        <>
            {messages.map((message) => {
                return (
                    <Message
                        avatar={avatars[message.sender]}
                        sender={senders[message.sender]}
                        text={message.text}
                        date={message.date}
                    />
                );
            })}
        </>
    );
};

const MyVKPermanentBan = () => {
    return (
        <Group>
            <Group
                header={
                    <Header>
                        Ну здесь позже будет предистория, но пока что тут ничего
                        нет.
                    </Header>
                }
                mode="plain"
            />
            <Group header={<Header>Переписка с ТПВК</Header>} mode="plain">
                <TSVK />
            </Group>
        </Group>
    );
};

export default MyVKPermanentBan;

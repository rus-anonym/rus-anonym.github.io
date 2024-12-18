import { Icon28BrainOutline } from "@vkontakte/icons";
import {
  Avatar,
  Button,
  Div,
  Group,
  Header,
  Headline,
  InfoRow,
  Link,
  Placeholder,
  RichCell,
  SimpleCell,
  Spacing,
  Title,
} from "@vkontakte/vkui";
import moment from "moment";
import { useMemo, useState } from "react";

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
    <RichCell multiline before={user.avatar} subtitle={text} after={time}>
      {user.name}
    </RichCell>
  );
};

const users: {
  you: IUser;
  brother: IUser;
} = {
  you: {
    name: "Ты",
    avatar: (
      <Avatar size={32} gradientColor="red" initials="Т">
        Т
      </Avatar>
    ),
  },
  brother: {
    name: "Братуха",
    avatar: <Avatar size={32} gradientColor="green" initials="Б" />,
  },
} as const;

const EbatMeta = (): JSX.Element => {
  const now = useMemo(() => Date.now(), []);

  const description = (
    <>
      Inspired by{" "}
      <Link target="_blank" href="https://ebatmeta.xyz/">
        ebatmeta.xyz
      </Link>{" "}
      (автор{" "}
      <Link target="_blank" href="https://github.com/eolme">
        eolme
      </Link>
      )
    </>
  );

  const philosophy = (
    <Div>
      <Spacing />
      <Headline weight="2" useAccentWeight>
        Хуевый вопрос — это вопрос, который подразумевает ебать другие вопросы:
      </Headline>
      <Div>
        <Message
          text="Можно ли задать ебанутый вопрос?"
          user={users.you}
          time=""
        />
        <Message text="Пиздец, кто разбирается в N?" user={users.you} time="" />
        <Message
          text="А кто-нибудь тут проходил ебаный курс от Яндекса на их залупе? Есть что обкашлять…"
          user={users.you}
          time=""
        />
        <Message
          text="Парни, есть вопросик по ебучему React"
          user={users.you}
          time=""
        />
      </Div>
      <Headline weight="2" useAccentWeight>
        — «Ясен хуй, но что ебаного в этих вопросах и почему мне блять их не
        задавать?»
      </Headline>
      <Spacing size={20} />
      <Headline weight="2" useAccentWeight>
        — Блять, они тратят время! И твое, и других челов, которые пытаются тебя
        нахуй послать! Ты стараешься быть ровным, не переходя сразу на рамсы, но
        ебать люди так делают выходя поговорить. Но чат — это нахуй другое. Челы
        печатают пиздец медленнее, чем кукарекают. Вместо пиздатой вежливости,
        ты заставляешь другого чела ждать, пока формулируешь залупный вопрос,
        что приводит к ебаному ступору.
      </Headline>
      <Spacing size={20} />
      <Headline weight="2" useAccentWeight>
        То же самое относится к такой хуйне: «Здравия желаю», «Привет. Че по
        чем?», «Пошли выйдем?», «Бля». Просто задай вопрос!
      </Headline>
      <Spacing size={20} />
      <Headline weight="2" useAccentWeight>
        К тому же, когда ты задаешь вопрос сразу не выебываясь, братки могут
        метнуться порешать другие вопросики. Если пацан не але, а ты метнешься
        до того как он вернется, он по-прежнему может обкашлять вопрос, вместо
        того, чтобы смотреть на твой «Блять» и думать, что же нахуй случилось.
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
        <Title
          level="1"
          style={{
            textAlign: "center",
          }}
        >
          Пожалуйста, не задавай хуевые вопросы в чате!
        </Title>
      </Div>
      <Group
        header={
          <Header
            style={{
              justifyContent: "center",
            }}
          >
            Ебано:
          </Header>
        }
      >
        <Message
          text="Ебать"
          user={users.you}
          time={moment(now).format("HH:mm:ss")}
        />
        <Message
          text="Чё нахуй"
          user={users.brother}
          time={moment(now + 3000).format("HH:mm:ss")}
        />
        <Placeholder title="*Братуха ждёт, пока ты пизданёшь что-то*" />
        <Message
          text="Я сейчас ебусь с тем-то и тем-то и хочу пиздануть то-то...."
          user={users.you}
          time={moment(now + 109000).format("HH:mm:ss")}
        />
        <Message
          text="Ага, можешь ебануть так-то...."
          user={users.brother}
          time={moment(now + 189000).format("HH:mm:ss")}
        />
        <SimpleCell hasActive={false} hasHover={false}>
          <InfoRow header="Потрачено">3 минуты и 9 секунд</InfoRow>
        </SimpleCell>
      </Group>
      <Group
        header={
          <Header
            style={{
              justifyContent: "center",
            }}
          >
            Пиздато:
          </Header>
        }
      >
        <Message
          text="Привет, я сейчас ебусь с тем-то и тем-то и хочу пиздануть то-то..."
          user={users.you}
          time={moment(now).format("HH:mm:ss")}
        />
        <Message
          text="Ага, можешь ебануть так-то..."
          user={users.brother}
          time={moment(now + 80000).format("HH:mm:ss")}
        />
        <SimpleCell hasActive={false} hasHover={false}>
          <InfoRow header="Потрачено">1 минута и 20 секунд</InfoRow>
        </SimpleCell>
      </Group>
      {isShowPhilosophy ? (
        philosophy
      ) : (
        <Placeholder
          style={{
            height: "220px",
          }}
          icon={<Icon28BrainOutline height={72} width={72} />}
          title="Философия статьи"
          action={
            <Button size="m" onClick={(): void => setShowPhilosophy(true)}>
              Показать философию
            </Button>
          }
        />
      )}
    </Group>
  );
};

export default EbatMeta;

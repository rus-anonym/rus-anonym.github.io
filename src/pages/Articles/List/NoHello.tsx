import {
  Avatar,
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
  coWorker: IUser;
} = {
  you: {
    name: "You",
    avatar: <Avatar size={32} gradientColor="red" initials="Y" />,
  },
  coWorker: {
    name: "Co-worker",
    avatar: <Avatar size={32} gradientColor="green" initials="CW" />,
  },
} as const;

const NoHello = (): JSX.Element => {
  const description = (
    <>
      Inspired by{" "}
      <Link target="_blank" href="https://nohello.com/">
        nohello.com
      </Link>{" "}
      (author Brandon High)
    </>
  );

  return (
    <Group description={description}>
      <Div>
        <Title
          level="1"
          style={{
            textAlign: "center",
          }}
        >
          Please Don't Say Just Hello In Chat
        </Title>
      </Div>
      <Group
        header={
          <Header
            style={{
              justifyContent: "center",
            }}
          >
            Bad:
          </Header>
        }
      >
        <Message text="Hi" user={users.you} time="12:32:12" />
        <Message text="Hello." user={users.coWorker} time="12:32:15" />
        <Placeholder title="*CO-WORKER WAITS WHILE YOU PHRASE YOUR QUESTION*" />
        <Message
          text="I'm working on [something] and I'm trying to do [etc...]"
          user={users.you}
          time="12:34:01"
        />
        <Message
          text="Oh, that's [answer...]"
          user={users.coWorker}
          time="12:35:21"
        />
        <SimpleCell hasActive={false} hasHover={false}>
          <InfoRow header="Spent">3 minutes и 9 seconds</InfoRow>
        </SimpleCell>
      </Group>
      <Group
        header={
          <Header
            style={{
              justifyContent: "center",
            }}
          >
            Good:
          </Header>
        }
      >
        <Message
          text="Hi -- I'm working on [something] and I'm trying to do [etc...]"
          user={users.you}
          time="12:32:12"
        />
        <Message
          text="[answers question]"
          user={users.coWorker}
          time="12:33:32"
        />
        <SimpleCell hasActive={false} hasHover={false}>
          <InfoRow header="Spent">1 minute и 20 seconds</InfoRow>
        </SimpleCell>
      </Group>
      <Div>
        <Spacing />
        <Headline weight="2" useAccentWeight>
          Note that you get help minutes sooner, and you don't make them wait.
          Instead, the co-worker can start thinking about your question right
          away!
        </Headline>
        <Headline weight="2" useAccentWeight>
          You're trying to be polite by not jumping right into the request, like
          you would do in person or on the phone. But Chat is neither of those
          things. Typing is much slower than talking. Instead of being polite,
          you are just making the other person wait for you to phrase your
          question, which is lost productivity.
        </Headline>
        <Spacing size={20} />
        <Headline weight="2" useAccentWeight>
          The same goes for "Hello -- Are you there?", "Hi Bob -- quick
          question.", "Do you have a sec ?", "yt?" and "ping". Just ask the
          question!
        </Headline>
        <Spacing size={20} />
        <Headline weight="2" useAccentWeight>
          If you feel it's brusque to simply say "Hi" and ask the question, you
          can do something like this:
        </Headline>
        <Message
          text="Hi -- if you're not busy I was wondering if I could ask a question.  I'm working on [something] and I'm trying to do [etc...]"
          user={users.you}
          time=""
        />
        <Spacing size={20} />
        <Headline weight="2" useAccentWeight>
          Additionally, asking your question before getting a reply allows
          asynchronous communication. If the other party is away, and you leave
          before they come back, they can still answer your question, instead of
          just staring at a "Hello" and wondering what they missed.
        </Headline>
      </Div>
    </Group>
  );
};

export default NoHello;

import {
  Icon24Fullscreen,
  Icon24FullscreenExit,
  Icon24Linked,
  Icon28Camera,
} from "@vkontakte/icons";
import { copyTextToClipboard } from "@vkontakte/vkjs";
import {
  Avatar,
  Button,
  ButtonGroup,
  Div,
  Group,
  Headline,
  Link,
  RichCell,
  Snackbar,
  Spacing,
  Title,
} from "@vkontakte/vkui";
import { copyImageToClipboard } from "copy-image-clipboard";
import { toJpeg } from "html-to-image";
import moment from "moment";
import { createRef, useEffect, useState } from "react";
import router from "../../../TS/store/router";
import session from "../../../TS/store/session";

import MD5 from "crypto-js/md5";

interface IUser {
  name: string;
  avatar: JSX.Element;
}

const Message = ({
  content,
  user,
  time = "",
}: {
  user: IUser;
  content: string;
  time?: string;
}): JSX.Element => {
  return (
    <RichCell multiline before={user.avatar} subtitle={content} after={time}>
      {user.name}
    </RichCell>
  );
};

const users: {
  you: IUser;
  interlocutor: IUser;
} = {
  you: {
    name: "Ты",
    avatar: <Avatar size={32} gradientColor="red" initials="Т" />,
  },
  interlocutor: {
    name: "Собеседник",
    avatar: <Avatar size={32} gradientColor="green" initials="С" />,
  },
} as const;

const Case = ({
  title,
  content,
}: {
  title: string;
  content: JSX.Element;
}): JSX.Element => {
  const ref = createRef<HTMLDivElement>();
  const [snackbar, setSnackbar] = useState<JSX.Element | null>(null);

  const createScreenshot = async (): Promise<void> => {
    if (ref.current) {
      const img = await toJpeg(ref.current, {
        backgroundColor: session.theme === "dark" ? "#222222" : "#ffffff",
        quality: 1,
      });

      try {
        await copyImageToClipboard(img);
        setSnackbar(
          <Snackbar onClose={(): void => setSnackbar(null)}>
            Скриншот скопирован в буфер обмена
          </Snackbar>
        );
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        const link = document.createElement("a");
        link.download = `${title}.jpeg`;
        link.href = img;
        link.click();
        link.remove();

        setSnackbar(
          <Snackbar onClose={(): void => setSnackbar(null)}>
            Скриншот сохранён на устройство
          </Snackbar>
        );
      }
    }
  };

  const id = MD5(title).toString();

  const [isShow, setShow] = useState(router.queryParams.id === id);

  useEffect(() => {
    if (isShow) {
      document.getElementById(id)?.scrollIntoView(true);
      window.scrollBy(0, -50);
    }
  }, []);

  return (
    <Group mode="plain" id={id}>
      {isShow ? (
        <Div>
          <div ref={ref}>
            <Div>
              <Title
                level="2"
                style={{
                  textAlign: "center",
                }}
              >
                {title}
              </Title>
              <Spacing />
              {content}
            </Div>
          </div>
          <ButtonGroup stretched>
            <Button
              before={<Icon28Camera />}
              stretched
              size="l"
              appearance="neutral"
              onClick={(): void => void createScreenshot()}
            >
              Скриншот
            </Button>
            <Button
              before={<Icon24Linked />}
              stretched
              size="l"
              appearance="neutral"
              onClick={(): void => {
                const url = router.url + "?id=" + id;
                void copyTextToClipboard(url).then(() => {
                  setSnackbar(
                    <Snackbar onClose={(): void => setSnackbar(null)}>
                      Ссылка скопирована в буфер обмен
                    </Snackbar>
                  );
                });
              }}
            >
              Скопировать
            </Button>
          </ButtonGroup>
          <Spacing />
          <Button
            before={<Icon24FullscreenExit />}
            stretched
            size="l"
            appearance="neutral"
            onClick={(): void => setShow(false)}
          >
            Скрыть
          </Button>
        </Div>
      ) : (
        <Div>
          <Div>
            <Title
              level="2"
              style={{
                textAlign: "center",
              }}
            >
              {title}
            </Title>
          </Div>
          <Spacing size={20} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              before={<Icon24Fullscreen />}
              size="l"
              appearance="positive"
              onClick={(): void => setShow(true)}
            >
              Раскрыть
            </Button>
          </div>
        </Div>
      )}
      {snackbar !== null && snackbar}
    </Group>
  );
};

const HowToCommunicate = (): JSX.Element => {
  return (
    <Group>
      <Div>
        <Title
          level="1"
          style={{
            textAlign: "center",
          }}
        >
          Как разговаривать в интернете
        </Title>
      </Div>
      <Div>
        <Headline weight="2" useAccentWeight>
          Если вы тут оказались, значит теперь ваш черёд потратить время на
          очевидные вещи, многие из которых вы не знали, но вы бесите людей этим
          и они вам отправили эту статью
        </Headline>
      </Div>
      <Group>
        <Case
          title="Переходите сразу к сути"
          content={
            <>
              <Title level="3">Пример:</Title>
              <Message user={users.you} content="Привет" />
              <Message user={users.interlocutor} content="Привет" />
              <Message
                user={users.you}
                content="Можно тебя кое-что спросить?"
              />
              <Message user={users.interlocutor} content="?" />
              <Message
                user={users.you}
                content="Если ты конечно не ответишь или занят, я пойму, но просто мне больше не у кого спросить"
              />
              <Message user={users.you} content="???" />
              <Message user={users.interlocutor} content="Что?" />
              <Message user={users.you} content="Спрашивай" />
              <Message user={users.interlocutor} content="У тебя есть время?" />
              <Headline weight="3" useAccentWeight>
                Ёб вашу жизнь, вы понимаете что пишете 4-6 предложений перед тем
                как перейти к ебаной сути, блядь? Нахуй вы раздражаете этим
                людей? Задавай свой ебаный вопрос сразу и получай на него ответ.
              </Headline>
              <Spacing size={20} />
              <Headline weight="3" useAccentWeight>
                Вот как надо:
              </Headline>
              <Message
                user={users.you}
                content="Привет. Можешь одолжить мне 500 рублей на мастеркард карту? Верну в конце недели?"
              />
              <Message user={users.interlocutor} content="Да, давай номер" />
              <Message
                user={users.you}
                content="Спасибо большое, вот номер: 0000 0000 0000 0000. Скажи куда тебе их вернуть?"
              />
            </>
          }
        />
        <Case
          title="Google first"
          content={
            <>
              <Title level="3">Пример:</Title>
              <Message
                user={users.you}
                content="Привет, не подскажешь где найти бесплатные фотографии в .png?"
              />
              <Message
                user={users.interlocutor}
                content="*скриншот из гугла с результатами выдачи по запросу «free png images»*"
              />
              <Message user={users.you} content="Спасибо большое!" />
              <Headline weight="3" useAccentWeight>
                ИДИ НАХУЙ СУКА! Просто, блядь, пошел ты нахуй дебик сраный. Ты
                вообще срать как ходишь? Всех своих друзей и родственников
                спрашиваешь как найти туалет и высрать говно? А домой как
                заходишь? Стучишь к соседу и спрашиваешь как тебе открыть замок
                и что для этого надо? Почти на любую хуйню в интернете уже давно
                найден ответ. Любая проблема, которая возникает у тебя сейчас
                уже была у пользователей Ответов.Майл в 2010-м году. Научись в
                интернет и гугл, тварь. Уже в любом браузере даже в гугл
                переходить не надо, можно даже голосом пропиздеть свою ебаную
                проблему и тут ОГОГО ВОТ ТАК ОТВЕТИК будет. Даже сраная сири или
                ведро могут тебя расслышать с другого конца комнаты и дать ответ
                на твой ебучий вопрос, быстрее чем ты заебешь кого-то своей
                тупизной.
              </Headline>
            </>
          }
        />
        <Case
          title="Не гуглится"
          content={
            <>
              <Title level="3">Пример:</Title>
              <Message
                user={users.you}
                content="Привет, я обыскал весь интернет, но так и не нашел схему трехфазного разветвителя кошачьей мочи. Не знаешь случайно как она выглядит?"
              />
              <Message
                user={users.interlocutor}
                content="Не знаю, я вообще в кондитерской работаю."
              />
              <Message
                user={users.you}
                content="Мммм, ну жаль, а не знаешь того кто может знать?"
              />
              <Message user={users.interlocutor} content="Нет" />
              <Message
                user={users.you}
                content="Ну если кто-то будет, ты дай мне знать, хорошо?"
              />
              <Spacing />
              <Title level="3" style={{ textAlign: "center" }}>
                Т Ы Ч Е П Ё С О Х У Е Л?
              </Title>
              <Spacing />
              <Headline weight="3" useAccentWeight>
                Во-первых, странно незнакомому человеку писать вообще какие-то
                тематические реквесты, о которых он может не знать.
              </Headline>
              <Headline weight="3" useAccentWeight>
                Во-вторых, если ты знаешь человека, то наверняка знаешь чем он
                занимается и какого хуя ты вообще спрашиваешь у человека то, что
                он заведомо может не знать.
              </Headline>
              <Headline weight="3" useAccentWeight>
                Ну и в третьих самый конченый блядский приём пытаться обязать
                кого-то выполнить твоё ебаное поручение. Ты директор дохуя или
                управляющий? Нахуй иди, блядь, управлять своим очком поглощать
                члены, кретин ебаный.
              </Headline>
            </>
          }
        />
        <Case
          title="Троица говноедов: ок, ясно, понятно"
          content={
            <>
              <Title level="3">Пример:</Title>
              <Message
                user={users.you}
                content="Привет, не подскажешь где можно в Махачкале поесть вкусной национальной еды?"
              />
              <Message
                user={users.interlocutor}
                content="Сходи в заведение «На хинкал», он там лучший. Находится на углу Ярагского и проспекта Шамиля."
              />
              <Message user={users.you} content="Ясно" />
              <Spacing />
              <Headline weight="3" useAccentWeight>
                Хуясно, пидор. Ты пиздец такой дохуя занятой, чтобы написать
                «Спасибо, обязательно схожу если буду»? Пожалуй миллиардами на
                бирже ворочаешь и одновременно ракеты на плавающую баржу
                сажаешь, чтобы ебло не треснуло от благодарности за совет? Чему
                вас в детстве вообще учили, чмоньки? Где манеры, где воспитание?
                Ваше сухое «ок» можете запихнуть в своё разъебанное очко, чтобы
                поставить рядом с «ясно», особенно когда речь идет о просьбе.
              </Headline>
              <Spacing size={20} />
              <Title level="3">Ещё пример:</Title>
              <Message
                user={users.you}
                content="Привет. Можешь одолжить мне 500 рублей на мастеркард карту? Верну в конце недели?"
              />
              <Message user={users.interlocutor} content="Привет, не могу." />
              <Message user={users.you} content="Понятно." />
              <Headline weight="3" useAccentWeight>
                Что тебе понятно, говно? Неспособность принимать отказы и
                отвечать, будто ты обиделся, говножуй — удел тупоголовых
                хуесосов. Ты, блядина, с просьбой пришел. Нехуй корчить из себя
                невесть кого.
              </Headline>
              <Spacing size={20} />
              <Title level="3">Правильный пример:</Title>
              <Message
                user={users.you}
                content="Привет. Можешь одолжить мне 500 рублей на мастеркард карту? Верну в конце недели?"
              />
              <Message user={users.interlocutor} content="Нет, не могу." />
              <Message
                user={users.you}
                content="Ну ничего, извини что потревожил.."
              />
              <Spacing />
              <Headline weight="3" useAccentWeight>
                Так человек, который вам отказал одновременно поймет, что вы не
                сухая мразота, и в то же время его не будет беспокоить чувство
                того, что вы обиделись.
              </Headline>
            </>
          }
        />
        <Case
          title="Спросил и сьебал"
          content={
            <>
              <Title level="3">Пример:</Title>
              <Message
                user={users.you}
                content="Привет, что делаешь?"
                time="16:32:50"
              />
              <Message
                user={users.interlocutor}
                content="Привет, собираюсь выходить к тебе через 5 минут, ты сейчас где?"
                time="16:33:00"
              />
              <Message
                user={users.interlocutor}
                content="Аууу? Мне выходить?..."
                time="16:38:10"
              />
              <Message
                user={users.interlocutor}
                content="Ты где? Мне идти?"
                time="16:45:12"
              />
              <Message
                user={users.you}
                content="Блин, я думал ты давно уже вышел, че ты опаздываешь? Я же позавчера еще сказал что буду у фонтана."
                time="16:52:34"
              />
              <Spacing />
              <Headline weight="3" useAccentWeight>
                АААААААА!!! Какого, блядь, черта?! Что с вами не так, уроды?!
                Если ты задаешь сраный вопрос, сука, или диалог продолжается,
                научись всё время находиться в сессии этого диалога (если только
                у тебя не сломался или выключился телефон). Тебя, кретина
                ослоухого ЖДУТ, ПОТОМУ ЧТО ТЫ САМ ПИДОРАС ЗАДАЛ ВОПРОС ПЕРВЫМ И
                ТЕБЕ НА НЕГО ЧЕРЕЗ НАНОСЕКУНДУ ОТВЕТИЛИ. Ну или скажи «Надо
                отойти, вернусь через столько-то». Мало того — это нормально у
                людей с головой вместо жопы, как у тебя, уточнять перед встречей
                готовность, на случай если такой ишак как ты, отвечающий по 20
                минут опять переиграет что-то.
              </Headline>
            </>
          }
        />
        <Case
          title="Очевидный благодетель"
          content={
            <>
              <Title level="3">Пример:</Title>
              <Message
                user={users.you}
                content="Здарова, я знаю ты интересуешься музыкой, поэтому советую тебе попробовать Яндекс.Музыку, ну или Apple Music"
              />
              <Spacing />
              <Headline weight="3" useAccentWeight>
                СКАЖИ, БЛЯДЬ, ГДЕ ТЫ БЕРЕШЬ ВСЕ ЭТИ ОХУИТЕЛЬНЫЕ СОВЕТЫ, МЕМЫ И
                ЛИШНИЕ ХРОМОСОМЫ?! Не пробовал пойти работать ведущим
                музыкальных передач на Первый канал? Кстати, зацени если не
                видел такой канал. По телевизору на кнопке один. Рекомендую
                кстати еще попробовать пить воду. Ну, знаешь, под краном там
                вода или в магазине может видел?
              </Headline>
              <Spacing size={20} />
              <Headline weight="3" useAccentWeight>
                Как ты думаешь, можно ли жить в 2017м году и рекомендовать
                человеку что-то, что настолько популярно и известно как ютуб,
                айфон, кока-кола или номер твоей мамаши в борделе?
              </Headline>
            </>
          }
        />
        <Case
          title="+55 пропущенных (по ебалу бы тебе)"
          content={
            <>
              <Title level="3">Пример:</Title>
              {[
                "Привет",
                "Знаешь",
                "Я",
                "Тут",
                "Это",
                "Короче, мне тут",
                "Ща, погодь",
                "Блин",
                "Да как это",
                "А",
                "Во!",
              ].map((x, index) => {
                return (
                  <Message
                    user={users.you}
                    content={x}
                    time={moment().add(index, "second").format("HH:mm:ss")}
                  />
                );
              })}

              <Spacing />
              <Headline weight="3" useAccentWeight>
                Есть много речевых расстройств, и людей страдающих ими, но твоё
                особенное.
              </Headline>
              <Spacing />
              <Headline weight="3" useAccentWeight>
                Потому что ты в интернете
              </Headline>
              <Spacing />
              <Headline weight="3" useAccentWeight>
                особенный
              </Headline>
              <Spacing />
              <Headline weight="3" useAccentWeight>
                мудоёбинский
              </Headline>
              <Spacing />
              <Headline weight="3" useAccentWeight>
                пиздотряс
              </Headline>
              <Spacing size={20} />
              <Headline weight="3" useAccentWeight>
                Самое пиздецовое от таких дегенератов открывать +35 пропущенных
                сообщений, а там вся суть умещается в одно предложение, которое
                пидорасы разбивают на 35 сообщений. Быстрый интернет дал свободу
                пересылать большие массивы данных не для того чтобы вы свой
                скудный гондонский вскукарек разбивали на вертикальный небоскрёб
                олигофрена. Пишите, черти ебучие, одним предложением, пока не
                будет исчерпан лимит символов или логический смысл послания. В
                современном мире каждое сообщение это уведомление, а вы
                заставляете людей их выключать или переключать режимы.
              </Headline>
            </>
          }
        />
        <Case
          title="Какделатор"
          content={
            <>
              <Title level="3">Пример:</Title>
              <Message user={users.you} content="Привет" />
              <Message user={users.interlocutor} content="Привет" />
              <Message user={users.you} content="Как дела?" />

              <Headline weight="3" useAccentWeight>
                Серьёзно, блядь, в мире открылась какая-то школа заботливых
                супергероев-долбоебов? Какой вообще, нахуй, смысл в вопросе «как
                дела?» или «как ты?»? Если ты пишешь первым, петух, то, итак,
                понятно что тебе че-то надо, засунь свои ебаные манеры в жопу и
                спрашивай сразу. Мои проблемы ты решить уж точно не сможешь,
                если я скажу что дела говно, а сочувствие своё ты уже знаешь где
                рядом с манерами в своей пещере сложить. Если кому-то реально
                интересны мои дела, то РАЗ УЖ МЫ В ИНТЕРНЕТЕ, ты наверняка мой
                друг и подписан на меня в инстаграмах и других соцсетях. А если
                ты не мой друг, то нахуй тебе знать как у меня дела? Хочешь
                показаться заинтересованным или войти в доверие? Войди в портал
                с приключением нахуй на 20 минут.
              </Headline>
            </>
          }
        />
        <Case
          title="Бухой компаньон"
          content={
            <>
              <Title level="3">Пример:</Title>
              <Message
                user={users.you}
                content="Здарвыа! Бля сто лет ни видсмл! Че ты как рассссссссссскажи, го попиздим. Ваще давай я подъеду. Че бля стол ет не виделис."
              />

              <Headline weight="3" useAccentWeight>
                Иди проспись, животное. Либо ты зовешь людей пить заранее, либо
                нехуй им звонить и писать, когда тебе уже хорошо или не хватило.
              </Headline>
              <Spacing />
              <Headline weight="3" useAccentWeight>
                Нормальным же людям рекомендую вообще ничего на такое не
                отвечать.
              </Headline>
            </>
          }
        />
        <Case
          title="Левитан на минималках"
          content={
            <>
              <Headline weight="3" useAccentWeight>
                Ваши аудиосообщения просто доебали. Всё понятно дохуя занятые, в
                дороге (в дороге надо на дорогу смотреть), на хуе крутитесь или
                в вам отрезало болгаркой пальцы, но перед тем как отправлять
                своё ебаное мычание, сформулируйте мысль.
              </Headline>
              <Spacing />
              <Headline weight="3" useAccentWeight>
                Нет ничего более уёбищного, чем из-за ваших кретинских
                размышлений отвлекаться от музыки, фильма или работы, чтобы 3
                минуты слушать чавканье, эээ-канье, домыслы и прочее говно,
                которое укладывается в одно сраное предложение.
              </Headline>
              <Spacing />
              <Headline weight="3" useAccentWeight>
                Аудиосообщения придумали на случай, когда нужно сразу большой
                объем информации быстро передать и нет клавиатуры или
                возможности набирать быстро, а не чтобы несколько минут слышать
                как нейрон не может выбраться из вашей прямой кишки, чтобы
                попасть в голову, и вы родите желаемое.
              </Headline>
            </>
          }
        />
        <Case
          title=")"
          content={
            <>
              <Title level="3">Пример:</Title>
              <Message user={users.you} content=")" />
              <Headline weight="3" useAccentWeight>
                Отвечать одной скобкой можно только создателю сообщества{" "}
                <Link href="https://vk.com/minimalism" target="_blank">
                  «minimalism»
                </Link>{" "}
                ВКонтакте. Всех остальных надо просто пиздить в ебало за это.
                Это ты чё типа ухмыльнулся, улыбнулся, но не очень? Или ты
                джоконда недоебанная, чтобы ставить тут свою скобку сраную? М?
                Уёба?)
              </Headline>
            </>
          }
        />
      </Group>
    </Group>
  );
};

export default HowToCommunicate;

import { Div, Group, Link, Spacing, Text, Title } from "@vkontakte/vkui";
import storage from "../../../TS/store/storage";

interface IConcept {
  concept: string;
  description: string;
}

const Concept = ({ concept }: { concept: IConcept }): JSX.Element => {
  return (
    <Group mode="plain" separator="hide">
      <Div>
        <Text weight="3" useAccentWeight>
          {concept.description}
        </Text>
        <Spacing />
        <Text weight="1" useAccentWeight>
          Это {concept.concept}
        </Text>
      </Div>
    </Group>
  );
};

const ISHumanitaries = (): JSX.Element => {
  const concepts: IConcept[] = [
    {
      concept: "идентификация",
      description:
        "Вы пытаетесь пройти на стройку и представляетесь вахтёру своим именем, после чего проходите внутрь",
    },
    {
      concept: "аутентификация",
      description:
        "Перед тем, как пройти внутрь, вы вынуждены показать вахтёру свой паспорт",
    },
    {
      concept: "двухэтапная аутентификация",
      description:
        "Вы вынуждены показать одному вахтёру свой паспорт, а второму по памяти назвать его серию, номер и вспомнить, что находится на странице с номером, похожим на Кенни",
    },
    {
      concept: "двухфакторная аутентификация",
      description:
        "Вахтёр требует не только паспорт, но и водительское удостоверение",
    },
    {
      concept: "подделка учётных данных",
      description: `Какой-то ${
        storage.articles.filters.isExplicitFilter
          ? "гомосексуалист обманул"
          : "пидарас наебал"
      } вахтёра, показав ему чужие документы`,
    },
    {
      concept: "имперсонация",
      description: `Вахтёр в курсе, что его ${
        storage.articles.filters.isExplicitFilter ? "обманули" : "наебали"
      }, но вынужден пропустить, так как документы подлинные`,
    },
    {
      concept: "мастер-пароль",
      description: `Любой ${
        storage.articles.filters.isExplicitFilter ? "гомосексуалист" : "пидарас"
      } может пройти на объект, предъявив вахтёру бутылку водки`,
    },
    {
      concept: "сессионный токен",
      description:
        "Вахтёр выдаёт вам на шею бейдж с персональным идентификатором",
    },
    {
      concept: "авторизация",
      description: "Вы показываете этот бейдж при входе в любую дверь",
    },
    {
      concept: "угон сессии",
      description: `Какой-то ${
        storage.articles.filters.isExplicitFilter
          ? "гомосексуалист своровал"
          : "пидарас спиздил"
      } чужой бейдж и везде его показывает`,
    },
    {
      concept: "фиксация сессии",
      description:
        "Он же подложил вахтёру копию бейджа со своим идентификатором и дождался, пока тот не отдаст его вам",
    },
    {
      concept: "приватность",
      description:
        "Вы потоптались по только что налитому полу, не оставив в нём следов и никто кроме вас не знает, что это вообще случилось",
    },
    {
      concept: "анонимность",
      description: `Вы потоптались по только что налитому полу, оставили в нём следы, но никто не знает, какой ${
        storage.articles.filters.isExplicitFilter ? "гомосексуалист" : "пидарас"
      } это сделал`,
    },
    {
      concept: "журналирование",
      description:
        "Вахтёр записал в журнал дату и время вашего прихода и ухода",
    },
    {
      concept: "ретроспектируемое журналирование",
      description:
        "Вахтёр ходит за вами по пятам и записывает вообще все ваши действия",
    },
    {
      concept: "корреляция событий",
      description:
        "Вахтер сделал запись в журнал, что пару дней назад к ним на стройку устроился какой-то стрёмный работник с такой же фамилией, что и у вас",
    },
    {
      concept: "SIEM",
      description: `Вахтёр в ходе корелляции событий периодически жмёт кнопку, после чего начинает орать сирена, мигать красные лампочки, а весь персонал ${
        storage.articles.filters.isExplicitFilter ? "сваливает" : "съёбывает"
      } по подвалам, откладывая кирпичи`,
    },
    {
      concept: "актуализация правил корелляции событий SIEM",
      description: `Прораб за это наконец-таки набил вахтёру ${
        storage.articles.filters.isExplicitFilter ? "лицо" : "ебало"
      }`,
    },
    {
      concept: "угроза",
      description: "На стройке вам на голову может упасть кирпич",
    },
    {
      concept: "модель угроз",
      description:
        "Кирпич весит килограмм и ещё пол кирпича, ускорение свободного падения 9,80665 м/с², солнце в зените, а кирпичи могут находиться на любом из отстроенных этажей <плюс все вытекающие из этого расчёты>",
    },
    {
      concept: "Лукацкий",
      description:
        "Какой-то мужик в шляпе рассказывает вам, как правильно строить модель угроз",
    },
    {
      concept: "атака",
      description: `Какой-то ${
        storage.articles.filters.isExplicitFilter ? "гомосексуалист" : "пидарас"
      } может сбросить вам кирпич на голову с верхнего этажа`,
    },
    {
      concept: "эксплойт",
      description:
        "Для этого он пройдёт на стройку, поднимется на самый верхний этаж, возьмёт в руки кирпич, прицелится и сбросит его вниз",
    },
    {
      concept: "уязвимость",
      description:
        "Ваша голова не предназначена для попадания в неё кирпича с заданным весом и ускорением",
    },
    {
      concept: "защищённость",
      description: `Вы убираете со стройки все кирпичи, исключаете наличие на ней каких-то ${
        storage.articles.filters.isExplicitFilter ? "гомосексуалист" : "пидарас"
      }ов и, на всякий случай, ещё и верхних этажей`,
    },

    {
      concept: "безопасность",
      description:
        "Вы надеваете каску, чтобы хоть как-то снизить последствия попадания кирпича",
    },
    {
      concept: "бумажная безопасность",
      description:
        "У вас в правилах безопасности предписано всем носить каски, вы получили за них пушкинскую премию от регуляторов, но персонал как ходил без касок, так и продолжает ходить",
    },
    {
      concept: "багхантер",
      description: `Какой-то ${
        storage.articles.filters.isExplicitFilter ? "гомосексуалист" : "пидарас"
      } пробрался на стройку, залез на верхние этажи, убил кирпичом прораба и теперь радостно требует заплатить ему за это вознаграждение`,
    },
    {
      concept: "багхантер с анализатором защищённости",
      description: `Прораб пока ещё жив, тот ${
        storage.articles.filters.isExplicitFilter ? "гомосексуалист" : "пидарас"
      } кидается кирпичами во все стороны, а вахтёр уже ${
        storage.articles.filters.isExplicitFilter ? "устал" : "заебался"
      } нажимать на красную кнопку`,
    },
    {
      concept: "формальная отказоустойчивость",
      description:
        "Вы нанимаете двух прорабов, чтобы в случае смерти одного из них, работы не прекращались",
    },
    {
      concept: "фактическая отказоустойчивость",
      description:
        "Вы нанимаете столько прорабов, сколько у вас кирпичей на стройке плюс ещё один",
    },
    {
      concept: "DAST",
      description:
        "Вы покупаете устройство, кидающееся кирпичами во все стороны, на манер мячиков для тенниса",
    },
    {
      concept: "SAST",
      description:
        "Вы покупаете виртуальный симулятор, делающий всё то же самое, что и DAST, но без стройки",
    },
    {
      concept: "IAST",
      description:
        "Вы покупаете модуль обратной связи между кидающимся устройством и симулятором стройки",
    },
    {
      concept: "привлечение интегратора",
      description: `Вы ${
        storage.articles.filters.isExplicitFilter ? "устали" : "заебались"
      } покупать и обратились за помощью к сторонней компании. Та предлагает вам приобрести новейшую бетономешалку от именитого вендора, чтобы решить проблему с кирпичами. Вы в душе не ${
        storage.articles.filters.isExplicitFilter ? "понимаете" : "ебёте"
      }, как связаны бетономешалка и кирпичи, но таки покупаете. Теперь у вас с верхних этажей могут упасть не только кирпичи, но и ${
        storage.articles.filters.isExplicitFilter ? "грёбаная" : "блядская"
      } бетономешалка, что делает проблему кирпичей не такой уж и значимой`,
    },
    {
      concept:
        "... <ой, да ладно, все вы прекрасно поняли, о какой компании идёт речь :))>",
      description:
        "Производитель бетономешалки по вашему запросу выпускает патч, оснащающий её реактивной системой торможения в воздухе. По неведомым причинам это приводит к отказу строительного крана, эпидемии гриппа среди персонала и ухудшению вязких свойств бетона",
    },
    {
      concept: "пентестер",
      description:
        "Вы наняли эксперта, чтобы тот проверил возможность проникновения на стройку, залезания на верхние этажи и сброса кирпичей на головы персонала",
    },
    {
      concept:
        "опытный пентестер, которому вовремя не обозначили скоуп тестирования",
      description: `Пентестер не только смог убить прораба с помощью кирпича десятью разными способами, но и разрушил ${
        storage.articles.filters.isExplicitFilter ? "полностью" : "к ебеням"
      } весь объект, сжёг технику и заставил вахтёров сношать друг-друга`,
    },
    {
      concept: "реалии современной информационной безопасности",
      description: `Вы сделали всё мыслимое и немыслимое, чтобы упавший кирпич никого не убил, объект нельзя было разрушить, технику сжечь. И ещё пояса верности на вахтёров, чтобы наверняка. На следующий же день прораба прибивает ${
        storage.articles.filters.isExplicitFilter ? "" : "к хуям"
      } отвалившаяся тормозная система бетономешалки...`,
    },
  ];

  return (
    <Group
      description={
        <>
          Автор оригинального поста{" "}
          <Link
            target="_blank"
            href="https://www.facebook.com/kochetkov.vladimir/posts/1075139016174699"
          >
            kochetkov.vladimir
          </Link>
        </>
      }
    >
      <Div>
        <Title
          level="1"
          style={{
            textAlign: "center",
          }}
        >
          Основные понятия информационной безопасности для гуманитариев рабочего
          класса
        </Title>
      </Div>
      <Spacing size={20} />
      <Group mode="plain">
        {concepts.map((x) => (
          <Concept concept={x} />
        ))}
      </Group>
    </Group>
  );
};

export default ISHumanitaries;
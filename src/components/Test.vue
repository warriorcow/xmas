<template>
  <div class="test">
    <transition name="fade" mode="out-in">
      <div v-if="STEP_STATE === 0" :key="0" class="test__start">
        <p>Нажмите на ёлку, чтобы начать</p>
      </div>
      <Card v-if="STEP_STATE === 1" :key="1">
        <strong class="title"
          >Какой талант вы раскроете в себе в 2021 году?</strong
        >
        <p>
          В конце 2020 года <nobr>на связь</nobr> <nobr>с RosExpert</nobr> вышли
          инопланетяне. Те самые, которые, <nobr>как за сериалом</nobr>,
          наблюдают <nobr>за событиями</nobr>, происходящими
          <nobr>на Земле.</nobr> <nobr>Не удивительно,</nobr>
          <nobr>что сюжет</nobr> сезона 2020 года показался им самым
          захватывающим <nobr>из всех,</nobr> что прошли
          <nobr>к настоящему</nobr> времени.
        </p>
        <div class="test__footer">
          <button class="test__btn" @click.prevent="nextStep">Далее</button>
        </div>
      </Card>

      <Card v-if="STEP_STATE === 2" :key="2">
        <p>
          Из-за разницы <nobr>в межгалактическом</nobr> времени инопланетные
          существа прекрасно знают, каким будет <nobr>и будущий</nobr> 2021. По
          вашему рассказу <nobr>о том,</nobr> каким был 2020 год, инопланетяне
          смогут безошибочно определить вашу главную траекторию
          <nobr>в следующем,</nobr> 2021 году. <nobr>А самое</nobr> главное —
          они увидят тот самый талант, который станет вашим двигателем
          <nobr>и опорой</nobr> <nobr>на протяжении</nobr> следующих 365 дней.
        </p>
        <div class="test__footer">
          <button class="test__btn test__btn_back" @click.prevent="prevStep">
            <img src="../../public/image/arrow.svg" />
          </button>
          <button class="test__btn" @click.prevent="nextStep">Далее</button>
        </div>
      </Card>

      <Card v-if="STEP_STATE === 3" :key="3">
        <p>
          Вместе <nobr>с нашими</nobr> инопланетными гостями мы зададим вам
          несколько вопросов. Будьте снисходительны
          <nobr>к несовершенству</nobr> их языка
          <nobr>и незнанию</nobr> каких-то названий
          <nobr>или очевидных</nobr> вещей. <nobr>В конце</nobr> концов именно
          сейчас мы можем <nobr>о них</nobr> рассказать.
        </p>
        <p>Готовы?</p>
        <div class="test__footer">
          <button class="test__btn test__btn_back" @click.prevent="prevStep">
            <img src="../../public/image/arrow.svg" />
          </button>
          <button class="test__btn" @click.prevent="nextStep">Далее</button>
        </div>
      </Card>

      <Card v-else-if="STEP_STATE === 4" :key="4">
        <div>
          <strong
            >Ну что же, вернемся <nobr>к самому</nobr> началу! <br />Как вы
            встретили 2020 год?</strong
          >
        </div>
        <QA :items="qa1" @change="pickedAnswer" />
        <div class="test__footer">
          <button
            @click="nextStep"
            :class="{ disabled: !currentAnswer }"
            class="test__btn"
          >
            Далее
          </button>
        </div>
      </Card>

      <Card v-else-if="STEP_STATE === 5" :key="5">
        <div>
          <strong
            >Переводчики нам подсказывают — это называется «Новогодние
            каникулы»! <nobr>Но вот</nobr> они закончились. Вспомните свой
            первый день <nobr>в офисе:</nobr> коллеги возвращаются после
            отпусков. Кажется, приступить <nobr>к работе</nobr> будет нелегко –
            воспоминания <nobr>о празднике</nobr> так свежи!
            <nobr>Что вы</nobr> делали?</strong
          >
        </div>
        <QA :items="qa2" @change="pickedAnswer" />
        <div class="test__footer">
          <button
            @click="nextStep"
            :class="{ disabled: !currentAnswer }"
            class="test__btn"
          >
            Далее
          </button>
        </div>
      </Card>

      <Card v-if="STEP_STATE === 6" :key="6">
        <div>
          <strong
            >Нам рассказали, <nobr>что в этой</nobr> части Земли февраль
            <nobr>и март —</nobr> особые месяцы. <nobr>В это</nobr> время одна
            часть людей дарит другой части людей подарки
            <nobr>и угощения</nobr> только<nobr> за то,</nobr>
            <nobr>что они</nobr> такие, какие есть.
            <nobr>Что делали</nobr> вы?</strong
          >
        </div>
        <QA :items="qa3" @change="pickedAnswer" />
        <div class="test__footer">
          <button
            @click="nextStep"
            :class="{ disabled: !currentAnswer }"
            class="test__btn"
          >
            Далее
          </button>
        </div>
      </Card>

      <Card v-if="STEP_STATE === 7" :key="7">
        <div>
          <strong
            >Мы заметили, <nobr>что весной</nobr> <nobr>на вашей</nobr> планете
            начало происходить что-то странное. Вы стали проводить почти все
            свое время перед светящимися прямоугольниками разных размеров —
            часто даже разговаривать <nobr>с ними.</nobr> Расскажите,
            <nobr>что это</nobr> было?</strong
          >
        </div>
        <QA :items="qa4" @change="pickedAnswer" />
        <div class="test__footer">
          <button
            @click="nextStep"
            :class="{ disabled: !currentAnswer }"
            class="test__btn"
          >
            Далее
          </button>
        </div>
      </Card>

      <Card v-if="STEP_STATE === 8" :key="8">
        <div>
          <strong
            >Похоже, эти светящиеся прямоугольники вам заменили всё остальное.
            <nobr>И еду?!</nobr> Неужели вы научились перерабатывать
            <nobr>в пищу</nobr> световую энергию экранов?</strong
          >
        </div>
        <QA :items="qa5" @change="pickedAnswer" />
        <div class="test__footer">
          <button
            @click="nextStep"
            :class="{ disabled: !currentAnswer }"
            class="test__btn"
          >
            Далее
          </button>
        </div>
      </Card>

      <Card v-if="STEP_STATE === 9" :key="9">
        <div>
          <strong
            >У нас множество вопросов! <nobr>Что нам</nobr> поможет лучше понять
            все <nobr>о вас,</nobr> людях, <nobr>в земном</nobr> 2020 году?
          </strong>
        </div>
        <QA :items="qa6" @change="pickedAnswer" />
        <div class="test__footer">
          <button
            @click="nextStep"
            :class="{ disabled: !currentAnswer }"
            class="test__btn"
          >
            Далее
          </button>
        </div>
      </Card>

      <Card v-if="STEP_STATE === 10" :key="10">
        <div>
          <strong
            >Даааа!.. Жизнь землян порой интересней любого сериала! Определенно
            стоит пригласить вас <nobr>в гости,</nobr>
            <nobr>чтобы вы</nobr> сами <nobr>обо всем</nobr> рассказали. Каким
            транспортом предпочтете воспользоваться?</strong
          >
        </div>
        <QA :items="qa7" @change="pickedAnswer" />
        <div class="test__footer">
          <button
            @click="nextStep"
            :class="{ disabled: !currentAnswer }"
            class="test__btn"
          >
            Далее
          </button>
        </div>
      </Card>

      <Card v-if="STEP_STATE === 11" :key="11">
        <div>
          <strong
            >Любая мечта рано <nobr>или поздно</nobr> становится реальностью!
            <nobr>У нас</nobr> осталось мало времени, наша связь
            <nobr>с Землей</nobr> вот-вот оборвется. Нам важно знать,
            <nobr>чем же вам</nobr> все-таки запомнится этот земной 2020
            год?</strong
          >
        </div>
        <QA :items="qa8" @change="pickedAnswer" />
        <div class="test__footer">
          <button @click="nextStepDouble" class="test__btn">Далее</button>
        </div>
      </Card>

      <Card v-if="STEP_STATE === 12 && winnerBranch == 0" :key="12">
        <div>
          <strong
            >Пришло наше время прощаться. Может быть, вы оставите нам
            <nobr>на память</nobr> какой-то подарок? Мы создадим
            <nobr>на нашей</nobr> планете «Музей имени Земли».</strong
          >
        </div>
        <QA :items="qa9" @change="pickedAnswer" />
        <div class="test__footer">
          <button
            @click="nextStep"
            :class="{ disabled: !currentAnswer }"
            class="test__btn"
          >
            Далее
          </button>
        </div>
      </Card>

      <Card v-if="STEP_STATE === 12 && winnerBranch == 1" :key="12">
        <div>
          <strong
            >Пришло наше время прощаться. Может быть, вы оставите нам
            <nobr>на память</nobr> какой-то подарок? Мы создадим
            <nobr>на нашей</nobr> планете «Музей имени Земли».</strong
          >
        </div>
        <QA :items="qa10" @change="pickedAnswer" />
        <div class="test__footer">
          <button
            @click="nextStep"
            :class="{ disabled: !currentAnswer }"
            class="test__btn"
          >
            Далее
          </button>
        </div>
      </Card>

      <div v-if="STEP_STATE === 13" :key="13" class="test__gift">
        <img @click="setWinner" src="../../public/image/gift.svg" alt="" />
      </div>

      <Result
        v-if="STEP_STATE === 14 && winner == 'inventor'"
        :key="13"
        name="inventor"
        src="inventor.gif"
        title="Изобретатель"
        desc="2021 год откроет <nobr>в вас</nobr> талант Изобретателя. Кто знает, может быть именно <nobr>в этом</nobr> году мир, наконец, получит самозастегивающиеся пуговицы <nobr>и автомат</nobr> <nobr>для нанесения</nobr> макияжа! Ваше желание делать мир удобнее <nobr>и лучше</nobr> будет неукротимым, <nobr>а если рядом</nobr> <nobr>с вами</nobr> будет Мечтатель — серия патентов <nobr>за уникальные</nobr> разработки украсит стены вашего дома. Вам <nobr>не понадобятся</nobr> учебники <nobr>или инструкции.</nobr> Вы <nobr>ко всему</nobr> придете опытным путем. Сверхскоростные вакуумные поезда <nobr>или ракета</nobr> <nobr>для космических</nobr> полетов устарели <nobr>еще в прошлом</nobr> году — наверняка вы придумаете что-то поинтереснее. После такого несомненно захочется написать <nobr>в социальных</nobr> сетях: «Как тебе такое, Илон Маск?»."
      />
      <Result
        v-if="STEP_STATE === 14 && winner == 'wizard'"
        :key="13"
        name="wizard"
        src="wizard.gif"
        title="Волшебник"
        desc="В 2021 году вы станете…. Волшебником! Кажется, 2020 год был слишком серьезным, поэтому <nobr>без нотки</nobr> мистики <nobr>и волшебства</nobr> <nobr>не обойтись.</nobr> Возможно, вы найдете магический предмет, который будет обращать ошибки <nobr>в победы,</nobr> составите рецепт таинственного напитка всезнания <nobr>или бессмертия</nobr> <nobr>или просто</nobr> вспомните заклинание, которое сможет зажечь <nobr>в сердце</nobr> каждого любовь, <nobr>а в глазах</nobr> — радость жизни. Ваш ореол таинственности <nobr>и загадочности</nobr> будет привлекать людей. Поэтому <nobr>и Юрий Дудь,</nobr> добившись интервью <nobr>с вами,</nobr> <nobr>в конце</nobr> обязательно спросит: <nobr>«В чем</nobr> ваша суперсила?»."
      />
      <Result
        v-if="STEP_STATE === 14 && winner == 'dreamer'"
        :key="13"
        name="dreamer"
        src="dreamer.gif"
        title="Мечтатель"
        desc="В 2021 году вы станете настоящим Мечтателем. Неопределенность перестанет существовать — вместе <nobr>с великими</nobr> визионерами мира вы сможете увидеть, <nobr>как изменятся</nobr> города <nobr>и страны,</nobr> предскажете архитектурные стили поселений <nobr>на Марсе</nobr> <nobr>и технологические</nobr> открытия, которые оставят далеко позади все, <nobr>что может</nobr> спрогнозировать самый мощный искусственный интеллект сегодня. <nobr>В конце</nobr> концов, именно Мечтатели открывают дорогу Изобретателям <nobr>и Исследователям!</nobr>  Возможно, перевезти мебель <nobr>и уютно</nobr> обосноваться <nobr>в увиденном</nobr> мире будущего непосредственно <nobr>в 2021</nobr> году <nobr>еще не получится,</nobr> <nobr>но увидеть</nobr> новые горизонты <nobr>и пути —</nobr> определенно, да!"
      />
      <Result
        v-if="STEP_STATE === 14 && winner == 'traveler'"
        :key="13"
        name="traveler"
        src="traveler.gif"
        title="Путешественник"
        desc="В 2021 году вы станете настоящим Путешественником! Возможно, именно <nobr>так повлияли</nobr> <nobr>на вас</nobr> мартовские <nobr>и майские</nobr> маршруты 2020 года — турне <nobr>из гостиной</nobr> <nobr>в кабинет</nobr> <nobr>или ралли</nobr> балкон – прихожая. Определенно, дороги <nobr>и неизведанные</nobr> географии манят вас! Открывать мир <nobr>с помощью</nobr> карт Google — <nobr>не для</nobr> вас. Путешествие может быть только реальным. Обойти Москву <nobr>по кольцу</nobr> парков?  Добраться <nobr>до сердца</nobr> плато Путорана? Сойти <nobr>с проторенных</nobr> туристических троп Алтая <nobr>и найти</nobr> подтверждение существованию древних племен? Купить билет <nobr>на Занзибар</nobr> <nobr>и Танзанию?</nobr> Вы будете смело ставить точки <nobr>на карте</nobr> <nobr>и планировать</nobr> маршрут. <nobr>А если обстоятельства</nobr> заставят сойти <nobr>с пути —</nobr> вы всегда открыты к новым поворотам."
      />
      <Result
        v-if="STEP_STATE === 14 && winner == 'researcher'"
        :key="13"
        name="researcher"
        src="researcher.gif"
        title="Исследователь"
        desc="В 2021 году вы откроете <nobr>в себе</nobr> Исследователя. Вероятно, вы <nobr>и в 2020</nobr> году замечали, <nobr>что есть</nobr> <nobr>у вас</nobr> шесть незаменимых помощников — «шестерка слуг, проворных удалых»: Как, Почему, Кто, Что, Когда <nobr>и Где.</nobr> Вместе <nobr>с этой</nobr> командой <nobr>в Новом</nobr> году вы сумеете добраться <nobr>до сути</nobr> самых сложных задач <nobr>и найти</nobr> разгадки крупнейшим парадоксам человечества: например, казавшемуся неизменным закону Мёрфи. Возможно, именно 2021 год вы вспомните <nobr>как время,</nobr> когда вы начали работать <nobr>над темой,</nobr> которая привела вас <nobr>к Нобелевской</nobr> премии!"
      />
      <Result
        v-if="STEP_STATE === 14 && winner == 'mastermind'"
        :key="13"
        name="mastermind"
        src="mastermind.gif"
        title="Вдохновитель"
        desc="2021 год откроет <nobr>в вас</nobr> талант Вдохновителя. Наверняка уже <nobr>в уходящем</nobr> году вы заметили, <nobr>что ваше</nobr> мнение <nobr>в виртуальных</nobr> созвонах <nobr>в Zoom</nobr> обретало какой-то новый вес. Все так — вы чутко <nobr>и проницательно</nobr> видите лучшее <nobr>в людях,</nobr> умеете найти единственно правильные слова, которые вселяют уверенность <nobr>в своих</nobr> силах <nobr>и возможности</nobr> любых невозможных свершений. Воодушевить близких <nobr>на тотальную</nobr> смену обстановки? Собрать удаленную команду, говорящую <nobr>на разных</nobr> языках <nobr>и нацеленную</nobr> <nobr>на успех</nobr> общего дела, — может быть, запуск нового «единорога», <nobr>а может</nobr> быть ... постановку оперы? Вы удивитесь, сколько единомышленников соберет любое ваше начинание! Кстати, вам уже позвонил Юрий Башмет <nobr>с предложением</nobr> совместного проекта?"
      />
    </transition>
  </div>
</template>

<script>
import Card from "./Card";
import QA from "./QA";
import Result from "./Result";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      winner: "",
      winnerBranch: null,
      currentAnswer: "",
      qa1: [
        {
          text:
            "Волшебно! Наконец исполнилась моя мечта — только природа, <nobr>и никакой</nobr> городской суеты!",
          value: ["wizard", "dreamer"]
        },
        {
          text:
            "Фантастически! Столько новых маршрутов, открытий! Мне кажется, мы были настоящими исследователями <nobr>и искателями</nobr> приключений!",
          value: ["inventor", "researcher"]
        },
        {
          text:
            "Незабываемо! Столько интересных гостей, столько интересных людей <nobr>и знакомств!</nobr>",
          value: ["traveler", "mastermind"]
        }
      ],
      qa2: [
        {
          text:
            "Точно помню – все получили поздравления <nobr>с прошедшими</nobr> праздниками, <nobr>а заодно</nobr> напоминание <nobr>о текущих</nobr> задачах <nobr>и ближайшей</nobr> встрече <nobr>со своим</nobr> руководителем. Работа продолжается!",
          value: ["inventor", "researcher"]
        },
        {
          text:
            "Пока все собирались, <nobr>у меня</nobr> было время погрузиться <nobr>в прогнозы</nobr> аналитиков <nobr>и футурологов,</nobr> набросать пару-тройку сценариев <nobr>на ближайшие</nobr> лет пять <nobr>и заглянуть</nobr> <nobr>за точку</nobr> сингулярности.",
          value: ["wizard", "dreamer"]
        },
        {
          text:
            "Лучшее начало года – чаепитие с коллегами: обменяться впечатлениями <nobr>о прошедших</nobr> праздниках. <nobr>А к работе</nobr> все вернутся <nobr>и без напоминаний!</nobr>",
          value: ["traveler", "mastermind"]
        }
      ],
      qa3: [
        {
          text:
            "Дааа!.. <nobr>В это</nobr> время всегда столько цветов <nobr>и подарков —</nobr> это очень красиво! Хотя <nobr>к чему</nobr> рассказы? Давайте лучше вам все это покажу! <nobr>У меня</nobr> тут столько фотографий.",
          value: ["dreamer", "wizard"]
        },
        {
          text:
            "Ох, непростое время! Каждый год приходится перерыть весь интернет, <nobr>чтобы придумать,</nobr> <nobr>чем новым</nobr> можно порадовать коллег <nobr>в эти</nobr> праздники! Считаю, <nobr>что лучший</nobr> подарок можно сделать только своими руками.",
          value: ["inventor", "researcher"]
        },
        {
          text:
            "Лучший подарок — ощущение счастья! <nobr>В таких</nobr> случаях всегда готовлю яркую речь. <nobr>Так приятно</nobr> видеть, <nobr>как глаза</nobr> коллег зажигаются радостью, <nobr>а на лицах</nobr> появляются улыбки!",
          value: ["traveler", "mastermind"]
        }
      ],
      qa4: [
        {
          text:
            "Ну как что? Это — «удаленка». Пожалуй, единственный способ оставаться <nobr>на связи</nobr> <nobr>с коллегами,</nobr> клиентами, друзьями, <nobr>да и вообще</nobr> <nobr>со всем</nobr> миром!",
          value: ["traveler", "mastermind"]
        },
        {
          text:
            "Да это <nobr>и сейчас</nobr> так. <nobr>Для меня</nobr> гаджеты — это 1000 <nobr>и 1 способ</nobr> снять стресс <nobr>и «поймать</nobr> дзен». Окно <nobr>в большой</nobr> мир.",
          value: ["dreamer", "wizard"]
        },
        {
          text:
            "Похоже, вы <nobr>об интернете</nobr> <nobr>и онлайне.</nobr> <nobr>В первую</nobr> очередь это — самые актуальные знания <nobr>и ответы</nobr> <nobr>на все</nobr> вопросы. Сейчас иначе нельзя — пропустишь что-то, <nobr>и уже не догнать!</nobr>",
          value: ["inventor", "researcher"]
        }
      ],
      qa5: [
        {
          text:
            "Ну, в каком-то смысле да! <nobr>С онлайн-доставкой</nobr> можно забыть <nobr>о времени</nobr> <nobr>на кухне</nobr> <nobr>и баловать</nobr> себя творениями лучших шеф-поваров.",
          value: ["dreamer", "wizard"]
        },
        {
          text:
            "Совсем наоборот — только свежеприготовленное дома! Мои завтраки, обеды <nobr>и ужины</nobr> стали поводом экспериментировать <nobr>с рецептами</nobr> <nobr>со всего</nobr> мира. Раньше <nobr>и представить</nobr> было нельзя, <nobr>что смогу</nobr> приготовить севиче <nobr>или идеальный</nobr> стейк.",
          value: ["inventor", "researcher"]
        },
        {
          text:
            "Никакие прямоугольники <nobr>не заменят</nobr> личного участия! Есть <nobr>или готовить</nobr> можно только <nobr>в компании</nobr> единомышленников. <nobr>Вот я</nobr> вижу, <nobr>в вас</nobr> есть настоящий талант <nobr>в кулинарии!</nobr> <nobr>Что там</nobr> <nobr>у вас</nobr> сейчас едят? Приготовите?",
          value: ["mastermind", "traveler"]
        }
      ],
      qa6: [
        {
          text:
            "Музеи, театры — хотя бы <nobr>и онлайн.</nobr> Язык искусства будет понятен всем!",
          value: ["dreamer", "wizard"]
        },
        {
          text:
            "Сериалы, сериалы <nobr>и еще</nobr> раз сериалы. Все, <nobr>что вы</nobr> хотели знать <nobr>о людях —</nobr> там. Вы уже умеете одновременно смотреть несколько сериалов?",
          value: ["mastermind", "traveler"]
        },
        {
          text:
            "Читайте рецензируемые научные издания — непредвзятость, точное знание, аргументированно <nobr>и без ненужных</nobr> эмоций. Кстати, <nobr>и про то, как устроено</nobr> наше питание <nobr>в подробностях</nobr> узнаете.",
          value: ["researcher", "inventor"]
        }
      ],
      qa7: [
        {
          text:
            "Спасибо <nobr>за приглашение,</nobr> <nobr>но, боюсь,</nobr> <nobr>что в ближайшее</nobr> время — только силой мысли.",
          value: ["dreamer", "wizard"]
        },
        {
          text:
            "Не будем изобретать колесо — давайте вы меня просто захватите <nobr>с собой</nobr> <nobr>на обратном</nobr> пути.",
          value: ["traveler", "mastermind"]
        },
        {
          text:
            "Это вопрос будущего. Ближайшего будущего. Я <nobr>как раз обдумываю</nobr> несколько разработок.",
          value: ["inventor", "researcher"]
        }
      ],
      qa8: [
        {
          text:
            "Такими долгожданными личными встречами <nobr>в «реальном</nobr> мире». Смотреть друг другу <nobr>в глаза</nobr> <nobr>и делиться</nobr> эмоциями — невозможно было представить, насколько это важно!",
          value: ["wizard", "dreamer"]
        },
        {
          text:
            "Открытиями ученых. Лучшие умы человечества объединились <nobr>в исследовании</nobr> вируса. Это <nobr>ли не повод</nobr> <nobr>для восхищения!</nobr>",
          value: ["inventor"]
        },
        {
          text:
            "Никогда раньше <nobr>не приходилось</nobr> учиться <nobr>с такой</nobr> скоростью! Мне кажется, я уже <nobr>умею все:</nobr> кодировать, руководить <nobr>на расстоянии,</nobr> делать ремонт, говорить <nobr>на всех</nobr> языках, играть <nobr>на фортепиано</nobr> <nobr>и трубе,</nobr> управлять любым транспортом – <nobr>от лошади</nobr> <nobr>до яхты!</nobr>",
          value: ["researcher"]
        },
        {
          text:
            "Поразительным контрастом событий — никогда раньше великое <nobr>не стояло</nobr> <nobr>так близко</nobr> <nobr>к абсурдному,</nobr> <nobr>а радостное —</nobr> <nobr>к печальному.</nobr>",
          value: ["traveler", "mastermind"]
        }
      ],
      qa9: [
        {
          text:
            "Красота <nobr>в простоте.</nobr> Я дарю вам эту морскую раковину. <nobr>В ней</nobr> спрятан шум прибоя.",
          value: ["dreamer"]
        },
        {
          text:
            "Магический кристалл. Когда через него проходит луч света, он превращается <nobr>в огонь!</nobr> Вы когда-нибудь видели такое?",
          value: ["wizard"]
        },
        {
          text:
            "Возьмите этот альбом <nobr>с репродукциями</nobr> чертежей Леонардо да Винчи. Кажется, этот величайший художник <nobr>и ученый</nobr> прилетел откуда-то <nobr>с вашей</nobr> планеты!",
          value: ["inventor"]
        }
      ],
      qa10: [
        {
          text:
            "Подзорную трубу. В путешествии <nobr>так важно</nobr> видеть, <nobr>куда направляешься!</nobr>",
          value: ["traveler"]
        },
        {
          text:
            "Музык разных самых. <nobr>Нет ничего</nobr> лучше музыки — поддержит, вдохновит, придаст энергии!",
          value: ["mastermind"]
        },
        {
          text:
            "Блокнот — записывать свои вопросы! Именно вопросы <nobr>и поиск</nobr> ответов <nobr>на них —</nobr> самый мощный двигатель!",
          value: ["researcher"]
        }
      ]
    };
  },
  components: {
    Card,
    QA,
    Result
  },

  computed: {
    ...mapGetters(["STEP_STATE", "ANSWERS_STATE"]),

    classObject() {
      let obj = {};
      obj["tree_" + this.STEP_STATE] = this.STEP_STATE;
      return obj;
    }
  },

  methods: {
    ...mapActions(["CHANGE_STATE", "CHANGE_ANSWERS"]),

    nextStep() {
      if (this.currentAnswer !== "" && this.STEP_STATE >= 4) {
        this.CHANGE_ANSWERS(this.currentAnswer);
        this.CHANGE_STATE("+");
        this.currentAnswer = "";
      } else if (this.STEP_STATE < 4) {
        this.CHANGE_STATE("+");
      }

      document.querySelector("#app").scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },

    prevStep() {
      this.CHANGE_STATE("-");
      document.querySelector("#app").scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },

    nextStepDouble() {
      if (this.currentAnswer) {
        this.CHANGE_ANSWERS(this.currentAnswer);
        this.CHANGE_ANSWERS(this.currentAnswer);
        this.CHANGE_STATE("+");
        this.currentAnswer = "";
        this.choiceBranch("+");
      }
    },

    pickedAnswer(picked) {
      this.currentAnswer = picked;
    },

    viewResult() {
      this.CHANGE_STATE("+");
    },

    choiceBranch() {
      let result = Object.entries(this.ANSWERS_STATE).reduce((prev, cur) => {
        if (prev[1] > cur[1] || prev[1] == cur[1]) {
          return prev;
        }
        return cur;
      });

      if (
        result[0] === "wizard" ||
        result[0] === "dreamer" ||
        result[0] === "inventor"
      ) {
        this.winnerBranch = 0;
      } else if (
        result[0] == "traveler" ||
        result[0] == "researcher" ||
        result[0] == "mastermind"
      ) {
        this.winnerBranch = 1;
      }
    },

    setWinner() {
      let result = Object.entries(this.ANSWERS_STATE).reduce((prev, cur) => {
        if (prev[1] > cur[1] || prev[1] == cur[1]) {
          return prev;
        }
        return cur;
      });

      this.winner = result[0];
      this.CHANGE_STATE("+");
    }
  }
};
</script>

<style lang="scss">
.title {
  margin-bottom: 30px;
  display: block;
  color: #009cbd;
}

.test {
  $self: &;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: auto 0;
  @media screen and (max-width: 992px) {
    margin-top: 0;
  }
  &__start {
    text-align: center;
    font-size: 21px;
    line-height: 25px;
    p {
      margin: 0;
    }
  }
  &__footer {
    display: flex;
    margin-top: 20px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  &__btn {
    padding: 0;
    margin-left: auto;
    transition: 0.3s;
    opacity: 1;
    user-select: none;
    font-weight: 300;
    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }
    &_back {
      margin-left: 0;
      width: 35px;
      height: 35px;
      transform: rotate(180deg);

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  &__start {
    margin-top: auto;
    position: absolute;
    bottom: 5vh;
    font-weight: 300;
    text-transform: uppercase;
    @media screen and (max-width: 992px) {
      margin-bottom: 0;
      font-size: 21px;
      line-height: 25px;
      position: absolute;
      bottom: 5vh;
      padding: 0 20px;
    }
  }
  &__gift {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);

    img {
      cursor: pointer;
      animation: shake 1s infinite;
    }
  }

  &__result {
    img {
      width: 100%;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes shake {
  0% {
    transform: translate(3px, 0);
  }
  5%,
  15% {
    transform: translate(-3px, 0);
  }
  10%,
  20% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>

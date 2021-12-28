<template>
  <section class="team">
    <h1>команда</h1>
    <div class="kkv">
      <div class="kkb__name-mobile">Кирилл Калашников</div>
      <div class="kkv__subtitle-mobile">Генеральный Продюсер</div>
      <div class="kkv__avatar">
        <img src="@/assets/img/avatar/kkv.png" />
      </div>
      <div class="kkv__about">
        <div class="kkb__name">Кирилл Калашников</div>
        <div class="kkv__subtitle">Генеральный Продюсер</div>
        <div class="kkv__description">
          <p>
            Идейный Вдохновитель, Наставник, первый Продюсер тех, благодаря кому
            многие из вас начали вести свой блог! Видит талант и успех с первого
            взгляда, До безумия креативный, творческий и знает как сделать новых
            любимцев интернета. <br />С ним начинали теперь уже нашумевшие
            продюсеры блогеров.
          </p>
          <p>
            Он дружит со звёздами отечественного рэпа, шоу-бизнеса. Его уважают,
            любят и с ним скандалят ошумевшие проекты. Участие Кирилла в
            проектах оставило след в истории интернета. Новые лица стали теми,
            кем вдохновлялся каждый второй новый блогер. Ивангай | МарьянаРо |
            LittleBig | Эльдар Джарахов и многие другие…
          </p>
        </div>
      </div>
    </div>

    <div class="commands">
      <div
        class="commands__card"
        v-for="(command, index) in commands"
        :key="index"
      >
        <img :src="require(`~/assets/img/avatar/${command.avatar}.png`)" />
        <div class="commands__name">{{ command.name }}</div>
        <div class="commands__subtitle">{{ command.subtitle }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      commands: [
        {
          avatar: "timur",
          name: "Березицкий Тимур",
          subtitle: "Режиссер-Оператор",
        },
        {
          avatar: "nasty",
          name: "Филиппова Анастасия",
          subtitle: "Исполнительный продюсер",
        },
        {
          avatar: "lesy",
          name: "Антуфьева Олеся",
          subtitle: "Project manager",
        },
        {
          avatar: "alex",
          name: "Алексей",
          subtitle: "Сценарист",
        },
        {
          avatar: "dmitriy",
          name: "Дмитрий Чирков",
          subtitle: "Режиссер постановщик",
        },
        {
          avatar: "radion",
          name: "Чикунов Радион",
          subtitle: "Саунд-продюсер",
        },
      ],
    };
  },
};
</script>
<style>
.team {
  min-height: calc(100vh - 20px);
  background-color: #000;
  padding-bottom: 20px;
  background-image: url("@/assets/img/bg/team_bg.png");
  background-repeat: repeat;
  background-size: 100% 100%;
}
.team h1 {
  font-family: "Bebas Neue";
  font-size: 64px;
  line-height: 77px;
  letter-spacing: 0.1em;
  color: #ffffff;
  text-align: center;
  padding-top: 60px;
  margin-bottom: 95px;
  text-shadow: 2px 4px 10px #f72e1a;
}
.kkv {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.kkv__avatar,
.kkv__about {
  flex: 50%;
}
.commands {
  margin-top: 100px;
}
.kkv__avatar {
  text-align: center;
}
.kkb__name {
  font-family: "Intro";
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0.075em;
  color: #ffffff;
  text-shadow: 0px 4px 10px #f72e1a;
  margin-bottom: 6px;
}
.kkv__subtitle {
  font-family: "Gabriela";
  font-size: 24px;
  line-height: 31px;
  letter-spacing: 0.075em;
  color: #facf43;
  margin-bottom: 43px;
  text-shadow: 0px 4px 10px #f72e1a;
}
.kkv__description {
  font-family: "PT Mono";
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0.075em;
  color: #ffffff;
}
.kkv__description p {
  margin-bottom: 10px;
}
.commands {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.commands__card {
  width: 33%;
  flex-grow: 1;
  text-align: center;
}
.commands__name {
  font-family: "Intro";
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.075em;
  color: #ffffff;
  text-shadow: 0px 4px 10px #f72e1a;
}
.commands__subtitle {
  font-family: "Bebas Neue";
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.1em;
  color: #ffffff;
  text-shadow: 2px 4px 10px #f72e1a;
}
.kkb__name-mobile,
.kkv__subtitle-mobile {
  display: none;
}
@media (max-width: 768px) {
  .team h1 {
    margin-bottom: 10px;
  }
  .commands__card {
    width: 50%;
  }
  .kkb__name,
  .kkv__subtitle {
    display: none;
  }
  .kkv__about {
    padding: 10px;
  }
  .kkb__name-mobile,
  .kkv__subtitle-mobile {
    display: block;
  }
  .kkb__name-mobile {
    font-family: "Intro";
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.075em;
    color: #ffffff;
    text-align: right;
    text-shadow: 0px 4px 10px #f72e1a;
    margin-bottom: 6px;
  }
  .kkv__subtitle-mobile {
    font-family: "Gabriela";
    font-size: 18px;
    line-height: 31px;
    letter-spacing: 0.075em;
    color: #facf43;
    margin-bottom: 43px;
    text-align: right;
    text-shadow: 0px 4px 10px #f72e1a;
  }
  .kkv {
    flex-wrap: wrap;
    justify-content: left;
  }
  .commands__card img {
    width: 100%;
  }
  .commands__name {
    font-size: 18px;
  }
  .commands__subtitle {
    font-size: 14px;
  }
}
</style>

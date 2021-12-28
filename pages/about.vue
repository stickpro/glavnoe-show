<template>
  <div class="about__container">
    <section class="about">
      <div class="about__title">
        <h1>О шоу</h1>
        <div class="about__subtitle">
          <hr />
          <p>Главная Роль - это разрыв шаблонов театральных постановок</p>
          <p>
            Смешение двух культур - востока и запада, двух времён - прошлого и
            будущего, смешение двух исторических эпох на сцене одного
            иммерсивного театра!
          </p>
          <p>
            Команда профессионалов, с большими творческими навыками, проживает
            на вилле в Гаграх и проходит подготовку к спектаклю.
          </p>
          <p>
            В реалити-шоу участников ждут захватывающие путешествия по красотам
            природы Черноморского побережья.
          </p>
          <p>
            Ежедневные обучения творческим навыкам и передача опыта своему
            коллективу.
          </p>
          <p>Интригующие события и экстраординарные шоу внутри проекта.</p>
        </div>
      </div>
    </section>
    <section class="autor">
      <div class="autor__name">
        <h1>История Поэмы «Чингис-Хан»:</h1>
        <h2>Виктор Слипенчук</h2>
        <img src="@/assets/img/autor.png" />
      </div>
      <div class="autor__description">
        <p>
          Поэма отразила героическую борьбу, трудную жизнь и величие полководца.
          Автор сумел вплести в ткань поэмы исторические факты, связанные с
          Хорезмийской кампанией, вторым походом на царство Тангут и интересом
          монгольского правителя к учению Даосского монаха Чань Чуня.
        </p>
        <p>
          Произведение было написано автором многих повестей, рассказов и
          очерков, в далёком 1964 году, а издана только в 2011 году.
        </p>
        <p>
          Мы хотим отдать дань истории и уже в 2022 году - мы увидим нечто
          уникальное и перевернем представление о музыкальных постановках.
        </p>
        <p>
          Поэму зачтут популярные блогеры на сцене в формате ультрасовременного
          мюзикла - "Рейвсодии". Премьера постановки состоится в г.Сочи
        </p>

        <p>
          Поэт - Слипенчук Виктор Трифонович — Член Союза писателей СССР (1982),
          член-корреспондент Академии Российской словесности (2009), награждён
          Золотой Есенинской медалью «За верность традициям русской культуры и
          литературы» (2009). Автор поэмы "Чингисхан"
        </p>
      </div>
    </section>
  </div>
</template>
<style scoped>
.about__container {
  min-height: calc(100vh - 20px);
  background-color: #000;
  padding-bottom: 20px;
  background-image: url("@/assets/img/bg/about_bg.png");
  background-repeat: no-repeat;
}
.about {
  width: 45%;
  margin-left: auto;
  background-color: #000;
  padding: 50px;
}
.about__title {
  width: 100%;
  text-align: left;
  font-size: 54px;
  padding-top: 56px;
}
.about__title h1 {
  color: #facf43;
  font-family: "Bebas Neue";
}
.about__subtitle {
  font-family: "PT Mono";
  font-size: 20px;
  margin-top: 48px;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0.045em;
  color: #fff;
  position: relative;
}
.about__subtitle hr {
  border: 2px solid #facf43;
  box-shadow: 5px 0px 20px #facf43;
  background: #facf43;
  position: absolute;
  height: 110%;
  left: -30px;
  top: -30px;
}
.about__subtitle p {
  margin-bottom: 20px;
}
.autor__name h1 {
  font-family: "Gabriela";
  color: #fff;
  font-size: 32px;
  line-height: 32px;
}
.autor__name h2 {
  font-family: "Bebas Neue";
  color: #facf43;
  font-size: 48px;
}
.autor {
  display: flex;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 100px;
}
.autor__name img {
  width: 100%;
  max-width: 500px;
  height: auto;
}
.autor__name {
  width: 50%;
}
.autor__description {
  max-width: 627px;
  background: #1e1e1e;
  padding: 21px 17px;
  color: #fff;
  font-family: "PT Mono";
  font-size: 14px;
  box-shadow: 10px 10px 15px #facf43;
  line-height: 142%;
  letter-spacing: 0.085em;
}
.autor__description p {
  margin-bottom: 20px;
}
@media (max-width: 768px) {
  .autor,
  .about {
    width: auto;
    margin: auto;
    padding: 10px;
    flex-wrap: wrap;
    background: #000;
  }
  .autor__name {
    width: 100%;
  }
}
</style>

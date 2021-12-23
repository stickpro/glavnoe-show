<template>
  <div class="parthners__container">
    <section class="parthners">
      <div class="parthners__title">
        <h1>Партнёры</h1>
      </div>
      <div class="parthners__subtitle">
        Партнеры шоу "Главная роль" - компании и бренды, которые поддерживают
        общую идею и концепцию шоу, становясь его частью. Оказываемая партнёрами
        поддержка позволяет воплотить большее количество проектов.
      </div>
      <div class="parthners__list">
        <div
          class="parthners__item"
          v-for="(parthner, index) in parthners"
          :key="index"
        >
          <a :href="parthner.link" class="parthners__card">
            <img
              :src="require(`~/assets/img/parthners/${parthner.logo}`)"
              alt=""
              width="120px"
            />
          </a>
          <a :href="parthner.link">
            <p>{{ parthner.name }}</p>
          </a>
        </div>
      </div>
    </section>
    <section class="parthners">
      <div class="parthners__title">
        <h1>презентация проекта</h1>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      parthners: [
        {
          name: "Allmy.blog",
          link: "https://allmy.blog/",
          logo: "allmyblog.png",
        },
        {
          name: "AdFinder",
          link: "https://adfinder.pro/",
          logo: "adfinder.png",
        },
        { name: "Taradam", link: "https://taradam.in/", logo: "taradam.png" },
        { name: "Cоюз блогеров", link: "https://sbr.team/", logo: "sbr.png" },
        { name: "Мэрия Гагр", link: "https://gagra.biz/", logo: "gagr.png" },
      ],
    };
  },
};
</script>
<style>
.parthners__container {
  min-height: 100vh;
  background-color: #000;
}
.parthners {
  padding: 0;
}
.parthners__title {
  width: 100%;
  text-align: center;
  font-size: 42px;
  padding-top: 56px;
  color: #fff;
}
.parthners__title h1 {
  font-family: "Intro";
  text-shadow: 0px 4px 20px #f72e1a;
}
.parthners__subtitle {
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: #fff;
  font-family: "Gabriela";
  max-width: 600px;
  margin: auto;
  margin-top: 56px;
}
.parthners__list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: auto;
}
.parthners__item {
  width: 20%;
  text-align: center;
}
.parthners__card {
  display: flex;
  min-height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.parthners__item a {
  font-size: 16px;
  color: #fff;
  text-decoration: none;
}
@media (max-width: 768px) {
  .parthners__item {
    width: 50%;
  }
}
</style>

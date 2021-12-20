<template>
  <section class="parthners">
    <div class="parthners__title">
      <h1>Партнеры</h1>
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
.parthners {
  margin-left: 160px;
}
.parthners__title {
  width: 100%;
  text-align: center;
  font-size: 42px;
  margin-top: 16px;
}
.parthners__subtitle {
  width: 100%;
  text-align: center;
  font-size: 16px;

  max-width: 400px;
  margin: auto;
  margin-top: 16px;
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
  color: #000;
  text-decoration: none;
}
</style>

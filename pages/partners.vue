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
      <ParthnerModal />
    </section>
    <section class="parthners">
      <div class="parthners__title">
        <h1>презентация проекта</h1>
      </div>
      <div class="parthners__presentation">
        <client-only>
          <splide>
            <splide-slide v-for="id in sliders" :key="id">
              <img
                :src="
                  require(`~/assets/img/presentation/Чингисхан_page-${id}.jpg`)
                "
                width="100%"
                alt=""
              />
            </splide-slide>
          </splide>
        </client-only>
      </div>
    </section>
  </div>
</template>
<script>
import ParthnerModal from "@/components/ParthnerModal";
export default {
  component: ["ParthnerModal"],
  data() {
    return {
      parthners: [
        {
          name: "Allmy.blog",
          link: "https://allmy.blog/",
          logo: "allmyblog.png",
        },
        {
          name: "Taradam",
          link: "https://taradam.in/",
          logo: "taradam-white-logo.png",
        },

        {
          name: "Cоюз блогеров",
          link: "https://sbr.team/",
          logo: "sbr-transparant.png",
        },
        {
          name: "AdFinder",
          link: "https://adfinder.pro/",
          logo: "adfinder.png",
        },
        { name: "Мэрия Гагр", link: "https://gagra.biz/", logo: "gagr.png" },
      ],
      sliders: [
        "0001",
        "0002",
        "0003",
        "0004",
        "0005",
        "0006",
        "0007",
        "0008",
        "0009",
        "0010",
        "0011",
        "0012",
      ],
      options: {
        rewind: true,
        width: 800,
        perPage: 2,
        gap: "1rem",
      },
    };
  },
};
</script>
<style>
.parthners__container {
  min-height: calc(100vh - 20px);
  background-color: #000;
  padding-bottom: 20px;
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
  font-family: "Bebas Neue";
  text-shadow: 0px 4px 20px #f72e1a;
  font-size: 48px;
}
.parthners__subtitle {
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: #fff;
  font-family: "PT Mono";
  max-width: 1098px;
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
  margin-bottom: 124px;
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
.parthners__presentation {
  max-width: 1024px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 10px 10px 15px #f72e1a;
  border-radius: 52px;
  padding: 16px;
  margin-bottom: 20px;
}
@media (max-width: 768px) {
  .parthners__item {
    width: 50%;
  }
  .parthners__subtitle {
    width: auto;
    margin-top: 7px;
    padding: 23px;
  }
}
</style>

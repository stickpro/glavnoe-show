<template>
  <section class="home">
    <div class="main-screen">
      <div class="main-description">
        <button class="btn btn-transparent">
          <svg-icon
            name="play-svgrepo-com"
            fill="#FACF43"
            width="21"
            height="21"
          />
          Показать трейлер
        </button>
        <p class="main-text">
          8 популярных блогеров ведут дневник по созданию рейв-мюзикла. Команда
          блогеров с творческими навыками, проживает на вилле в Гаграх и
          проходит подготовку к спектаклю. В реалити-шоу участники путешествия
          по красотам природы Черноморского побережья. Ежедневные обучения
          творческим навыкам и передача опыта своему коллективу. Интригующие
          события и экстраординарные шоу внутри проекта.
        </p>
        <div class="social__title">
          Подключись и будь с нами в прямом эфире!
        </div>
        <div class="social__link">
          <a href="https://www.tiktok.com/@glavnoe_show">
            <svg-icon name="tik-tok" width="33px" height="33px" />
          </a>
          <a href="https://www.instagram.com/glavnoe_show/">
            <svg-icon name="instagram" width="33px" height="33px" />
          </a>
          <a href="https://vk.com/glavnoe_show">
            <svg-icon name="vk" width="33px" height="33px" />
          </a>
          <a href="https://t.me/glavnoe_show">
            <svg-icon name="tg" width="33px" height="33px" />
          </a>
          <a href="https://www.youtube.com/channel/UCKCtGfgij-PZa7MHoaQSB0A">
            <svg-icon name="yt" width="33px" height="33px" />
          </a>
          <a href="https://www.facebook.com/groups/glavnoeshow">
            <svg-icon name="fb" width="33px" height="33px" />
          </a>
          <a href="https://wa.me/79384554887">
            <svg-icon name="wa" width="33px" height="33px" />
          </a>
        </div>
      </div>
    </div>
    <div class="main-nav" ref="navigate" v-if="false">
      <ul class="nav-list">
        <li
          v-for="(nav, index) in navigation"
          :key="index"
          @click="(seletctFilter = nav.type), goto('navigate')"
        >
          <img
            class="nav-img"
            :src="require(`~/assets/sprite/svg/${nav.icon}.svg`)"
          />
          <p>{{ nav.name }}</p>
        </li>
      </ul>
      <transition-group name="projects" tag="div" class="projects">
        <div
          class="translations-item"
          v-for="translation in filterTranslations"
          :key="translation.name"
        >
          <div class="card">
            <div class="card-image">
              <img :src="require(`~/assets/img/${translation.image}.jpg`)" />
            </div>
            <div class="card-title">{{ translation.name }}</div>
          </div>
        </div>
      </transition-group>
    </div>
    <div class="broadcasts">
      <div class="broadcast">
        <h1>Бесплатная трансляции</h1>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Awpv-UW2-Ys"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="broadcast">
        <h1>Голубой огонек с тиктокерами</h1>
        <iframe
          src="https://iframe.dacast.com/live/db64c826-f49e-9795-0093-c41798ebe5d4/96187f79-7555-0be7-88ce-3fdbd7634cc5"
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="no"
          allow="autoplay"
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          oallowfullscreen
          msallowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexPage",
  transition: "intro",
  data() {
    return {
      navigation: [
        { name: "Все трансляции", icon: "main-cam", type: null },
        { name: "Трансляции 360°", icon: "360main", type: "360" },
        {
          name: "Обычне камеры",
          icon: "bi_camera",
          type: "default",
        },
        { name: "Улица", icon: "et_streetsign", type: "streat" },
      ],
      seletctFilter: null,
      socials: [
        { icon: "instagram", link: "https://www.instagram.com/glavnoe_show/" },
        { icon: "vk", link: "https://vk.com/glavnoe_show" },
        { icon: "tik-tok", link: "https://www.tiktok.com/@glavnoe_show" },
        {
          icon: "youtube",
          link: "https://www.youtube.com/channel/UCKCtGfgij-PZa7MHoaQSB0A",
        },
      ],
      translations: [
        {
          name: "Камера 360 1",
          type: "360",
          link: "",
          image: "poster-5-500x705",
        },
        {
          name: "Камера 360 2",
          type: "360",
          link: "",
          image: "poster-5-500x705",
        },
        {
          name: "Камера 360 3",
          type: "360",
          link: "",
          image: "poster-5-500x705",
        },
        {
          name: "Камера 1",
          type: "default",
          link: "",
          image: "poster-5-500x705",
        },
        {
          name: "Камера 2",
          type: "default",
          link: "",
          image: "poster-5-500x705",
        },
        {
          name: "Камера 3",
          type: "default",
          link: "",
          image: "poster-5-500x705",
        },
        {
          name: "Камера 4",
          type: "default",
          link: "",
          image: "poster-5-500x705",
        },
        {
          name: "Улица 1",
          type: "streat",
          link: "",
          image: "poster-5-500x705",
        },
        {
          name: "Улица 2",
          type: "streat",
          link: "",
          image: "poster-5-500x705",
        },
        {
          name: "Улица 3",
          type: "streat",
          link: "",
          image: "poster-5-500x705",
        },
      ],
    };
  },
  computed: {
    filterTranslations() {
      if (!this.seletctFilter) return this.translations;
      else
        return this.translations.filter(
          (item) => item.type === this.seletctFilter
        );
    },
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      console.log(top);
      window.scrollTo({
        top: top + 50,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style>
.home {
  background-color: #000;
  padding-bottom: 50px;
}
.main-screen {
  height: 100vh;
  display: flex;
  align-items: end;
  justify-content: center;
  text-align: center;
  background-image: url(~/assets/img/Youtube_Main.jpg);
  background-repeat: no-repeat;
  background-color: #000;
  background-position-x: center;
  background-position-y: center;
  background-size: 100%;
  margin-top: -90px;
}
.main-description {
  color: #fff;
  text-align: center;
  max-width: 1024px;
  color: #facf43;
}
.main-description .btn {
  margin: auto;
  margin-bottom: 20px;
}
.main-description h1 {
  font-size: 56px;
}
.main-description p {
  font-size: 15px;
  color: #fff;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 10px;
}
.main-nav {
}
.nav-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  flex: 1;
  overflow: auto;
  color: #fff;
  font-family: "Bebas Neue", cursive;
}
.nav-list li {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  justify-content: space-around;
  min-height: 100px;
  text-align: center;
  min-width: 100px;
}
.nav-img {
  margin-bottom: 20px;
}
.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  background: radial-gradient(
    59.13% 59.13% at 48.84% 46.87%,
    #f72e1a 0%,
    #000000 84.9%
  );
  min-height: 500px;
  padding-bottom: 56px;
}
.translations-item {
  width: 20%;
  transition: all 0.35s ease-in-out;
}
.card {
  border-color: rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.08);
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.53);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.card-image img {
  width: 100%;
}
.card-title {
  padding: 10px;
  font-size: 18px;
  position: relative;
  background: #eee;
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.flip-list-move {
  transition: transform 0.8s ease;
}

.projects-enter {
  transform: scale(0.5) translatey(-80px);
  opacity: 0;
}

.projects-leave-to {
  transform: translatey(30px);
  opacity: 0;
}

.projects-leave-active {
  position: absolute;
  z-index: -1;
}
.desctiprion__project {
  padding: 30px;
  font-family: "Intro";
  text-align: center;
}
.btn-transparent {
  background-color: transparent;
  border: 3px solid #facf43;
  box-sizing: border-box;
  border-radius: 19.5px;
  font-family: "Intro";
  box-shadow: 0px 0px 20px 5px rgb(250 207 67 / 50%);
}
.social__title {
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffffff;
}
.main-text {
  font-family: "PT Mono", monospace;
  font-size: 16px;
}
.social__link {
  gap: 32px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
}
.broadcasts {
  display: flex;
  justify-content: center;
  min-height: 800px;
  gap: 44px;
  background-color: #000;
  padding: 15px;
  flex-wrap: wrap;
}
.broadcast {
  width: 46%;
}
.broadcast h1 {
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  padding: 20px;
  font-family: "Intro", monospace;
}
@media (max-width: 768px) {
  .translations-item {
    width: 45%;
  }
  .main-screen {
    background-position-y: 20%;
  }
  .nav-list {
    justify-content: normal;
    padding-bottom: 0;
  }
  .social__link {
    gap: 20px;
  }
}
</style>

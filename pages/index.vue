<template>
  <section class="home">
    <div class="main-screen">
      <div class="main-description">
        <button class="btn">
          <svg-icon
            name="play-svgrepo-com"
            fill="#fff"
            width="21"
            height="21"
          />
          Показать трейлер
        </button>
      </div>
      <div class="main__socials">
        <a
          v-for="(social, index) in socials"
          :key="index"
          target="_blank"
          :href="social.link"
        >
          <svg-icon :name="social.icon" width="20" height="20" />
        </a>
      </div>
    </div>
    <div class="desctiprion__project">
        <p>
          Команда популярных блогеров проживает на вилле в Гаграх и проходит
          подготовку к постановке ультрасовременного мюзикла в жанре -
          "рейвсодия". Участников ждут захватывающие путешествия по красотам
          природы Черноморского побережья. Ежедневные обучения творческим
          навыкам и передача опыта своему коллективу. Интригующие события и
          экстраординарные шоу внутри проекта. Здесь - настоящая и насыщенная
          жизнь блогеров! Ты - можешь стать одним из нас! Подключайся и окажись
          в доме с любимыми Блогерами
        </p>
    </div>
    <div class="main-nav" ref="navigate">
      <ul class="nav-list">
        <li
          v-for="(nav, index) in navigation"
          :key="index"
          @click="(seletctFilter = nav.type), goto('navigate')"
        >
          <svg-icon :name="nav.icon" width="60" height="60" />
          {{ nav.name }}
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
    <div class=""></div>
  </section>
</template>

<script>
export default {
  name: "IndexPage",
  transition: "intro",
  data() {
    return {
      navigation: [
        { name: "Все трансляции", icon: "camcoder", type: null },
        { name: "Трансляции 360°", icon: "360", type: "360" },
        {
          name: "Обычне камеры",
          icon: "video-camera-svgrepo-com",
          type: "default",
        },
        { name: "Улица", icon: "security-camera-svgrepo-com", type: "streat" },
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
.main-screen {
  height: 80vh;
  display: flex;
  align-items: end;
  justify-content: end;
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
  max-width: 500px;
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
}
.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  flex-wrap: wrap;
}
.nav-list li {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.translations-item {
  width: 20%;
  transition: all 0.35s ease-in-out;
}
.card {
  border-color: rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.06);
}
.card-image img {
  width: 100%;
}
.card-title {
  padding: 10px;
  font-size: 18px;
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
  font-family: 'Intro';
  text-align: center;
}
@media (max-width: 768px) {
  .translations-item {
    width: 90%;
  }
  .main-screen {
    height: 60vh;
    background-position-y: 20%;
  }
}
</style>

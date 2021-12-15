<template>
<main>
  <Header/>
  <Sidebar />
  <section class="home">
    <div class="main-screen">
      <div class="main-description">
        <h1>Главное Шоу</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        </p>
        <button class="btn">
          <svg-icon name="play-svgrepo-com" fill="#fff"  width="21" height="21"/>
          Показать трейлер</button>
      </div>
    </div>
    <div class="main-nav">
      <ul class="nav-list">
        <li v-for="(nav,index) in navigation" :key="index" @click="seletctFilter = nav.type">
          <svg-icon :name="nav.icon" width="60" height="60"/>
          {{ nav.name }}</li>
      </ul>
      <transition-group name="projects" tag="div" class="projects">
        <div class="translations-item" v-for="(translation, index) in filterTranslations" :key="index">
          <div class="card">
            <div class="card-image">
              <img :src="require(`~/assets/img/${translation.image}.jpg`)" />
            </div>
            <div class="card-title">{{ translation.name }}</div>
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</main>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'IndexPage',
  component: {
    Header,
    Sidebar
  },
  data() {
    return {
      navigation: [
        { name: 'Все трансляции', icon: 'camcoder', type: null},
        { name: 'Трансляции 360°', icon: '360', type: '360'},
        { name: 'Обычне камеры', icon: 'video-camera-svgrepo-com', type: 'default'},
        { name: 'Улица',  icon: 'security-camera-svgrepo-com', type: 'streat'},
      ],
      seletctFilter: null,
      translations: [
        { name: 'Камера 360 1', type: '360', link: '', image: 'poster-5-500x705'},
        { name: 'Камера 360 2', type: '360', link: '', image: 'poster-5-500x705'},
        { name: 'Камера 360 3', type: '360', link: '', image: 'poster-5-500x705'},
        { name: 'Камера 1', type: 'default', link: '', image: 'poster-5-500x705'},
        { name: 'Камера 2', type: 'default', link: '', image: 'poster-5-500x705'},
        { name: 'Камера 3', type: 'default', link: '', image: 'poster-5-500x705'},
        { name: 'Камера 4', type: 'default', link: '', image: 'poster-5-500x705'},
        { name: 'Улица 1', type: 'streat', link: '', image: 'poster-5-500x705'},
        { name: 'Улица 2', type: 'streat', link: '', image: 'poster-5-500x705'},
        { name: 'Улица 3', type: 'streat', link: '', image: 'poster-5-500x705'},
      ]
    }
  },
  computed: {
    filterTranslations() {
      if(!this.seletctFilter) return this.translations
      else return this.translations.filter(item => item.type === this.seletctFilter)
    }
  }
}
</script>
<style>
.home {
  margin-left: 160px;
}
.main-screen {
  background-color: #000;
  height: 60vh;
  display: flex;
  align-items: center;
  background-image: url(/_nuxt/assets/img/Youtube_avatar.jpg);
  background-repeat: no-repeat;
  background-color: #000;
  background-position-x: right;
  background-position-y: center;
  background-size: 60%;
  margin-top: -90px;
}
.main-description {
  font-family: 'Gabriela', serif;
  color: #fff;
  margin-left: 10%;
  max-width: 400px;
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
  padding: 30px
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
  transition: all .35s ease-in-out;
}
.card {
  border-color: rgba(0,0,0,0.08);
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow: 0px 3px 8px rgba(0,0,0,  0.06);
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
	opacity:0;
}

.projects-leave-to{
	transform: translatey(30px);
	opacity:0;
}

.projects-leave-active {
	position: absolute;
	z-index:-1;
}

</style>

<template>
  <section class="profile">
    <div
      class="profile_bg"
      :style="
        `background-image: url(` +
        require(`~/assets/img/bg/${profile.bg}`) +
        `)`
      "
    ></div>
    <div class="profile__card">
      <h1 class="profile__mobile">{{ profile.name }}</h1>
      <div class="profile__subtitle-mobile">{{ profile.subtitle }}</div>
      <div class="profile__avatar">
        <img :src="require(`~/assets/img/avatar/big_${profile.avatar}`)" />
      </div>
      <div class="profile__info">
        <h1>{{ profile.name }}</h1>
        <div class="profile__subtitle">{{ profile.subtitle }}</div>
        <div class="profile__description">{{ profile.description }}</div>
        <div class="profile__auditory">Аудитория: > {{ profile.auditory }}</div>
        <div class="profile__social">
          <a
            :href="`https://tiktok.com/@${profile.tiktok}`"
            v-if="profile.tiktok"
          >
            <svg-icon name="tik-tok" width="33" height="33" />
          </a>
          <a
            :href="`https://instagram.com/${profile.instagram}`"
            v-if="profile.instagram"
          >
            <svg-icon name="instagram" width="33" height="33" />
          </a>
          <a :href="`https://vk.com/${profile.vk}`" v-if="profile.vk">
            <svg-icon name="vk" width="33" height="33" />
          </a>
          <a
            :href="`https://tg.me/${profile.telegram}`"
            v-if="profile.telegram"
          >
            <svg-icon name="tg" width="33" height="33" />
          </a>
          <a :href="`${profile.youtube}`" v-if="profile.youtube">
            <svg-icon name="yt" width="33" height="33" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "profile",
  async asyncData({ $content, params }) {
    const profile = await $content("users", params.slug).fetch();
    return { profile };
  },
};
</script>
<style>
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
.profile_bg {
  width: calc(100% - 211px);
  height: 100vh;
  position: absolute;
  z-index: -1;
  top: 0;
  background-color: #000;
  background-position: -144px bottom;
  background-repeat: no-repeat;
  padding: 0;
}
.profile__card {
  display: flex;
  text-align: left;
  color: #fff;
  flex-wrap: wrap;
}
.profile__avatar {
  margin-right: 165px;
}
.profile__info {
  max-width: 500px;
  margin-top: 20px;
  padding: 20px;
}
.profile__info h1 {
  font-size: 48px;
  margin-bottom: 20px;
  font-family: "Intro";
}
.profile__subtitle {
  font-family: "Bebas Neue";
  font-size: 24px;
}
.profile__description,
.profile__auditory {
  font-family: "PT Mono";
  font-size: 18px;
  margin-top: 20px;
  line-height: 20px;
}
.profile__social {
  margin-top: 30px;
  display: flex;
  gap: 35px;
}
.profile__mobile,
.profile__subtitle-mobile {
  display: none;
}
@media (max-width: 768px) {
  .profile__mobile {
    font-size: 48px;
    margin-bottom: 20px;
    font-family: "Intro";
    display: block;
    width: 100%;
    padding: 0 10px;
  }
  .profile__subtitle-mobile {
    font-family: "Bebas Neue";
    font-size: 24px;
    display: block;
    width: 100%;
    padding: 0 10px;
  }
  .profile__info h1,
  .profile__subtitle {
    display: none;
  }
  .profile__avatar {
    margin: 0;
    margin-left: -61px;
    margin-top: 26px;
  }
  .profile_bg {
    width: 100%;
  }
}
</style>

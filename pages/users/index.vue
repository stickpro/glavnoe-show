<template>
  <section class="users">
    <div class="user__bg"></div>
    <div class="user__title">
      <h1>Участники</h1>
    </div>
    <div class="users__list">
      <div class="users__item" v-for="(user, index) in users" :key="index">
        <nuxt-link :to="`users/${user.slug}`">
          <div class="users__avatar">
            <img :src="require(`~/assets/img/avatar/${user.avatar}`)" />
          </div>
          <div class="users__name">
            {{ user.name }}
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
import usersData from "@/api/users/list.json";
import FlipCountdown from "vue2-flip-countdown";
export default {
  transition: "intro",
  components: { FlipCountdown },
  data() {
    return {
      users: usersData,
      hide: false,
    };
  },
};
</script>

<style scoped>
.users {
  padding: 0;
}
.user__bg {
  width: calc(100% - 211px);
  height: 100vh;
  position: absolute;
  z-index: -1;
  top: 0;
  background: url("@/assets/img/users-bg.png");
  background-color: #000;
  background-position: left center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0;
}
.user__title {
  width: 100%;
  text-align: center;
  font-size: 42px;
  margin-top: 55px;
  color: #facf43;
}
.user__title h1 {
  font-family: "Bebas Neue";
}
.users__list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 82px;
}
.users__avatar img {
  width: 100%;
  max-width: 213px;
}
.users__item {
  width: 20%;
  text-align: center;
  transition: all 0.35s ease-in-out;
  border-color: rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.06);
}
.users__name {
  padding: 10px;
  color: #fff;
  font-size: 24px;
  margin-top: 20px;
  text-align: center;
}
.timer {
  margin-top: 30px;
}
</style>

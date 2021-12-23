<template>
  <section class="users">
    <div class="user__bg"></div>
    <div class="user__title">
      <h1>Участники</h1>
    </div>
    <div class="users__list">
      <div class="users__item" v-for="(user, index) in users" :key="index">
        <div class="users__avatar">
          <img
            src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairDreads&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardMajestic&facialHairColor=Brown&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Tanned"
          />
        </div>
        <div class="users__name">
          {{ user.name }}
        </div>
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
.user__bg {
  width: calc(100% - 221px);
  height: 100vh;
  position: absolute;
  z-index: -1;
  top: 0;
  background: linear-gradient(243.61deg, #000000 37.88%, #facf43 149.87%);
}
.user__title {
  width: 100%;
  text-align: center;
  font-size: 42px;
  margin-top: 16px;
  color: #facf43;
}
.user__title h1 {
  font-family: 'Intro';
}
.users__list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 26px;
}
.users__avatar img {
  width: 100%;
}
.users__item {
  width: 45%;
  transition: all 0.35s ease-in-out;
  border-color: rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.06);
}
.users__name {
  padding: 10px;
  text-align: center;
}
.timer {
  margin-top: 30px;
}
</style>

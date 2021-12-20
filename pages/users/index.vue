<template>
  <section class="users">
    <div class="user__title">
      <h1>Участники</h1>
    </div>
    <div class="users__list" v-if="hide">
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
    <div class="user__coming" v-else>
      <div class="user__title">
        Совсем скоро мы огласим список всех участников
      </div>
      <div class="timer">
        <client-only>
        <flip-countdown deadline="2021-12-22 00:00:00"></flip-countdown>
        </client-only>
      </div>
    </div>
  </section>
</template>
<script>
import usersData from "@/api/users/list.json";
import FlipCountdown from 'vue2-flip-countdown'
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
.user__title {
  width: 100%;
  text-align: center;
  font-size: 42px;
  margin-top: 16px;
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
  width: 20%;
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

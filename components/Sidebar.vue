<template>
  <div>
    <button type="button" class="menu-activator" @click="show = !show">
      <svg-icon
        :name="!show ? 'burger' : 'xmark'"
        width="26"
        fill="#fff"
        height="26"
      />
    </button>
    <div class="menu-sidebar" :class="show ? 'show-menu' : ''">
      <ul>
        <li @click="show = false">
          <nuxt-link to="/" class="link"> Онлайн трансляции </nuxt-link>
        </li>
        <li @click="show = false">
          <nuxt-link to="/users" class="link"> Участники </nuxt-link>
        </li>
        <li @click="show = false">
          <nuxt-link to="/partners" class="link"> Партнеры </nuxt-link>
        </li>
        <li @click="show = false">
          <nuxt-link to="/about" class="link"> О шоу </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.menu-sidebar {
  background: #000;
  width: 211px;
  position: fixed;
  height: 100vh;
  top: 0;
  display: flex;
}
.menu-sidebar ul {
  margin-top: auto;
  margin-bottom: auto;
}
.link {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  justify-items: center;
  margin: auto;
  font-family: "Intro", serif;
  padding: 20px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  text-shadow: 3px 6px 10px rgba(255, 255, 255, 0.45);
  text-decoration: none;
  min-height: 90px;
}
.link svg {
  fill: #fff;
}
.link:focus {
  outline: none;
}
.link::after {
  content: "";
  display: block;
  border: 1px solid #ffffff;
  filter: blur(2px);
  width: 61px;
  margin: 12px auto;
}
.link.nuxt-link-exact-active {
  color: #facf43;
}
.link.nuxt-link-exact-active svg {
  fill: #facf43;
}
.menu-activator {
  display: none;
}

@media (max-width: 768px) {
  .menu-sidebar {
    display: none;
  }
  .menu-activator {
    display: block;
    position: absolute;
    top: 25px;
    right: 25px;
    background-color: transparent;
    border: none;
  }
}
.show-menu {
  height: auto;
  display: block;
  position: absolute;
  top: 95px;
  width: 100%;
  z-index: 100;
}
</style>

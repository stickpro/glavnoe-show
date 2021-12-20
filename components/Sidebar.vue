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
        <li>
          <nuxt-link to="/" class="link">
            <svg-icon
              name="video-player-streaming-svgrepo-com"
              width="40"
              height="40"
              class="m-auto"
            />
            Онлайн трансляции
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/users" class="link">
            <svg-icon
              name="users-svgrepo-com"
              width="40"
              height="40"
              class="m-auto"
            />
            Участники
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/partners" class="link">
            <svg-icon
              name="partner-handshake"
              width="50"
              height="50"
              class="m-auto"
            />
            Партнеры
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about" class="link">
            <svg-icon name="more-info" width="50" height="50" class="m-auto" />
            О шоу
          </nuxt-link>
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
  width: 160px;
  position: fixed;
  height: 100vh;
  top: 95px;
  box-shadow: 19px 0px 32px -23px rgb(255 255 255 / 45%);
}
.link {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  justify-items: center;
  margin: auto;
  font-family: "Gabriela", serif;
  padding: 20px;
  color: #fff;
  text-decoration: none;
  min-height: 90px;
  border-top: 1px solid #f1f1f150;
}
.link svg {
  fill: #fff;
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
}
</style>

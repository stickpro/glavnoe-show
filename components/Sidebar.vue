<template>
  <div class="menu-sidebar">
    <ul>
      <li>
        <nuxt-link to="/" class="link link-active">
        <svg-icon name="video-player-streaming-svgrepo-com" fill="#facf43" width="40" height="40" class="m-auto"/>
         Онлайн трансляции
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="link">
        <svg-icon name="users-svgrepo-com" fill="#fff" width="40" height="40" class="m-auto"/>
         Участники
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu-sidebar {
  background: #000;
  width: 160px;
  position: fixed;
  height: 100vh;
  box-shadow: 19px 0px 32px -23px rgb(255 255 255 / 45%);
}
.link {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  justify-items: center;
  margin: auto;
  font-family: 'Gabriela', serif;
  padding: 20px;
  color: #fff;
  text-decoration: none;
  min-height: 90px;
  border-top: 1px solid #f1f1f150;
}
.link-active {
    color: #facf43;
}
</style>

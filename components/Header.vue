<template>
  <header class="header-top">
    <div class="header-logo">
      <nuxt-link to="/" class="logo-link">
        <img src="@/assets/img/logo-500x500.png" alt="" width="95px" />
      </nuxt-link>
    </div>
  </header>
</template>
<style scoped>
.header-top {
  background-color: #000;
  width: 100%;
  height: 95px;
}
.header-logo {
  width: 160px;
  position: fixed;
  top: 0;
  background: #000;
}
.logo-link {
  display: flex;
  justify-content: center;
}
@media (max-width: 768px) {
  .header-logo {
    position: absolute;
    top: 0;
    z-index: 10;
  }
}
</style>

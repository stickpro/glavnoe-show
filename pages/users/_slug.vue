<template>
<section class="profile">
  <div class="profile__header">
    <img src="" />
  </div>
  {{ profile }}

</section>
</template>
<script>
export default {
  name: 'profile',
  async asyncData({ $content, params }) {
    const profile = await $content('users', params.slug).fetch()
    return { profile }
  }
}
</script>
<style>
.profile {
    margin-left: 160px;
}
</style>

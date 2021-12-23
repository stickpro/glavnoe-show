<template>
  <main>
    <!-- <Header /> -->
    <Sidebar />
    <section class="content">
      <Nuxt />
    </section>
  </main>
</template>
<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
export default {
  component: {
    Header,
    Sidebar,
  },
};
</script>
<style scoped>
.content {
  margin-left: 211px;
}
@media (max-width: 768px) {
  .content {
    margin-left: 0;
  }
}
</style>

<template>
  <main>
    <Header />
    <Sidebar />
    <Nuxt />
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

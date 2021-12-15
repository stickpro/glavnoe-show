<template>
<main>
  <Header/>
  <Sidebar />
</main>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'IndexPage',
  component: {
    Header,
    Sidebar
  }
}
</script>

<template>
  <Header></Header>
  <Home></Home>
  <Calendar></Calendar>
</template>

<script>
import Home from './components/Home.vue'
import Header from "@/components/Header.vue";
import Calendar from "@/components/Calendar";

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Calendar

  }
}
</script>

<style>
</style>

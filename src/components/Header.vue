<template>
  <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white py-4 px-4">
    <router-link v-for="item in items" :key="item.to" :to=item.to class="header-item px-2 py-3 mx-3">{{ item.title }}</router-link>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      items: [
        {
          title: 'List App',
          to: '/list-app'
        },
        {
          title: 'Calendar App',
          to: '/calendar-app'
        },
        {
          title: 'Markdown App',
          to: '/markdown-app'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header-item {
  border: 1px solid white;
  opacity: .5;
  transition: .3s opacity ease-in-out;

  &:hover {
    opacity: 1;
  }
}

</style>

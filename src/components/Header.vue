<template>
  <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white py-4 px-4">
    <a href="#" class="header-item px-2 py-3"> Heros List </a>
  </nav>
</template>

<script>
export default {
name: "Header"
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

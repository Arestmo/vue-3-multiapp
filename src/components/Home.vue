<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl text-center">
        {{ herosCount }} Marvel Heros
      </h1>
      <ul>
        <li class="flex justify-between" v-for="(hero,id) in herosList" :key="id">
          {{ hero.name }}
          <button @click="removeHero(id)">x</button>
        </li>
      </ul>
      <input class="border rounded mt-10" placeholder="Type hero name" v-model.trim="newHero">
      <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-sm text-white p-2"
              @click="addHero">Add Hero</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      newHero: "",
      herosList: [
        {
          name: "IronMan"
        },
        {
          name: "Capitan America"
        },
        {
          name: "SpiderMan"
        },
      ]
    };
  },
  computed: {
    herosCount() {
      return this.herosList.length;
    }
  },
  methods: {
    addHero() {
      if (this.newHero.length > 0) {
        this.herosList.push({name: this.newHero})
        this.newHero = '';
      }
    },
    removeHero(id) {
      this.herosList.splice(id, 1)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>

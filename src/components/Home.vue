<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl text-center">
        {{ itemsCount }} Items
      </h1>
      <ul>
        <li class="flex justify-between" v-for="(item,id) in listOfItems" :key="id">
          {{ item.name }}
          <button class="outline-none p-2" @click="removeHero(id)">x</button>
        </li>
      </ul>
      <input class="border rounded mt-10"
             placeholder="Type hero name"
             v-model.trim="newItem"
             ref="newItemRef"
      >
      <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-sm text-white p-2"
              @click="addHero">Add Hero
      </button>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, ref} from "vue";

export default {
  name: "Home",
  setup() {
    const newItemRef = ref("");
    const newItem = ref("");
    const listOfItems = ref([
      {name: "Item 1"},
      {name: "Item 2"},
      {name: "Item 3"},
    ]);

    onMounted(() => {
      newItemRef.value.focus();
    });

    const itemsCount = computed({
      get: () => listOfItems.value.length,
    })

    function removeHero(id) {
      listOfItems.value.splice(id, 1)
    }

    function addHero() {
      if (newItem.value.length > 0) {
        listOfItems.value.push({name: newItem.value})
        newItem.value = "";
      }
    }


    return {
      listOfItems,
      newItem,
      removeHero,
      addHero,
      newItemRef,
      itemsCount
    }

  }
}
</script>

<style lang="sass" scoped>

</style>

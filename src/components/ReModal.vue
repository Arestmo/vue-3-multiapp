<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Test modals ;)</h1>
      <button @click="isModalOpen = true" class="px-4 py-2 border rounded shadow">Open modal</button>
    </div>
  </section>
  <Modal v-if="isModalOpen" @close="isModalOpen = false">
    <template #header>
      <h1 class="text-xl">
        Some Text in Header
      </h1>
    </template>
    <template #body>
      <p>
      Some body text
      </p>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
import {ref} from "vue";

export default {
  name: "ReModal",
  components: {Modal},
  setup() {
    const isModalOpen = ref(false)

    return {
      isModalOpen,
    }
  }
}
</script>

<style scoped>

</style>

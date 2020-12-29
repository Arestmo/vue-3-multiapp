<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-3xl my-4">Markdown APP</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border p-2">
        <textarea class="w-full h-full outline-none" :value="text" @input="updateText"></textarea>
      </article>
      <article class="w-1/2 border p-2 bg-gray-100" v-html="markedText"></article>
    </section>
  </div>
</template>
<script>
import marked from 'marked';
import debounce from '../utilities/mixins/debounce'

export default {
  name: "Markdown",
  data() {
    return {
      text: '',
    }
  },
  mixins: [
    debounce,
  ],
  computed: {
    markedText() {
      return marked(this.text);
    }
  },
  methods: {
    updateText(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    }
  }
}
</script>

<style scoped>

</style>

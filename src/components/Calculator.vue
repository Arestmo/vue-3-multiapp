<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-3xl text-center">Calc App</h1>
      <p
          class="text-3xl border shadow pl-2 h-10 text-right mt-5"
          style="direction: rtl"
      >
        {{ currentValue }}
      </p>
      <div class="h-4">
        <small v-if="operationSign !== ''"> {{ prevValue }} {{ operationSign }} {{ currentValue }}</small>
      </div>
      <div class="flex justify-center">
        <div class="my-2 grid grid-cols-3 gap-1">
          <button
              class="p-2 border rounded shadow w-10 h-10"
              v-for="item in 9"
              :key="item"
              @click="pressed(`${item}`)"
          >
            {{ item }}
          </button>
          <button class="p-2 border rounded shadow w-10 h-10" @click="pressed('0')">0</button>
          <button class="p-2 border rounded shadow w-10 h-10" @click="pressed('c')">C</button>
          <button class="p-2 border rounded shadow w-10 h-10" @click="pressed('=')">=</button>
        </div>
        <div class="my-2 ml-1 grid grid-cols-1 gap-1">
          <button class="p-2 border rounded shadow w-10 h-10" @click="pressed('+')">+</button>
          <button class="p-2 border rounded shadow w-10 h-10" @click="pressed('-')">-</button>
          <button class="p-2 border rounded shadow w-10 h-10" @click="pressed('*')">*</button>
          <button class="p-2 border rounded shadow w-10 h-10" @click="pressed('/')">/</button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import {onMounted, ref} from "vue";

export default {
  name: "Calculator",
  setup: function () {
    const currentValue = ref("");
    const prevValue = ref('');
    const operationSign = ref('');

    onMounted( () => {
      window.addEventListener('keydown', (e)=> {
        console.log(e);
      })
    });

    function pressed(value) {
      switch (value) {
        case '=':
          calculate();
          break;
        case '+':
        case '-':
        case '*':
        case '/':
          applyOperation(value);
          break;
        case 'c':
          clear();
          break;
        default:
          appendNumber(value);
          break;
      }
    }

    function calculate() {

      switch (operationSign.value) {
        case '+':
          currentValue.value = +prevValue.value + +currentValue.value;
          break;
        case '-':
          currentValue.value = +prevValue.value - +currentValue.value;
          break;
        case '*':
          currentValue.value = +prevValue.value * +currentValue.value;
          break;
        case '/':
          if (currentValue.value !== '0') {
            currentValue.value = +prevValue.value / +currentValue.value;
          }
          break;
      }

      prevValue.value = '';
      operationSign.value = '';
    }

    function clear() {
      currentValue.value = '';
      prevValue.value = '';
      operationSign.value = '';
    }

    function applyOperation(operation) {
      prevValue.value = currentValue.value;
      currentValue.value = "";
      operationSign.value = operation;
    }

    function appendNumber(value) {
      currentValue.value = currentValue.value + value;
    }

    return {
      currentValue,
      pressed,
      prevValue,
      operationSign,
    }
  }
}
</script>

<style scoped>

</style>

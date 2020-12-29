<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-3xl my-4">Slider</h1>
    <div class="slider w-full">
      <div v-for="slide in totalSlide" :key="slide" class="w-full">
        <transition name="fade">
          <div v-if="currentSlide === slide" class="slide-container w-full" :class="`slide-${slide}`"></div>
        </transition>
      </div>
      <div class="absolute w-full slider-dots">
        <div v-for="slideDot in totalSlide"
             :key="slideDot"
             @click="switchSlide(slideDot)"
             :class="currentSlide === slideDot ? 'bg-gray-700': 'bg-gray-300'"
             class="w-4 h-4 rounded-full mx-2 shadow-md hover:bg-gray-400"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      currentSlide: 1,
      totalSlide: 5,
      interval: '',
      isTextDisplayed: true,
    }
  },
  methods: {
    switchSlide(number) {
      this.currentSlide = number;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.currentSlide === this.totalSlide) {
        this.currentSlide = 1;
      } else {
        this.currentSlide++;
      }
    }, 3000)
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
}
</script>

<style lang="scss" scoped>

.slider {
  height: 350px;
  position: relative;
  overflow: hidden;
  &-dots {
    display: flex;
    justify-content: center;
    bottom: 0;
    margin-bottom: 20px;
    cursor: pointer;
  }
}

.slide {
  &-container {
    height: 100%;
    position: absolute;
  }

  &-1 {
    background-color: red;
  }

  &-2 {
    background-color: green;
  }

  &-3 {
    background-color: blue;
  }

  &-4 {
    background-color: yellow;
  }

  &-5 {
    background-color: aqua;
  }


}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  transform: translateX(-100%);
}

.fade-leave-to {
  transform: translateX(100%);
}
</style>

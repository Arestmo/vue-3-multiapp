<template>
  <div class="modal h-screen w-screen fixed top-0">
    <div
        @click="$emit('close')"
        class="wall absolute w-full h-full bg-gray-500 inset-0 opacity-50"></div>
    <div class="content flex w-full h-full justify-center items-center">
      <div class="modal-container bg-white rounded flex justify-center items-center shadow-md flex flex-wrap">
<!--        Close icon start-->
        <div class="absolute top-0 right-0">
          <div
              @click="$emit('close')"
              class="close-container">
            <div class="leftright"></div>
            <div class="rightleft"></div>
          </div>
        </div>
<!--        Close icon end-->
<!--        Modal Content start-->
        <div>
          <slot name="header"></slot>
          <slot name="body"></slot>
        </div>
<!--        Modal Content end-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Modal"
}
</script>

<style scoped lang="scss">
$darkblue: #2c5282;
$lightblue: #3182ce;

.modal-container {
  height: auto;
  width: auto;
  padding: 30px;
  z-index: 30;
  position: relative;

  &-row {
    margin: 20px auto;
  }
}

.submit-button {
  transition: .3s all ease-in-out;

  &:hover {
    opacity: 0.8;
  }
}

.wall {
  z-index: 20;
}

.close-container {
  position: relative;
  width: 25px;
  height: 25px;
  margin: 10px;
  cursor: pointer;
}

.leftright {
  height: 4px;
  width: 25px;
  position: absolute;
  margin-top: 12px;
  background-color: $darkblue;
  border-radius: 2px;
  transform: rotate(45deg);
  transition: all .3s ease-in;
}

.rightleft {
  height: 4px;
  width: 25px;
  position: absolute;
  margin-top: 12px;
  background-color: $darkblue;
  border-radius: 2px;
  transform: rotate(-45deg);
  transition: all .3s ease-in;
}

.close-container:hover .leftright {
  transform: rotate(-45deg);
  background-color: $lightblue;
}

.close-container:hover .rightleft {
  transform: rotate(45deg);
  background-color: $lightblue;
}

</style>

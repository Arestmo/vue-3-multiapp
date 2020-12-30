<template>
  <div class="modal h-screen w-screen fixed top-0">
    <div
        @click="$emit('close-login-modal')"
        class="wall absolute w-full h-full bg-gray-500 inset-0 opacity-50"></div>
    <div class="content flex w-full h-full justify-center items-center">
      <div class="modal-container bg-white rounded flex justify-center items-center shadow-md flex flex-wrap">
        <div class="absolute top-0 right-0">
          <div
              @click="$emit('close-login-modal')"
              class="close-container">
            <div class="leftright"></div>
            <div class="rightleft"></div>
          </div>
        </div>

        <h1 class="text-2xl w-full text-center">LOGIN MODAL</h1>
        <form @submit.prevent="submitLogin">
          <div class="modal-container-row">
            <label>Email or username</label>
            <input
                v-model="email"
                class="rounded shadow p-2 w-full border outline-none"
                placeholder="Your email or username"
            />
          </div>
          <div class="modal-container-row">
            <label>Password</label>
            <input
                v-model="password"
                class="rounded shadow p-2 w-full border outline-none"
                type="password"
                placeholder="Your password"
            />
          </div>
          <div class="modal-container-row">
            <button
                type="submit"
                class="submit-button w-full rounded shadow bg-gradient-to-r from-blue-800 to-blue-600 text-white py-2"
            >
              <span v-if="!isLoading">Login</span>
              <span v-else>Login ⏳</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/utilities/firebase"

export default {
  name: "LoginModal",
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,

    }
  },
  methods: {
    submitLogin() {
      this.isLoading = true;
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.isLoading = false;
            this.email = '';
            this.password = '';
            this.$emit('close-login-modal');
          })
          .catch((error) => {
            console.log(error)
            this.isLoading = false;
          });
      console.log(this.form)

    }
  }
}
</script>

<style scoped lang="scss">
$darkblue: #2c5282;
$lightblue: #3182ce;

.modal-container {
  height: auto;
  width: auto;
  padding: 20px;
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

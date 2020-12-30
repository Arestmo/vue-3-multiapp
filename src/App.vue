<template>
  <Header
      @open-login-modal="isLoginModal = true"
  ></Header>
  <router-view></router-view>
  <LoginModal
      @close-login-modal="isLoginModal = false"
      v-if="isLoginModal"
  />
</template>

<script>
import Header from "@/components/Header.vue";
import LoginModal from "@/components/LoginModal";
import firebase from "@/utilities/firebase";

export default {
  name: 'App',
  components: {
    LoginModal,
    Header,
  },
  data() {
    return {
      isLoginModal: false,
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user)
      } else {
        console.log("No User")
      }
    });
  }
}
</script>
<style>
</style>

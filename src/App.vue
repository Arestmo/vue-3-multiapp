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
      isLoggedIn: false,
      authUser: {},
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this. isLoggedIn = true;
        this.authUser = user;
      } else {
        this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  }
}
</script>
<style>
</style>

<template>
  <nav class="w-full bg-gradient-to-r flex justify-between from-blue-800 to-blue-600 text-white py-4 px-4">
    <div class="flex">
      <router-link
          v-for="item in items"
          :key="item.to"
          :to=item.to
          class="header-item px-2 py-3 mx-3">{{
          item.title
        }}
      </router-link>
    </div>
    <div class="flex">
      <button
          v-if="!isLoggedIn"
          @click="$emit('open-login-modal')"
          class="header-item px-6 py-3 mx-3">Login
      </button>
      <button
          v-else
          @click="logoutUser"
          class="header-item px-6 py-3 mx-3">Logout
      </button>
    </div>
  </nav>

</template>

<script>
import firebase from "@/utilities/firebase";

export default {
  name: "Header",
  data() {
    return {
      items: [
        {title: 'List App', to: '/list-app'},
        {title: 'Calendar App', to: '/calendar-app'},
        {title: 'Markdown App', to: '/markdown-app'},
        {title: 'Slider App', to: '/slider-app'},
        {title: 'Calculator App', to: '/calculator-app'},
        {title: 'Modal', to: '/re-modal'},
      ]
    }
  },
  props: {
    isLoggedIn: Boolean,
  },
  methods: {
    logoutUser() {
      firebase.auth().signOut()
          .then((res) => {
            console.log(res)
          })
          .catch((e) => {
            console.log(e)
          });

    }
  }
}
</script>

<style lang="scss" scoped>
.header-item {
  border: 1px solid white;
  opacity: .5;
  transition: .3s opacity ease-in-out;

  &:hover {
    opacity: 1;
  }
}

</style>

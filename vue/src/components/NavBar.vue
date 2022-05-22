<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">home</router-link>
      </li>

      <li>
        <router-link :to="{ name: 'recommendations' }">recommendations</router-link>
      </li>

      <!-- <li v-if="isLoggedIn">
        <router-link :to="{ name: 'profile', params: { username } }">profile</router-link>
      </li> -->
      <li v-if="!isLoggedIn">
        <router-link :to="{ name: 'login' }">login</router-link>
      </li>
      <li v-if="isLoggedIn">
        <router-link :to="{ name: 'logout' }">logout</router-link>
      </li>
      <li v-if="!isLoggedIn">
        <router-link :to="{ name: 'signup' }">signup</router-link>
      </li>

      <li v-if="isLoggedIn">
        <router-link :to="{ name: 'articles' }">articles</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["isLoggedIn", "currentUser"]),
    username() {
      return this.currentUser.username ? this.currentUser.username : "guest"  // 로그인 안됐으면 guest
    }
  }
}
</script>
<style>

</style>
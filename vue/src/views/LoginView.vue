<template>
  <div>
    여기는 로그인 페이지
    <account-error-list></account-error-list>
    <form @submit.prevent="login(credentials)">
      <div>
        <label for="username">username: </label>
        <input v-model="credentials.username" type="text" id="username" required>
      </div>
      <div>
        <label for="password">password: </label>
        <input v-model="credentials.password" type="password" id="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import AccountErrorList from "../components/Accounts/AccountErrorList.vue"
import { mapActions, mapGetters } from "vuex"

export default {
  name: "LoginView",
  components: {
    AccountErrorList,
  },
  data() {
    return {
      credentials: {
        username: "",
        password: "",
      }
    }
  },
  computed: {
    ...mapGetters(["isAuthError"])
  },
  methods: {
    ...mapActions(["login"])
  }
}
</script>

<style>

</style>
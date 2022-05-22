<template>
  <div>
    여기는 signup

    <account-error-list v-if="isAuthError"></account-error-list>
    
    <form @submit.prevent="signup(credentials)">
      <div>
        <label for="username">username: </label>
        <input type="text" id="username" v-model="credentials.username" required>
      </div>
      <div>
        <label for="password1">password: </label>
        <input type="password" id="password1" v-model="credentials.password1" required>
      </div>
      <div>
        <label for="password2">password again: </label>
        <input type="password" id="password2" v-model="credentials.password2" required>
      </div>
      <button type="submit">signup</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import AccountErrorList from "../components/Accounts/AccountErrorList.vue"

export default {
  name: "SignupView",
  components: {
    AccountErrorList,
  },
  data() {
    return {
      credentials: {
        username: "",
        password1: "",
        password2: "",
      },
    }
  },
  computed: {
    ...mapGetters(["isAuthError"])
  },
  methods: {
    ...mapActions(["signup"])
  }
}
</script>

<style>

</style>
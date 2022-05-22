<template>
  <div>
    여기는 signup

    <account-error-list></account-error-list>
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

      <account-error-list></account-error-list>
  </div>
</template>

<script>
import AccountErrorList from '../components/Accounts/AccountErrorList.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SignupView',
  components: {
    AccountErrorList,
  },
  data() {
    return {
      credentials: {
        username: '',
        password1: '',
        password2: '',
      },
    }
  },
  computed: {
    ...mapGetters(['isAuthError'])
  },
  methods: {
    ...mapActions(['signup'])
  }
}
</script>

<style>

</style>
<template>
  <div class="log-in-box">
    <div class="my-3 fs-3 fw-bold">Login</div>
    <account-error-list v-if="isAuthError"></account-error-list>
    <form @submit.prevent="login(credentials)">
      <div class="login-input">
        <!-- <label for="username">username: </label> -->
        <input class="w-50 username" v-model="credentials.username" type="text" id="username" required placeholder="  Username">
      </div>
      <div>
        <!-- <label for="password">password: </label> -->
        <input class="w-50 password" v-model="credentials.password" type="password" id="password" required placeholder="  Password">
      </div>
      <button class="btn btn-light w-50 mt-3 rounded-pill" type="submit">Login</button>
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
.log-in-box {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  max-width: 500px;
  min-height: 80vh;
}

.login-input {
  height: 50px;
}

.username {
  border-radius: 8px;
  /* border-top-right-radius: 8px; */
}

.password {
  border-radius: 8px;
  /* border-bottom-right-radius: 8px; */
}
</style>
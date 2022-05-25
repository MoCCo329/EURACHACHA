<template>
  <div class="log-in-box">
    <div class="login-text fs-3 fw-bold">Login</div>
    <account-error-list v-if="isAuthError"></account-error-list>

    <form @submit.prevent="login(credentials)">
      <div class="login-input">
        <!-- <label for="username">username: </label> -->
        <input class="w-50 username mb-2 ps-2" v-model="credentials.username" type="text" id="username" required placeholder="Username">
      </div>
      <div>
        <!-- <label for="password">password: </label> -->
        <input class="w-50 password mb-1 ps-2" v-model="credentials.password" type="password" id="password" required placeholder="Password">
      </div>
      <button class="btn btn-light w-50 mt-3 rounded-pill" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import AccountErrorList from "../components/Accounts/AccountErrorList.vue"

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
  align-items: end;
  flex-direction: column;
  max-width: 500px;
  min-height: 80vh;
}
.log-in-box .login-text {
  min-width: 300px;
  margin-bottom: 2rem;
}

.username {
  min-width: 300px;
  border-radius: 8px;
}

.password {
  min-width: 300px;
  border-radius: 8px;
}
</style>
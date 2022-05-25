<template>
  <div class="box">
    <div class="my-3 fs-3 fw-bold">Login</div>
    <account-error-list v-if="isAuthError"></account-error-list>
    <form @submit.prevent="login(credentials)">
      <div>
        <!-- <label for="username">username: </label> -->
        <input class="w-50 loginInput username" v-model="credentials.username" type="text" id="username" required placeholder="  Username">
      </div>
      <div>
        <!-- <label for="password">password: </label> -->
        <input class="w-50 loginInput password" v-model="credentials.password" type="password" id="password" required placeholder="  Password">
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
.box {
  width: 500px;
  height: 500px;
  position: absolute;
  top: 200px;
  right: 350px;
}

.loginInput {
  height: 50px;
}

.username {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.password {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
<template>
  <div>
    <div class="sign-up-box">
      <div class="signup-text my-3 fs-3 fw-bold">Sign Up</div>
      <account-error-list v-if="isAuthError"></account-error-list>
    
      <form @submit.prevent="signup(credentials)">
        <div class="signup-input">
          <input class="w-50 username ps-2" v-model="credentials.username" type="text" id="username" required placeholder="Username">
        </div>
        <div>
          <input class="w-50 password my-2 ps-2" v-model="credentials.password1" type="password" id="password" required placeholder="Password">
        </div>
        <div>
          <input class="w-50 password ps-2" v-model="credentials.password2" type="password" id="password" required placeholder="Password Again">
        </div>
        <button class="btn btn-light w-50 mt-3 rounded-pill" type="submit">Sign up</button>
      </form>
    </div>
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
.sign-up-box {
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  max-width: 500px;
  min-height: 80vh;
}
.sign-up-box .signup-text {
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
<template>
  <div>
    여기는 profile

    <hr>
    <p>{{ profile.username }}의 페이지</p>
    <p>좋아요한 영화들 : {{ profile.like_movies }}</p>
    <p>작성한 리뷰들 : {{ profile.reviews }}</p>
    
    <!-- <login-modal></login-modal> -->
  </div>
</template>

<script>
// import LoginModal from "../components/Accounts/LoginModal.vue"
import { mapGetters, mapActions } from "vuex"

export default {
  name: "ProfileView",
  components: {
    // LoginModal,
  },
  computed: {
    ...mapGetters(["profile"])
  },
  methods: {
    ...mapActions(["fetchProfile", "fetch"])
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
}
</script>

<style>

</style>
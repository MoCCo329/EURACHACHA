<template>
  <div>
    여기는 로그아웃
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "LogoutView",
  components: {
    
  },
  methods: {
    ...mapActions(["logout"])
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  created() {
    if (this.isLoggedIn) {
      this.logout()
    } else {
      alert("잘못된 접근입니다.")
      this.$router.back()
    }
  }
}
</script>

<style>

</style>
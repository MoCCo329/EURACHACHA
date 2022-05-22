<template>
  <div>
    여기는 profile

    {{ profile.username }}
    <!-- 작성 글 목록, 작성 리뷰, 좋아요한 영화들, 좋아요한 감독들 -->
    <login-modal></login-modal>
  </div>
</template>

<script>
import LoginModal from '../components/Accounts/LoginModal.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProfileView',
  components: {
    LoginModal,
  },
  computed: {
    ...mapGetters(['profile'])
  },
  methods: {
    ...mapActions(['fetchProfile'])
  },
  created() {
    const payload = { username: this.$rout.params.username }
    this.fetchProfile(payload)
  },
}
</script>

<style>

</style>
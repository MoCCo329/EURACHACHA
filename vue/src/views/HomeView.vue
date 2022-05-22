<template>
  <div>
    여기는 Home

    <!-- <login-modal></login-modal> -->
    <movie-list></movie-list>
    <now-playing></now-playing>
  </div>
</template>

<script>
// import LoginModal from "../components/Accounts/LoginModal.vue"
import MovieList from "../components/Movies/MovieList.vue"
import NowPlaying from "../components/Movies/NowPlaying.vue"

export default {
  name: "HomeView",
  components: {
    // LoginModal,
    MovieList,
    NowPlaying,
  },
  
}
</script>

<style>

</style>
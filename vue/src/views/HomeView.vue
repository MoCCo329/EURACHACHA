<template>
  <div>
    <div class="my-3 fs-3 fw-bold">Home</div>
    <hr>

    <!-- <login-modal></login-modal> -->
    <now-playing></now-playing>
    <popular-list></popular-list>
    <upcoming-list></upcoming-list>
    <movie-list></movie-list>    
  </div>
</template>

<script>
// import LoginModal from "../components/Accounts/LoginModal.vue"
import MovieList from "../components/Movies/MovieList.vue"
import NowPlaying from "../components/Movies/NowPlaying.vue"
import PopularList from "../components/Movies/PopularList.vue"
import UpcomingList from "../components/Movies/UpcomingList.vue"

export default {
  name: "HomeView",
  components: {
    // LoginModal,
    MovieList,
    NowPlaying,
    PopularList,
    UpcomingList,
  },
  
}
</script>

<style>

</style>
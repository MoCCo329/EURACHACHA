<template>
  <div>
    여기는 MovieDetail<br>

    MovieDetail : <br>{{ movieDetail }}<hr>
    ReleaseDate Related : <br>{{ movieRelatedReleaseDate }}<hr>
    Genre Related: <br>{{ movieRelatedGenre }}<hr>
    
    <div>
      <button @click="doLikeMovie">{{ like_count }}</button>
    </div>


    <movie-review-list></movie-review-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import MovieReviewList from "../components/Reviews/MovieReviewList.vue"

export default {
  name: "MovieDetailView",
  components: {
    MovieReviewList,
  },
  computed: {
    ...mapGetters(["movieDetail", "movieRelatedReleaseDate", "movieRelatedGenre"]),
    like_count () {
      return this.movieDetail.like_users?.length
    },
  },
  methods: {
    ...mapActions(["fetchMovieDetail", "fetchMovieDetailRelated", "likeMovie"]),
    doLikeMovie () {
      return this.likeMovie(this.$route.params.moviePk)
    }
  },
  created () {
    const moviePk = this.$route.params.moviePk
    this.fetchMovieDetail(moviePk)
    this.fetchMovieDetailRelated(moviePk)
  }
}
</script>

<style>

</style>
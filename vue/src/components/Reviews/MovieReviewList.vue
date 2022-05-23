<template>
  <div>
    <ul>
      <movie-review-item
        v-for="review in reviews"
        :review="review"
        :key="review.pk">
      </movie-review-item>
    </ul>

    <movie-review-form></movie-review-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import MovieReviewItem from "../Reviews/MovieReviewItem.vue"
import MovieReviewForm from "../Reviews/MovieReviewForm.vue"

export default {
  components: { MovieReviewForm, MovieReviewItem },
  name: "MovieReviewList",
  componenets: {
    MovieReviewItem,
    MovieReviewForm,
  },
  computed: {
    ...mapGetters(["reviews"])
  },
  methods: {
    ...mapActions(["fetchMovieDetailReview"])
  },
  created () {
    const moviePk = this.$route.params.moviePk
    this.fetchMovieDetailReview(moviePk)
  }


}
</script>

<style>

</style>
<template>
  <div>
    <div class="my-3 fs-3 fw-bold">CRITIC REVIEWS FOR MOVIE ({{ review_count }})</div>
    <div class="review-list">
      <movie-review-item
        class="mb-2"
        v-for="review in reviews"
        :review="review"
        :key="review.pk">
      </movie-review-item>
    </div>

    <hr>
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
    ...mapGetters(["reviews"]),
    review_count () {
      return this.reviews.length
    }
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
.review-list {
  min-height: 80px;
}
</style>
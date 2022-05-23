<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="score">score: </label>
      <input type="number" min="0" max="10" step="1" v-model="score" required>
      <label for="review">Review: </label>
      <input type="text" id="review" v-model="content" required>
      <button>Review</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "MovieReviewForm",
  data () {
    return {
      content: "",
      score: "",
    }
  },
  computed: {
    ...mapGetters(["movieDetail"]),
  },
  methods: {
    ...mapActions(["createReview"]),
    onSubmit () {
      const moviePk = this.$route.params.moviePk
      this.createReview({ moviePk , content: this.content, score: this.score })
      this.content = ""
      this.score = ""
    }
  }
}
</script>

<style>

</style>
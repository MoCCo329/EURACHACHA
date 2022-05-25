<template>
  <div>
    <label for="review" class="form-label my-3 fs-3 fw-bold">REVIEW</label><br>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <i class='bx bx-user'></i><span class="text-white"> {{ currentUser.username }} </span>
        <div class="d-flex mt-1">
          <input type="number" min="0" max="10" step="1" v-model="score" required placeholder=" score">
          <input type="text" class="form-control mx-3" id="review" aria-describedby="reviewHelp" placeholder="Please write your review"  v-model="content" required>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        <div id="reviewHelp" class="form-text">Don't forget to give score. Thank you for your valuable review.</div>
      </div>
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
    ...mapGetters(["movieDetail", "currentUser"]),
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
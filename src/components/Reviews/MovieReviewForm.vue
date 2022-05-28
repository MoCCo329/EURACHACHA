<template>
  <div>
    <label for="review" class="form-label my-3 fs-3 fw-bold">REVIEW</label><br>
    <form v-if="isValid" @submit.prevent="onSubmit">
      <div class="mb-3">
        <i class='bx bx-user'></i><span class="text-white"> {{ currentUser.username }} </span>
        <div class="d-flex mt-1">
          <div class="d-flex star">
            <div style="min-width: 8px; max-width: 8px"></div>
            <div class="star-img" v-for="idx in starFull" :key="idx + 'a'"><i class="fa-solid fa-star"></i></div>
            <div class="star-img" v-for="idx in starHalf" :key="idx + 'b'"><i class="fa-solid fa-star-half-stroke"></i></div>
            <div class="star-img" v-for="idx in starEmpty" :key="idx + 'c'"><i class="fa-regular fa-star"></i></div>
            <div class="star-num-div d-flex">
              <div @mouseover="scoring(0)" @click="scoreFixing" class="star-num"></div>
              <div @mouseover="scoring(1)" @click="scoreFixing" class="star-num"></div>
              <div @mouseover="scoring(2)" @click="scoreFixing" class="star-num"></div>
              <div @mouseover="scoring(3)" @click="scoreFixing" class="star-num"></div>
              <div @mouseover="scoring(4)" @click="scoreFixing" class="star-num"></div>
              <div @mouseover="scoring(5)" @click="scoreFixing" class="star-num"></div>
              <div @mouseover="scoring(6)" @click="scoreFixing" class="star-num"></div>
              <div @mouseover="scoring(7)" @click="scoreFixing" class="star-num"></div>
              <div @mouseover="scoring(8)" @click="scoreFixing" class="star-num"></div>
              <div @mouseover="scoring(9)" @click="scoreFixing" class="star-num"></div>
              <div @mouseover="scoring(10)" @click="scoreFixing" class="star-num">.</div>
            </div>
          </div>
          <input type="text" class="form-control mx-3 font-kor" id="review" aria-describedby="reviewHelp" placeholder="Please write your review"  v-model="content" required>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        <div id="reviewHelp" class="form-text">Don't forget to give score. Thank you for your valuable review.</div>
      </div>
    </form>
    <div class="mb-5" v-if="!isValid">Sorry, You can write only one review at each movie.</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "MovieReviewForm",
  data () {
    return {
      content: "",
      score: 0,
      scoreFix: 0,
    }
  },
  computed: {
    ...mapGetters(["movieDetail", "currentUser", "reviews"]),
    isValid () {
      return this.reviews.every((review) => {
        return review.user.username !== this.currentUser.username
      })
    },
    starFull () {
      return parseInt(this.score / 2)
    },
    starHalf () {
      return this.score % 2
    },
    starEmpty () {
      return parseInt(5 - this.score / 2)
    },
  },
  methods: {
    ...mapActions(["createReview"]),
    onSubmit () {
      const moviePk = this.$route.params.moviePk
      this.createReview({ moviePk , content: this.content, score: this.score })
      this.content = ""
      this.score = ""
    },
    scoring (score) {
      if (this.scoreFix===0) {
        this.score = score
      } else {
        this.scoreFix = score
      }
    },
    scoreFixing () {
      if (this.scoreFix===0) {
        this.scoreFix = this.score
      } else {
        this.score = this.scoreFix
      }
    }
  },
  created () {
  }
}
</script>

<style>
.star {
  position: relative;
}
.star-img {
  width: 20px;
  z-index: 1;
}
.star-num-div {
  position: absolute;
}
.star-num {
  min-width: 10px;
  max-width: 10px;
  z-index: 2;
}

</style>
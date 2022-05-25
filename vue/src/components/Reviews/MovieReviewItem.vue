
<template>
  <div>
    <router-link class="text-decoration-none" :to="{ name: 'profile', params: { username: review.user.username } }">
      <span class="text-white"> {{ review.user.username }} </span>
    </router-link>

    <span v-if="!isEditing"> 
      <i class="fa-solid fa-star">{{ payload.score }} </i>
      <div>
        {{ payload.content }} 
      </div>
      created_at - 댓글작성일시까지 넘겨줘야함
      {{payload}}
    </span>

    <span v-if="isEditing">
      <label for="score">Score: </label>
      <input type="number" min="0" max="10" step="1" v-model="payload.score" required>
      <label for="review">Review: </label>
      <input type="text" id="review" v-model="payload.content" required>
      <button @click="onUpdate">Update</button>
      <button @click="doCancel">Cancle</button>
    </span>

    <span class="ms-3">
      <!-- <button @click="doLikeReview">{{ like_count }}</button> -->
      
      <i class="fa-solid fa-thumbs-up" @click="doLikeReview"> {{ like_count }}</i>
    </span>

    <div v-if="currentUser.username === review.user.username && !isEditing">
      <!-- <button type="button" class="btn btn-primary btn-sm" @click="switchIsEditing">Edit</button> -->
      <i class="fa-solid fa-pencil" @click="switchIsEditing"></i>
      <!-- <button type="button" class="btn btn-primary btn-sm ms-2" @click="deleteReview(payload)">Delete</button> -->
      <i class="fa-solid fa-trash-can mx-3" @click="deleteReview(payload)"></i>
    </div>
    <hr>
  </div> 
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "MovieReviewItem",
  props: {
    review: Object
  },
  data () {
    return {
      isEditing: false,
      payload: {
        moviePk: this.review.movie,
        reviewPk: this.review.pk,
        content: this.review.content,
        score: this.review.score,
      },
      temp: {}
    }
  },
  computed: {
    ...mapGetters(["currentUser"]),
    like_count () {
      return this.review.like_users?.length
    },
    isAuthor () {
      return this.review.user?.username === this.currentUser?.username
    },
  },
  methods: {
    ...mapActions(["updateReview", "deleteReview", "likeReview"]),
    switchIsEditing () {
      this.isEditing = !this.isEditing
      this.temp = { content: this.payload.content, score: this.payload.score }
    },
    onUpdate () {
      this.updateReview(this.payload)
      this.isEditing = false
    },
    doLikeReview () {
      if (!this.isAuthor) {
        this.likeReview({ moviePk: this.payload.moviePk, reviewPk: this.review.pk })
      }
    },
    doCancel () {
      this.isEditing = !this.isEditing
      this.payload.content = this.temp.content
      this.payload.score = this.temp.score
      this.content = {}
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <router-link class="text-decoration-none" :to="{ name: 'profile', params: { username: review.user.username } }">
      <i class='bx bx-user'></i><span class="text-white"> {{ review.user.username }} </span>
    </router-link>

    <div class="review-body">
      <div v-if="!isEditing">
        <div>
          <i class="fa-solid fa-star mb-3"></i><span class="fa-solid mb-3 mx-2"> {{ payload.score }} </span>
          <div class="review-content font-kor">
            {{ payload.content }} 
          </div>
        </div>

        <div class="review-detail">
          <span>
            {{ isUpdated }}
            created at : {{ review.created_at | time }}
          </span>

          <span class="ms-3">      
            <i class="fa-solid fa-thumbs-up mx-2" @click="doLikeReview"></i><span class="fa-solid">{{ like_count }}</span>
          </span>
        </div>
      </div>

      <div class="review-edit d-flex" v-if="isEditing">
        <input type="number" min="0" max="10" step="1" v-model="payload.score" required >
        <input type="text" class="form-control mx-2 font-kor" id="review" aria-describedby="reviewHelp" v-model="payload.content" required>
        <button type="submit" class="btn btn-primary me-2" @click="onUpdate">Update</button>
        <button type="submit" class="btn btn-primary" @click="doCancel">Cancle</button>
      </div>
    </div>

    <div class="my-2" v-if="currentUser.username === review.user.username && !isEditing">
      <i class="fa-solid fa-pencil" @click="switchIsEditing"></i>
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
    isUpdated () {
      if (this.review.updated_at === this.review.created_at) {
        return ""
      } else {
        return `updated at : ${this.time(this.review.updated_at)} | `
      }
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
    },
    time (date) {
      return `${date.slice(0, 10)}  ${date.slice(11,19)}`
    },
  },
  filters: {
    time (date) {
      return `${date.slice(0, 10)}  ${date.slice(11,19)}`
    },
  },
}
</script>

<style>
.bx-user {
  color: white;
}
.review-body {
  min-height: 120px;
}
.review-content {
  min-height: 90px;
}
.review-detail {
  display: flex;
  justify-content: space-between;
}
</style>
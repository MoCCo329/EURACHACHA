<template>
  <li>
    <router-link class="text-decoration-none" :to="{ name: 'profile', params: { username: comment.user.username } }">
      <i class='bx bx-user'></i><span class="text-white"> {{ comment.user.username }} </span>
    </router-link>

    <div class="comment-body">
      <div v-if="!isEditing">
        <div class="comment-content font-kor">
          {{ payload.content }} 
        </div>
      </div>

      <div class="comment-detail">
        <span>
          {{ isUpdated }}
          created at : {{ comment.created_at | time }}
        </span>
      </div>

      <div class="comment-edit d-flex" v-if="isEditing">
        <input type="text" class="form-control me-2" id="review" aria-describedby="commentHelp" v-model="payload.content" required>
        <button type="submit" class="btn btn-primary me-2" @click="onUpdate">Update</button>
        <button type="submit" class="btn btn-primary" @click="doCancel">Cancle</button>
      </div>
    </div>

    <div class="my-2" v-if="currentUser.username === comment.user.username && !isEditing">
      <i class="fa-solid fa-pencil" @click="switchIsEditing"></i>
      <i class="fa-solid fa-trash-can mx-3" @click="deleteComment(payload)"></i>
    </div>
    <hr>
  </li>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "CommentListItem",
  props: {
    comment: Object
  },
  data () {
    return {
      isEditing: false,
      payload: {
        articlePk: this.comment.article,
        commentPk: this.comment.pk,
        content: this.comment.content,
      },
      temp: ""
    }
  },
  computed: {
    ...mapGetters(["currentUser"]),
    isUpdated () {
      if (this.comment.updated_at === this.comment.created_at) {
        return ""
      } else {
        return `updated at : ${this.time(this.comment.updated_at)} | `
      }
    },
  },
  methods: {
    ...mapActions(["updateComment", "deleteComment"]),
    switchIsEditing () {
      this.isEditing = !this.isEditing
      this.temp = this.payload.content
    },
    onUpdate () {
      this.updateComment(this.payload)
      this.isEditing = false
    },
    doCancel () {
      this.isEditing = !this.isEditing
      this.payload.content = this.temp
      this.content = ""
    },
    time (date) {
      return `${date.slice(0, 10)}  ${date.slice(11,19)}`
    }
  },
  filters: {
    time (date) {
      return `${date.slice(0, 10)}  ${date.slice(11,19)}`
    },
  },
}
</script>

<style>
.comment-body {
  min-height: 120px;
}
.comment-content {
  min-height: 90px;
}
</style>
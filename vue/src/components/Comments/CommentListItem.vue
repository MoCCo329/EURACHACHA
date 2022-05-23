<template>
  <li>
    <router-link :to="{ name: 'profile' , params: { username: comment.user.username } }">
      {{ comment.user.username }}
    </router-link>

    <span v-if="!isEditing">{{ payload.content }}</span>

    <span v-if="isEditing">
      <input type="text" v-model="payload.content">
      <button @click="onUpdate">Update</button>
      <button @click="doCancel">Cancle</button>
    </span>

    <span v-if="currentUser.username === comment.user.username && !isEditing">
      <button @click="switchIsEditing">Edit</button>
      <button @click="deleteComment(payload)">Delete</button>
    </span>
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
    }
  },
}
</script>

<style>

</style>
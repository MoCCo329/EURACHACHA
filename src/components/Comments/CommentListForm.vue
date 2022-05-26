<template>
  <div>
    <label for="comment" class="form-label my-3 fs-3 fw-bold">COMMENT</label><br>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <i class='bx bx-user'></i><span class="text-white"> {{ currentUser.username }} </span>
        <div class="d-flex mt-1">
          <input type="text" class="form-control me-2" id="comment" aria-describedby="reviewHelp" placeholder="Please write your review"  v-model="content" required>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "CommentListForm",
  data () {
    return {
      content: "",
    }
  },
  computed: {
    ...mapGetters(["currentUser", "article"]),
  },
  methods: {
    ...mapActions(["createComment"]),
    onSubmit () {
      this.createComment({ articlePk: this.article.pk, content: this.content })
      this.content = ""
    }
  }
}
</script>

<style>

</style>
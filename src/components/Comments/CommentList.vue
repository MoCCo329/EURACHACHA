<template>
  <div>
    <div class="my-3 fs-3 fw-bold">COMMENTS FOR ARTICLE</div>
    <ul class="comment-list">
      <comment-list-item
        v-for="comment in articleComments"
        :comment="comment"
        :key="comment.pk">
      </comment-list-item>
    </ul>

    <hr>
    <comment-list-form></comment-list-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import commentListItem from "./CommentListItem.vue"
import commentListForm from "./CommentListForm.vue"

export default {
  name: "CommentList",
  components: {
    commentListItem,
    commentListForm
  },
  computed: {
    ...mapGetters(["articleComments"])
  },
  methods: {
    ...mapActions(["fetchComments"])
  },
  created () {
    const articlePk = this.$route.params.articlePk
    this.fetchComments({ articlePk: articlePk })
  }
}
</script>

<style>
.comment-list {
  list-style: none;
  padding: 0;
}
</style>
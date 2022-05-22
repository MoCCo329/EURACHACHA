<template>
  <div>
    <ul>
      <comment-list-item
        v-for="comment in comments"
        :comment="comment"
        :key="comment.pk">
      </comment-list-item>
    </ul>

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

</style>
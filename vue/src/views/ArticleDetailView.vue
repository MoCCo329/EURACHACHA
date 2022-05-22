<template>
  <div>
    여기는 Article Detail
    <!-- <login-modal></login-modal> -->
    <p>{{ article.title }}</p>
    <p>{{ article.content }}</p>

    <div v-if="isAuthor">
      <router-link :to="{ name: 'articleEdit', params: { articlePk: article.pk } }">
        <button>Edit</button>
      </router-link>
      <button @click="deleteArticle({ articlePk: article.pk })">Delete</button>
    </div>

    <div>
      <button @click="likeArticle({ articlePk: article.pk })">{{ like_count }}</button>
    </div>

    <hr>
    <comment-list></comment-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
// import LoginModal from "../components/Accounts/LoginModal.vue"
import CommentList from "../components/Comments/CommentList.vue"

export default {
  name: "ArticleDetailView",
  components: {
    // LoginModal,
    CommentList,
  },
  data () {
    return {
      articlePk: ""
    }
  },
  computed: {
    ...mapGetters(["article", "currentUser", "isAuthor"]),
    like_count() {
      return this.article.like_users?.length
    },
  },
  methods: {
    ...mapActions(["fetchArticle", "likeARticle", "deleteArticle"])
  },
  created() {
    this.articlePk = this.$route.params.articlePk
    this.fetchArticle({ articlePk: this.articlePk })
  }
}
</script>

<style>

</style>
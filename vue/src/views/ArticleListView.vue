<template>
  <div>
    여기는 Articles
    <!-- <login-modal></login-modal> -->

    <ul>
      <li v-for="article in articles" :key="article.pk">
        <router-link :to="{ name: 'profile', params: { username: article.user.username } }">
          {{ article.user.username }}
        </router-link>
        <router-link :to="{ name: 'article', params: { articlePk: article.pk } }">
          {{ article.title }}
        </router-link>
        댓글 수 : {{ article.comment_count }} | 좋아요 수 : {{ article.like_count }}
      </li>
    </ul>

    <router-link :to="{ name: 'articleEdit', params: {articlePk: 'new'} }">
      <button>Create</button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
// import LoginModal from "../components/Accounts/LoginModal.vue"

export default {
  name: "ArticleListView",
  components: {
    // LoginModal,
  },
  computed: {
    ...mapGetters(["articles"])
  },
  methods: {
    ...mapActions(['fetchArticles'])
  },
  created () {
    this.fetchArticles()
  },
}
</script>

<style>

</style>
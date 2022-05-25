<template>
  <div>
    <div class="my-3 fs-3 fw-bold">Article Edit</div>
    <hr>
    <article-forms :article="article" :action="actions"></article-forms>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import ArticleForms from "../components/Articles/ArticleForms.vue"

export default {
  name: "ArticleEditView",
  components: {
    ArticleForms,
  },
  data () {
    return {
      articlePk: "",
    }
  },
  computed: {
    ...mapGetters(["article"]),
    actions () {
      return this.articlePk ? "update" : "create"
    },
  },
  methods: {
    ...mapActions(["fetchArticle"]),
  },
  created () {
    const articlePk = this.$route.params.articlePk
    if (articlePk !== "new") {this.articlePk = articlePk}
    else {this.articlePk = ""}
    this.fetchArticle({ articlePk: articlePk })
  },
}
</script>

<style>

</style>
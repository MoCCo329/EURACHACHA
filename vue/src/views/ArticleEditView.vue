<template>
  <div>
    여기는 ArticleEdit

    <article-forms :article="article" :action="actions"></article-forms>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import ArticleForms from "../components/Articles/ArticleForms.vue"

export default {
  name: "ARticleEditView",
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
    actions: this.articlePk ? "update" : "create",
  },
  methods: {
    ...mapActions(["fetchArticle"]),
  },
  created () {
    const articlePk = this.$route.params.articlePk  
    this.fetchArticle({ articlePk: this.articlePk })
  },
}
</script>

<style>

</style>
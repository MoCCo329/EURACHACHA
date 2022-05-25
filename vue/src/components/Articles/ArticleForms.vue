<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <label class="article-label" for="title">title: </label>
        <input class="article-input-title" type="text" id="title" v-model="newArticle.title">
      </div>
      <div>
        <label class="article-label" for="content">contnet: </label>
        <textarea class="article-input-content" type="text" id="content" v-model="newArticle.content"></textarea>
      </div>
      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary me-3">{{ action }}</button>
        <router-link :to="{ name: 'articles' }"><button class="cancel btn btn-primary">cancel</button></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "ArticleForm",
  props: {
    article: {
      type: Object
    },
    // title: String,
    // content: String,
    action: String,
  },
  data () {
    return {
      newArticle: {
        title: this.article.title,
        content: this.article.content,
      }
    }
  },
  methods: {
    ...mapActions(["createArticle", "updateArticle",]),

    onSubmit () {
      if (this.action === "create") {
        const payload = this.newArticle
        this.createArticle(payload)
      } else if (this.action === "update") {
        const payload = { articlePk: this.article.pk, ...this.newArticle }
        this.updateArticle(payload)
      }
    },
  },
  watch: {
    article: {
      handler () {
        this.newArticle = this.article
      }
    }
  }
}
</script>

<style>
.article-label {
  min-width: 100px;
}
.article-input-title {
  min-width: 300px;
  min-height: 50px;
  width: 100%;
  border-radius: 6px;
  padding-left: 1rem;
}
.article-input-content {
  min-width: 300px;
  min-height: 300px;
  width: 100%;
  border-radius: 6px;
  padding: 1rem;
}
</style>
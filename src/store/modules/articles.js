import router from "@/router"
import article from "@/api/articles"
import comment from "@/api/comments"

export default {
  state: {
    articles: [],
    article: { title: "", content: "" },
    articleComments: []
  },

  getters: {
    articles: (state) => state.articles,
    article: (state) => state.article,
    isAuthor: (state, getters) => {
      return state.article.user?.username === getters.currentUser?.username
    },
    articleComments: (state) => state.articleComments
  },

  mutations: {
    SET_ARTICLES: (state, articles) => (state.articles = articles),
    SET_ARTICLE: (state, article) => (state.article = article),
    SET_ARTICLE_COMMENTS: (state, comments) => (state.articleComments = comments),
  },

  actions: {
    fetchArticles({ commit }, page) {
      article
        .articleList(page)
        .then((res) => {
          commit("SET_ARTICLES", res.data)
        })
        .catch((err) => console.error(err.response))
    },
    
    fetchArticle({ commit }, { articlePk }) {
      if (articlePk === "new") return commit("SET_ARTICLE", { title: "", content: "" })
      
      article
        .detail(articlePk)
        .then((res) => {
          // console.log("fetchArticle", res)
          commit("SET_ARTICLE", res.data)
        })
        .catch((err) => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" })
          }
        })
    },

    createArticle({ commit, getters }, { title, content }) {
      const body = { title, content }
      article
        .create(body)
        .then((res) => {
          // console.log("createArticle", res)
          commit("SET_ARTICLE", res.data)
          router.push({
            name: 'article',
            params: { articlePk: getters.article.pk },
          })
        })
        .catch((err) => console.error(err.response))
    },

    updateArticle({ commit, getters }, { title, content, articlePk }) {
      const body = { title, content }
      article
        .update(articlePk, body)
        .then((res) => {
          commit("SET_ARTICLE", res.data)
          router.push({
            name: "article",
            params: { articlePk: getters.article.pk }
          })
        })
        .catch((err) => console.error(err.response))
    },

    deleteArticle({ commit }, { articlePk }) {
      article
        .delete(articlePk)
        .then(() => {
          commit("SET_ARTICLE", {})
          router.push({ name: "articles" })
        })
        .catch((err) => console.error(err.response))
    },

    likeArticle({ commit }, { articlePk }) {
      article
        .like(articlePk)
        .then((res) => {
          commit("SET_ARTICLE", res.data)
        })
        .catch((err) => console.error(err.response))
    },

    fetchComments({ commit }, { articlePk }) {
      comment
        .commentList(articlePk)
        .then((res) => {
          // console.log("fetchComments", res)
          commit("SET_ARTICLE_COMMENTS", res.data)
        })
        .catch((err) => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" })
          }
        })
    },

    createComment({ commit }, { articlePk, content }) {
      const body = { content }
      comment
        .create(articlePk, body)
        .then((res) => {
          console.log(res)
          commit("SET_ARTICLE_COMMENTS", res.data)
        })
        .catch((err) => console.error(err.response))
    },
  
    updateComment({ commit }, { articlePk, commentPk, content }) {
      const body = { content }
      comment
        .update(articlePk, commentPk, body)
        .then((res) => {
          commit("SET_ARTICLE_COMMENTS", res.data)
        })
        .catch((err) => console.error(err.response))
    },
  
    deleteComment({ commit }, { articlePk, commentPk }) {
      comment
        .delete(articlePk, commentPk)
        .then((res) => {
          commit("SET_ARTICLE_COMMENTS", res.data)
        })
        .catch((err) => console.error(err.response))
    },
  },  
}
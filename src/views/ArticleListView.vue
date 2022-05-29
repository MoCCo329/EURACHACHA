<template>
  <div>
    <div class="my-3 fs-3 fw-bold">Article</div>
    <!-- <login-modal></login-modal> -->
    <div class="article-head">
      <i class='bx bx-chat'></i>
      <span class="text fs-7 fw-bold">This bulletin board is a communication space where you can share useful information or opinions about movies and get help from each other.<br>
      Please feel free to post and share various opinions and articles.</span>
    </div>
    
    <div class="article-top">
      <span>Total ({{ article_count }})</span>
      <router-link class="create-btn" :to="{ name: 'articleEdit', params: {articlePk: 'new'} }">
        <i class="fa-solid fa-pencil"></i> Create
      </router-link>
    </div>
    <hr>
    <ul class="article-ul">
      <li id="article-table" class="article-li" v-for="article in articlesInPage" :key="article.pk">
        <div class="article">
          <router-link class="router-link font-k" :to="{ name: 'article', params: { articlePk: article.pk } }">
            {{ article.title }}<br>{{ article.created_at | time }}
          </router-link>
          <span class="article-detail">
            <i class='bx bx-message-square-dots' ></i> {{ article.comment_count }}
            <i class="fa-solid fa-heart"></i> {{ article.like_count }}
            <router-link class="router-link" :to="{ name: 'profile', params: { username: article.user.username } }">
              <i class='bx bx-user'></i> {{ article.user.username }}
            </router-link>
          </span>
        </div>
        <hr>
      </li>
    </ul>

    <div class="create">
      <router-link class="create-btn" :to="{ name: 'articleEdit', params: {articlePk: 'new'} }">
        <i class="fa-solid fa-pencil"></i> Create
      </router-link>
    </div>


    <nav aria-label="Page navigation example" class="d-flex justify-content-center flex-column">
      <div class="currentPage align-self-center my-3">- {{ currentPage }} -</div>
      <ul class="pagination align-self-center">
        <li class="page-item">
          <a class="page-link" aria-label="Previous" @click="pageChange(currentPage - 3)">
            <span style="color: black;">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-show="(currentPage==lastPage)&&(lastPage>2)" @click="pageChange(currentPage - 2)"><a class="page-link" style="color: black;">{{ currentPage - 2 }}</a></li>
        <li class="page-item" v-show="(currentPage!==1)" @click="pageChange(currentPage - 1)"><a class="page-link" style="color: black;">{{ currentPage - 1 }}</a></li>
        <li class="page-item" @click="pageChange(currentPage)"><a class="page-link" href="#" style="color: black;">{{ currentPage }}</a></li>
        <li class="page-item" v-show="(currentPage + 1 <= lastPage)" @click="pageChange(currentPage + 1)"><a class="page-link" style="color: black;">{{ currentPage + 1 }}</a></li>
        <li class="page-item" v-show="(currentPage===1)&&(lastPage>2)" @click="pageChange(currentPage + 2)"><a class="page-link" style="color: black;">{{ currentPage + 2 }}</a></li>
        <li class="page-item">
          <a class="page-link" aria-label="Next" @click="pageChange(currentPage + 3)">
            <span style="color: black;">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>

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
  data () {
    return {
      currentPage: 1,
    }
  },
  computed: {
    ...mapGetters(["articles"]),
    article_count () {
      return this.articles.length
    },
    lastPage () {
      if (this.articles.length === 0) return 1
      return parseInt((this.articles.length + 9) / 10)
    },
    articlesInPage () {
      const newArticles = this.articles.slice((this.currentPage - 1)*10, this.currentPage*10)
      return newArticles
    },
  },
  methods: {
    ...mapActions(['fetchArticles']),
    pageChange (nextPage) {
      if (nextPage <= 0) nextPage = 1
      if (nextPage > this.lastPage) nextPage = this.lastPage
      this.currentPage = nextPage
    }
  },
  filters: {
    time (date) {
      return `${date.slice(0, 10)}  ${date.slice(11,19)}`
    }
  },
  created () {
    this.fetchArticles()
    // this.currentPage = this.$route.params.page
  },
}
</script>

<style>
.article-head {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: rgb(49, 45, 45);
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
.article-head .bx-chat {
  font-size: 5rem;
  color: white;
  padding: 1rem;
}
.article-head .text {
  font-size: 15px;
  color: white;
  letter-spacing: 2px;
  line-height: 22px;
}
.article-top {
  display: flex;
  justify-content: space-between;
  padding-right: 1rem
}
.article-ul {
  list-style: none;
  padding-left: 1.8rem;
  padding-right: 0.8rem;
}
.article-ul .article-li {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.article{
  display: flex;
  justify-content: space-between;
  overflow: hidden; 
  height: 5rem;
}
.article .router-link {
  text-decoration: None;
  color: white;
  line-height: 40px;
  letter-spacing: 1px;
}
.article .article-detail {
  align-self: center;
  letter-spacing: 1px;
}
.create {
  display: flex;
  justify-content: right;
  padding-right: 1rem;
}
.create-btn {
  text-decoration: None;
  color: white;
  font-size: 1rem;
}
.currentPage {
  max-width: 100px;
}
.pagination {
  color: black;
}
.pagination-item {
  
}
</style>
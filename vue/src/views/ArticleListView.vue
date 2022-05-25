<template>
  <div>
    <div class="my-3 fs-3 fw-bold">Article</div>
    <!-- <login-modal></login-modal> -->
    <div class="article-head">
      <i class='bx bx-chat'></i>
      <span class="text fs-7 fw-bold">게시판은 영화에 대한 유용한 정보나 의견을 공유하고 서로 도움을 받을 수 있는 소통하는 공간입니다. <br>다양한 의견과 글을 자유롭게 게시하고 공유해주세요.</span>
    </div>
    
    <div class="article-top">
      <span>Total ({{ article_count }})</span>
      <router-link class="create-btn" :to="{ name: 'articleEdit', params: {articlePk: 'new'} }">
        <i class="fa-solid fa-pencil"></i> Create
      </router-link>
    </div>
    <hr>
    <ul class="article-ul">
      <li class="article-li" v-for="article in articles" :key="article.pk">
        <div class="article">
          <router-link class="router-link" :to="{ name: 'article', params: { articlePk: article.pk } }">
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
    ...mapGetters(["articles"]),
    article_count () {
      return this.articles.length
    }
  },
  methods: {
    ...mapActions(['fetchArticles'])
  },
  filters: {
    time (date) {
      return `${date.slice(0, 10)}  ${date.slice(11,19)}`
    }
  },
  created () {
    this.fetchArticles()
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
</style>
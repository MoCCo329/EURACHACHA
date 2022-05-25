<template>
  <div>
    <div class="my-3 fs-3 fw-bold">Article Detail</div>
    <!-- <login-modal></login-modal> -->

    <div class="article-detail-head">
      <span class="router-link" :to="{ name: 'article', params: { articlePk: article.pk } }">
        {{ article.title }}<br>
        {{ isUpdated }}
        created at : {{ article.created_at | time }}
      </span>
      <span class="article-detail">
        <i class='bx bx-message-square-dots' ></i> {{ comment_count }}
        <i class="fa-solid fa-heart"></i> {{ like_count }}
        <router-link class="router-link" :to="{ name: 'profile', params: { username: article.user.username } }">
          <i class='bx bx-user' ></i> {{ article.user.username }}
        </router-link>
      </span>
    </div>


    <hr>
    <div class="article-body">
      <p class="article-content">{{ article.content }}</p>


      <div class="article-btn">
        <span><i class="fa-solid fa-heart mx-1" @click="doLikeArticle"></i> {{ like_count }}</span>
      
        <span v-if="isAuthor">
          <router-link class="edit" :to="{ name: 'articleEdit', params: { articlePk: article.pk } }">
            <i class="fa-solid fa-pencil"></i>
          </router-link>
          <i class="fa-solid fa-trash-can mx-3" @click="deleteArticle({ articlePk: article.pk })"></i>
        </span>
      </div>
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
    like_count () {
      return this.article.like_users?.length
    },
    comment_count () {
      return this.article.comments?.length
    },
    isUpdated () {
      if (this.article.updated_at === this.article.created_at) {
        return ""
      } else {
        return `updated at : ${this.time(this.article.updated_at)} | `
      }
    },
  },
  methods: {
    ...mapActions(["fetchArticle", "likeArticle", "deleteArticle"]),
    doLikeArticle () {
      if (!this.isAuthor) {
        this.likeArticle({ articlePk: this.article.pk })
      }
    },
    time (date) {
      return `${date.slice(0, 10)}  ${date.slice(11,19)}`
    }
  },
  filters: {
    time (date) {
      return `${date.slice(0, 10)}  ${date.slice(11,19)}`
    }
  },
  created () {
    this.articlePk = this.$route.params.articlePk
    this.fetchArticle({ articlePk: this.articlePk })
  }
}
</script>

<style>
.article-detail-head {
  display: flex;
  justify-content: space-between;
  /* overflow: hidden; */
  height: 5rem;
}
.article-detail-head .router-link {
  text-decoration: None;
  color: white;
  line-height: 40px;
  letter-spacing: 1px;
}
.article-detail-head .article-detail {
  align-self: center;
  letter-spacing: 1px;
}
.article-body {
  
}
.article-body .article-content {
  font-size: 24px;
  min-height: 500px;
}
.article-body .article-btn {
  display: flex;
  justify-content: space-between;
}
.edit {
  color: white;
}

</style>
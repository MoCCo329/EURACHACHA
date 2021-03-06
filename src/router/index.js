import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store"

import HomeView from "../views/HomeView.vue"
import MovieDetailView from "../views/MovieDetailView.vue"
import SearchMovieView from "../views/SearchMovieView.vue"

import RecommendationsView from "../views/RecommendationsView.vue"

import ProfileView from "../views/ProfileView.vue"
import LoginView from "../views/LoginView.vue"
import LogoutView from "../views/LogoutView.vue"
import SignupView from "../views/SignupView.vue"
import NotFount404View from "../views/NotFound404View.vue"

import ArticleListView from "../views/ArticleListView"
import ArticleDetailView from "../views/ArticleDetailView"
import ArticleEditView from "../views/ArticleEditView"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/movies/:moviePk",
    name: "detail",
    component: MovieDetailView
  },
  {
    path: "/search",
    name: "search",
    component: SearchMovieView
  },
  {
    path: "/recommendations",
    name: "recommendations",
    component: RecommendationsView
  },
  {
    path: "/profile/:username",
    name: "profile",
    component: ProfileView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView
  },
  {
    path: "/articles",
    name: "articles",
    component: ArticleListView
  },
  {
    path: "/articles/:articlePk",
    name: "article",
    component: ArticleDetailView
  },
  {
    path: "/articles/:articlePk/edit",
    name: "articleEdit",
    component: ArticleEditView
  },
  {
    path: "/404",
    name: "NotFound404",
    component: NotFount404View
  },
  {
    path: "*",
    redirect: "/404"
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  store.commit("SET_AUTH_ERROR", null)  // ?????? ??????????????? ????????? ?????? ??????

  const { isLoggedIn } = store.getters
  const noAuthPages = ["login", "signup"]
  const isAuthRequired = !noAuthPages.includes(to.name)  // ????????? ?????? ????????? ???????????????

  if (isAuthRequired && !isLoggedIn) {  // ????????? ???????????????, login, signup?????? ???????????? ?????????
    next({ name: 'login' })
  } else {
    next()
  }
  next()

  if (!isAuthRequired && isLoggedIn) {
    next({ name:'home' })
  }
})


export default router
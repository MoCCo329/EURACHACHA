import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import HomeView from '../views/HomeView.vue'
import MovieDetailView from '../views/MovieDetailView.vue'

import RecommendationsView from '../views/RecommendationsView.vue'

import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import SignupView from '../views/SignupView.vue'
import NotFount404View from '../views/NotFount404View.vue'

import ArticleListView from '../views/ArticleListView'
import ArticleDetailView from '../views/ArticleDetailView'
import ArticleEditView from '../views/ArticleEditView'
import ArticleNewView from '../views/ArticleNewView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movies/:moviePk',
    name: 'deatil',
    component: MovieDetailView
  },
  {
    path: '/recommendations',
    name: 'recommendations',
    component: RecommendationsView
  },
  {
    path: '/profile/:userPk',
    name: 'lrofile',
    component: ProfileView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticleListView
  },
  {
    path: '/articles/new',
    name: 'articleNew',
    component: ArticleNewView
  },
  {
    path: '/articles/:articlePk',
    name: 'article',
    component: ArticleDetailView
  },
  {
    path: '/articles/:articlePk/edit',
    name: 'articleEdit',
    component: ArticleEditView
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFount404View
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  store.commit('SET_AUTH_ERROR', null)  // 이전 페이지에서 발생한 에러 삭제

  const { isLoggedIn } = store.getters
  const noAuthPages = ['login', 'signup']
  const isAuthRequired = !noAuthPages.includes(to.name)  // 가려는 곳이 로그인 필요한경우

  if (isAuthRequired && isLoggedIn) {  // 로그인 돼있는데, login, signup으로 가려하면 홈으로
    next({ name: 'home' })
  }
})


export default router
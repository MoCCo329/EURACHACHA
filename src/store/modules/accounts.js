import router from "@/router"
import account from "@/api/accounts"

export default {
  state: {
    token: localStorage.getItem("token") || "",  // 로컬에 없으면 ""
    currentUser: {},
    profile: {},
    authError: null,
  },

  getters: {
    isLoggedIn: (state) => !!state.token,
    currentUser: (state) => state.currentUser,
    profile: (state) => state.profile,
    authError: (state) => state.authError,
    isAuthError: (state) => !!state.authError,
  },

  mutations: {
    SET_TOKEN: (state, token) => (state.token = token),
    SET_CURRENT_USER: (state, user) => (state.currentUser = user),
    SET_PROFILE: (state, profile) => (state.profile = profile),
    SET_AUTH_ERROR: (state, error) => (state.authError = error),
  },

  actions: {
    login({ commit, dispatch }, credentials) {
      account
        .login(credentials)
        .then((res) => {
          // console.log("login", res)
          const token = res.data.key
          commit("SET_TOKEN", token)
          localStorage.setItem("token", token)
          dispatch("fetchCurrentUser")
          router.push({ name: "home" })
        })
        .catch((err) => {
          console.error(err.response.data)
          commit("SET_AUTH_ERROR", err.response.data)
        })
    },

    signup({ commit, dispatch }, credentials){
      account
        .signup(credentials)
        .then((res) => {
          // console.log("signup", res)
          const token = res.data.key
          commit("SET_TOKEN", token)
          localStorage.setItem("token", token)  // 로컬에 저장
          dispatch("fetchCurrentUser")  // state에 저장
          router.push({ name: "home" })
        })
        .catch((err) => {
          console.error(err.response.data)
          commit("SET_AUTH_ERROR", err.response.data)
        })
    },

    logout({ commit }) {
      account
        .logout()
        .then(() => {
          commit("SET_TOKEN", "")
          localStorage.setItem("token", "")
          // alert("성공적으로 로그아웃 되었습니다.")
          router.push({ name: "home" })  // 원래 있던 페이지에서 로그아웃만 된 상태로 안되려나?
        })
        .catch((err) => console.error(err.response.data))
    },

    fetchCurrentUser({ commit, getters }) {  // 현재 유저 저장
      if (getters.isLoggedIn) {
        account
          .currentUser()
          .then((res) => {
            // console.log("fetchCurrentUser", res.data)
            // console.log(localStorage.token)
            commit("SET_CURRENT_USER", res.data)
          })
          .catch((err) => {
            if (err.response.status === 401) {
              commit("SET_TOKEN", "")
              localStorage.setItem("token", "")
              router.push({ name: "login" })
            }
          })
      }
    },

    fetchProfile({ commit }, { username }) {  // 프로파일 받아와 저장
      // console.log(username)
      account
        .profile(username)
        .then((res) => {
          // console.log("fetchProfile", res)
          commit("SET_PROFILE", res.data)
        })
        .catch((err) => {
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" })
          }
        })
    },
  },
}
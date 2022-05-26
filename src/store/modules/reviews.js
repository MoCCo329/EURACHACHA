import router from "@/router"
import review from "@/api/review"

export default {
  state: {
    reviews: [],
  },

  getters: {
    reviews: (state) => state.reviews,
  },

  mutations: {
    SET_REVIEW: (state, reviews) => (state.reviews = reviews),
  },

  actions: {
    fetchMovieDetailReview({ commit }, moviePk) {  // 디테일 페이지 리뷰들
      review
        .reviewList(moviePk)
        .then((res) => {
          // console.log("fetchMovieDetailReviewList", res.data)
          commit("SET_REVIEW", res.data)
        })
        .catch((err) => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" })
          }
        })
    },

    createReview({ commit }, { moviePk, content, score }) {
      const body = { content, score }
      review
        .create(moviePk, body)
        .then((res) => {
          // console.log("createReview", res)
          commit("SET_REVIEW", res.data)
        })
        .catch((err) => console.error(err.response))
    },

    updateReview({ commit }, { moviePk, reviewPk, content, score }) {
      const body = { content, score }
      review
        .update(moviePk, reviewPk, body)
        .then((res) => {
          // console.log("updateReview", res)
          commit("SET_REVIEW", res.data)
        })
        .catch((err) => console.error(err.response))
    },

    deleteReview({ commit }, { moviePk, reviewPk }) {
      review
        .delete(moviePk, reviewPk)
        .then((res) => {
          commit("SET_REVIEW", res.data)
        })
        .catch((err) => console.error(err.response))
    },

    likeReview({ commit }, { moviePk, reviewPk }) {
      review
        .likeReview(moviePk, reviewPk)
        .then((res) => {
          commit("SET_REVIEW", res.data)
        })
        .catch((err) => console.error(err.response))
    },
  },
}
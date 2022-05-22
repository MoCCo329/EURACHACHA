import review from "@/api/review"

export default {
  state: {
    reviews: [],
    reviewLike: [],
  },

  getters: {
    reviews: (state) => state.reviews,
    reviewLike: (state) => state.reviewLike,
  },

  mutations: {
    SET_REVIEW: (state, reviews) => (state.reviews = reviews),
    SET_LIKE_REVIEW: (state, reviewLike) => (state.reviewLike = reviewLike),
  },

  actions: {
    createReview({ commit }, { moviePk, content, score }) {
      const body = { content, score }
      review
        .create(moviePk, body)
        .then((res) => {
          commit("SET_REVIEW", res.data)
        })
        .catch((err) => console.error(err.response))
    },

    updateReview({ commit }, { moviePk, reviewPk, content, score }) {
      const body = { content, score }
      review
        .update(moviePk, reviewPk, body)
        .then((res) => {
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
          commit("SET_LIKE_REVIEW", res.data)
        })
        .catch((err) => console.error(err.response))
    },
  },
}
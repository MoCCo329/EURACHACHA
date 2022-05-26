import router from "@/router"
import recommendations from "@/api/recommendations"

export default {
  state: {
    intersections: [],
    questions: [],
  },

  getters: {
    intersections: (state) => state.intersections,
    questions: (state) => state.questions,
  },

  mutations: {
    SET_INTERSECTIONS: (state, intersections) => (state.intersections = intersections),
    SET_QUESTIONS: (state, questions) => (state.questions = questions),
  },

  actions: {
    fetchIntersections({ commit }) {
      recommendations
        .intersections()
        .then((res) => {
          console.log("Set_Intersections", res)
          commit("SET_INTERSECTIONS", res.data)
        })
        .catch((err) => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" })
          }
        })
    },

    fetchQuestions({ commit }, { genre, release_date, runtime }) {
      const body = { genre, release_date, runtime }
      recommendations
        .questions(body)
        .then((res) => {
          console.log("Set_Questions", res)
          commit("SET_QUESTIONS", res.data)
        })
        .catch((err) => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" })
          }
        })
    },
  }
}
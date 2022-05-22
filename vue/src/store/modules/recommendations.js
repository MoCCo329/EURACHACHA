import router from "@/router"
import recommendations from "@/api/recommendations"

export default {
  state: {
    intersections: [],
    questions: [],
    questionsNum: null,
  },

  getters: {
    intersections: (state) => state.intersections,
    questions: (state) => state.questions,
    questionsNum: (state) => state.questionsNum,
  },

  mutations: {
    SET_INTERSECTIONS: (state, intersections) => (state.SET_INTERSECTIONS = intersections),
    SET_QUESTIONS: (state, questions) => (state.SET_QUESTIONS = questions),
    SET_QUESTIONS_NUM: (state, questionsNum) => (state.SET_QUESTIONS_NUM = questionsNum),
  },

  actions: {
    fetchIntersections({ commit }) {
      recommendations
        .intersections()
        .then((res) => {
          commit("SET_INTERSECTIONS", res.data)
        })
        .catch((err) => console.error(err.response))
    },

    fetchQuestions({ commit }, data) {
      recommendations
        .questions(data)
        .then((res) => {
          commit("SET_QUESTIONS", res.data)
        })
        .catch((err) => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" })
          }
        })
    },

    fetchQuestionsNum({ commit }, data) {
      recommendations
        .questionsNum(data)
        .then((res) => {
          commit("SET_QUESTIONS_NUM", res.data)
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
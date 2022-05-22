import api from './api'

const END_POINT = 'recommendations'

export default {
  intersections() {  // 요청시 해당 사용자가 좋아요한 영화에 따라 교집합 영화추천을 받는다.
    return api({
      method: "get",
      url: `${END_POINT}/intersections/`
    })
  },
  questionsNum(data) {  // 요청시 누적 질문들을 만족하는 영화 리스트 수를 받는다.
    return api({
      method: "get",
      url: `${END_POINT}/questions_num/`,
      data: data
    })
  },
  questions(data) {  // 요청시 누적 질문들을 만족하는 영화들을 받는다.
    return api({
      method: "get",
      url: `${END_POINT}/questions/`,
      data: data
    })
  }
}
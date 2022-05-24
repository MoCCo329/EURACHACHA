import api from "./api"

const END_POINT = "recommendation"

export default {
  intersections() {  // 요청시 해당 사용자가 좋아요한 영화에 따라 교집합 영화추천을 받는다.
    return api({
      method: "get",
      url: `movies/${END_POINT}/intersection/`
    })
  },
  questions(data) {  // 요청시 누적 질문들을 만족하는 영화들을 받는다.
    return api({
      method: "post",
      url: `movies/${END_POINT}/questions/`,
      data: data
    })
  }
}
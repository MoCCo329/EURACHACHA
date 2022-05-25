import api from "./api"

const END_POINT = "movies"

export default {
  movieList() {
    return api({
      method: "get",
      url: `${END_POINT}/`,
    })
  },
  nowPlaying() {  // 요청시 현재 상영작들을 받는다.
    return api({
      method: "get",
      url: `${END_POINT}/now_playing/`
    })
  },
  popular() {
    return api({
      method: "get",
      url: `${END_POINT}/popular/`
    })
  },
  upcoming() {
    return api({
      method: "get",
      url: `${END_POINT}/upcoming/`
    })
  },
  detail(moviePk) {  // 요청시 해당 영화의 세부정보를 얻는다.
    return api({
      method: "get",
      url: `${END_POINT}/${moviePk}/`,
    })
  },
  relatedReleaseDate(moviePk) {  // 요청시 해당 영화와 관련된 다른 영화정보(비슷한시기 영화, 같은 감독의 영화, 같은 주연배우의 영화)를 얻는다.
    return api({
      method: "get",
      url: `${END_POINT}/${moviePk}/related/release_date/`
    })
  },
  relatedGenre(moviePk) {
    return api({
      method: "get",
      url: `${END_POINT}/${moviePk}/related/genre/`
    })
  },
  likeMovie(moviePk) {  // 요청시 현재 로그인된 사용자가 해당 영화를 좋아요 한다.
    return api({
      method: "post",
      url: `${END_POINT}/${moviePk}/like/`
    })
  },
  search(input) {
    return api({
      method: "post",
      url: `${END_POINT}/search/`,
      data: input
    })
  }
}
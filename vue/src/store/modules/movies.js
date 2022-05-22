import router from "@/router"
import movies from "@/api/movies"
import review from "@/api/review"

export default {
  state: {
    movieList: [],
    nowPlaying: [],
    movieDetail: {},
    movieDetailReview: [],
    movieDetailRelated: [],
    movieLike: [],
  },

  getters: {
    movieLIST: (state) => state.movieList,
    nowPlaying: (state) => state.nowPlaying,
    movieDetail: (state) => state.movieDetail,
    movieDetailReview: (state) => state.movieDetailReview,
    movieDetailRelated: (state) => state.movieDetailRelated,
    movieLike: (state) => state.movieLike,
  },

  mutations: {
    SET_MOVIE_LIST: (state, movies) => (state.movieLIST.push(...movies)),
    SET_NOW_PLAYING: (state, nowPlaying) => (state.nowPlaying = nowPlaying),
    SET_MOVIE_DETAIL: (state, movieDetail) => (state.movieDetail = movieDetail),
    SET_MOVIE_DETAIL_RELATED: (state, movieDetailRelated) => (state.movieDetailRelated = movieDetailRelated),
    SET_MOVIE_DETAIL_REVIEW: (state, movieDetailReview) => (state.movieDetailReview = movieDetailReview),
    SET_LIKE_MOVIE: (state, movieLike) => (state.movieLike.push(movieLike)),
  },

  actions: {
    fetchMovieList({ commit }) {  // 홈 영화 리스트 랜덤 20개 추가로 받기
      movies
        .MovieList()
        .then((res) => {
          commit("SET_MOVIE_LIST", res.data)
        })
        .catch((err) => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" })
          }
        })
    },

    fetchNowPlaying({ commit }) {  // 홈 현재 상영작 받기
      movies
        .NowPlaying()
        .then((res) => {
          commit("SET_NOW_PLAYING", res.data)
        })
        .catch((err) => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" })
          }
        })
    },

    fetchMovieDetail({ commit }, moviePk) {  // 영화 디테일 정보
      movies
        .detail(moviePk)
        .then((res) => {
          commit("SET_MOVIE_DETAIL", res.data)
        })
        .catch((err) => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" })
          }
        })
        .catch((err) => console.error(err.response))
    },

    fetchMovieDetailRelated({ commit }, moviePk) {  // 디테일 페이지 관련 영화
      movies
        .related(moviePk)
        .then((res) => {
          commit("SET_MOVIE_DETAIL_RELATED", res.data)
        })
        .catch((err) => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" })
          }
        })
    },

    fetchMovieDetailReview({ commit }, moviePk) {  // 디테일 페이지 리뷰들
      review
        .reviewList(moviePk)
        .then((res) => {
          commit("SET_MOVIE_DETAIL_REVIEW", res.data)
        })
        .catch((err) => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" })
          }
        })
        .catch((err) => console.error(err.response))
    },

    likeMovie({ commit }, moviePk) {  // 영화 데이터를 다시 불러오기 힘드니, likeMovies에 들어가거나 DB에서 온 isLike(?)에 따라 좋아요 표시
      movies
        .likeMovie(moviePk)
        .then((res) => {
          commit("SET_Like_MOVIE", res.data)
        })
        .catch((err) => console.error(err.response))
    },
  }
}
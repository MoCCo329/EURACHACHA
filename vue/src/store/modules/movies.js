import router from "@/router"
import movies from "@/api/movies"
// import _ from "lodash"

export default {
  state: {
    movieList: [],
    nowPlaying: [],
    popular: [],
    upcoming: [],
    movieDetail: {},
    movieRelatedReleaseDate: [],
    movieRelatedGenre: [],
  },

  getters: {
    movieList: (state) => state.movieList,
    nowPlaying: (state) => state.nowPlaying,
    popular: (state) => state.popular,
    upcoming: (state) => state.upcoming,
    movieDetail: (state) => state.movieDetail,
    movieRelatedReleaseDate: (state) => state.movieRelatedReleaseDate,
    movieRelatedGenre: (state) => state.movieRelatedGenre,
  },

  mutations: {
    SET_MOVIE_LIST: (state, movies) => (state.movieList = movies),
    SET_NOW_PLAYING: (state, nowPlaying) => (state.nowPlaying = nowPlaying),
    SET_POPULAR: (state, popular) => (state.popular = popular),
    SET_UPCOMING: (state, upcoming) => (state.upcoming = upcoming),
    SET_MOVIE_DETAIL: (state, movieDetail) => (state.movieDetail = movieDetail),
    SET_RELATED_RELEASE_DATE: (state, movieRelated) => (state.movieRelatedReleaseDate = movieRelated),
    SET_RELATED_GENRE: (state, movieRelated) => (state.movieRelatedGenre = movieRelated),
  },

  actions: {
    fetchMovieList({ commit }) {
      movies
        .movieList()
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
        .nowPlaying()
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

    fetchPopular({ commit }) {
      movies
        .popular()
        .then((res) => {
          commit("SET_POPULAR", res.data)
        })
        .catch((err) => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" })
          }
        })
    },

    fetchUpcoming({ commit }) {
      movies
        .upcoming()
        .then((res) => {
          commit("SET_UPCOMING", res.data)
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
          console.log("fetchMovieDetail", res)
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
        .relatedReleaseDate(moviePk)
        .then((res) => {
          console.log("relatedReleaseDate", res)
          commit("SET_RELATED_RELEASE_DATE", res.data)
        })
        .catch((err) => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" })
          }
        })
      movies
        .relatedGenre(moviePk)
        .then((res) => {
          console.log("relatedGenre", res)
          commit("SET_RELATED_GENRE", res.data)
        })
        .catch((err) => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" })
          }
        })
    },

    likeMovie({ commit }, moviePk) {
      movies
        .likeMovie(moviePk)
        .then((res) => {
          commit("SET_MOVIE_DETAIL", res.data)
        })
        .catch((err) => console.error(err.response))
    },
  }
}
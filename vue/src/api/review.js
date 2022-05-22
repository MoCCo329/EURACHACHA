import api from './api'

const END_POINT = `movies`

export default {
  reviewList(moviePk) {
    return api({
      method: "get",
      url: `${END_POINT}/${moviePk}/reviews/`,
    })
  },
  create(moviePk, data) {
    return api({
      method: "post",
      url: `${END_POINT}/${moviePk}/reviews/`,
      data: data,
    })
  },
  update(moviePk, reviewPk, data) {
    return api({
      method: "put",
      url: `${END_POINT}/${moviePk}/reviews/${reviewPk}/`,
      data: data
    })
  },
  delete(moviePk, reviewPk) {
    return api({
      method: "delete",
      url: `${END_POINT}/${moviePk}/reviews/${reviewPk}/`
    })
  },
  likeReview(moviePk, reviewPk) {
    return api({
      method: "post",
      url: `${END_POINT}/${moviePk}/reviews/${reviewPk}/like/`
    })
  }
}
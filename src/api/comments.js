import api from "./api"

// const END_POINT = "articles"

export default {
  commentList (articlePk) {
    return api({
      method: "get",
      url: `articles/${articlePk}/comments/`
    })
  },
  create(articlePk, data) {
    return api({
      method: "post",
      url: `articles/${articlePk}/comments/`,
      data: data,
    })
  },
  update(articlePk, commentPk, data) {
    return api({
      method: "put",
      url: `articles/${articlePk}/comments/${commentPk}/`,
      data: data,
    })
  },
  delete(articlePk, commentPk) {
    return api({
      method: "delete",
      url: `articles/${articlePk}/comments/${commentPk}/`,
    })
  },
}

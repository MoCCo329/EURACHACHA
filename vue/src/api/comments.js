import api from "./api"

// const END_POINT = "articles"

export default {
  commentList (articleId) {
    return api({
      method: "get",
      url: `${articleId}/comments/`
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

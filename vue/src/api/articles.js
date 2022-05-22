import api from "./api"

const END_POINT = "articles"

export default {
  articleList() {
    return api({
      method: "get",
      url: `${END_POINT}/`,
    })
  },
  detail(articlePk) {
    return api({
      method: "get",
      url: `${END_POINT}/${articlePk}/`,
    })
  },
  create(data) {
    return api({
      method: "post",
      url: `${END_POINT}/`,
      data: data,
    })
  },
  update(articlePk, data) {
    return api({
      method: "put",
      url: `${END_POINT}/${articlePk}/`,
      data: data,
    })
  },
  delete(articlePk) {
    return api({
      method: "delete",
      url: `${END_POINT}/${articlePk}/`,
    });
  },
  like(articlePk) {
    return api({
      method: "post",
      url: `${END_POINT}/${articlePk}/like/`,
    })
  },
}

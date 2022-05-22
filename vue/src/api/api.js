import axios from 'axios'
const HOST = 'http://localhost:8000/api/v1/'

export const api = axios.create({
  baseURL: HOST,
})

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  
  // token이 없는 경우엔 config보내기
  if (!token) return config

  // token이 있으면 config에 토큰값 넣고 보내기
  config.headers.Authorization = `Token ${token}`
  return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default api


// Guard clauses are a great alternative to if…else statements.
// Reasons being that they help your create clean & easy to read code
// AND they guard the flow of logic from continuing
// if certain conditions are met, or not met.
// This is extremely beneficial as it increases the speed at which a function runs
// as well as reduces the number of lines in your functions and classes.
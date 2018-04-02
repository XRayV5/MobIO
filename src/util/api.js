import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://localhost:3090/',
})

export const requestLogin = credentials =>
  axios.post('/signin', credentials).then(({ data }) => data)

export const requestSignup = credentials =>
  axios.post('/signup', credentials).then(({ data }) => data)

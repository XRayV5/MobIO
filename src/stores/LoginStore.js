import { observable, action } from 'mobx'
import { requestLogin, requestSignup } from '../util/api'
import { setToken } from '../util/tokenService'
import { statusStore } from './StatusStore'
import { browserHistory } from '../components/Router'

class LoginStore {
  @observable signup
  @observable email = ''
  @observable password = ''

  constructor({ signup } = {}) {
    this.signup = signup
  }

  @action
  setemail(email) {
    console.log(email)
    this.email = email
  }

  @action
  setPassword(password) {
    this.password = password
  }

  @action
  sendLogin(callback) {
    requestLogin({ email: this.email, password: this.password })
      .then(({ token }) => {
        callback(token)
        setToken(token)
        statusStore.setAuth(true)
        browserHistory.push('/')
      })
      .catch((err) => {
        console.error('Login Error', err)
      })
  }

  @action
  sendSignUp(callback) {
    requestLogin({ email: this.email, password: this.password })
      .then(({ token }) => {
        callback(token)
        setToken(token)
      })
      .catch((err) => {
        console.error('Login Error', err)
      })
  }
}

export const loginStore = new LoginStore()
export const signupStore = new LoginStore({ signup: true })

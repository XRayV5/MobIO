import { observable, action } from 'mobx'

class LoginStore {
  @observable signup
  @observable username = ''
  @observable password = ''

  constructor({ signup } = {}) {
    this.signup = signup
  }

  @action
  setUsername(username) {
    console.log(username)
    this.username = username
  }

  @action
  setPassword(password) {
    this.password = password
  }
}

export const loginStore = new LoginStore()
export const signupStore = new LoginStore({ signup: true })

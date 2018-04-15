import { observable, action } from 'mobx'
import { removeToken } from '../util/tokenService'
import { browserHistory } from '../components/Router'

class StatusStore {
  IOEvents = {
    registered: this.setUser.bind(this),
  }
  @observable user = null
  @observable authenticated = false
  @action
  setAuth(flag) {
    this.authenticated = flag
  }

  @action
  logout() {
    this.authenticated = false
    removeToken()
    browserHistory.push('/login')
  }

  @action
  setUser(username) {
    console.log('username', username)
    this.user = username
  }

  @action
  getUser() {
    return this.user
  }

  @action
  registerSocketEvent(registerEvent) {
    registerEvent(this.IOEvents)
  }
}

export const statusStore = new StatusStore()

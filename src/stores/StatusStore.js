import { observable, action } from 'mobx'

class StatusStore {
  @observable authenticated = false
  @observable user = null

  @action
  setAuth(flag) {
    this.authenticated = flag
  }
}

export const statusStore = new StatusStore()

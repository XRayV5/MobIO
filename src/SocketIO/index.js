import sio from 'socket.io-client'
import { values, entries } from 'lodash'

const baseURL = 'http://localhost:3090/'

class SocketIO {
  constructor(stores) {
    this.connected = false
    this.socket = null
    this.stores = stores
    this.connect = this.connect.bind(this)
    this.addEventListensers = this.addEventListensers.bind(this)
    this.emitSocketIOActions = this.emitSocketIOActions.bind(this)
  }

  addEventListensers(IOEvents) {
    /**
        Observes all incoming server-side events,
        and update store accordingly
        @param IOEvents { "event name" : eventCallback }
      */
    entries(IOEvents).forEach(([event, callback]) => {
      this.socket.on(event, callback)
    })
  }

  emitSocketIOActions(action, payload) {
    this.socket.emit(action, payload)
  }

  connect(token) {
    if (this.connected) {
      console.log('Already connected.')
      return
    }

    this.socket = sio.connect(baseURL, {
      query: `token=${token}`,
    })

    /**
     * register all store actions that listens for socketIO events
     */
    this.socket
      .on('connect', () => {
        console.log('Socket Connected.')
        values(this.stores).forEach((store) => {
          if (store.registerSocketEvent) store.registerSocketEvent(this.addEventListensers)
          store.emitSocketIOActions = this.emitSocketIOActions
        })
      })
      .on('disconnect', () => {
        console.log('Socket Disconnected.')
      })
  }
}

export default SocketIO

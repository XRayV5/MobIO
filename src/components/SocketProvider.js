import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import * as stores from '../stores'

export default class SocketProvider extends Component {
  componentDidMount() {}
  render() {
    return <Provider {...stores}>{this.props.children}</Provider>
  }
}

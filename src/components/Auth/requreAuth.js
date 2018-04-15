import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

export default function (ComposedComponent) {
  @inject('statusStore')
  @withRouter
  @observer
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.statusStore.authenticated) {
        this.props.history.push('/login')
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.statusStore.authenticated) {
        this.props.history.push('/login')
      }
    }
    render() {
      return <ComposedComponent {...this.props} />
    }
  }
  return Authentication // inject('statusStore')(observer(withRouter(Authentication)))
}

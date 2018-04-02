import React, { Component } from 'react'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'

const LoginWrapper = styled.div`
  align-self: center;
`

@inject('loginStore', 'socketIO')
@observer
class Login extends Component {
  constructor() {
    super()
    this.handleOnEnterEmail = this.handleOnEnterEmail.bind(this)
    this.handleOnEnterPassword = this.handleOnEnterPassword.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleOnEnterEmail(event) {
    this.props.loginStore.setemail(event.target.value.trim())
  }

  handleOnEnterPassword(event) {
    this.props.loginStore.setPassword(event.target.value.trim())
  }

  handleLogin() {
    const { socketIO } = this.props
    this.props.loginStore.sendLogin(socketIO.connect)
  }

  render() {
    const { email, password } = this.props.loginStore
    return (
      <LoginWrapper>
        <div>
          <label>Email</label>
          <input type="text" value={email} onChange={this.handleOnEnterEmail} />
        </div>
        <div>
          <label>Passoword</label>
          <input type="password" value={password} onChange={this.handleOnEnterPassword} />
        </div>
        <div>
          <button onClick={this.handleLogin}>Login</button>
          <Link to="/signup">Sign Up</Link>
        </div>
      </LoginWrapper>
    )
  }
}

export default Login

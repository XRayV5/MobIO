import React, { Component } from 'react'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'

const LoginWrapper = styled.div`
  align-self: center;
`

@inject('loginStore')
@observer
class Login extends Component {
  constructor() {
    super()
    this.handleOnEnterUserName = this.handleOnEnterUserName.bind(this)
    this.handleOnEnterPassword = this.handleOnEnterPassword.bind(this)
  }

  handleOnEnterUserName(event) {
    this.props.loginStore.setUsername(event.target.value.trim())
  }

  handleOnEnterPassword(event) {
    this.props.loginStore.setPassword(event.target.value.trim())
  }

  render() {
    const { username, password } = this.props.loginStore
    return (
      <LoginWrapper>
        <div>
          <label>Email</label>
          <input type="text" value={username} onChange={this.handleOnEnterUserName} />
        </div>
        <div>
          <label>Passoword</label>
          <input type="password" value={password} onChange={this.handleOnEnterPassword} />
        </div>
        <div>
          <button value={this.props.password} onClick={this.handleOnEnterPassword}>
            Login
          </button>
          <Link to="/signup">Sign Up</Link>
        </div>
      </LoginWrapper>
    )
  }
}

export default Login

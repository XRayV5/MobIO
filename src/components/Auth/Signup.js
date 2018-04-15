import React, { Component } from 'react'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'

const LoginWrapper = styled.div`
  align-self: center;
`

@inject('signupStore', 'socketIO')
@observer
class Signup extends Component {
  constructor() {
    super()
    this.handleOnEnterEmail = this.handleOnEnterEmail.bind(this)
    this.handleOnEnterPassword = this.handleOnEnterPassword.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }

  handleOnEnterEmail(event) {
    this.props.signupStore.setemail(event.target.value.trim())
  }

  handleOnEnterPassword(event) {
    this.props.signupStore.setPassword(event.target.value.trim())
  }

  handleSignup() {
    const { socketIO } = this.props
    this.props.signupStore.sendSignUp(socketIO.connect)
  }

  render() {
    const { email, password } = this.props.signupStore
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
          <button onClick={this.handleSignup}>Sign Up</button>
          <Link to="/signin">Sign In</Link>
        </div>
      </LoginWrapper>
    )
  }
}

export default Signup

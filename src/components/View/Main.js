import React, { Component } from 'react'
import './Main.css'

const Message = ({ message, username, sentAt }) => (
  <div className="message-wrapper">
    <div className="message-header">
      <span className="author">{username}</span>{' '}
      <span className="date">
        {`${new Date(sentAt)
          .toString()
          .split(' ')
          .slice(0, 5)
          .join(' ')}`}
      </span>
    </div>
    <div className="message-body">{message}</div>
  </div>
)

function updateScroll() {
  const element = document.querySelector('.message-log')
  if (element) element.scrollTop = element.scrollHeight
}

export class Main extends Component {
  constructor() {
    super()
    // this.handleOnEnterEmail = this.handleOnEnterEmail.bind(this)
    // this.handleOnEnterPassword = this.handleOnEnterPassword.bind(this)
    // this.handleLogin = this.handleLogin.bind(this)
  }
  render() {
    return (
      <div className="container">
        <header>
          <div>ChatIO</div>
          <div className="user-box">
            <div className="user">{this.props.statusStore.user}</div>
            <button
              className="logout-btn"
              onClick={() => {
                console.log(this.props)
                this.props.statusStore.setUser('12345678')
              }}
            >
              logout
            </button>
          </div>
        </header>
        {/* <div id="main">
          <div className="msg-log">
            <div className="message-log" onupdate={updateScroll}>
              {props.state.chat.messageLog.map(msg => <Message {...msg} />)}
            </div>
          </div>
          <div className="user-list">
            <div className="user-list-header">Users Online</div>
            <div className="user-list-log">
              {props.state.chat.userList.map(user => <div>{user}</div>)}
            </div>
          </div>
        </div>
        <footer>
          <textarea
            className="input-area"
            rows={5}
            value={props.state.chat.draft}
            onInput={e => props.actions.chat.handleEnter(e.target.value)}
            oncreate={(e) => {
              let newline = false
              e.addEventListener('keypress', (e) => {
                if (e.keyCode === 13 && !newline) {
                  e.preventDefault()
                  props.actions.chat.sendMessage()
                }
              })
              e.addEventListener('keydown', (e) => {
                if (e.keyCode === 16) newline = true
              })
              e.addEventListener('keyup', (e) => {
                if (e.keyCode === 16) newline = false
              })
            }}
          />
          <button className="send-btn" onClick={props.actions.chat.sendMessage}>
            Send
          </button>
        </footer> */}
      </div>
    )
  }
}

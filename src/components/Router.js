import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Login from './Auth/Login'
import SignUp from './Auth/Signup'
import requireAuth from './Auth/requreAuth'
import { Main } from './View'

export const browserHistory = createBrowserHistory()

export default () => (
  <Router history={browserHistory}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" component={requireAuth(Main)} />
    </Switch>
  </Router>
)

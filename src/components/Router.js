import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Login from './Auth/Login'
import requireAuth from './Auth/requreAuth'

export const browserHistory = createBrowserHistory()

export default () => (
  <Router history={browserHistory}>
    <Switch>
      <Route path="/login" component={Login} />
      {/* <Route path="/posts/:id" component={PostsShow} /> */}
      <Route path="/" component={requireAuth(() => <div>12345</div>)} />
    </Switch>
  </Router>
)

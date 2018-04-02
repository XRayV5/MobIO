import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      {/* <Route path="/posts/:id" component={PostsShow} /> */}
      <Route path="/" component={Login} />
    </Switch>
  </BrowserRouter>
)

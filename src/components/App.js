import React from 'react'
import { configure } from 'mobx'
import styled from 'styled-components'
import { Provider } from 'mobx-react'
import * as stores from '../stores'
import Router from './Router'
import SocketIO from '../SocketIO'
import { hasToken } from '../util/tokenService'
import './foundation.css'

const AppWrapper = styled.div`
  min-height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
configure({ enforceActions: true })

stores.statusStore.setAuth(hasToken())

const App = () => (
  <AppWrapper>
    <Provider {...stores} socketIO={new SocketIO(stores)}>
      <Router />
    </Provider>
  </AppWrapper>
)
export default App

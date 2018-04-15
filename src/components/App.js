import React from 'react'
import { configure } from 'mobx'
import styled from 'styled-components'
import { Provider } from 'mobx-react'
import * as stores from '../stores'
import Router from './Router'
import SocketIO from '../SocketIO'
import { hasToken, getToken } from '../util/tokenService'
import './foundation.css'

const AppWrapper = styled.div`
  min-height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

configure({ enforceActions: true })

stores.statusStore.setAuth(hasToken())
const socketIO = new SocketIO(stores)
if (hasToken()) socketIO.connect(getToken())

const App = () => (
  <AppWrapper>
    <Provider {...stores} socketIO={socketIO}>
      <Router />
    </Provider>
  </AppWrapper>
)
export default App

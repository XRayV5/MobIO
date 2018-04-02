import React from 'react'
import { configure } from 'mobx'
import styled from 'styled-components'
import Router from './Router'
import './foundation.css'

const AppWrapper = styled.div`
  min-height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
configure({ enforceActions: true })

const App = () => (
  <AppWrapper>
    <Provider {...stores}>
      <Router />
    </Provider>
  </AppWrapper>
)
export default App

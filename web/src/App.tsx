import React, { ReactElement } from 'react'
import logo from './logo.svg'
import './App.css'
import Background from '@components/Background'
import store from './redux'

function App(): ReactElement {
  return (
    <>
      <Background />
    </>
  )
}

export default App

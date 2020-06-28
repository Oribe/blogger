import React, { ReactElement } from 'react'
import Background from 'components/Background'
import Header from 'components/Header'
import './App.css'

function App(): ReactElement {
  return (
    <>
      <Header />
      <Background />
    </>
  )
}

export default App

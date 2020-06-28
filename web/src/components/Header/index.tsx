import React, { FC } from 'react'
import { Route } from 'react-router-dom'
import Container from '../Container'
import NavBar from '../Navbar'

const Header: FC = () => {
  return (
    <Container>
      <header>
        <div>
          <Route>
            <img src="" alt="" />
          </Route>
        </div>
        <NavBar />
      </header>
    </Container>
  )
}

export default Header

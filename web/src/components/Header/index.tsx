import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import logo from '@images/WechatIMG13.jpeg'
import Container from '../Container'
import NavBar from '../Navbar'
import styles from './index.module.scss'

const Header: FC = () => {
  return (
    <Container wrapperClassName={styles.header_container}>
      <header className={styles.header}>
        <div className={styles.logo_container}>
          <Link className={styles.logo_link} to="/home">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <NavBar />
      </header>
    </Container>
  )
}

export default Header

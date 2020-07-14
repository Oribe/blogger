import React, { FC } from 'react'
import useRouters from '@/routers'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

const NavBar: FC = () => {
  const routers = useRouters()

  return (
    <nav className={styles.nav}>
      {routers.map((route) => (
        <div>
          <Link to={route.path}>{route.label}</Link>
        </div>
      ))}
    </nav>
  )
}

export default NavBar

import { lazy } from 'react'

const routers = [
  {
    path: '/home',
    component: lazy(() => import('@pages/Home')),
  },
]

export default routers

import { lazy, useState } from 'react'

const useRouters = (): Routers[] => {
  const [routers] = useState([
    {
      label: '首页',
      path: '/',
      component: lazy(() => import('@pages/Home')),
    },
    {
      label: '笔记',
      path: '/note',
      component: lazy(() => import('@pages/Note')),
    },
    {
      label: '留言',
      path: '/message',
      component: lazy(() => import('@pages/Message')),
    },
    {
      label: '关于',
      path: '/about',
      component: lazy(() => import('@pages/About')),
    },
  ])
  return routers
}

export default useRouters

interface Routers {
  label: string
  path: string
  component: React.LazyExoticComponent<React.FC>
}

import React, { ReactElement, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Background from './components/Background'
import Header from './components/Header'
import Container from './components/Container'
import useRouters from './routers'

function App(): ReactElement {
  const routers = useRouters()
  return (
    <Suspense fallback={<></>}>
      <Header />
      <Container>
        <Switch>
          {routers.map((router) => (
            <Route
              key={router.path}
              path={router.path}
              component={router.component}
            />
          ))}
        </Switch>
      </Container>
      <Background />
    </Suspense>
  )
}

export default App

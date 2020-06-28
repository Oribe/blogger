import React, { FC, useEffect } from 'react'

const Home: FC = () => {
  const handleClick = (): void => {
    // console.log('这是首页')
  }
  useEffect(() => {
    handleClick()
  }, [])

  return (
    <section>
      <div>这是首页</div>
    </section>
  )
}

export default Home

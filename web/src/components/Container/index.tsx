import React, { FC, CSSProperties } from 'react'
import styles from './index.module.scss'

const Container: FC<Props> = (props) => {
  const { children, className, style, wrapperClassName, wrapperStyle } = props
  return (
    <section
      className={`${styles.container} ${wrapperClassName}`}
      style={wrapperStyle}
    >
      <div className={`${styles.wrapper} ${className}`} style={style}>
        {children}
      </div>
    </section>
  )
}

export default Container

interface Props {
  className?: string | undefined
  style?: CSSProperties
  wrapperClassName?: string | undefined
  wrapperStyle?: CSSProperties
}

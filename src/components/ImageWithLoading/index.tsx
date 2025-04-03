import React, { memo, useState } from 'react'
import classes from './style.module.scss'
import Skeleton from 'react-loading-skeleton'
import Image from 'next/image'
import classNames from 'classnames'

interface Props {
  className?: string
  w: number
  h: number
  src: string
  onClick?: () => void
}

function ImageWithLoading(props: Props) {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <>
      {isLoading && <Skeleton className={classNames(props.className)} />}
      <Image
        className={classNames(props.className, {
          [classes.loading]: isLoading,
        })}
        src={props.src}
        alt={'mg'}
        width={props.w}
        height={props.h}
        onLoadingComplete={() => setIsLoading(false)}
        onClick={props.onClick}
      />
    </>
  )
}

export default memo(ImageWithLoading)

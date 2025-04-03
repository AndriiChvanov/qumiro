import React from 'react'
import classes from './style.module.scss'
import Smile from '../smile.svg'
import Selfie from '../selfie.svg'
import { Author } from '@/src/app/api/posts/types'
import ImageWithLoading from '@/src/components/ImageWithLoading'

interface Props {
  author: Author
}

export default function Title(props: Props) {
  return (
    <div className={classes.body}>
      <div className={classes.left}>
        <ImageWithLoading className={classes.img} src={Selfie} w={38} h={38} />
        <div className={classes.row}>
          <div className={classes.title}>{props.author.name}</div>
          <div className={classes.subtitle}>{`@${props.author.username}`}</div>
        </div>
      </div>
      <div className={classes.right}>
        <ImageWithLoading className={classes.icon} src={Smile} w={38} h={38} />
      </div>
    </div>
  )
}

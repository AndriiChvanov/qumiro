import React from 'react'
import classes from './style.module.scss'
import Image from 'next/image'
import Smile from '../smile.svg'
import Selfie from '../selfie.svg'
import { Author } from '@/src/app/api/posts/types'

interface Props {
  author: Author
}

export default function Title(props: Props) {
  return (
    <div className={classes.body}>
      <div className={classes.left}>
        <Image className={classes.img} src={Selfie} alt={'author_img'} />
        <div className={classes.row}>
          <div className={classes.title}>{props.author.name}</div>
          <div className={classes.subtitle}>{`@${props.author.username}`}</div>
        </div>
      </div>
      <div className={classes.right}>
        <Image className={classes.icon} src={Smile} alt={'Smile'} />
      </div>
    </div>
  )
}

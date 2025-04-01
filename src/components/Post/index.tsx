import React, { memo } from 'react'
import { Post as IPost } from '@/src/app/api/posts/types'
import classes from './style.module.scss'
import Title from '@/src/components/Post/Title'
import Image from 'next/image'

interface Props {
  data: IPost
  onClick: (id: string) => void
}

function Post(props: Props) {
  return (
    <div className={classes.body} onClick={() => props.onClick(props.data._id)}>
      <Title author={props.data.author} />
      <Image
        className={classes.img}
        src={'https://picsum.photos/2540/1080'}
        alt={'mg'}
        width={296}
        height={246}
      />
    </div>
  )
}

export default memo(Post)

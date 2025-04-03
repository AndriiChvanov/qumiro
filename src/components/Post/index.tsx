import React, { memo } from 'react'
import { Post as IPost } from '@/src/app/api/posts/types'
import classes from './style.module.scss'
import Title from '@/src/components/Post/Title'
import ImageWithLoading from '@/src/components/ImageWithLoading'

interface Props {
  data: IPost
  onClick: (id: string) => void
}

function Post(props: Props) {
  return (
    <div className={classes.body} onClick={() => props.onClick(props.data._id)}>
      <Title author={props.data.author} />
      <ImageWithLoading
        className={classes.img}
        src={`https://api.qumiqo.com/${props.data.preview.thumbnail.filename}`}
        w={296}
        h={246}
      />
    </div>
  )
}

export default memo(Post)

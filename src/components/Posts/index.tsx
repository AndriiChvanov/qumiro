'use client'
import React, { useMemo, useState } from 'react'
import classes from './style.module.scss'
import { Post as IPost } from '@/src/app/api/posts/types'
import Post from '@/src/components/Post'
import PostModal from '@/src/components/PostModal'

interface Props {
  data: IPost[]
}

export default function Posts(props: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [activeId, setActiveId] = useState<string | undefined>()
  const openModal = (id: string) => {
    setActiveId(id)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setActiveId(undefined)
    setIsModalOpen(false)
  }
  const modalData = useMemo(
    () => props.data?.find((el) => el._id === activeId),
    [activeId, props.data]
  )
  return (
    <div className={classes.body}>
      {props.data?.map((post) => (
        <Post data={post} key={post._id} onClick={openModal} />
      ))}
      <PostModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        data={modalData}
      />
    </div>
  )
}

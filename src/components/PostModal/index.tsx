import React from 'react'
import Modal from '@/src/components/Modal'
import classes from './style.module.scss'
import { Post as IPost } from '@/src/app/api/posts/types'
import Title from '@/src/components/PostModal/Title'
import Image from 'next/image'
import Pagination from '@/src/components/PostModal/Pagination'

interface Props {
  isModalOpen: boolean
  closeModal: () => void
  data?: IPost
}

export default function PostModal(props: Props) {
  if (!props.data) return null
  return (
    <Modal
      isOpen={props.isModalOpen}
      onClose={props.closeModal}
      className={classes.body}
    >
      <Title
        title={props.data.title}
        createdAt={props.data.createdAt}
        classifications={props.data.classifications}
      />
      <Image
        className={classes.img}
        src="https://picsum.photos/2540/1080"
        alt={'img'}
        width={764}
        height={612}
      />
      <Pagination />
    </Modal>
  )
}

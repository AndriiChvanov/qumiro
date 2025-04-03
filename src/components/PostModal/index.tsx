import React, { useState } from 'react'
import Modal from '@/src/components/Modal'
import classes from './style.module.scss'
import { Post as IPost } from '@/src/app/api/posts/types'
import Title from '@/src/components/PostModal/Title'
import Pagination from '@/src/components/PostModal/Pagination'
import ImageWithLoading from '@/src/components/ImageWithLoading'

interface Props {
  isModalOpen: boolean
  closeModal: () => void
  data?: IPost
}

export default function PostModal(props: Props) {
  const images = [
    `https://api.qumiqo.com/${props.data?.preview.thumbnail.filename}`,
    'https://api.qumiqo.com/94b314c4-76ad-4ba3-aad5-fddf6ffe8e68.jpeg',
    'https://api.qumiqo.com/3e9f1dd9-f66b-4186-a06a-ffeb30bd8b53.jpeg',
    'https://api.qumiqo.com/4b680ad9-4537-4402-89f5-66651e45221f.jpeg',
  ]
  const [activeStep, setActiveStep] = useState<number>(0)
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
      <ImageWithLoading
        className={classes.img}
        src={images[activeStep]}
        w={764}
        h={612}
      />
      <Pagination
        setActiveStep={setActiveStep}
        activeStep={activeStep}
        images={images}
      />
    </Modal>
  )
}

import React from 'react'
import classes from './style.module.scss'
import classNames from 'classnames'
import ImageWithLoading from '@/src/components/ImageWithLoading'

interface Props {
  setActiveStep: (e: number) => void
  activeStep: number
  images: string[]
}

export default function Pagination(props: Props) {
  return (
    <div className={classes.body}>
      <div className={classes.images}>
        {props.images.map((el, key) => (
          <ImageWithLoading
            key={el}
            className={classes.img}
            src={el}
            w={78}
            h={66}
            onClick={() => props.setActiveStep(key)}
          />
        ))}
      </div>
      <div className={classes.pagination}>
        {props.images.map((_, key) => (
          <div
            key={key}
            onClick={() => props.setActiveStep(key)}
            className={classNames(classes.button, {
              [classes.active]: props.activeStep === key,
            })}
          >
            {key + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

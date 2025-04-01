import React, { useState } from 'react'
import classes from './style.module.scss'
import Image from 'next/image'
import classNames from 'classnames'

export default function Pagination() {
  const steps = [1, 2, 3, 4]
  const [activeStep, setActiveStep] = useState<number>(steps[0])

  return (
    <div className={classes.body}>
      <div className={classes.images}>
        <Image
          className={classes.img}
          src={'https://picsum.photos/2540/1080'}
          alt={'mg'}
          width={78}
          height={66}
        />
        <Image
          className={classes.img}
          src={'https://picsum.photos/2540/1080'}
          alt={'mg'}
          width={78}
          height={66}
        />
        <Image
          className={classes.img}
          src={'https://picsum.photos/2540/1080'}
          alt={'mg'}
          width={78}
          height={66}
        />
      </div>
      <div className={classes.pagination}>
        {steps.map((el) => (
          <div
            onClick={() => setActiveStep(el)}
            className={classNames(classes.button, {
              [classes.active]: activeStep === el,
            })}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  )
}

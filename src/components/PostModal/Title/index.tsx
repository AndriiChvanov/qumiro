import React from 'react'
import Image from 'next/image'
import classes from './style.module.scss'
import Share from './share.svg'
import Info from './info-circle.svg'
import { format } from 'date-fns'

interface Props {
  title: string
  classifications: string[]
  createdAt: string
}

export default function Title(props: Props) {
  const targetDate = new Date(props.createdAt)
  const formattedDate = format(targetDate, 'dd MMM')

  return (
    <div className={classes.body}>
      <div className={classes.left}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.row}>
          <div className={classes.subtitle}>{formattedDate}</div>
          <div className={classes.ellipse} />
          <div className={classes.classification}>
            {props.classifications[0]}
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.img}>
          <Image className={classes.icon} src={Share} alt={'share_img'} />
        </div>
        <div className={classes.img}>
          <Image className={classes.icon} src={Info} alt={'info_img'} />
        </div>
      </div>
    </div>
  )
}

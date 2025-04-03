import React from 'react'
import Skeleton from 'react-loading-skeleton'
import classes from './style.module.scss'

export default function Loader() {
  return (
    <div className={classes.loader}>
      <div className={classes.skeleton}>
        <div className={classes.top}>
          <div className={classes.left}>
            <Skeleton className={classes.icon} />
            <div className={classes.row}>
              <Skeleton className={classes.title} />
              <Skeleton className={classes.title} />
            </div>
          </div>
          <Skeleton className={classes.icon} />
        </div>
        <Skeleton className={classes.img} />
      </div>
      <div className={classes.skeleton}>
        <div className={classes.top}>
          <div className={classes.left}>
            <Skeleton className={classes.icon} />
            <div className={classes.row}>
              <Skeleton className={classes.title} />
              <Skeleton className={classes.title} />
            </div>
          </div>
          <Skeleton className={classes.icon} />
        </div>
        <Skeleton className={classes.img} />
      </div>
      <div className={classes.skeleton}>
        <div className={classes.top}>
          <div className={classes.left}>
            <Skeleton className={classes.icon} />
            <div className={classes.row}>
              <Skeleton className={classes.title} />
              <Skeleton className={classes.title} />
            </div>
          </div>
          <Skeleton className={classes.icon} />
        </div>
        <Skeleton className={classes.img} />
      </div>
      <div className={classes.skeleton}>
        <div className={classes.top}>
          <div className={classes.left}>
            <Skeleton className={classes.icon} />
            <div className={classes.row}>
              <Skeleton className={classes.title} />
              <Skeleton className={classes.title} />
            </div>
          </div>
          <Skeleton className={classes.icon} />
        </div>
        <Skeleton className={classes.img} />
      </div>
      <div className={classes.skeleton}>
        <div className={classes.top}>
          <div className={classes.left}>
            <Skeleton className={classes.icon} />
            <div className={classes.row}>
              <Skeleton className={classes.title} />
              <Skeleton className={classes.title} />
            </div>
          </div>
          <Skeleton className={classes.icon} />
        </div>
        <Skeleton className={classes.img} />
      </div>
      <div className={classes.skeleton}>
        <div className={classes.top}>
          <div className={classes.left}>
            <Skeleton className={classes.icon} />
            <div className={classes.row}>
              <Skeleton className={classes.title} />
              <Skeleton className={classes.title} />
            </div>
          </div>
          <Skeleton className={classes.icon} />
        </div>
        <Skeleton className={classes.img} />
      </div>
    </div>
  )
}

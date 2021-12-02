import React, { useRef, useState, useEffect } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  tooltip: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}))

export const OverflowTip = ({ children, title }) => {
  const classes = useStyles()
  const [isOverflowed, setIsOverflow] = useState(false)
  const textElementRef = useRef(null)
  useEffect(() => {
    const elem = textElementRef.current
    setIsOverflow(!!elem && elem.scrollWidth > elem.clientWidth)
  }, [])
  return (
    <Tooltip
      title={title || children}
      className={classes.tooltip}
      disableHoverListener={!isOverflowed}
    >
      <div ref={textElementRef}>{children}</div>
    </Tooltip>
  )
}

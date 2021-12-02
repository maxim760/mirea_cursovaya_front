import React from 'react'
import { Typography, Link } from '@material-ui/core'

const sx = {
  fontStyle: "italic",
  textAlign: "center",
  fontSize: "1.5rem",
  display: "block",
}

const variant = "h5"
const props = {sx, variant}

export const ItemText = ({ value, isLink, link }) => {
  if (isLink) {
    return <Link href={link} target="_blank" {...props}>{value}</Link>
  }
  return <Typography {...props}>{value}</Typography>
}
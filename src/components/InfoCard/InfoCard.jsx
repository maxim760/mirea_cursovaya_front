import React from 'react'
import { Typography, Box } from '@material-ui/core'
import {makeStyles} from "@material-ui/styles"
import { ItemText } from './ItemText'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.6)",
    maxWidth: 600,
    width: "100%",
    borderRadius: "8px",
  },
  title: {
    width: "100%",
    textAlign: "center",
    marginBottom: "10px !important"
  },
  content: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column"
  },
  list: {
    fontSize: "1.4rem",
    flexDirection: "column",
    flexGrow: 1
  },
}))

const formatList = (list) => {
  if (!list?.length) {
    return []
  }
  return list
    .filter((item) => {
      if (typeof item === "string") {
        return item
      }
      return item.link && item.value
    })
    .map((item) => {
      if (typeof item === "string") {
        return {
          value: item,
          link: item,
        }
      }
      return item
  })
}

export const InfoCard = ({ caption, emptyText = "Пусто", hideOnEmpty, Icon, list, isLink }) => {
  const classes = useStyles()
  const formattedList = formatList(list) 
  if (!formattedList.length && hideOnEmpty) {
    return null
  }
  return (
    <Box className={classes.wrapper}>
      {caption && <Typography variant="h4" className={classes.title}>
        {caption}
      </Typography>}
      <Box className={classes.content}>
        <Icon width={128} height={128} style={{flexShrink: 0}} />
        <Box className={classes.list}>
          {formattedList?.length
            ? formattedList.map(({value, link}, i) => <ItemText key={i} isLink={isLink} value={value} link={link} />)
            : <ItemText value={emptyText} />}
        </Box>
      </Box>
    </Box>
  )
}
import React from 'react'
import {useHistory} from "react-router-dom"
import {Tooltip, IconButton} from "@material-ui/core"
import BackIcon from '@material-ui/icons/ArrowBack';
export const BackButton = ({size = "middle", color = "default"}) => {
  const {goBack} = useHistory()
  return (
    <Tooltip title="Назад">
      <IconButton size={size} color={color} onClick={goBack} aria-label="to back page">
        <BackIcon />
      </IconButton>
    </Tooltip>
  )
}
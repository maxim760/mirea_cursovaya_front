import React, { useRef } from 'react'
import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'

export const AppSearch = ({ reset, blurOnClose = false, ...props }) => {
  const ref = useRef(null)
  const onReset = (e) => {
    reset(e)
    !blurOnClose && ref.current?.focus?.()
  }
  return (
    <TextField
      name="search"
      type="search"
      inputRef={ref}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onReset}>
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        ),"aria-label": "search character", name: "search"
      }}
      variant="standard"
      {...props}
    />
  )
}

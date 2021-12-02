import React from 'react'
import { AppBar } from '@material-ui/core'
import { useChange, useTitle } from '../utils/hooks'
import { AppSearch, HEADER_HEIGHT } from '../components'
import { CharacterList } from '../components/Characters/CharacterList'
export const OFFSET_TOP = 8

// todo для dark темы юзать switch (переключатель в header!!!)
export const CharacterListPage = () => {
  const { input: searchChar, reset } = useChange()
  useTitle("Персонажи")

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'primary.contrastText',
          boxShadow: 0,
          padding: "0 20px",
          top: HEADER_HEIGHT + OFFSET_TOP + 'px',
        }}
      >
        <AppSearch
          {...searchChar}
          reset={reset}
          fullWidth
        />
      </AppBar>
      <CharacterList query={searchChar.value} sx={{ mt: OFFSET_TOP + 40 + 'px' }} />
    </>
  )
}

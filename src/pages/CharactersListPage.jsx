import React from 'react'
import { AppBar, Container } from '@material-ui/core'
import { useTitle } from '../utils/hooks'
import { AppSearch, HEADER_HEIGHT, Template } from '../components'
import { CharacterList } from '../components/Characters/CharacterList'
import { useCharactersContext } from '../utils/contexts/CharactersProvider'
export const OFFSET_TOP = 8

export const CharacterListPage = () => {
  const {resetQuery, searchProps} = useCharactersContext()
  useTitle("Персонажи")

  return (
    <Template>
        <AppBar
          position="fixed"
          sx={{
            bgcolor: 'transparent',
            boxShadow: 0,
            padding: "0 20px",
            top: HEADER_HEIGHT + OFFSET_TOP + 'px',
          }}
          >
          <Container>
          <AppSearch
            sx={{bgcolor: "primary.contrastText"}}
            {...searchProps}
            reset={resetQuery}
            fullWidth
            placeholder="Найти персонажа"
          />
        </Container>
        </AppBar>
      <CharacterList query={searchProps.value} sx={{ mt: OFFSET_TOP + 40 + 'px' }} />
    </Template>
  )
}

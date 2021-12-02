import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { useTitle } from '../utils/hooks'
import { useLocalStorageState } from 'ahooks'
import { StorageKeys } from '../utils/constants'
import { CharacterListWrapper } from '../components/Characters/CharacterListWrapper'
export const FavoritesPage = () => {
  useTitle("Любимые")
  const [favorites] = useLocalStorageState(StorageKeys.favorite)
  if (!favorites?.length) {
    return (
      <Box sx={{display:'flex', flexGrow:1, alignItems: 'center', flexDirection: "column"}}>
        <Typography sx={{my:2, fontSize: 24}} variant="h2">У вас пока нет любимых персонажей 😱</Typography>
      </Box>
    )
  }
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography sx={{my:2, fontSize: 24}} variant="h2">Любимые персонажи 🤩</Typography>
      <CharacterListWrapper items={favorites} />
    </Box>
  )
}

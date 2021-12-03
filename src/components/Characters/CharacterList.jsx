import React, { useEffect, useMemo } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { matchSorter } from 'match-sorter'
import { CharacterListWrapper } from './CharacterListWrapper'
import {Box, Typography} from "@material-ui/core"
import {useCharactersContext} from "../../utils/contexts/CharactersProvider"

const DISNEY_KEYS = [
  'name',
  'films',
  'shortFilms',
  'videoGames',
  'parkAttractions',
]

export const CharacterList = ({ query, ...wrapperProps }) => {
  const {hasNextPage, fetchMoreItems, items} = useCharactersContext()
  const hasSearchValue = !!query.trim()
  
  useEffect(() => {
    fetchMoreItems()
  }, [])

  const searchedItems = useMemo(() => {
    if (!hasSearchValue) {
      return items
    }
    const formattedQuery = query.trim().replace(/\s+/, ' ')
    const searched = matchSorter(items, formattedQuery, {
      keys: DISNEY_KEYS,
    })
    return searched
  }, [query, items, hasSearchValue])

  return (
    <Box {...wrapperProps}>
      <Typography variant="h4" component="h2">
        Персонажи
      </Typography>
      <InfiniteScroll
        hasMore={!hasSearchValue && hasNextPage}
        scrollThreshold={0.95}
        dataLength={searchedItems.length}
        next={fetchMoreItems}
        loader="Загрузка..."
      >
        <CharacterListWrapper items={searchedItems} />
      </InfiniteScroll>
    </Box>
  )
}

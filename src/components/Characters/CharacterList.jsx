import React, { useState, useEffect, useMemo } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { matchSorter } from 'match-sorter'
import { disneyApi } from '../../services/disneyApi'
import { CharacterListWrapper } from './CharacterListWrapper'
import {Box, Typography} from "@material-ui/core"

const DISNEY_KEYS = [
  'name',
  'films',
  'shortFilms',
  'videoGames',
  'parkAttractions',
]


export const CharacterList = ({ query, ...wrapperProps }) => {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(1)
  const hasNextPage = total && page <= total
  const hasSearchValue = !!query.trim()
  const fetchMoreItems = async () => {
    try {
      const items = await disneyApi.getAll({ page })
      setPage((prev) => prev + 1)
      setTotal(items.totalPages)
      setItems((prev) => [...prev, ...items.data])
    } catch (error) {}
  }
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

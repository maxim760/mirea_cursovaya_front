import {createContext, useContext, useState} from "react"
import { disneyApi } from "../../services/disneyApi"
import { useChange } from "../hooks"

const CharactersContext = createContext({})

export const CharactersProvider = ({ children }) => {
  const { input: searchChar, reset } = useChange()
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(1)
  const hasNextPage = total && page <= total
  const fetchMoreItems = async () => {
    try {
      const items = await disneyApi.getAll({ page })
      setPage((prev) => prev + 1)
      setTotal(items.totalPages)
      setItems((prev) => [...prev, ...items.data])
    } catch (error) {}
  }
  return (
    <CharactersContext.Provider value={{
      items,
      fetchMoreItems,
      hasNextPage,
      searchProps: searchChar,
      resetQuery: reset
    }}>
      {children}
    </CharactersContext.Provider>
  )
} 


export const useCharactersContext = () => useContext(CharactersContext)
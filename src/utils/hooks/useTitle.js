import { useEffect } from 'react'

export const useTitle = (title = 'Дисней') => {
  useEffect(() => {
    document.title = title
  }, [title])
}

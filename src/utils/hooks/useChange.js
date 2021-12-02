import { useCallback, useState } from 'react'

export const useChange = (initial = '', resetValue = initial) => {
  const [value, setValue] = useState(initial)
  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])
  const reset = useCallback(() => {
    setValue(resetValue)
  }, [])
  return {
    input: {
      value,
      onChange,
    },
    reset,
  }
}

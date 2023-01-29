import { useEffect, useState } from 'react'
import { useDebounce } from '../useDebounce'

export type UseDebouncedValuePropsType = {
  initialValue?: string
  onChange: (value: string) => void
  delay?: number
}

export type UseDebouncedValueReturnType = [string, (value: string) => void]

export const useDebouncedValue = ({
  initialValue = '',
  onChange,
  delay = 500,
}: UseDebouncedValuePropsType): UseDebouncedValueReturnType => {
  const [isTouch, setIsTouch] = useState(false)
  const [input, setInput] = useState('')

  const debounceSearch = useDebounce(isTouch ? input : null, delay)

  const handleChange = (val: string) => {
    if (!isTouch) {
      setIsTouch(true)
    }
    setInput(val)
  }

  useEffect(() => {
    if (isTouch && debounceSearch !== null) {
      onChange(debounceSearch)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTouch, debounceSearch])

  useEffect(() => {
    if (initialValue) {
      setInput(initialValue)
    }
  }, [initialValue])

  return [input, handleChange]
}

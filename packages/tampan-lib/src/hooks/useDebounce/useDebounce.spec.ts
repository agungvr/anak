import { act, renderHook } from '@testing-library/react-hooks'
import { useDebounce } from './useDebounce'

describe('useDebounce', () => {
  it('should return the debounced value', async () => {
    const delay = 1000
    let value = 'initial'
    const { result, rerender } = renderHook(() => useDebounce(value, delay), {
      initialProps: value,
    })

    expect(result.current).toBe('initial')

    act(() => {
      value = 'updated'
      rerender()
    })

    await new Promise((resolve) => {
      setTimeout(resolve, delay + 10)
    })
    expect(result.current).toBe('updated')
  })
})

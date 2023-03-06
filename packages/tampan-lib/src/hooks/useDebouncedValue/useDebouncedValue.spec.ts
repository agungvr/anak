import { renderHook, act } from '@testing-library/react-hooks'
import { useDebouncedValue } from './useDebouncedValue'

describe('useDebouncedValue', () => {
  it('should debounce the value passed to onChange', async () => {
    let callbackValue: string | null = null
    const { result } = renderHook(() =>
      useDebouncedValue({
        delay: 100,
        onChange: (value: string) => {
          callbackValue = value
        },
      }),
    )
    act(() => {
      result.current[1]('hello')
    })
    expect(callbackValue).toBe(null)
    await new Promise((resolve) => {
      setTimeout(resolve, 150)
    })
    expect(callbackValue).toBe('hello')
  })

  it('should return the current value and a change handler', () => {
    const { result } = renderHook(() =>
      useDebouncedValue({
        onChange: () => {},
      }),
    )
    expect(result.current[0]).toBe('')
    act(() => {
      result.current[1]('hello')
    })
    expect(result.current[0]).toBe('hello')
  })

  it('should use the initialValue if provided', () => {
    const { result } = renderHook(() =>
      useDebouncedValue({
        initialValue: 'initial',
        onChange: () => {},
      }),
    )
    expect(result.current[0]).toBe('initial')
  })
})

import { renderHook, act } from '@testing-library/react-hooks'
import { useNetworkCheck } from './useNetworkCheck'

describe('useNetworkCheck', () => {
  it('should initializes with navigator.onLine', () => {
    const { result } = renderHook(() => useNetworkCheck())
    expect(result.current).toBe(navigator.onLine)
  })

  it('should updates isOnline when window goes online', () => {
    const { result } = renderHook(() => useNetworkCheck())
    act(() => {
      window.dispatchEvent(new Event('online'))
    })
    expect(result.current).toBe(true)
  })

  it('should updates isOnline when window goes offline', () => {
    const { result } = renderHook(() => useNetworkCheck())
    act(() => {
      window.dispatchEvent(new Event('offline'))
    })
    expect(result.current).toBe(false)
  })
})

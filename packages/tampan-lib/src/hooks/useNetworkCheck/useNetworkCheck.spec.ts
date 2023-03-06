import { renderHook } from '@testing-library/react-hooks'
import { useNetworkCheck, subscribe } from './useNetworkCheck'

describe('useNetworkCheck', () => {
  beforeEach(() => {
    Object.defineProperty(navigator, 'onLine', {
      value: true,
      writable: true,
    })
    vi.spyOn(window, 'addEventListener')
    vi.spyOn(window, 'removeEventListener')
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return the default value when the component first renders', () => {
    const { result } = renderHook(() => useNetworkCheck())
    expect(result.current).toBe(true)
  })

  it('should correctly add and remove event listeners', () => {
    const callback = vi.fn()
    const unsubscribe = subscribe(callback)
    expect(window.addEventListener).toHaveBeenCalledWith('online', callback)
    expect(window.addEventListener).toHaveBeenCalledWith('offline', callback)
    unsubscribe()
    expect(window.removeEventListener).toHaveBeenCalledWith('online', callback)
    expect(window.removeEventListener).toHaveBeenCalledWith('offline', callback)
  })
})

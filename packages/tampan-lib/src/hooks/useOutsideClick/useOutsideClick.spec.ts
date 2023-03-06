import type { SpyInstance } from 'vitest'
import { fireEvent } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import { useOutsideClick } from './useOutsideClick'

describe('useOutsideClick', () => {
  let ref: React.RefObject<HTMLElement>
  let callback: () => void
  let addEventListener: SpyInstance
  let removeEventListener: SpyInstance

  beforeEach(() => {
    ref = { current: document.createElement('div') }
    callback = vi.fn()
    addEventListener = vi.spyOn(document, 'addEventListener')
    removeEventListener = vi.spyOn(document, 'removeEventListener')
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should add event listener and call callback when clicked outside', () => {
    renderHook(() => useOutsideClick(ref, callback))

    expect(addEventListener).toHaveBeenCalledWith('click', expect.any(Function))

    act(() => {
      fireEvent.click(document)
    })

    expect(callback).toHaveBeenCalled()
  })

  it('should remove event listener when unmounted', () => {
    const { unmount } = renderHook(() => useOutsideClick(ref, callback))

    unmount()

    expect(removeEventListener).toHaveBeenCalledWith('click', expect.any(Function))
  })
})

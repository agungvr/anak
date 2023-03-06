import { useSyncExternalStore } from 'react'

export const subscribe = (callback: () => void) => {
  window.addEventListener('online', callback)
  window.addEventListener('offline', callback)
  return () => {
    window.removeEventListener('online', callback)
    window.removeEventListener('offline', callback)
  }
}

export const useNetworkCheck = (): boolean =>
  useSyncExternalStore(subscribe, () => navigator.onLine)

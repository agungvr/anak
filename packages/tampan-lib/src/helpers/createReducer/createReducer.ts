/* eslint-disable @typescript-eslint/no-explicit-any */
import produce, { original, current, Draft } from 'immer'

export const createReducer = <S>(reducer: {
  [key: string]: (
    state: Draft<S>,
    action: {
      type: string
      payload?: any
    },
    options: {
      original: typeof original
      current: typeof current
    },
  ) => void
}) =>
  produce((draft: Draft<S>, { type, payload = {} }: any) => {
    const callback = reducer[type]
    if (callback) {
      return callback(draft, { type, payload }, { original, current })
    }
    return draft
  })

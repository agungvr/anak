import { createReducer } from './createReducer'

describe('createReducer', () => {
  const initialState = { count: 0 }

  const reducer = createReducer<typeof initialState>({
    increment: (state, { payload }) => {
      state.count += payload
    },
  })

  it('returns the updated state', () => {
    const action = { type: 'increment', payload: 1 }
    const nextState = reducer(initialState, action)
    expect(nextState).toEqual({ count: 1 })
  })

  it('returns the original state if no action is matched', () => {
    const action = { type: 'unknown', payload: 1 }
    const nextState = reducer(initialState, action)
    expect(nextState).toBe(initialState)
  })
})

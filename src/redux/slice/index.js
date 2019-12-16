import { createSlice } from '@reduxjs/toolkit'

const rootReducer = createSlice({
  name: 'rootReducer',
  initialState: {
    locked: false,
    closed: false,
  },
  reducers: {
    toggleLocked(state) {
      state.locked = !state.locked
    },
    toggleClosed(state) {
      state.closed = !state.closed
    },
  },
})

export const { toggleLocked, toggleClosed } = rootReducer.actions

export default rootReducer.reducer

import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from '@reduxjs/toolkit'
import rootReducer from '../slice/index'
import { render } from '@testing-library/react'

export function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

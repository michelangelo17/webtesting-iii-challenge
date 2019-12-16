import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from '@reduxjs/toolkit'
import rootReducer from '../slice/index'
import { render } from '@testing-library/react'

export const renderWithRedux = (
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  const rendered = render(
    <Provider store={store}>{ui}</Provider>,
    ({ initialState, store = createStore(rootReducer, initialState) } = {})
  )
  return {
    ...rendered,
    rerender: (ui, options) =>
      renderWithRedux(ui, { container: rendered.container, ...options }),
  }
}

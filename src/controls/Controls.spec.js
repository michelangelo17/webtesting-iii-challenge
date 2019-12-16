import React from 'react'
import { renderWithRedux } from '../redux/testHelpers'
import '@testing-library/jest-dom/extend-expect'
import Controls from './Controls'

test('when gate locked and closed open button disabled and unlock button enabled', () => {
  const { getByText } = renderWithRedux(<Controls />, {
    initialState: {
      locked: true,
      closed: true,
    },
  })
  const unlockButton = getByText(/unlock/i)
  const openButton = getByText(/open/i)
  expect(unlockButton).not.toBeDisabled()
  expect(openButton).toBeDisabled()
})

test('when gate unlocked and closed lock and open buttons enabled', () => {
  const { getByText } = renderWithRedux(<Controls />, {
    initialState: {
      locked: false,
      closed: true,
    },
  })
  const lockButton = getByText(/lock/i)
  const openButton = getByText(/open/i)
  expect(lockButton).not.toBeDisabled()
  expect(openButton).not.toBeDisabled()
})

test('when gate open close button enabled and lock button disabled', () => {
  const { getByText } = renderWithRedux(<Controls />, {
    initialState: {
      locked: false,
      closed: false,
    },
  })
  const lockButton = getByText(/lock/i)
  const closeButton = getByText(/close/i)
  expect(lockButton).toBeDisabled()
  expect(closeButton).not.toBeDisabled()
})

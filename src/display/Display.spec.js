import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Display from './Display'
import { renderWithRedux } from '../redux/testHelpers'

test('should display with the right text and class based on state', () => {
  // set display with intialState of open and unlocked
  const { getByText, rerender } = renderWithRedux(<Display />, {
    initialState: {
      closed: false,
      locked: false,
    },
  })
  const openDisplay = getByText(/open/i)
  const unlockedDisplay = getByText(/unlocked/i)
  expect(openDisplay).toHaveClass('green-led')
  expect(unlockedDisplay).toHaveClass('green-led')

  // set display with intialState of open and unlocked
  rerender(<Display />, {
    initialState: {
      closed: true,
      locked: true,
    },
  })
  const closedDisplay = getByText(/closed/i)
  const lockedDisplay = getByText(/^locked$/i)
  expect(closedDisplay).toHaveClass('red-led')
  expect(lockedDisplay).toHaveClass('red-led')
})


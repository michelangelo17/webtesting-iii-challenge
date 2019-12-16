import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Display from './Display'
import { renderWithRedux } from '../redux/testHelpers'

test('should display open if gate state is open with class green-led', () => {
  const { getByText } = renderWithRedux(<Display />, {
    initialState: {
      closed: false,
    },
  })
  const openDisplay = getByText(/open/i)
  expect(openDisplay).toBeInTheDocument()
  expect(openDisplay).toHaveClass('green-led')
})

test('should display closed if gate state is closed with class red-led', () => {
  const { getByText } = renderWithRedux(<Display />, {
    initialState: {
      closed: true,
    },
  })
  const closedDisplay = getByText(/closed/i)
  expect(closedDisplay).toBeInTheDocument()
  expect(closedDisplay).toHaveClass('red-led')
})

test('should display locked if gate state is locked with class red-led', () => {
  const { getByText } = renderWithRedux(<Display />, {
    initialState: {
      locked: true,
    },
  })
  const lockedDisplay = getByText(/locked/i)
  expect(lockedDisplay).toBeInTheDocument()
  expect(lockedDisplay).toHaveClass('red-led')
})

test('should display unlocked if gate state is unlocked with class green-led', () => {
  const { getByText } = renderWithRedux(<Display />, {
    initialState: {
      locked: false,
    },
  })
  const unlockedDisplay = getByText(/unlocked/i)
  expect(unlockedDisplay).toBeInTheDocument()
  expect(unlockedDisplay).toHaveClass('green-led')
})

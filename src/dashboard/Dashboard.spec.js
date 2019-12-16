import React from 'react'
import { renderWithRedux } from '../redux/testHelpers'
import { fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './Dashboard'

test('dashboard renders display and control components', () => {
  const { getAllByTestId, getByTestId } = renderWithRedux(<Dashboard />)
  const displays = getAllByTestId('display')
  const lockUnlockButton = getByTestId('lockUnlock')
  const openCloseButton = getByTestId('openClose')
  expect(displays.length).toBe(2)
  expect(lockUnlockButton).toBeInTheDocument()
  expect(openCloseButton).toBeInTheDocument()
})

test('state defaults to locked false and closed false', () => {
  const { getByText } = renderWithRedux(<Dashboard />)
  const gateUnlocked = getByText(/unlocked/i)
  const gateOpen = getByText(/open/i)
  // check that it's the display not the open gate button
  expect(gateOpen).toHaveClass('led')
  expect(gateUnlocked).toBeInTheDocument()
})

test('clicking buttons changes app state', () => {
  const { getByTestId, getByText } = renderWithRedux(<Dashboard />)
  const openDisplay = getByText(/open/i)
  const unlockedDisplay = getByText(/unlocked/i)
  const lockUnlockButton = getByTestId('lockUnlock')
  const openCloseButton = getByTestId('openClose')

  //initial state
  expect(openDisplay).toHaveClass('green-led')
  expect(unlockedDisplay).toHaveClass('green-led')
  expect(lockUnlockButton).toHaveTextContent(/lock gate/i)
  expect(openCloseButton).toHaveTextContent(/close gate/i)

  //button presses
  fireEvent.click(openCloseButton)
  fireEvent.click(lockUnlockButton)

  //changed state
  expect(openDisplay).toHaveClass('red-led')
  expect(unlockedDisplay).toHaveClass('red-led')
  expect(lockUnlockButton).toHaveTextContent(/unlock gate/i)
  expect(openCloseButton).toHaveTextContent(/open gate/i)
})

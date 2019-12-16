import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './Dashboard'

test('dashboard renders display and control components', () => {
  const { getAllByTestId, getByTestId } = render(<Dashboard />)
  const displays = getAllByTestId('display')
  const lockUnlockButton = getByTestId('lockUnlock')
  const openCloseButton = getByTestId('openClose')
  expect(displays.length).toBe(2)
  expect(lockUnlockButton).toBeInTheDocument()
  expect(openCloseButton).toBeInTheDocument()
})

test('state defaults to locked false and closed false', () => {
  const { getByText } = render(<Dashboard />)
  const gateUnlocked = getByText(/unlocked/i)
  const gateOpen = getByText(/open/i)
  expect(gateUnlocked).toBeInTheDocument()
  expect(gateOpen).toBeInTheDocument()
})

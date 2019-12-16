import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Controls from './Controls'

const fakeToggleLocked = jest.fn()
const FaketoggleClosed = jest.fn()

test('when gate locked and closed open/close button disabled and lock/unlock button enabled', () => {
  const { getByTestId } = render(<Controls locked={true} closed={true} />)
  const lockUnlockButton = getByTestId('lockUnlock')
  const openCloseButton = getByTestId('openClose')
  expect(lockUnlockButton).not.toBeDisabled()
  expect(openCloseButton).toBeDisabled()
})

test('when gate unlocked and closed both buttons enabled', () => {
  const { getByTestId } = render(<Controls locked={false} closed={true} />)
  const lockUnlockButton = getByTestId('lockUnlock')
  const openCloseButton = getByTestId('openClose')
  expect(lockUnlockButton).not.toBeDisabled()
  expect(openCloseButton).not.toBeDisabled()
})

test('when gate opened open/close button enabled and lock/unlock button disabled', () => {
  const { getByTestId } = render(<Controls locked={false} closed={false} />)
  const lockUnlockButton = getByTestId('lockUnlock')
  const openCloseButton = getByTestId('openClose')
  expect(lockUnlockButton).toBeDisabled()
  expect(openCloseButton).not.toBeDisabled()
})

import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
  const { closed, locked } = useSelector(state => state)
  const closedClass = `led ${closed ? 'red-led' : 'green-led'}`
  const lockedClass = `led ${locked ? 'red-led' : 'green-led'}`

  return (
    <div className='display panel'>
      <div data-testid='display' className={lockedClass}>
        {locked ? 'Locked' : 'Unlocked'}
      </div>
      <div data-testid='display' className={closedClass}>
        {closed ? 'Closed' : 'Open'}
      </div>
    </div>
  )
}

export default Display

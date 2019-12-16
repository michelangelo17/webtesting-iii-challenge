import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLocked, toggleClosed } from '../redux/slice'

const Controls = () => {
  const { locked, closed } = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className='controls panel'>
      <button
        data-testid='lockUnlock'
        disabled={!closed}
        onClick={() => dispatch(toggleLocked())}
        className='toggle-btn'
      >
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button
        data-testid='openClose'
        disabled={locked}
        onClick={() => dispatch(toggleClosed())}
        className='toggle-btn'
      >
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  )
}

export default Controls

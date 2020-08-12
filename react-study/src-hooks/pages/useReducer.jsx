import React, { useState, useReducer } from 'react'

const initState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 }
    case 'cut':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}


const Demo = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
      <button onClick={() => dispatch({ type: 'cut' })}>-</button>
    </div>
  )
}

export default Demo
import React, { useState } from 'react'

export default () => {
  /**
   * count 当前的状态
   * setCount  修改当前的状态
   */
  const [count, setCount] = useState(0)
  return (
    <div>
      hello:{count}
      <button onClick={() => { setCount(count + 1) }}>add</button>
    </div >
  )
}
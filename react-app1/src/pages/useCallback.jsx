import React, { useState, useCallback } from 'react'

/* useCallback的作用
  第二个参数决定是否允许第一个参数执行：setSum(sum + 1)
  如果sum发生变化则允许执行，否则不允许执行
  第一个参数第一次会执行一次 ，之后才会判断第二个参数是否发生了变化
   */



const Demo = () => {
  const [count, setCount] = useState(0)
  const [sum, setSum] = useState(0)
  function changeCount() {
    setCount(count + 1)
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={changeCount}>chlik me</button>
      <div>{sum}</div>
      <button onClick={useCallback(() => { setSum(sum + 1) }, [count])}>chlik me</button>
    </div>
  )
}
export default Demo
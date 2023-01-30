import React, { useState, useCallback } from 'react'

/* useCallback的作用
  第二个参数决定是否允许第一个参数执行：setSum(sum + 1)
  如果sum发生变化则允许执行，否则不允许执行
  第一个参数第一次会执行一次 ，之后才会判断第二个参数是否发生了变化
   */

  /**
   * 
   * useCallback是用来长期稳定的维护某一个函数的引用  它会将函数创建后的引用保存
   * 当函数组件下一次重新渲染的时候 他会直接返回之前保存的引用 而不是重新创建
   * 
   * 
  */
  


export default () => {
  const [count, setCount] = useState(0)
  const [num,setNum] = useState(0)

  // useCallback 配合 React.memo  count变化的时候 子组件才更新
  const clickCountAdd2 = useCallback(()=>{
    setCount(count + 2)
  },[count])

/* //未优化前
   const clickCountAdd2 = function(){
    setCount(count + 2)
  } */
  return (
    <div>
      <div>num:{num}</div>
      <button onClick={()=>( setNum(num + 1))}>chlik me num++</button>
      <div>count:{count}</div>
      <button onClick={()=>( setCount(count + 1))}>chlik me count++</button>
      <Child clickCountAdd2 = {clickCountAdd2}/>
    </div>
  )
}

const Child = React.memo(function ({clickCountAdd2}){
  console.log("子组件render了")
  return (
    <>
      <button onClick={clickCountAdd2}>chlik me count+2</button>
    </>
  )
}
)


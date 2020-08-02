import React, { useState, useEffect } from 'react'

/**
 * useEffect 相当于三个生命周期函数
 *          componentDidMount
 *          componentDidUpDate
 *          componentWillUnMount
 */
export default () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('组件加载和数据发生变化是执行')
    document.title = count
  })
  // useEffect(() => {
  //   console.log('只在组件加载时就执行 相当于 componentDidMount ')
  // }, [])

  // useEffect(() => {
  //   console.log('只要count改变才会触发')
  // }, [count])
  return (
    <div>
      {count}
      <button onClick={() => { setCount(count + 1) }}>add</button>
    </div>
  )
}
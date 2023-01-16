import React, { useState, useEffect } from 'react'

/**
 * useEffect 相当于三个生命周期函数
 *          componentDidMount
 *          componentDidUpDate
 *          componentWillUnMount
 * 
 * dom 渲染之后执行
 */
export default () => {
  const [count, setCount] = useState(0)
  const [name,setName] = useLocalStorage('zx-name','zx')
  useEffect(() => {
    console.log('组件加载和数据发生变化时都会执行')
    document.title = count
  })
  // useEffect(() => {
  //   console.log('只在组件加载时就执行 相当于 componentDidMount ')
  // }, [])


  // useEffect(() => {
  //   return () => {
  //     console.log('相当于componentWillUnMount  组件销毁')
  //   }
  // }, [])


  // useEffect(() => {
  //   console.log('只要count改变才会触发')
  // }, [count])
  return (
    <div>
      {count}
      <button onClick={() => { setCount(count + 1);setName('xm') }}>add</button>
    </div>
  )
}

// 自定义 hook 


function useLocalStorage(key,defaultVal){
  const [message,setMessage] = useState(defaultVal)

  useEffect(()=>{
    window.localStorage.setItem(key,message)
  },[message,key])

  return [message,setMessage]
}
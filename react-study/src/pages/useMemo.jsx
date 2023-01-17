import React from "react"
import { useMemo } from "react"
import { useState,useEffect } from "react"

/**
 * 
 * useMemo返回的是函数的运行结果，useCallback返回缓存的函数。
 * 
*/

/* export default ()=>{
  const [number,setNumber] = useState(100)
  const [time,setTime] = useState(new Date())
  useEffect(()=>{
    setTimeout(()=>{
      setTime(new Date())
    },1000)
  },[time])

  const dirtyWork = ()=>{
    console.log("里面有大量运算 每次时间一改变 这里面就要进行运算 消耗性能")
    return number
  }

  return (
    <>
      <h1>{time.toString()}</h1>
      <input type="text" vlaue = {number} onChange = {(e)=>(setNumber(e.target.value))} />
      <div>{dirtyWork()}</div>
    </>
  )
} */

export default ()=>{
  const [number,setNumber] = useState(100)
  const [time,setTime] = useState(new Date())
  useEffect(()=>{
    setTimeout(()=>{
      setTime(new Date())
    },1000)
  },[time])


  const dirtyWork = useMemo(()=>{
    console.log("useMemo 优化 只有当number改变的时候 才触发运算")
    return number
  },[number])

  return (
    <>
      <h1>{time.toString()}</h1>
      <input type="text" vlaue = {number} onChange = {(e)=>(setNumber(e.target.value))} />
      <div>{dirtyWork}</div>
    </>
  )
}

import React, { useEffect, useState,memo } from 'react'

export default () => {
  /**
   * count 当前的状态
   * setCount  修改当前的状态 (不会把新的 state 和旧的 state 进行合并，而是直接替换)
   */
  console.log("父组件渲染 main render")
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({
    age:12,
    address:{
      city:"xian"
    }
  })
  const handleClickCount=()=>{
    setCount(count - 1)
  }
  const handleClickUser = ()=>{
    setUser(state=>{
      state.age += 1
      return {...state}
    })
    setUser(state=>{
      state.age += 1
      state.address.city = "baoji"
      return {...state}
    })
  }
  useEffect(()=>{
    console.log("父组件user变了",user)
  },[user])
  return (
    <div>
      {count}
      <button onClick={() => { setCount(count + 1) }}>add</button>
      <button onClick={handleClickCount}>cut</button>
      <br />
      {JSON.stringify(user)}
      <button onClick={handleClickUser}>user</button>
      <hr />
      <Child count = {count} handleClick = {setCount}/>
    </div >
  )
}
// 默认情况，只要父组件状态变了（不管子组件依不依赖该状态），子组件也会重新渲染
// 优化 Child = memo(Child)
// 使用 React.memo ，将函数组件传递给 memo 之后，就会返回一个新的组件，
// 新组件的功能：如果接受到的属性不变，则不重新渲染函数；
Child = memo(Child)

function Child(props){
  console.log("子组件渲染 child render")
  const {count,handleClick} = props
  useEffect(()=>{
    console.log('子组件接受到的count变了',count)
  },[count])
  return (
    <div>
      {count}
      <button onClick={()=>{handleClick(count - 1)}}>Child cut</button>
    </div>
  )
}
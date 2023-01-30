import React, { useEffect ,useRef} from "react"

/**
 * 
 * useRef 构建一个状态出来 这个状态的变化不会造成重新渲染
 * 同时状态还不会因为组件的重新渲染而被初始化
 * 
 * 
*/



export default () => {
  
  const h1ref = useRef(null)

  useEffect(()=>{
    console.log(h1ref)
  })

  return (
    <div>
     <h1 ref = {h1ref}>this is h1</h1>
    </div>
  )
}
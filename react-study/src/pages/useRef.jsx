import React, { useEffect ,useRef} from "react"

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
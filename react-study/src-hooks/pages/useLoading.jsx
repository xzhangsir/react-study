import {useState} from "react"

export default function useLoading(){
  const [loading,setLoading] = useState(false)

  const executeRequest = async (promiseFn)=>{
    setLoading(true)
    await promiseFn()
    setLoading(false)
  }
  return [
    loading,
    executeRequest
  ]
}
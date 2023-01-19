import React, { useContext } from 'react'
import { MyContext } from './index'

function ChildChildPage() {
  const theme = useContext(MyContext)
  return (
    <p>{JSON.stringify(theme)}</p>
  )
}

export default ChildChildPage
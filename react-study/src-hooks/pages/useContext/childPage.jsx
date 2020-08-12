import React, { useContext } from 'react'
import { MyContext } from './index'

function ChildPage() {
  return (
    <p>{useContext(MyContext)}</p>
  )
}

export default ChildPage
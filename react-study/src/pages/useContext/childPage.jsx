import React, { useContext } from 'react'
import { MyContext } from './index'
import ChildChildPage from './childChildPage'

function ChildPage() {
  const theme = useContext(MyContext)
  return (
    <>
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
    <ChildChildPage />
    </>
  )
}

export default ChildPage
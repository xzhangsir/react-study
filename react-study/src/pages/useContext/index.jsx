import React from 'react'
import ChildPage from './childPage'

export const MyContext = React.createContext()

function MainPage() {
  return (
    <div>
      <MyContext.Provider value="传递给子组件的数据">
        <ChildPage />
      </MyContext.Provider>
    </div>
  )
}

export default MainPage
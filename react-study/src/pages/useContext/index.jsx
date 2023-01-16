import React from 'react'
import ChildPage from './childPage'

const themes = {
  light: {
    foreground: "#fff",
    background: "#000"
  },
  dark: {
    foreground: "#fff",
    background: "#f00"
  }
};

export const MyContext = React.createContext()

function MainPage() {
  return (
    <div>
      {/* 可以是动态的值 */}
      <MyContext.Provider value={themes.dark}>
        <ChildPage />
      </MyContext.Provider>
    </div>
  )
}

export default MainPage
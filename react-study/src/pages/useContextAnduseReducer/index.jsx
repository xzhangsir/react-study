import React, { useReducer } from "react"
import ChildPage from "./childPage";

const themes = {
  light: {
    foreground: "#fff",
    background: "#000"
  },
  dark: {
    foreground: "#fff",
    background: "#f00"
  },
  default:{
        foreground: "#f00",
        background: "#00f"
      }
};

function reducer(state,action){
  console.log("state",state)
  switch(action.type){
    case "light":
      return themes.light
    case "dark":
      return themes.dark
    default:
      return themes.default
  }
}

export const ThemesContext =  React.createContext()

function Demo(){
  const [theme,dispatch] = useReducer(reducer,themes.default)
  return (
    <div>
      <ThemesContext.Provider value={{theme,dispatch}}>
        <ChildPage />
      </ThemesContext.Provider>
    </div>
  )
}

export default Demo
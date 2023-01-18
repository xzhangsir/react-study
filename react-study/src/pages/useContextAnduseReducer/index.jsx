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
  }
};

function reducer(state,action){
  switch(action.type){
    case "light":
      return themes.light
    case "dark":
      return themes.dark
    default:
      return {
        foreground: "#f00",
        background: "#00f"
      }
  }
}

export const ThemesContext =  React.createContext(themes)



function Demo(){
  const [theme,dispatch] = useReducer(reducer,themes.light)
  return (
    <div>
      <ThemesContext.Provider value={{theme,dispatch}}>
        <ChildPage />
      </ThemesContext.Provider>
    </div>
  )
}

export default Demo
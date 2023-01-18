import React from "react"
import { useContext } from "react"
import {ThemesContext} from "./index"

function ChildPage(){
  const {theme,dispatch} = useContext(ThemesContext)
  console.log(theme)
  return (
    <>
      <div style={{ background: theme.background, color: theme.foreground }}>
          frfrfrf
      </div>
      <button onClick={()=>{dispatch({type:"light"})}}>light</button>
      <button onClick={()=>{dispatch({type:"dark"})}}>dark</button>

    </>
  )
}

export default ChildPage
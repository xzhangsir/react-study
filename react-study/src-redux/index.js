import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/app'

import { createStore } from 'redux'
import reducer from './reducers/counter'
// 创建store仓库
const store = createStore(reducer)
// 监听state的变化
// store.subscribe(() => console.log('state:', store.getState()))
const render = () => {
  ReactDOM.render(
    <App
      onAdd={() => store.dispatch({ type: 'ADD' })}
      onCut={() => store.dispatch({ type: 'CUT' })}
      value={store.getState()}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)

import React from 'react'
import ReactDOM from 'react-dom'
//使用react-router路由  下面的<App/>需要用BrowserRouter组件包裹起来
// import { BrowserRouter as Router } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'

/**
 * HashRouter :锚点连接
 * BrowserRouter ： 上线后要后台做一些处理  避免刷新404bug
 */
import App from './pages/app'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

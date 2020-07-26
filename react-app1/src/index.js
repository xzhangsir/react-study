import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'  //使用react-router路由  下面的<App/>需要用BrowserRouter组件包裹起来
import App from './components/app'

ReactDOM.render((
  <BrowserRouter>
  <App/>
  </BrowserRouter>
),document.getElementById('root'))
import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/app'

import { createStore, applyMiddleware } from 'redux'
// applyMiddleware 添加中间件
import thunk from 'redux-thunk' //引入异步处理中间件
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'

// 自定义创建一个日志中间件
const logger = (store) => (next) => (action) => {
  console.log('dispatch:', action)
  let result = next(action) //去加载下一个中间件
  console.log('next state :', store.getState())
  return result
}
// 自定义创建错误信息中间件
const error = (store) => (next) => (action) => {
  try {
    next(action)
  } catch (e) {
    console.error(e)
  }
}
// 创建store仓库
const store = createStore(
  rootReducer,
  {},
  applyMiddleware(logger, error, thunk)
)
// 监听state的变化
// store.subscribe(() => console.log('state:', store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

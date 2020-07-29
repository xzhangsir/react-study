import React from 'react'
import ReactDOM from 'react-dom'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers/index'

import routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'

import 'antd/dist/antd.css'

import Tabber from './components/Tabber'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes}>
      <Tabber />
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
)

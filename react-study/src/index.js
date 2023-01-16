import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Detail from './pages/routerHook'
import App from './app'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={App}></Route>
      <Route path="/detail/:id" component={Detail}></Route>
    </Switch>
  </Router>
  , document.getElementById('root'))

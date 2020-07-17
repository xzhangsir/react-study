import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min'
import App from '../pages/App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Detail from '../pages/Detail'

export default function MeRouter() {
  return <Router>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/home" component={Home}>
        <Redirect to="/login"></Redirect>
      </Route>
      <Route path="/detail/:id" component={Detail}></Route>
    </Switch>
  </Router>
}
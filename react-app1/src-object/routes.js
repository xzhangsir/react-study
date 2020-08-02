import React from 'react'
import { Route } from 'react-router-dom'

import App from './components/app'
import SignupPage from './components/signup/signupPage'

export default (
  <div className="container">
    <Route exact path="/" component={App}></Route>
    <Route path="/signup" component={SignupPage}></Route>
  </div>
)

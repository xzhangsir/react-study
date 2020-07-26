import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'

import News from './news'
import Message from './message'
import MyNavLink from '../components/myNavLink'


export default class Home extends Component {
  render() {
    return (
      <div>
        <p>home页面</p>
        <MyNavLink to = "/home/news">news</MyNavLink>
        <MyNavLink to="/home/message">message </MyNavLink>
        <Switch>
          <Route path= "/home/news" component = {News}></Route>
          <Route path="/home/message" component={Message}></Route>
        </Switch>
      </div>
    )
  }
}
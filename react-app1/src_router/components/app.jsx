import React,{Component} from "react"
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'


import MyNavLink from './myNavLink'
import About from '../pages/about'
import Home from '../pages/home'
import './app.css'

export default class App extends Component{
  render(){
    return(
      <div>
       {/*  <NavLink className = "button" to = '/about' activeClassName = "activeClass">about</NavLink>
        <NavLink className="button" to='/home' activeClassName="activeClass">home</NavLink> 
        这样写的话每个 NavLink中都 需要写 activeClassName="activeClass"  比较麻烦  我们可以 在NavLink的基础上封装一下
        下面的写发就是使用了 封装的组件 MyNavLink
        */}
        <MyNavLink className="button" to='/about'>about</MyNavLink>
        <MyNavLink className="button" to='/home'>home</MyNavLink>
        <Switch>
          <Route path = '/about' component = {About}/>
          <Route path='/home' component={Home} />
          <Redirect to='/about'></Redirect>  
        </Switch>
      </div>
    )
  }
}
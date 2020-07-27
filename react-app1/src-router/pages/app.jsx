import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'

import MyNavLink from '../components/myNavLink'
import '../components/app.css'
import About from './about'
import Home from './home'

export default class App extends Component {
  render() {
    return (
      <div>
        {/*  <NavLink className = "button" to = '/about' activeClassName = "activeClass">about</NavLink>
             <NavLink className="button" to='/home' activeClassName="activeClass">home</NavLink> 
             <Link> 组件也可以跳转 只是没办法为其渲染元素添加样式属性
        */}
        {/**
           *  这样写的话每个 NavLink中都 需要写 activeClassName="activeClass"  比较麻烦  我们可以 在NavLink的基础上封装一下
        下面的写发就是使用了 封装的组件 MyNavLink
           */}
        <MyNavLink className="button" to="/home">
          home
        </MyNavLink>
        <MyNavLink
          className="button"
          to={{
            pathname: '/about',
            search: '?sort=name',
            hash: '#the-hash',
            state: { fromDashboard: true }, //里面的对象可以是任意值  不会在地址栏显示 隐形传参
          }}
        >
          about
        </MyNavLink>
        <NavLink
          to="/render"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          render加载组件 用activeStyle设置高亮
        </NavLink>
        <Switch>
          <Route exact path="/" component={Home}>
            {/* 重定向 */}
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/home" component={Home} />

          <Route path="/render" render={() => <div>render加载的组件</div>} />
          {/* <Route path="/render" render={() => <Home />} /> */}
          {/* strict 必须和 exact 配合使用单独不行  更加精准的匹配 */}
          <Route strict exact path="/about" component={About} />
          {/* 如果上面的都不配备 默认显示下面的组件 */}
          <Redirect to="/err"></Redirect>
        </Switch>
      </div>
    )
  }
}

/**
 * 如果当前组件没有被路由管理  找不到路由对象 可以使用willRouter 
 * 这样就可以找到的props对象就不是空的了
 * class TEST extends Component{
   render(){
      return(
        <div>willRouter</div>
      )
   }
  }
 * export default willRouter(TEST)
 * 
 */

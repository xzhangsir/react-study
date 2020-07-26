import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Msgdetail from './msgdetail'
import MyNavLink from '../components/myNavLink'

export default class Message extends Component {
  state = {
    msg: []
  }
  componentDidMount() {
    // 模拟ajax请求
    setTimeout(() => {
      let msg = [
        { id: 1, title: '001' },
        { id: 2, title: '002' },
        { id: 3, title: '003' }
      ]
      this.setState({ msg })
    }, 1000)
  }
  render() {
    const { msg } = this.state
    return (
      <div>
        <ol>
          {msg.map((item, index) => (
            <li key={index}>
              <MyNavLink to={`/home/message/${item.id}`}>{item.title}</MyNavLink>
            </li>
          ))}
        </ol>
        <Route path="/home/message/:id" component={Msgdetail}></Route>
      </div>
    )
  }
}

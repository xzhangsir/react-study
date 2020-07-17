import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0
  }
  add = () => {
    let num = this.select.value * 1
    let count = this.state.count + num
    this.setState({ count })
  }
  sub = () => {
    let num = this.select.value * 1
    let count = this.state.count - num
    this.setState({ count })
  }
  even = () => {
    let num = this.select.value * 1
    let count = this.state.count
    if (count % 2 === 0) {
      this.setState({ count: count - num })
    }
  }
  odd = () => {
    let num = this.select.value * 1
    let count = this.state.count
    if (count % 2 === 1) {
      this.setState({ count: count + num })
    }
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <p>点击了{count}下</p>
        <select ref={select => this.select = select}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.even}>如果当前是偶数-</button>
        <button onClick={this.odd}>如果当前是奇数+</button>
      </div>
    )
  }
}
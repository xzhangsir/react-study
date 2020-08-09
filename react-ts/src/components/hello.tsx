import React, { Component } from 'react'

interface Iprops {
  title: string,
  age?: number,     //可以传也可以不传
  onMyClick: Function
}

interface Istate {
  count: number
}

export default class Hello extends Component<Iprops, Istate> {
  // 只读属性 
  public readonly state: Readonly<Istate> = {
    count: 0
  }
  public changeCount = () => {
    this.setState({
      count: 2000
    })
  }
  public changeParentData = () => {
    this.props.onMyClick(111)
  }
  public render() {
    const { title } = this.props
    const { count } = this.state
    return (
      <div>
        <div>我是子组件的 hello{title}{count}</div>
        <button onClick={this.changeCount}>改变count</button>
        <button onClick={this.changeParentData}>改变父组件的数据</button>
      </div>
    )
  }
}
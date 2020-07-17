import React, { Component } from 'react'

export default class MsgDetail extends Component {
  state = {
    msg: [
      { id: 1, title: '001', msg: "第一个" },
      { id: 2, title: '002', msg: "第二个" },
      { id: 3, title: '003', msg: "第三个" }
    ]
  }
  render() {
    // 接受路由传递过来的参数
    const {id} = this.props.match.params
    let {msg} = this.state
    let con = msg.find(item=>item.id == id) //查询第一个结果为true的数组元素
    return (
      <ul>
        <li>id:{con.id}</li>
        <li>title:{con.title}</li>
        <li>msg:{con.msg}</li>
      </ul>
    )
  }
}
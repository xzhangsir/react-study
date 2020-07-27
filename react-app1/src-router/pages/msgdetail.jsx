import React, { Component } from 'react'

export default class MsgDetail extends Component {
  state = {
    msg: [
      { id: '1', title: '001', msg: '第一个' },
      { id: '2', title: '002', msg: '第二个' },
      { id: '3', title: '003', msg: '第三个' },
    ],
  }
  goHome = () => {
    this.props.history.push('/')
    // this.props.history.replace('/')
    console.log(this.props)
  }
  render() {
    /* // 如果传递过来的参数是  ?name=zx&age=18
    const params = new URLSearchParams(this.props.location.search)
    console.log(params.get('name'))
    // 也可以使用 querystring */

    // 接受路由传递过来的参数
    const { id } = this.props.match.params
    let { msg } = this.state
    let con = msg.find((item) => item.id === id) //查询第一个结果为true的数组元素
    return (
      <div>
        <ul>
          <li>id:{con.id}</li>
          <li>title:{con.title}</li>
          <li>msg:{con.msg}</li>
        </ul>
        <button onClick={this.goHome}>回到首页</button>
      </div>
    )
  }
}

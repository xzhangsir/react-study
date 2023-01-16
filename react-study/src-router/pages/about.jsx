import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'
export default class About extends Component {
  state = {
    username: '',
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <div>about 页面</div>
        <Prompt message={'输入完毕了吗？'} when={!this.state.username} />
        {/* when是 Prompt这个组件是否展示的条件 */}
        <input type="text" ref={(input) => (this.username = input)} />
      </div>
    )
  }
}

import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userActions from '../actions/user'
import { bindActionCreators } from 'redux'

class User extends Component {
  addObj = () => {
    this.props.userActions.changeuser({
      name: 'zx',
    })
  }
  render() {
    let { user } = this.props
    return (
      <div>
        <div>{user ? user.name : ''}</div>
        <button onClick={this.addObj}>添加一个对象</button>
      </div>
    )
  }
}

// 读取数据
const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}
// 操作数据
const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(User)

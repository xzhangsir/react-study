/* 
//第一种写法 不推荐
import React, { Component } from 'react'
// react-redux和组件关联
import { connect } from 'react-redux'
import { add, cut } from '../actions/counter'
class App extends Component {
  render() {
    console.log(this.props)
    const { add, cut } = this.props
    return (
      <div>
        {this.props.counter}
        <button onClick={() => add()}>ADD</button>
        <button onClick={() => cut()}>CUT</button>
      </div>
    )
  }
}
// 读取数据
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}
// 操作数据
const mapDispatchToProps = (dispatch) => {
  return {
    add: () => {
      dispatch(add())
    },
    cut: () => {
      dispatch(cut())
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
 */

//第二种写法 推荐
import React, { Component } from 'react'
import User from '../components/user'
// react-redux和组件关联
import { connect } from 'react-redux'
import * as counterActions from '../actions/counter'
import { bindActionCreators } from 'redux'

class App extends Component {
  render() {
    const { counterActions } = this.props
    return (
      <div>
        {this.props.counter}
        <button onClick={() => counterActions.add(10)}>ADD</button>
        <button onClick={() => counterActions.cut(10)}>CUT</button>
        <User />
      </div>
    )
  }
}
// 读取数据
const mapStateToProps = (state) => {
  console.log(state)
  return {
    counter: state.counter,
    user: state.user,
  }
}
// 操作数据
const mapDispatchToProps = (dispatch) => {
  return {
    counterActions: bindActionCreators(counterActions, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

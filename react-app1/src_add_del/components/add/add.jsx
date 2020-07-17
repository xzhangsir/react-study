import  React , {Component} from 'react'
import PropTypes from 'prop-types'

export default class Add extends Component{
  // constructor(props){
    // super(props)
   /*  this.state = {
      username:'',
      msg:'' 
      // 可以像下面一样简写
    } */
    // this.submit = this.submit.bind(this)  用箭头函数代替
    // this.username = this.username.bind(this)
    // this.msg = this.msg.bind(this)
  // }
  state = {
    user:'',
    msg:''
  }
  static propsTypes = {
    addItem: PropTypes.func.isRequired
  }
  submit=()=>{  //使用箭头函数可以取消   this.submit = this.submit.bing(this)  简介推荐
    let comment = this.state
    // 将一个对象传递到父组件的数组中
    this.props.addItem(comment)
    this.setState({
      user:'',
      msg:''
    })
  }
  // 获取用户名
  username=(event)=>{
    let user = event.target.value 
    this.setState({user})
  }
  // 获取用户的留言信息
  msg=(event)=>{
    let msg = event.target.value
    this.setState({msg})
  }
  render(){
    let {user,msg} = this.state
    return(
      <div>
        <label htmlFor="username">用户名：</label>
        <input type="text" id = "username" placeholder='用户名' value = {user} onChange = {this.username}/>
        <label htmlFor="text">留言：</label>
        <textarea name="msg" id="text" cols="30" rows="10" value={msg} onChange={this.msg}></textarea>
        <button onClick={this.submit}>提交</button>
      </div>
    )
  }
}
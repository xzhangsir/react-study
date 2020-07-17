import React ,{Component} from 'react'
import Add from '../add/add'
import List from '../list/list'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      lists: [
        {
          user: 'zx',
          msg: '123'
        },
        {
          user: 'zm',
          msg: '234'
        },
        {
          user: 'waa',
          msg: '345'
        },
        {
          user: 'zyp',
          msg: '456'
        }
      ]
    }
  }
  // 添加评论
  addItem = (item)=>{
    let {lists} = this.state
    lists.unshift(item)
    this.setState({lists})
  }
  // 删除评论
  delete = (index)=>{
    let {lists} = this.state
    lists.splice(index,1)
    this.setState({lists})
  }
  render(){
    let {lists} = this.state
    return(
      <div>
        <Add addItem={this.addItem}/>
        <List list={lists} delete={this.delete}/>
      </div>
    )
  }
}
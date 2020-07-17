import React ,{Component} from "react"
import PropTypes from 'prop-types'

export default class List extends  Component {
  // constructor(props){
  //   super(props)
  //   this.del = this.del.bind(this)
  // }
  del=(index)=>{
    let {list} = this.props
    if (window.confirm(`确定要删除${list[index].user}的数据`)){
      this.props.delete(index)
    }
  }
  static propsTypes = {
    list: PropTypes.array.isRequired,
    delete:PropTypes.func.isRequired
  }
  render(){
    let {list} = this.props
    return(
      <div>
        <div style={{ display: list.length === 0 ? 'block' :'none'}}>暂无数据，快点发表吧？</div>
        <ul>
          {
          list.map((item,index)=> <li key = {index}>{item.user}{item.msg} <span onClick = {(e=>this.del(index,e))}>删除</span></li>)
          }
        </ul>
      </div>
    )
  }
}
// 简写见上面  static关键字
// List.propsTypes = {
//   list: PropTypes.array.isRequired,
//   delete: PropTypes.func.isRequired
// }
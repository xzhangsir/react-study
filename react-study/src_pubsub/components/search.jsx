import React, { Component } from 'react'
import Pubsub from 'pubsub-js'  //发布者订阅者模式   传值更方便

export default class Search extends Component {
  state = {
    searchName:''
  }
  search = () => {
    let { searchName} = this.state
    if(searchName){
    //  发布消息
      Pubsub.publish('search',searchName)
    }
  }
  getSearch = (event)=>{
    let searchName = event.target.value
    this.setState({searchName})
  }
  render() {
    let {searchName} = this.state
    return (
      <div>
        <input type="text" placeholder="输入搜索的内容" onChange = {this.getSearch} value = {searchName}/>
        <button onClick = {this.search}>搜索</button>
      </div>
    )
  }

}

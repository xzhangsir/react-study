import React, { Component } from 'react'
import PropTypes  from 'prop-types'

export default class Search extends Component {
  state = {
    searchName:''
  }
  search = () => {
    let { searchName} = this.state
    if(searchName){
      this.props.setSearchName(searchName)
    }
  }
  getSearch = (event)=>{
    let searchName = event.target.value
    this.setState({searchName})
  }
  static propTypes = {
    setSearchName: PropTypes.func.isRequired
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

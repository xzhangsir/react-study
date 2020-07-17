import React, { Component } from 'react'
import Search from './search'
import List from './list'

export default class App extends Component {
  state = {
    searchName:''
  }
  setSearchName = (searchName) => {
    this.setState({ searchName})
  }
  render() {
    let { searchName} = this.state
    return (
      <div>
        <Search setSearchName={this.setSearchName}/>
        <List searchName={searchName}/>
      </div>
    )
  }
}

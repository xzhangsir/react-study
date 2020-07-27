import React, { Component } from 'react'

export default class News extends Component {
  state = {
    list: ['001', '002', '003'],
  }
  render() {
    let { list } = this.state
    return (
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )
  }
}

import React, { Component } from 'react'
export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.value}
        <button onClick={this.props.onAdd}>ADD</button>
        <button onClick={this.props.onCut}>CUT</button>
      </div>
    )
  }
}

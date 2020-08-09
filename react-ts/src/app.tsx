import React, { Component } from 'react'

import Hello from "./components/hello"

interface Istate {
  num: number
}

class App extends Component<{}, Istate>{
  state = {
    num: 0
  }
  public MyClick = (v: any) => {
    this.setState({
      num: v
    })
  }
  public render() {
    const { num } = this.state

    return (
      <div>
        <p>hello{num}</p>
        <Hello title="我是传递的数据" onMyClick={this.MyClick} />
      </div>
    )
  }
}

export default App
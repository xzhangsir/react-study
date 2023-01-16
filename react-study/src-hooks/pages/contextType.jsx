import React, { Component, createContext } from 'react'

const ThemeContext = createContext()

export default class Demo extends Component {
  state = {
    theme: 'red'
  }
  render() {
    const { theme } = this.state
    return (
      <div>
        <ThemeContext.Provider value={theme}>
          <Middle />
        </ThemeContext.Provider>
      </div>
    )
  }
}

class Middle extends Component {
  render() {
    return (
      <div>
        <But></But>
      </div>
    )
  }
}

// class But extends Component {
//   render() {
//     return (
//       <div>
//         <ThemeContext.Consumer>
//           {
//             theme => <h1>{theme}</h1>
//           }
//         </ThemeContext.Consumer>
//       </div>
//     )
//   }
// } 

class But extends Component {
  static contextType = ThemeContext
  render() {
    const theme = this.context
    return (
      <div>
        {theme}
      </div>
    )
  }
}
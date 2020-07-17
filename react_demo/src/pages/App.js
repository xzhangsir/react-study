import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react'
// React-Hooks
export default function App() {
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   console.log('组件加载和数据发生变化是执行')
  // })
  useEffect(() => {
    console.log('组件加载是执行')
  }, [])
  return <div>
    <h1>this is app</h1>
    <Button onClick={() => { setCount(count + 1) }}>{count}</Button>
  </div >
}


// import React from 'react'
// import { Button } from 'antd'
// import { Link } from 'react-router-dom'
// import { render } from '@testing-library/react'
// 无状态
// export default function App() {
//   return <div>
//     <h1>this is app</h1>
//     <Link to="/login">go login</Link>
//     <Link to="/home"> go home</Link>
//   </div>
// }


// 有状态
// export default class App extends React.Component {
//   goHome = () => {
//     this.props.history.push('/home')
//   }
//   render() {
//     return <div>
//       <h1>this is app</h1>
//       <Button onClick={this.goHome}> gohome</Button>
//     </div>
//   }
// }
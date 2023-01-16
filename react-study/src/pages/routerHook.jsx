import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

export default function Detail() {
  const history = useHistory()
  return <div>
    <p>当前是第{useParams().id}个页面</p>
    <button onClick={() => { history.push('/') }}>回到首页</button>
  </div>
}


// 有状态
// export default class Detail extends React.Component {
//   render() {
//     return <div>当前是第{this.props.match.params.id}个页面</div>
//   }
// }
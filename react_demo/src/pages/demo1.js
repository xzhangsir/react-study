import React from 'react'
import { Input, Button, Select } from 'antd'
import 'antd/dist/antd.css'
import '../App.scss'
const { Option } = Select
class App extends React.Component {
  state = {
    val: '',
    list: [],
  }
  inputChange = (e) => {
    this.setState({
      val: e.target.value,
    })
  }
  submit = () => {
    let { val, list } = this.state
    list.push(val)
    this.setState({
      list,
    })
  }
  render() {
    const { val, list } = this.state
    return (
      <div className="App">
        <h1>hello world</h1>
        <Input
          type="text"
          value={val}
          style={{ width: 300 }}
          onChange={this.inputChange}
        />
        <Button onClick={this.submit}>ADD</Button>
        <ul>
          {list.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
        <Select style={{ width: 200 }}>
          {list.map((v, i) => (
            <Option key={i}>{v}</Option>
          ))}
        </Select>
      </div>
    )
  }
}

export default App

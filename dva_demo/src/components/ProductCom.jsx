import React, { Component } from 'react'
import * as api from '../services/example'
export default class ProductCom extends Component {
  clickProductList = () => {
    this.props.dispatch({
      type: 'product/updateProductList',
      payload: {
        name: '红薯'
      }
    })
  }
  clickProductListAsync = () => {
    this.props.dispatch({
      type: 'product/updateListAsync',
      payload: {
        name: '红豆'
      }
    })
    this.props.dispatch({
      type: 'product/updateHttp',
      payload: {}
    })
  }
  componentDidMount() {
    // api.getProduct().then(res => {
    //   console.log(res)
    // })
    this.props.dispatch({
      type: 'product/updateHttp',
      payload: {}
    })
    api.query().then(res => {
      console.log(res)
    })
    api.queryMock().then(res => {
      console.log(res)
    })
  }
  render() {
    const { value, productList } = this.props
    return (
      <div>
        {value}
        <ul>
          {
            productList.productList.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))
          }
        </ul>
        <button onClick={this.clickProductList}>添加productList</button>
        <button onClick={this.clickProductListAsync}>异步添加ProductList</button>
      </div>
    )
  }
}
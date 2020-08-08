import React from 'react'
import ProductCom from '../../components/ProductCom'
import { connect } from 'dva'
import { Link } from 'dva/router'
class ProductPage extends React.Component {
  gotoHome = () => {
    this.props.history.push('/')
  }
  render() {
    const { productList, dispatch } = this.props
    return (
      <div>
        <div>ProductPage:</div>
        <ProductCom value='我是传递的数据' productList={productList} dispatch={dispatch} />
        <Link to="/">去首页</Link>
        <button onClick={this.gotoHome}>去首页</button>
      </div>
    )
  }
}

const mapstateProps = (state) => {
  return {
    productList: state.product
  }
}
export default connect(mapstateProps)(ProductPage)
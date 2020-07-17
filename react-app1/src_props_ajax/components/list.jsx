import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
export default class List extends Component {
  state = {
    url:"https://api.github.com/search/users?q=",
    initview:true,
    loading:false,
    list:'',
    err:false
  }
  static propTypes = {
    searchName: PropTypes.string.isRequired
  }
  // 当组件接受到新的属性时调用
  componentWillReceiveProps(nextProps){
    let {url} = this.state
    let { searchName } = nextProps
    this.setState({
      initview:false,
      loading:true
    })
    Axios.get(url+searchName).then(res=>{
     let list = res.data.items.map(item=>{
       return { name: item.login, avatarUrl: item.avatar_url}
     })
      this.setState({
        initview: false,
        loading: false,
        list
      })
    }).catch(err=>{
      this.setState({
        initview: false,
        loading: false,
        err:true
      })
    })
  }
  render() {
    let { initview, loading, err, list } = this.state
    if (initview){
      return(
        <div>请输入关键字进行搜索</div>
      )
    }else if(loading){
      return (
        <div>加载中.....</div>
      )
    }else if(err){
      return (
        <div>请求错误</div>
      )
    }else{
      return (
        <ul>
          {
            list.map((item, index) => (
            <li  key = {index}>
              <img src={item.avatarUrl} />
              <p>{item.name}</p>
            </li>))
          }
        </ul>
      )
    }
  }
}

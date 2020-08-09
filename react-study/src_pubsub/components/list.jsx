import React, { Component } from 'react'
import Axios from 'axios'
import Pubsub from 'pubsub-js' //发布者订阅者模式

export default class List extends Component {
  state = {
    url:"https://api.github.com/search/users?q=",
    initview:true,
    loading:false,
    list:'',
    err:false
  }
  componentDidMount(){
    // 订阅消息
    Pubsub.subscribe('search',(name,msg)=>{
      // console.log(msg)  //获取订阅的数据
      let { url } = this.state
    this.setState({
      initview:false,
      loading:true
    })
      Axios.get(url + msg).then(res=>{
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

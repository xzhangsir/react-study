React创建项目

```
需要先安装  npm  install creat-reacat-app -g

在使用  create-react-app 项目名称

cd  项目名称

npm start
```



```
this.submit = this.submit.bing(this)   简化为

submit=()=>{

}
```



```
constructor(props){
	super(props)
	this.state = {
		name:'zx'
	}
}
简写为
state = {
	name:'zx'
}
```

```
接受父组件传递的参数时需要使用   prop-types 模块   npm install --save proptypes

Add.propsTypes = {

​		del: PropTypes.func.isRequired

}
简写为：
static propsTypes = {	
	del:PropTyps.func.isRequired
}
```

```
AJAX请求

npm install axios --save

import axios from 'axios'

axios.get(url,{
	params:{
		name:'zx'
	}
}).then(()=>{

}).catch(()=>{

})

axios.get(url?name=zx).then(()=>{

})

axios.post(url,{
	name:zx
}).then()

使用fetch发送请求

fetch(url?name=zx).then(res=>{
	return res.json()
}).then(data=>{
	consoel.log(data)
})
```

```
传值   发布者订阅者模式  npm install pubsub-js --save

import Pubsub fromm 'pubsub-js'

发布消息 Pubsub.publish('自定义事件名',传递的参数)
订阅消息 Pubsub.subscribe('发布消息中自定义的事件名'，（name,msg）=>{
	console.log(msg)  //msg就是获取到发布的消息
})

```

```
路由  npm install react-router-dom --save
index.js  文件

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'  //使用react-router路由  下面的<App/>需要用BrowserRouter组件包裹起来
import App from './components/app'

ReactDOM.render((
  <BrowserRouter>
  <App/>
  </BrowserRouter>
),document.getElementById('root'))

使用：

<NavLink 
	to = '/about'     //去哪个路由
	activeClassName = "activeClass"  //设置选中的class样式
>about</NavLink>
<NavLink 
	to='/home' 
	activeClassName="activeClass"
>home</NavLink> 

   <Switch> //下面的两个Route中只能显示一个  所以使用switch
      <Route path = '/about' component = {About}/>  
      //path和上面to中的路径一致   component表示当前路径中要显示的组件
      <Route path='/home' component={Home} />
      <Redirect to='/about'></Redirect>  //默认显示哪个组件
    </Switch>
    
路由传参
   <NavLink 
	to='/home/messsge/1' 
	activeClassName="activeClass"
	>我是第一个</NavLink> 
	<Route path="/home/message/:id" component={Msgdetail}></Route>
	
	接受传递的参数
	this.props.match,params
```

```
基于React的ui框架    蚂蚁金服的 Ant Design  
```


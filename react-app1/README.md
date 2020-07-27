React创建项目

```
需要先安装  npm  install creat-reacat-app -g

在使用  create-react-app 项目名称

cd  项目名称

npm start
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
传值   发布者订阅者模式  npm install pubsub-js --save

import Pubsub fromm 'pubsub-js'

发布消息 Pubsub.publish('自定义事件名',传递的参数)
订阅消息 Pubsub.subscribe('发布消息中自定义的事件名'，（name,msg）=>{
	console.log(msg)  //msg就是获取到发布的消息
})

```

```
react-rotuer   https://react-router.docschina.org/web/api/Prompt

```

```
reudx  https://www.redux.org.cn/

```

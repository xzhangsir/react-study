// nodemon 可以自动更新  npm i nodemon -g   启动 nodemon index.js
const express = require('express')
const app = express()
const users = require("./routes/users")
const debug = require('debug')("my-application")
// 处理post传参
const bodyParser = require('body-parser')
// 解决跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});


app.use(bodyParser.json())
app.use('/api/users', users)

app.listen(3030, (req, res) => {
  debug("开启监听3030端口")
})
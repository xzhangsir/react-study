// nodemon 可以自动更新  npm i nodemon -g   启动 nodemon index.js
const express = require('express')
const app = express()
const users = require("./routes/users")
const debug = require('debug')("my-application")


app.use('/api/users', users)

app.listen(3030, (req, res) => {
  debug("开启监听3030端口")
})
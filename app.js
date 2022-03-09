// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()


// *1 导入 cors 中间件
const cors = require('cors')
// 将 cors 注册为全局中间件
app.use(cors())
//*2 内置的解析表单数据中间件
app.use(express.urlencoded({ extended: false }))

// *4
const userRouter = require('./router/user')
app.use('/api1', userRouter)

const testRouter = require('./router/test')
app.use('/apiTest', testRouter)

const gameRouter = require('./router/game')
app.use('/game', gameRouter)

//导入解析Content-type为application/json的请求 axios就是这种请求
// const bodyParser = require("body-parser")
// app.use(bodyParser.json())

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8090, function () {
    console.log('api server running at http://127.0.0.1:8090')
})
//*3 整个文件都是*3
const express = require('express')
// 创建路由对象
const router = express.Router()

const user_handler = require('../router_handler/user')
// 测试vue和nodejs的连接
router.post('/test', user_handler.test)


// 将路由对象共享出去
module.exports = router
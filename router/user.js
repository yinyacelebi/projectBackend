//*3 整个文件都是*3
const express = require('express')
// 创建路由对象
const router = express.Router()

// 注册新用户
router.post('/reguser', (req, res) => {
    res.send('reguser OK')
})

// 登录
router.post('/login', (req, res) => {
    res.send('login OK')
})



// 将路由对象共享出去
module.exports = router
//*3 整个文件都是*3
const express = require('express')
// 创建路由对象
const router = express.Router()

const game_handler = require('../router_handler/game')
// 查找一个游戏
router.post('/findOneGame',game_handler.findOneGame)
// 查找所有游戏
router.post('/findAllGame',game_handler.findAllGame)


// 将路由对象共享出去
module.exports = router
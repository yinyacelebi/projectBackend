// 导入 mysql 模块
const mongoDB = require('mongodb').MongoClient


// 向外共享 db 数据库连接对象
module.exports = mongoDB
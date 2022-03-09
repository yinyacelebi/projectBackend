//测试处理函数模块化
exports.test = (req, res) => {
    res.send('test OK')
    console.log(req.body)
}


const dao = require('../Dao/gameDao')

exports.findOneGame = (req,res)=>{

    dao.findOneGameByName(req.body.name).then(value => {
        console.log("controller里的结果是：",value)
        res.send(value)
    })
}

exports.findAllGame = (req,res)=>{

    dao.findAllGame().then(value => {
        console.log("find all game 里的结果是：",value)
        res.send(value)
    })
}
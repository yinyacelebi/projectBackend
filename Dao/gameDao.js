const db = require('../db/index')
const url = "mongodb://localhost:27017";
const q = require('q')
//插入一条游戏
module.exports.insertOneGame = function (name,rate,evaluation,nameByChinese,date){
    db.connect(url, function(err, db) {
        if (err) throw err;
        let dbo = db.db("my_library");
        const myobj = { name: name, rate:rate,evaluation:evaluation,name_by_chinese:nameByChinese,date:date };
        dbo.collection("game").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("游戏插入成功");
            db.close();
        });
    });
}

//查询一个游戏
module.exports.findOneGameByName = function (name){
    return new Promise((resolve,reject)=>{
        db.connect(url, function(err, db) {
            if (err) throw err;
            let dbo = db.db("my_library");
            let whereStr = {"name":name};  // 查询条件
            dbo.collection("game").find(whereStr).toArray(function(err, result) {
                        if (err) throw err;
                        console.log("dao里的结果是查找到:",result);
                        resolve(result)
                        db.close();
                    });
        });
    })
}

//显示数据库中所有的游戏
module.exports.findAllGame = function (){
    return new Promise((resolve,reject)=>{
        db.connect(url, function(err, db) {
            if (err) throw err;
            let dbo = db.db("my_library");
            let whereStr = {};  // 查询条件
            dbo.collection("game").find(whereStr).toArray(function(err, result) {
                if (err) throw err;
                console.log("dao里的结果是查找到:",result);
                resolve(result)
                db.close();
            });
        });
    })
}

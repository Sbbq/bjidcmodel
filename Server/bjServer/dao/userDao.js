var mysql=require('mysql');
var mysqlConf=require('../mysqlConf/mysqlConf');
var userSqlMap=require('./userSqlMap');
var pool=mysql.createPool(mysqlConf.mysql);

module.exports={
    list:function(callback){
        pool.query(userSqlMap.list,function(err,res){
            if(err){
                throw err;
            }
            callback(res);
        })
    },
    isregister:function(username,password,callback){
        pool.query(userSqlMap.isRegister,[username,password],function(err,res){
            if(err){
                throw err;
            }
            callback(res);
        })
    }
}
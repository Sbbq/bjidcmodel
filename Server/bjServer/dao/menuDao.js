var mysql=require('mysql');
var mysqlConf=require('../mysqlConf/mysqlConf');
var menuSqlMap=require('./menuSqlMap');
var pool=mysql.createPool(mysqlConf.mysql);

module.exports={
    list:function(callback){
        pool.query(menuSqlMap.list,function(err,res){
            if(err){
                throw err;
            }
            callback(res);
        })
    }
}
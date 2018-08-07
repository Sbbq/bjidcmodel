var userSqlMap={
    list:'select * from tbluser',
    isRegister:'select * from tbluser where jobnumber=? and password=?'
}
module.exports=userSqlMap;
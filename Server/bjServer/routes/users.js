var express = require('express');
var router = express.Router();
var userDao=require('../dao/userDao');
var result=require('../resultModel/result');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  var username=req.body.username;
  var password=req.body.password;
  userDao.isregister(username,password,function(data){
    if(data==null || data.length==0 ){
        res.json(result.creatResult(false,""));
    }
    else{
        res.json(result.creatResult(true,data[0].username));
    }
  })
});

module.exports = router;

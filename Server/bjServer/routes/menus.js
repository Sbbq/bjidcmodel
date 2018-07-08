var express = require('express');
var router = express.Router();
var menuDao=require('../dao/menuDao');
var result=require('../resultModel/result');

router.get('/',function(req,res,next){
    menuDao.list(function(menus){
        let root=[];
        menus.forEach((item,i)=>{
            if("undefined" == typeof root[item.PID]){
              root[item.PID]=[item];
            }
            else{
              root[item.PID].push(item);
            }
        });
        let data=[];
        function getNode(pid){
            let temp=[];
            if(root[pid]!=null){
              let s=root[pid];
                s.forEach((item)=>{
                    let children=getNode(item.ID);
                    if(children.length==0){
                    temp.push({id:item.ID,label:item.Name,Url:item.Url})
                    }
                    else{
                        temp.push({id:item.ID,label:item.Name,Url:item.Url,icon:item.Icon,children:children})
                    }
                })
            }
            return temp;
        }
        data=getNode(0);
        res.json(result.creatResult(true,data));
    })
});

module.exports = router;
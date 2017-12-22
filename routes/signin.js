var express = require('express');
const mongoose = require('mongoose');
const Models = require('../data/models');
var router = express.Router();

//数据库连接
const Student = Models.Student;
const Project = Models.Project;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signin', { title: '登录界面' });
});

router.post('/', (req,res)=>{
  Student.find({'id':req.body.username}, (err, student)=>{
    if(student[0].password == req.body.userpassword){
      req.session.username = req.body.username;
      res.redirect('/');
    }
    else{
      res.render('signin',{
        title: "登录页面",
        message:"账户与密码不匹配",
      });
    }
  })
});

module.exports = router;
var express = require('express');
const mongoose = require('mongoose');
const Models = require('../data/models');
var router = express.Router();

//数据模型
const Student = Models.Student;
const Project = Models.Project;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('signin', { title: '登录界面' });
});

//处理登录
router.post('/', (req, res)=>{
  Student.find({'id':req.body.username}, (err, student)=>{
    if(student.length!=0){
      if(student[0].password == req.body.userpassword){
        if(student[0].level == 0){
          req.session.username = req.body.username;
          return res.redirect('/');
        }
        else{
          req.session.username = req.body.username;         
          return res.redirect('/admin');
        }
      }
      else{
        res.render('signin',{
          title: "登录页面",
          message:"密码不正确，请重新输入！",
        });
      }
    }
    else{
      res.render('signin',{
        title: "登录页面",
        message:"用户名不存在，请重新输入！",
      });
    }
  })
});

module.exports = router;
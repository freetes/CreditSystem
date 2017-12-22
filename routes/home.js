const express = require('express');
const mongoose = require('mongoose');
const Models = require('../data/models');
const router = express.Router();

//数据库连接
mongoose.connect('mongodb://localhost/creditSystem', err=>{
    if(err) 
        console.log("数据库连接失败，可能是服务未开启！");
    else 
        console.log("数据库连接成功！");
});

const Student = Models.Student;
const Project = Models.Project;

Student.find((err, students)=>{
    if(students.length) return;

    new Student({
        id: 1605110210,
        password: 1,
        name: '李爽',
        gender: '男',
        major: '计算机大类1602班'
    }).save();

    new Student({
        id: 1605110209,
        password: 1,
        name: '马珩',
        gender: '男',
        major: '计算机大类1602班'
    }).save();

    new Student({
        id: 1605110200,
        password: 1,
        name: '王杰',
        gender: '女',
        major: '计算机大类1601班'
    }).save();
});

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.username == undefined){
        res.redirect('/signin');
    }
    else{
        Student.find({'id': req.session.username}, (err, student)=>{
            res.render('index', { 
                title: '个人主页',
                user: student[0]
            });
        })
    }
});

router.post('/', (req, res)=>{
    delete req.session.username;

    res.json(true);
})

module.exports = router;
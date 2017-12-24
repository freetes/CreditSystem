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

//创建登录账号
Student.find((err, students)=>{
    if(students.length) return;

    new Student({
        id: 1605110210,
        password: 1,
        name: '李爽',
        gender: '男',
        faculty: '数学与计算机学院',
        major: '计算机大类1602班'
    }).save();

    new Student({
        id: 1605110209,
        password: 1,
        name: '马珩',
        gender: '男',
        faculty: '数学与计算机学院',
        major: '计算机大类1602班'
    }).save();

    new Student({
        id: 1605110200,
        password: 1,
        name: '王杰',
        gender: '女',
        faculty: '数学与计算机学院',
        major: '计算机大类1601班'
    }).save();
});

/* GET home page. */
router.get('/', function(req, res) {
    if(req.session.username == undefined){
        return res.redirect(303, '/signin');
    }
    Student.find({'id': req.session.username}, (err, student)=>{
        Project.find({'id': student[0].id}, (err, projects)=>{
            res.render('index', { 
                title: '个人主页',
                user: student[0],
                projects: projects
            });
        })
    });
});

//处理注销
router.post('/', (req, res)=>{
    delete req.session.username;

    res.json(true);
});

//处理删除
router.post('/delete', (req, res)=>{
    Project.remove({'_id': req.body.id}, (err)=>{
        res.json(true);
    })
});
//处理新增
router.get('/add', (req, res)=>{
    if(req.session.username == undefined){
        return res.redirect(303, '/signin');
    }
    Student.find({'id': req.session.username}, (err, student)=>{
        res.render('add', { 
            title: '个人素质拓展学分项目添加',
            user: student[0],
            project: {
                _id: '',
                name: '',
                kind: '',
                date: '',
                applyPoint: '',
                remark: ''
            }            
        });
    });
})
router.post('/add', (req, res)=>{
    if(req.body._id == ''){
        new Project({
            id: req.session.username,
            kind: req.body.kind,
            name: req.body.name,
            date: req.body.date,
            applyPoint: req.body.applyPoint,
            finalPoint: 0,
            remark: req.body.remark
        }).save(err=>{
            return res.redirect(303, '/table');
        });
    }
    else{
        Project.findByIdAndUpdate(req.body._id, {
            kind: req.body.kind,
            name: req.body.name,
            date: req.body.date,
            applyPoint: req.body.applyPoint,
            finalPoint: 0,
            remark: req.body.remark
        }, err=>{
            return res.redirect(303, '/table');        
        });
    }
});
router.post('/change', (req, res)=>{
    Student.find({'id': req.session.username}, (err, student)=>{
        Project.findById(req.body._id, (err, project)=>{
            res.render('add', { 
                title: '个人素质拓展学分项目修改',
                user: student[0],
                project: project
            });
        })
    });
});
//处理总表
router.get('/table', (req, res)=>{
    if(req.session.username == undefined){
        return res.redirect(303, '/signin');
    }
    Project.find({'id': req.session.username}, (err, projects)=>{
        Student.find({'id': req.session.username}, (err, students)=>{
            res.render('table', {
                title: '个人素质拓展学分总表',
                student: students[0],
                projects: projects  //数组
            });
        });
    });
})


module.exports = router;
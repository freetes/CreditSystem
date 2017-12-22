var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
    if(req.session.username == undefined){
        res.redirect('/signin');
    }
    else{
        res.render('index', { 
            title: '个人主页',
            user: {
                name: '王杰',
                gender: '女',
                id: '123',
                major: '大类'
            }
        });
    }
    
});

router.post('/', (req, res)=>{
    delete req.session.username;

    res.json(true);
})

module.exports = router;

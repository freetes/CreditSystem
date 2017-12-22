var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
    console.log(req.session.username);
    if(req.session.username==undefined){
        res.redirect('/');
    }
    else{
        res.render('index', { title: '个人主页' });
    }
 
});

module.exports = router;

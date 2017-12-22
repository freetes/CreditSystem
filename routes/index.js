var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signin', { title: '登录界面' });
});

router.post('/', (req,res)=>{
  console.log(req.body);
  if(req.body.username=="123"&&req.body.userpassword=="123"){

     req.session.username = req.body.username;
     res.redirect('/home');
  }
  res.render('signin',{
    title: "登录页面",
    message:"账户与密码不匹配",
    })
});
module.exports = router;

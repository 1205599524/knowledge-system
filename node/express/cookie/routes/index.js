var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/setcookie',(req,res)=>{
  //基础设置cookie,有效期默认为一个会话
  // res.cookie("islogin","true",{maxAge:30000});//设置httponly 前端js无法获取
  res.cookie("login","true",{signed:true})
  res.send("cookie 设置成功")
})
router.get('/admin',(req,res)=>{
  if(req.cookies.islogin=="true"){
    res.send("登录成功")
  }else{
    res.send("登录失败")
  }
})
router.get('/adminsecret',(req,res)=>{
  if(req.signedCookies.login=="true"){
    res.send("登录成功")
  }else{
    res.send("登录失败")
  }
})

module.exports = router;

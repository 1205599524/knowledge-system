const express=require("express")
//引入session模块
const session=require("express-session")
let app=express()
app.use(session(
    {
        secret:"lzq",//加盐
        cookie:{
            maxAge:10000*100
        },//不设置单个会话有效，可传cookie参数
        // resave:true,//强制保存cookie
        // saveUninitialized:true,//是否保存初始化的session

    }
))//加密版cookie

app.get('/session',(req,res,next)=>{
    //登录之后，快速获取user
    req.session.isLogin='true'
    req.session.username="lzq"
    req.session.viplevel=5
    // req.session.cookie=5000//重置有效时间
    res.send("登录状态已设置到session中")
    
    
})
app.get("/sessioned",(req,res,next)=>{
    if(req.session.isLogin=="true"){
    res.send(req.session.username+req.session.viplevel+"<a href='/sessionout' >退出登录</a>")
    }else{
        res.send("没有凭证")
    }
    

    })
app.get("/sessionout",(req,res)=>{
    req.session.destroy(()=>{
        console.log("销毁完毕")
    })
    res.send("成功退出登录")
})
app.listen(3000,function(){
    console.log("server running")
})
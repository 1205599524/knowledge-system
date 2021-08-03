const express=require("express")
let app=express()
app.get("/",(req,res)=>{
  res.send("hello")
})
//路由路径匹配 ？ 0次或1次（/ab?cd） + 1次或多次(/ab+cd)  可以使用正则模式匹配
app.get(/\/a\d{5,}/,(req,res)=>{
  res.send("已匹配5个以上数字")
})
//动态路由
app.get("/news/:newsid",(req,res)=>{
  
  res.send(req.params)
})

//路由追加
app.get("/plus/:id",(req,res,next)=>{
  
  let a=3
   req.params.id=a
   
next()
},
(req,res)=>{
  res.send(req.params)
}
)
app.listen(3000,()=>{
  console.log("server runing")
})
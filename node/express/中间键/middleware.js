const express=require("express")
const path=require("path")
let app=express()
let router1=express.Router()
//开放静态目录中间键
app.use(express.static(path.join(__dirname,"public")))//写了文件目录访问时可不叫public未写则要加
//商场的首页，相当于一个小的app应用,划分模块，有多少应用就可以划分多少模块并用中间键去使用
router1.use((req,res,next)=>{
    console.log("是否为商场应用")
    next()
})
router1.get("/",(req,res)=>{
    res.append("sssss","ss")
    res.send('商场首页')
})
//使用商场应用中间键
app.use("/mall",router1)
//添加中间件
app.use(function(req,res,next){
    console.log("访问任何页面，此函数都会被调用")
    //在此处执行函数
    res.addnum=function(a,b){
        return a+b
    }
    //往下一个函数走必须调用next()
    next()
})
app.get("/",function(req,res){
    res.send("这是首页"+res.addnum(7,5))
})

app.listen(3000,()=>{
    console.log("启动成功")
})
const express=require("express")
const path=require("path")
const fs=require("fs")
const bodyParser=require("body-parser")
const multer=require("multer")
var upload=multer({dest:"./imgdir"})
let app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(__dirname))
app.get("/index",(req,res)=>{
 fs.readFile("ajaxupload.html",{flag:"r",encoding:"utf-8"},(err,data)=>{
     res.send(data)
 })
})
app.post("/test",(req,res)=>{
    for(var key in req.body){
        var str=JSON.parse(key)
        console.log(str,typeof(str))
    }
    res.send(str)
})
app.post("/upload",upload.single("imgupload"),(req,res)=>{
 console.log(req.body)
 fs.rename(req.file.destination+"/"+req.file.filename,req.file.destination+"/"+req.file.filename+req.file.originalname,()=>{
     console.log("改名成功")
 })
 res.send('success')
})
app.listen(3000,function(){
    console.log("sever running")
})
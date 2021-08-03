const express=require("express")
const multer=require("multer")
const fs=require("fs")
const cors=require("cors")
const bodyParser=require("body-parser")
//配置上传对象,设置上传路径 limits:{fileSize:1024*1024*20,files:5} 限制大小及数量 
var uplod =multer({dest:"./uplod"})
let uplodroter =require("./uplodroter")
let app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(express.static(__dirname))
app.get("/",(req,res)=>{
    fs.readFile("./uplod.html",{flag:"r",encoding:"utf-8"},(err,data)=>{
res.send(data)
    })
})
//如果上传单个文件可调用uplod.single 并且将文件的name值传入，多个文件upoad.array
app.post("/imgupload",uplod.single("imgfile"),function(req,res){
    
console.log(req.body)
//重命名文件
let oldpath=req.file.destination+"/"+req.file.filename
let newpath=req.file.destination+"/"+req.file.filename+req.file.originalname
console.log(newpath)
fs.rename(oldpath,newpath,()=>{
    console.log("改名成功")
})
res.send(`<img src='${newpath}'>`)
})
app.get('/json',(req,res)=>{
    fs.readFile("./uplod/1.png",{flag:"r",encoding:"base64url"},(err,data)=>{
        res.send(data)
    })
})
app.post("/postjson",(req,res)=>{
    
})
app.listen(5000,function(){
    console.log("server running")
})

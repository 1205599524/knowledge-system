let http=require("http")
let server=http.createServer()
server.on('request',function(req,res){
    //当服务器被请求时，会触发请求事件，并传入请求对象和相应对象
    if(req.url="/"){
        res.setHeader("Content-type",'text/html;charset=UTF-8')
        //此模块中只能用 end,send在express中才能用
        res.end('<h1>hello</h1>')
    } 

})
server.listen(3000,()=>{
    //启动监听端口号成功时触发
    console.log("启动成功")
})
// let express=require("express")
// let app=express()
// app.get("/",function(req,res){
//     res.send("hello")
// })
// app.listen(3000,function(){
//     console.log("启动成功")
// })
const http=require('http')
const fs=require("fs")
const url=require("url")
const etag=require("etag")
http.createServer((req,res)=>{
    console.log(req.method,req.url)
    const {pathname}=url.parse(req.url)
    if(pathname==="/"){
        const data=fs.readFileSync("./qiang.html")
        res.end(data)
        
    }else if(pathname==="/waring.png"){
        const data=fs.readFileSync("./waring.png")
        
        res.writeHead(200,{
            Expires:new Date("2021-7-27 16:17:58").toUTCString()//缺点服务端和客户端时间不一致情况下
            
        })
        res.end(data)
    }else if(pathname==="/03.png"){
        const data=fs.readFileSync("./03.png")
        
        res.writeHead(200,{
            "Cache-control":"max-age=5"//滑动时间，单位是秒
            
        })
        res.end(data)
    }
    else if(pathname==="/04.jpg"){
        const data=fs.readFileSync("./04.jpg")
        const {mtime} = fs.statSync("./04.jpg")//获取修改时间
        const ifmo=req.headers["if-modified-since"]
        if(ifmo===mtime.toUTCString()){
            res.statusCode=304
            res.end()
            return
        }
        res.setHeader("last-modified",mtime.toUTCString())
        res.setHeader("Cache-Control","no-cache")
        res.end(data)
    }
    else if(pathname==="/eatg.jpg"){
        const data=fs.readFileSync("./eatg.jpg")
        const etagcon=etag(data)//根据文件buffer生成指纹信息
        const ifetag=req.headers["if-none-match"]
        if(ifetag===etagcon){
            res.statusCode=304
            res.end()
            return
        }
        res.setHeader("etag",etagcon)
        res.setHeader("Cache-Control","no-cache")
        
        res.end(data)
    }
    
    else {
        res.statusCode=404
        res.end()
    }
}).listen(3000,()=>{console.log("http://localhost:3000")})
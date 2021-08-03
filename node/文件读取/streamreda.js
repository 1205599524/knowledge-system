let fs=require("fs")
//创建读取流
let rs=fs.createReadStream('stream.text',{flags:"r",encoding:"utf-8"})
let ws=fs.createWriteStream("contact.text",{flags:"w",encoding:"utf-8"})
console.log(rs)
rs.on("open",function(){
    console.log("读取的文件打开")
})
rs.on("close",function(){
    console.log("读取流结束")
})
//每一次数据流入完成
rs.on('data',function(chunk){
    console.log("单批数据流入"+chunk.length)//最大流入65536
    
})
rs.pipe(ws)//将读入的流写入

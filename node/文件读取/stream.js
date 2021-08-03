//对于比较大的文件需要流
let fs=require('fs')
//创建写入流
//语法：fs.cereteWriteStream(文件路径，【option】)
let ws=fs.createWriteStream('stream.text',{flags:"w",encoding:"utf-8"})
console.log(ws)
// 监听打开
ws.on('open',function(){
    console.log('文件打开')
})
ws.on("ready",function(){
    console.log("文件进入准备")
})
ws.on('close',function(){
    console.log('文件关闭')
})
ws.write("helloword",function(err){
    if(err){
        console.log(err)
    }else{
        console.log("内容流完成")
    }
})
ws.write("helloword2",function(err){
    if(err){
        console.log(err)
    }else{
        console.log("内容2流完成")
    }
})
ws.end(function(){
    console.log("文件写入完成,关闭")
})

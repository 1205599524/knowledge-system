var events=require('events')
//自定义事件，原理发布订阅
var fs=require("fs")
let ee=new events.EventEmitter()
ee.on("hellosuccess",function(eventmsg){
    console.log("吃")
    console.log(eventmsg)
})
ee.on("hellosuccess",function(){
    console.log("玩儿")
})
fs.readFile("hello.text",{flag:"r",encoding:"utf-8"},function(err,data){
    if(err){
        throw err
    }else{
     ee.emit('hellosuccess',data)
    }
})
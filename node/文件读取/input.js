let readline=require('readline')
//输入与输出
//实例化接口对象
var r1=readline.createInterface({
    output:process.stdout,
    input:process.stdin
})
//设置r1提问事件
r1.question("今晚吃刷",(answer)=>{
    console.log("答复:"+answer)
    //写完内容关闭
    r1.question("今晚吃刷2",(answer)=>{
        console.log("答复:"+answer)
        //写完内容关闭
        r1.close()
    })
    // r1.close()
    
})


r1.on('close',function(){
    process.exit(0)//结束进程
})

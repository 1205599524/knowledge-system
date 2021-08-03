//all,监听多个promise
//第一个异步
var p1=new Promise((res,rej)=>{
    setTimeout(()=>{console.log("第一个异步")},1000)
    res("first")
})
var p2=new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("第二个异步")
        res("second")
    },1000)
    
})
//都执行完毕，打印success
Promise.all([p2,p1]).then(data=>{console.log('success',data)},err=>{console.log('fail',err)})//谁在前面先执行谁
//race,监听一个promise,谁先执行完输出谁
Promise.race([p2,p1]).then(data=>{console.log('success',data)},err=>{console.log('fail',err)})
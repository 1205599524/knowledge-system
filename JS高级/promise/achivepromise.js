

//实现promise
function IcktPromise(callback){
    //维护状态

this.status='padding'
//存储回调函数
this.successArray=[];
this.failArray=[];
//定义resolve和reject
let resolve=(value)=>{
    //改变状态
    this.status='resolved'
    //执行回调
    // this.successArray.forEach(fn=>{
    //     //存储该函数的执行结果，在下一个函数执行传递。
    //     value=fn(value)
    // })
    //简写
    this.successArray.forEach(fn=>value=fn(value))

    //清空函数队列
    this.successArray=[]
    //存储新的value

    this.value=value;
}
let reject=(value)=>{
//改变状态
this.status='rejected'
//执行函数
this.failArray.forEach(fn=>value=fn(value))
//清空队列
this.failArray=[];
//存储数据
this.value=value

}
//执行回调函数 try catch 由于执行错误会阻塞程序向下执行所以需要
try{
callback(resolve,reject)
}catch(e){
reject(e)
}//捕获错误，错误则捕获
// finally{

// }//有无错误都会执行
}
IcktPromise.prototype.then=function(success,fail){

//判断当前状态
if(this.status==='padding'){
    //存储回调函数
    success && this.successArray.push(success)
    fail && this.failArray.push(fail)
   
}else if(this.status==='resolved'){
    //立即执行
    success && success(this.value)
}else{
    fail && fail(this.value)
}
//链式调用
console.log(this)
return this

}
let p=new IcktPromise((resolve,reject)=>{
    resolve('执行成功')
})
p.then(arg=>{
    console.log(arg)
    return 200
},arg=>{
    console.log(arg)
})
.then(arg=>{
    console.log(arg)
})
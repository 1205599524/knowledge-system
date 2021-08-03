//并行：让异步操作一起执行，彼此之间没有依赖关系，可以通过Promise.all和Promise.race来处理，用时：最慢的操作所用的时常
//串行：异步操作一个接一个执行，彼此之间有依赖关系（后一个依赖前一个执行的结果：管道）。用时：所有操作的时长总和

//定义三个异步操作
var task1= data=>new Promise((resolve,reject)=>{
    setTimeout(function(){
        var sum=data+1
        resolve(sum)
    },1000)
})
var task2= data=>new Promise((resolve,reject)=>{
    setTimeout(function(){
        var sum=data+1
        resolve(sum)
    },2000)
})
var task3= data=>new Promise((resolve,reject)=>{
    setTimeout(function(){
        var sum=data+1
        resolve(sum)
    },3000)
})

function*demo(result){
    result=yield task1(result)
    result=yield task2(result)
    result=yield task3(result)
    return result

}
var t=demo(0)
t.next().value.then(res=>{
    console.log(res)
    t.next(res).value.then(res=>{
        console.log(res)
        t.next(res).value.then(res=>{
            console.log(res)
        })
    })
})


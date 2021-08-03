//异步函数
async function demo(start){
    //等待异步函数执行，await后跟promise
    var result=start
    await new Promise(res=>{
        setTimeout(()=>{
            result+=1
            res(result)
            console.log('1')
        },1000)
    })
    await new Promise(res=>{
        setTimeout(()=>{
            result+=1
            res(result)
            console.log('2')
        },2000)
    })
    console.log('3')
    return result
} 
demo(0).then(
    data=>{console.log(data)}
)

// var task1= data=>new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         var sum=data+1
//         resolve(sum)
//     },1000)
// })
// var task2= data=>new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         var sum=data+1
//         resolve(sum)
//     },2000)
// })
// var task3= data=>new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         var sum=data+1
//         resolve(sum)
//     },3000)
// })

// async function demo(result){
//     result=await task1(result)
//     result=await task2(result)
//     result=await task3(result)
//     return result

// }
// demo(0).then(
//     data=>console.log(data)
// )
//await后面如果跟的不是promise对象会默认 Promise.resolve方法
// async function demo3(){
//     let result=await new Promise(resolve=>{
//         setTimeout(function(){
//             resolve(100)
//         },100)
//     })
//     return result
// }

// demo3()
// .then(res=>{
//     console.log(res)
// })

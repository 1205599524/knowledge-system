//交出控制权 resolve await 限执行同步，再执行异步
// setTimeout(function(){console.log(111)},0)
// var p=new Promise(resolve=>{
//     console.log(222);
//     resolve();
// })
// p.then(data=>{
//     console.log(333)
// })
// let demo=async function(){
// console.log(444);
// await 100;
// console.log(555)    
// }
// demo().then(data=>{
//     console.log(666)
// })
// console.log(777)
//思路，先执行同步，上述只有setTimeout是异步，顺序执行222,遇resolve交出控制权，444遇await交出控制权,777 ,333,555,666,111

setTimeout(function(){console.log(111)},0)
let demo=async function(){
console.log(444);
await 100;
console.log(555)  
await 200;
console.log(888)
await 300;
console.log(999)
}
demo().then(data=>{
    console.log(666)
})
var p=new Promise(resolve=>{
    console.log(222)
    resolve()
})
p.then(data=>{
    console.log(333)
}).then(data=>{
    console.log(123)
}).then(data=>{
    console.log('aaa')
})
console.log(777)
//思路，同步执行427 执行第一个控制器555，交出控制器执行333执行第二个控制权888交出控制权执行123执行第三个控制权999 aaa,执行then666 执行异步函数111
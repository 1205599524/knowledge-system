//遍历generator
// 方法一 for of
// 方法二  ...
function* demo(){
    yield 1;
    yield 2;
    yield 3;
}
var t=demo()
// console.log(...t)
//方法三  yelid*
function* demo2(){
    yield 3;
    //  yield* demo()
     for(var state of t){
         yield state
     }
     
    yield 4;
}
var t2=demo2()
console.log(t2.next())
console.log(t2.next())
console.log(t2.next())
console.log(t2.next())
console.log(t2.next())
console.log(t2.next())
// generator中的this指向window
function* demo3(){
    this.color="red"
    yield 1;
    
}
demo3.prototype.hello=function(){
    console.log('hello')
}
var t3=demo3()
console.log(t3.hello())//无法打印color
//方法，改变this指向
var t4=demo3.call(demo3.prototype)
t4.next()
console.log(t4.color)
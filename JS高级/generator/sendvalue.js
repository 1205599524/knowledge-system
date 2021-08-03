//数据传递
function * demo(){
    yield "arg1";
    yield "arg2";
    yield "arg3"
}
var g=demo()

//获取内部状态值
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
//外部向内部传递
function *demo2(num1){
    console.log(num1)
    var num2=yield "arg1";
    console.log(num2)
    var num3=yield "arg2";
    console.log(num3)
    var num4=yield "arg3";
    console.log(num4)
}
//给方法传递数据，可以在内部接收
var g2=demo2(111)
//generator函数的执行相当于将其初始化。内部的语句还没有执行
//第一次执行next,相对于从函数开始执行到第一个yield关键字并暂停
//注意;第一次执行next表示启动，所以传递的数据是无效的（第一次next无需传递，数据可由demo方法传递）
console.log(g2.next(222))
//第二次执行相当于函数从第一个yield执行到第二个yield并暂停
console.log(g2.next(333))
console.log(g2.next(444))
console.log(g2.next(555))
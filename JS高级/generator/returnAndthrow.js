function*demo(){
    try{
    yield 1;
    yield 2;
    yield 3;
    }
    catch(e){
        console.log(e)
        yield 4;
        yield 5;
        yield 6;
    }
    finally{
        yield 7;
    yield 8;
    }
    yield 9;
    yield 10;
    //return表示内部语句执行完毕，不会再继续执行了
    return 11
    //后面的yield无意义
    yield 1;
    yield 1;
    yield 1;
    yield 1;
    yield 1;
    yield 1;
}
var g=demo();
console.log(g.next())
console.log(g.throw(new Error("这是第一个错误")))//抛出的错误会被内部catch捕获
// throw new Error(111)//相同点，打断程序运行，区别是throw方法抛出的错误会被内部catch语句接收，throw关键字不会
console.log(g.next())


console.log(g.next())
console.log(g.next())
console.log(g.next())
// catch语句只能捕获一个数据，再次抛出无法捕获
// console.log(g.throw(new Error("这是第一个错误")))
console.log(g.next())
console.log(g.next())
//打断执行,传递的数据，就是打断后的vaule值，finally语句会延后打断
console.log(g.return(100))
console.log(g.next())
console.log(g.next())
console.log(g.next())


 

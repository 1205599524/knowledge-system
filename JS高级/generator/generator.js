//yield只能用在generator中
//gennerator和普通函数使用方式一样
function *demo(){
//定义状态
yield '执行一';
yield '执行二';
yield '执行三';
yield '执行四';
yield '执行五';
return '执行终结';
}
var g=demo()
//通过next()方法遍历 遍历结束状态done为true
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
//想再次遍历需要重新执行函数
var g2=demo()
console.log(g2.next())
console.log(g2.next())
console.log(g2.next())
console.log(g2.next())
console.log(g2.next())
console.log(g2.next())
console.log(g2.next())
//实现了迭代器接口，通过for of遍历,遍历不到return值（done已经变为true了）
let g3=demo()
for (let item of g3){
    console.log(item)
} 
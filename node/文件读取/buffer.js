//1.数组不能进行二进制数据的操作
//2.JS数组不像java等语言效率高
//3.buffer内存空间开辟固定大小内存
//将字符串转成Buffer
var str="hello"
let buf=Buffer.from(str)
console.log(buf)
//buf.tostring输出内容
console.log(buf.toString())

//开辟一个空buffer(缓冲区)
var buf1=Buffer.alloc(10)//长度
buf1[0]=10
console.log(buf1)
//找一个内存位置快速使用
let buf2=Buffer.allocUnsafe(10)
console.log(buf2)

let path=require("path")
let str="https://www.bilibili.com/video/BV1i7411G7kW?t=29&p=8.html"
// console.log(path)
let info=path.extname(str)//获取扩展名
console.log(info)
//把序列解析为绝对路径
let arr=['/sxt','qianduan','zs']
let info1=path.resolve(...arr)
console.log(info1,...arr)
//获取当前目录所在完整路径
console.log(__dirname)
let info2=path.join(...[__dirname,"sxt","qianduan"])
console.log(info2)
//获取当前执行文件
console.log(__filename)
//解析路径根路径，目录，扩展名。。
console.log(path.parse(__filename))
//获取操作系统
let os=require("os")
console.log(os.cpus())//cpu信息
console.log(os.totalmem())//内存信息
console.log(os.arch())//系统架构
console.log(os.freemem())//剩余内存
console.log(os.platform())//系统平台
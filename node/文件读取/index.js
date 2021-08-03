var fs=require('fs');//导入文件模块，读写文件有同步和异步的接口
//同步
var fd=fs.openSync('hello.text','r') //'r'读取
console.log(fd)
// var content=fs.readSync(fd,Buffer.alloc(20))//buffer 内存中开辟的缓冲区
var content=fs.readFileSync('hello.text',{flag:'r',encoding:"utf-8"})//不设置编码默认返回buffer,要调tostring方法
console.log(content)
//异步
fs.readFile('hello.text',{flag:"r",encoding:"utf-8"},(err,date)=>{
    if(err){
        console.log(err)
    }else{
        console.log(date)
    }
}) 

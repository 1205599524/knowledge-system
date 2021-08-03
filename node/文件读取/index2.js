//写入
let fs=require('fs')
// fs.writeFile('test.text','晚饭吃shi',{flag:"a",encoding:"utf-8"},(err)=>{
// if(err){console.log(err)}else{
//     console.log("写入成功")
// }
// })//flag：“a”追加""w"覆盖写入
//异步封装
function writefs(path,content){
    return new Promise((resolve,reject)=>{
        fs.writeFile(path,content,{flag:"a",encoding:"utf-8"},(err)=>{
            if(err){reject(err)}else{
                resolve(err)
            }
            })
    })
}
async function writeList(){
    await writefs('lck.text','one')
    await writefs('lck.text','two')
    await writefs('lck.text','three')
    await writefs('lck.text','four')
}
writeList()
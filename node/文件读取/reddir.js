let fs=require('fs')
//读取目录
fs.readdir("../模块化导入导出",(err,files)=>{
    if(err){
        console.log(err)
    }else{
        console.log(files) 
    }
    

})
//删除目录
fs.rmdir(path,callback)
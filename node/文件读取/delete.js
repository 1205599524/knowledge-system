//删除
let fs=require("fs")
fs.unlink('lck.text',function(){
    console.log("成功删除")
})
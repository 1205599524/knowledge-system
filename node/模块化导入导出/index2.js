let a=123
let b=456
exports.a=a
console.log("123")
module.exports.b=b
//exports对象==modules.exports(系统默认设置exports=modules.exports,系统默认找modules.exports)
exports={neme:"xiaom"}//(改变了指向，最终不会导出)
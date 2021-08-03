let express=require('express')
let app=express()
app.get('/',function(req,res){
    console.log(req)
    res.send("namehello")
    next()
})
app.get('/a',function(req,res){
    console.log(req)
    res.send("namehelloa")
})
app.listen(8000,function(){
    console.log('开启成功')
})
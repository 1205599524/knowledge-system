//数据
var p1=Promise.resolve(100)
p1.then(
    data=>{console.log(data)},
    err=>{}
)
//promise对象
var p2=Promise.resolve(new Promise((res,rej)=>{
    
    res(200)
    rej(200)
    
}))
p2.then(
    data=>{console.log(data)},
    err=>{}
)
//thenable对象
var p3=Promise.resolve({
    color:"",
    then(res,rej){
        res(300)
        rej(300)
    }
})
p3.then(
    data=>{console.log(data)},
    err=>{}
)

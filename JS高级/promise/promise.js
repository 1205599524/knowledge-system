
    let p=new Promise((res,rej)=>{
        setTimeout(()=>{
            res(['操作成功',100,200])//成功执行
            // rej(["操作失败",200,300])//失败执行
        },1000)
    })
    p.then(
        (...args)=>{
         
            console.log('success',args)
            return 200 //内部return一个新的promise对象
            return new Promise(res=>{
                res('第二次执行成功')
            })//前一个的返回值为后一个then的参数
        },
        (...args)=>{
           console.log('fail',args)
        }
    )
    .then((...args)=>{
        console.log('第二次执行',args)
    })

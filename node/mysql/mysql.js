let mysql=require("mysql")
let options={
    host:"localhost",
    port:"3306",//可选，默认3306
    user:"root",
    password:"1205599524",
    database:"liang"
}
//创建与数据库的链接
let con=mysql.createConnection(options)
//建立链接
con.connect((err)=>{
    if(err){
    console.log(err)}
    else{
        console.log("数据库连接成功")
    }
})
//执行数据库语句
//执行查询语句
let strsql="select * from student"
con.query(strsql,function(err,results,fields){
    if(err){
        console.log(err)
    }else{
        console.log(results,fields)
    }

})
let mysql=require("mysql")
let options={
    host:"localhost",
    port:"3306",//可选，默认3306
    user:"root",
    password:"1205599524",
    database:"mall"
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
function querytable(){
    let querytable="show tables"
    let querydata="select * from user"
    con.query(querytable,(err,result)=>{
        console.log(result)
    })
    con.query(querydata,(err,result)=>{
        console.log(result)
    })
}
//事务：当一个业务逻辑需要多个sql完成时，如果其中某条sql出错，则希望整个操作都退回

//场景将19删除，将20更新，插入dage  222  begin 和commit 之间语句不能出错 否侧回滚rollback
//begin
let sql1="insert into user (username,password) values ('dage','222');"
let sql2="update user set username='lzq',password='120' where id=20;"
let sql3="delete from user where id=19;"
//commit
let finallstr=sql1+sql2+sql3
console.log(finallstr)
con.query(finallstr,(err,res)=>{
    console.log(err)
    console.log(res)
    querytable()
})
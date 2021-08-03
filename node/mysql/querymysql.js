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
//条件查询
let query1="select * from user where id > 10 and id < 20"//select * from user where id between 10 and 20
con.query(query1,(err,res)=>{
    console.log(err)
    console.log(res)
})
//查询或
let quer2="select * from user where password='123' or  password='789'"// password in ("123","789")
con.query(quer2,(err,res)=>{
    console.log(res)
})
//模糊查询
let quer3="select * from user where username like '%ao%'"// %任意个 前面如没有%表示已ao开头，后面没有则表示已ao结尾
con.query(quer3,(err,res)=>{
    console.log(res)
})
//_表示一个字符
let quer4="select * from user where username like 'xiao___'"// 以xiao开头 后面跟3个字符，知道前面是xiao只记得后面有3个字符
con.query(quer4,(err,res)=>{
    console.log(res)
})
//找出空内容 select * form user where id is NULL(not NULL非空)

//******** */外键约束，可实现表关联
//连表查询  select * from author(表一) inner join authorbook(表二) on author.id=authorbook.authorid//inner join 全连接// 最后可接where进行再查询
//连表查询  select * from author(表一) left join authorbook(表二) on author.id=authorbook.authorid//left join 已左边为准，右边没有的为null,right jion 反之
//视图 cerate view allbook(视图名称) as （查询语句） 相当于封装查询语句
//查询视图等于查表 select * from allbook 
//更新 
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
let update1="update user set username='小红2',password='567' where id=19"
con.query(update1,(err,res)=>{
    console.log(err)
    console.log(res)
    querytable()
}) 
//删除
//逻辑删除，物理删除
//逻辑删除既增加一个字段 比如设置，isdele=true 而非真删
//物理删除，则移出数据库
let del1="delete from user where id=22"
con.query(del1,(err,res)=>{
    console.log(err)
    console.log(res)
    querytable()
}) 
//删除表 deletea from user 将表数据清空，drop将表删除





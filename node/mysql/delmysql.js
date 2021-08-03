let mysql=require("mysql")
let options={
    host:"localhost",
    port:"3306",//可选，默认3306
    user:"root",
    password:"1205599524",
    database:"mall" //有库则连，无库则不要
}
let con=mysql.createConnection(options)
con.connect((err)=>{
    if(err){
    console.log(err)}
    else{
        console.log("数据库连接成功")
    }
})
//删除表
let strsql="drop table student"
con.query(strsql,function(err,result){
    if(err){
        console.log(err)
    }
    else{
        console.log("删除成功")
    }
    
})
//删除库
let strku="drop database liang"
con.query(strku,(err,res)=>{
    if(err){
        console.log(err)
    }
    else{console.log('删表成功')}
    
})
//查询库
function query(){
let strquery="show databases"
con.query(strquery,(err,res)=>{
    console.log(res)
})}
//创建库
let strcreate="create database mall"
con.query(strcreate,(err,result)=>{
    console.log(result)
    query()
})
//建表
let strtable="CREATE TABLE `user` (`id`  int NOT NULL AUTO_INCREMENT,`username`  varchar(255) NULL, `password`  varchar(255) NULL,PRIMARY KEY(`id`));"
con.query(strtable,(err,res)=>{
    console.log(err)
    console.log(res)
    query()

})
//插入数据
let strcha="insert into  user  (username,password) values ('liang','123456')"
con.query(strcha,(err,res)=>{
    console.log(err)
    console.log(res,"hh")
})

let strsql7="insert into user (username,password) values ('xiaomin','123')"
con.query(strsql7,(result)=>{
    console.log(result,'xx') 
})
//查询表以及数据
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
//占位符插入
let strsql8="insert into user (username,password) values (?,?)"
con.query(strsql8,["小红","789"],(err,res)=>{
    console.log(res,"占位符")
    querytable()
})
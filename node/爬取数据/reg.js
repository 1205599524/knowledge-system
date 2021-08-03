//正则表达式 
//正则在线测试工具：https://regxr-cn.com
//正则练习：https://codejiaonang.com
//1.利用RegExp对象来创建正则表达式
var regexp=new RegExp(/123/)
console.log(regexp)
//2.利用字面量创建
var reg=/123/
//测试 test是否符合要求规范 返回true或false
console.log(reg.test(123))
//只要包含abc返回结果均为true
var reg1=/abc/
console.log(reg1.test("abcde"))
//变界符 ^ & 
//^以。。。。开头 $以。。。。结尾,限定字符数
var reg2=/^abc$/
console.log(reg2.test("abcabc"),reg2)//精确匹配,必须以abc开头，abc结尾,false
//[] 包含一个既返回true
var reg3=/[abc]/
console.log(reg3.test("ahbsgj"))//true
var reg4=/^[abc]$/   //只有是a 或是b 或是才为true
console.log(reg4.test("a"))//true
console.log(reg4.test("abc"))//false
//[-] -范围
var reg5=/[a-z]/ //匹配a-z，符合一个既为true 区分大小写
//字符组合
var reg6=/^[a-zA-Z0-9_]$/  //多选一 任一既符合 
//如果中括号里有^表示取反 注意要和边界符区分开
var reg7=/^[^a-zA-Z0-9_]$/ //出现任一个既不符合
console.log(reg7.test(";"),reg7)//true,只能匹配一个字符，多个字符为false
console.log(reg7.test("2"))//false

////////////量词符：用来限定某个模式出现的次数
//* 相当于>=0
var reg8=/^a*$/  //可以出现0次或多次
//+ 相当于 >=1，可以出现1次或者多次
var reg9=/^a+$/
//? 相当于 1||0，只能出现0次或1次
var reg10=/^a?$/
//{3}
var reg11=/^a{3}$/ //规定只能出现3次
//{3,}
var  reg12=/^a{3,}$/ // 规定出现 >=3次
//{3,6}
var reg13=/^a{3,6}$/ //规定>=3 <=6次

//()表示优先级
var reg14=/^abc{3}$/ //只有c出现3次，既结果只能为abccc才为true
console.log(reg14.test("abccc"))
var reg15=/^(abc){3}$/ // abcabcabc 才为true

/////////////////预定义类
// \d 只允许出现一个数字 相当于【0-9】
// \D 相当于取反 【^0-9】 匹配所有0-9以外的字符
// \w  相当于【A-Za-z0-9_】
// \W  相当于【^A=Za-z0-9】
//  \s 相当于【\t\r\n\f】  匹配空格 换行符、制表符、空格符等
//  \S  相当于【^\t\r\n\f】 

//匹配号码 010-12345678 或0530-1234567
// 正则表达式中|表示或
var reg16=/^\d{3}-\d{8}|\d{4}-\d{7}$/
var reg17=/^\d{3,4}-\d{8}$/
///////////////////正则表达式参数
//  /表达式/g全局匹配 /表达式/i 忽略大小写 /表达式/ig 全局匹配并忽略大小写

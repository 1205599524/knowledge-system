let url=require('url')

let httpUrl="https://sale.vmall.com/huaweizone.html?cid=10618"
let urlObj=url.parse(httpUrl)
console.log(urlObj)//解构地址

let target="http://www.taobao.com/"
let newurl='./myindex.html'
let finallurl=url.resolve(target,newurl)//合并路径
console.log(finallurl)

let axios=require("axios")
let httpUrl="https://www.1905.com"
axios.get(httpUrl).then(res=>{
    console.log(res.data)
})
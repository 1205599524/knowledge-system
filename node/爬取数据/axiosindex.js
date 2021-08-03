let axios =require("axios")
axios({
    url:'http://123.207.32.32:8000/home/data?type=sell&page=3',
    // params:{
    //     type:'sell',
    //     page:3
    // },//可手动拼接参数，也可以用params
    methods:"get"//不写默认get
}).then(res=>{
    console.log(res.data)
})
//并发请求
axios.all([
    axios({
        url:""
    }),
    axios(
        {
         url:""
        }
    )
]).then(res=>{
    console.log(res)//结果是个数组，可以用axios.spread((res1,res2)=>{})直接打印2个结果
})
//配置
axios.defaults.baseURL=""//全局配置后，使用axios url不用写主域
axios.defaults.timeout=5000
//创建axios实例
const instance1=axios.create({
    baseURL:"",
    timeout:5000
})
//实例使用1
instance1({
    url:""
}).then(res=>{})
//实例使用2 
instance1({
    url:"",
    params:{
        type:"pop"
    }
})
//axios 拦截器
axios.interceptors.request.use(config=>{
    console.log(config)
    //比如config一些信息不符合服务器要求
    //比如播放加载动画
    //某些网络请求（比如登录携带token）
    return config//拦截后要返回，否则请求拿不到数据
},err=>{})
axios.interceptors.respnose.use(res=>{
    console.log(res)
    return res.data
},err=>{})
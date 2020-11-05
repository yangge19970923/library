let envConfig = process.env.NODE_ENV !== 'production'?require('./config.dev.js'):require('./config.prod.js')
//公共配置
const config = {
    timeOut: 3000, //请求超时时间
    tokenField:'Authorization', //登录后 header 里默认携带token的字段 
    msgCode:'code',
    //判断ajax请求成功失败的状态码值，默认值是 0 判断 === 1 为成功 
    successCode:0,
    //ajax 返回的 数据字段 默认值为 ‘returnData’ 
    resData:'result',
    //ajax请求失败时提示的错误信息 默认值为 returnMessage 
    errMsg:'message',
}

module.exports = {
    ...envConfig,
    ...config,
}
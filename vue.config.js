module.exports = {
    lintOnSave: false,
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require('postcss-plugin-px2rem')({
              rootValue: 100, //换算基数根据实际情况而定
              // unitPrecision: 5, //允许REM单位增长到的十进制数字。
              exclude: /(node_module)/, //排除某些文件夹，默认false，可以（reg）利用正则表达式排除
              // selectorBlackList: [], //要忽略并保留为px的选择器
              // ignoreIdentifier: false,  //忽略单个属性
              // replace: true, // 是否替换包含REM的规则
              mediaQuery: false, //是否允许在媒体查询中转换px
              minPixelValue: 1 //替换的最小像素值
            }),
          ]
        }
      }
    },
    devServer: {
      host: "0.0.0.0",
      port: 6008, // 端口号
      https: false, // https:{type:Boolean}
      open: true, //配置自动启动浏览器
      // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
       
      // 配置多个代理
      /* proxy: {
        "/api": {
            target: "http://192.168.x.xxx:8090", // 要访问的接口域名
            ws: true, // 是否启用websockets
            changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
            pathRewrite: {
            "^/api": "" //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
            }
          }
      } */
  }
}
/* import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast); */
import config from "../config"
import axios from "axios"
export default function () {
    //加载状态
    let loadState = false;
    //显示加载中
    const showLoading = () => {
        this.$toast.clear();
        loadState = true;
        this.$toast.loading({
            duration: 0,
            forbidClick: true
        })
    }
    //隐藏加载中
    const hideLoading = () => {
        loadState = false;
        this.$toast.clear();
    }
    //检查加载状态
    const checkLoading = () => {
        if(loadState) {
            hideLoading();
        }
    }
    //创建axios实例
    const instance = axios.create({
        baseURL: config.baseUrl,
        timeout: config.timeOut,
        headers: {
            common: {
            },
            post: {
                'Content-Type': 'application/json'
            }
        }
    })
    //请求拦截处理
    const requestPipe = (config) => {
        showLoading();
        return config;
    }
    //请求错误处理
    const requestErr = (err) => {
        checkLoading();
        return Promise.reject(err);
    }
    //响应拦截处理
    const responsePipe = (response) => {
        return new Promise((resolve, reject) => {
            checkLoading();
            if(response.status == 200) {
                // console.log(response.data);
                if(response.data.code !== -1) {
                    resolve(response.data);
                } else {
                    this.$toast.fail(response.data.msg);
                    reject(response.data);
                }
            } else {
                console.log(response);
            }
        })
    }
    //响应错误处理
    const responseErr = (err) => {
        checkLoading();
        return Promise.reject(err);
    }
    //请求拦截器
    instance.interceptors.request.use(requestPipe,requestErr);
    //响应拦截器
    instance.interceptors.response.use(responsePipe,responseErr);
    const get = (url,getConfig={},loading=true)=>{
        if(loading){
            showLoading();
        }
        return instance.get(url,getConfig)
    }
    const post = (url,data,config={},loading=true,hasCatch = false)=>{
        if(loading){
            showLoading();
        }
        config.hasCatch = hasCatch
        return instance.post(url,data,config)
    }
    const ajax = (url,ajaxConfig={},loading=true)=>{
        if(loading){
            showLoading();
        }
        ajaxConfig.url = url;
        return instance.request(ajaxConfig)
    }

    const async = (url,ajaxConfig={},loading=false)=>{
        if(loading){
            showLoading();
        }
        ajaxConfig.url = url;
        return instance.request(ajaxConfig)
    }
    return { get, post, ajax ,async};
}
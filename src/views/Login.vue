<template>
    <div class="login">
        <div class="content">
            <div class="head">
                <span class="iconfont icon-tuShuGuan"></span>
                {{title}}
            </div>
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <van-field
                    v-model="sex"
                    name="性别"
                    label="性别"
                    placeholder="性别"
                    :rules="[{ required: true, message: '请填写性别' }]"
                    v-if="registerFlag"
                />
                <van-field
                    v-model="email"
                    name="邮箱"
                    label="邮箱"
                    placeholder="邮箱"
                    :rules="[{ required: true, message: '请填写邮箱' }]"
                    v-if="registerFlag"
                />
                <van-field
                    v-model="verCode"
                    name="验证码"
                    label="验证码"
                    placeholder="验证码"
                    :rules="[{ required: true, message: '请填写验证码' }]"
                    v-if="!registerFlag"
                    :right-icon="'data:image/png;base64,' + imgData"
                >
                </van-field>
                
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
                    提交
                    </van-button>
                </div>
            </van-form>
            <span class="register" @click="toRegister">{{type}}</span>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
     data() {
        return {
            title:'Login',//标题名称
            username: '',
            password: '',
            email: '',
            sex: '',
            verCode: '',
            registerFlag: false,
            type:'前往注册',
            imgData:''
        };
    },
    computed: {
        ...mapState({
            
        })
    },
    methods: {
        ...mapMutations({
            SET_USERINFO: "user/SET_USERINFO",
            SET_MOBILEFLAG: "config/SET_MOBILEFLAG",
        }),
        //请求图形验证码数据
        getVerifyImg() {
            this.$axios.get("pubilc/verifyImg").then(res => {
                this.imgData = res.result;
            }).catch(err => {
                console.log(err);
            })
        },
        onSubmit(values) {
            if(!this.registerFlag) {
                this.$axios.get("pubilc/login",{
                    params:{
                        username: this.username,
                        password:this.password,
                        verCode:this.verCode
                    }
                }).then(res => {
                    if(res.code === 1) {
                        this.SET_USERINFO(res.data);
                        this.$router.push("home",() => {}, err => {});
                    } else {
                        if(res.msg === "图形验证码错误") {
                            this.getVerifyImg();
                        }
                    }
                }).catch(err => {
                    console.log(err);
                })
            } else {
                this.$axios.post("pubilc/register",{
                    username: this.username,
                    password: this.password,
                    email: this.email,
                    sex: this.sex
                }).then(res => {
                    if(res) {
                        console.log(res);
                        this.$toast.success(res.msg);
                        setTimeout(() => {
                            this.registerFlag = !this.registerFlag;
                        },1000); 
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
            
        },
        toRegister() {
            this.registerFlag = !this.registerFlag;
            if(this.registerFlag) {
                this.title = 'RegisterFlag';
                this.type = '前往登录';
            } else {
                this.title = 'Login';
                this.type = '前往注册'; 
            }
        },
    },
    created() {
        this.getVerifyImg();
    }
}
</script>
<style lang="less" scoped>
    /deep/ .van-cell {
        padding: 4px 16px;
        line-height: 25px;
    }
    /deep/ .van-icon {
        line-height: 100%;
    }
    /deep/ .van-icon__image {
        width: 6em;
        height: 3em;
    }
    svg {
        width: 1rem;
    }
    @media screen and(max-width: 1050px) {
        .content {
            height: 4rem !important;
        }
        /deep/ .van-cell {
            line-height: 35px;
        }
    }
    @media screen and(max-width: 780px) {
        .content {
            width: 90% !important;
            height: 7rem !important;
        }
        .head {
            height: 18% !important;
            font-size: .5rem !important;
            .icon-tuShuGuan {
                font-size: .5rem !important;
            }
        }
        .register {
            font-size: .18rem !important;
        }
        /deep/ .van-cell {
            line-height: 120px;
        }
    }
    .login {
        .content {
            width: 40%;
            margin: .8rem auto 0;
            height: 3rem;
            // background-color: skyblue;
            border-radius: .05rem;
            .head {
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                height: 12%;
                background-color: #f5f5f5;
                font-size: .15rem;
                font-weight: bold;
                border-radius: .05rem 0;
                .icon-tuShuGuan {
                    font-size: .15rem;
                    padding-right: .1rem;
                }
            }
            .register {
                display: flex;
                justify-content: flex-end;
                color: navy;
                cursor: pointer;
                font-size: .1rem;
            }
        }
    }
</style>
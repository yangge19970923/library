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
export default {
     data() {
        return {
            title:'Login',//标题名称
            username: '',
            password: '',
            email: '',
            sex: '',
            registerFlag: false,
            type:'前往注册'
        };
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
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
        //判断是移动端打开还是pc端
        isMobile() {
            let flag = true;
            let userAgentInfo = navigator.userAgent;
            let Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
            Agents.forEach(item => {
                if(userAgentInfo.indexOf(item) > 0) {
                    flag = false;
                    return;
                }
            })
        }
    },
    created() {
        this.isMobile();
    }
}
</script>
<style lang="less" scoped>
    @media screen and(max-width: 1050px) {
        .content {
            height: 4rem !important;
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
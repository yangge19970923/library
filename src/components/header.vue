<template>
    <div class="header" v-if="showFlag">
        <div class="container">
          <div class="logo" @click="goHome">Book Libiary</div>
          <div class="gongNengList">
            <div class="list" v-for="(item, index) in gongNengList" :key="index" @click.stop="gongNengClick(item)">{{item.title}}</div>
          </div>
          <div class="login" @click="search">Search</div>
          <div class="login" @click="login">Login</div>
        </div>
    </div>
</template>
<script>
import { state } from "vuex";
export default {
     data() {
        return {
            gongNengList: [
                {
                    id: 1,
                    title: 'home',
                    url: '/home'
                },
                {
                    id: 2,
                    title: 'bookshelf',
                    url: '/bookshelf'
                },
                {
                    id: 3,
                    title: 'rank',
                    url: '/rank'
                },
                {
                    id: 4,
                    title: 'classification',
                    url: '/classification'
                },
            ],
            showFlag: true,
        }
  },
  methods:{
      goHome() {
          this.$router.push("/home",() => {},(e) => {});
      },
      gongNengClick(item) {
          this.$router.push(item.url,() => {},(e) => {});
      },
      search() {
          this.$router.push("/search",() => {}, (e) => {});
      },
      login() {
          this.$router.push("/login",() => {}, (e) => {});
      }
  },
  created() {
      //当是阅读页面移动端隐藏header组件
  },
  watch: {
      $route(to,from) {
          if(location.hash === "#/mNovelContent") {
              this.showFlag = false;
          }
      }
  }
}
</script>
<style lang="less" scoped>
@media screen and (min-width: 750px) {
    .header {
        height: 100%;
        .container {
            display: flex;
            align-items: center;
            width: 80%;
            height: 100%;
            line-height: 100%;
            margin: 0 auto;
            color: #666;
            cursor: pointer;
            .logo {
                width: 15%;
                font-size: .15rem;
            }
            .gongNengList {
                display: flex;
                width: 75%;
                font-size: .1rem;
                .list {
                padding: .08rem;
                }
                .list:hover {
                background-color: #fff;
                }
            }
            .login {
                width: 10%;
                font-size: .1rem;
            }
        }
    }
}   

@media screen and (max-width: 750px) {
    .header {
        height: 100%;
        font-size: .45rem;
        .container {
            width: 100%;
            .logo {
                width: 100%;
                padding: .15rem 0;
            }
            .gongNengList {
                width: 100%;
                .list {
                    width: 100%;
                    padding: .15rem 0;
                }
            }
            .login {
                width: 100%;
                padding: .15rem 0;
            }
        }
    }
}
</style>
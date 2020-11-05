<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Header from "@/components/header"
export default {
 components:{
   Header
 },
 data() {
   return {
     
   }
 },
 methods: {
   //判断是移动端打开还是pc端,true是pc端，false移动端
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
        this.$axios.get("/pubilc/isMobile",{params: {
            isMobile: flag
        }}).then(res => {
            if(res.data) {
                this.SET_MOBILEFLAG(res.data.isMobile);
            }
        }).catch(err => {
        })
    }
 },
 created() {
   this.isMobile();
 },
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@media screen and (min-width: 750px) { 
  
}
@media screen and (max-width: 750px) { 
  .el-header {
    height: auto !important;
  }
  .el-main {
    padding: 0 !important;
  }
}
.el-header {
  background-color: #f8f8f8;
  padding: 0 !important;
}
.el-main {
  overflow: visible !important;
}

</style>

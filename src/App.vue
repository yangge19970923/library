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
 created() {
   
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

</style>

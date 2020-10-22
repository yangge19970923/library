<template>
    <div class="home-header">{{title}}</div>
</template>
<script>
export default {
    props:["title"]
}
</script>
<style lang="less" scoped>
@media screen and (max-width: 780px){
    font-size: .4rem!important;
}
.home-header {
    font-size: .2rem;
    padding: .15rem 0;
    background-color: #f5f5f5;
    border: .01rem solid #eee;
    border-radius: .05rem .05rem 0 0;
}
</style>
<template>
    <div class="novelContent">
        <div class="title">{{novelInfo.value}}</div>
        <div class="func">
            <span @click="pre">上一章</span>
            <span @click="list">章节目录</span>
            <span @click="next">下一章</span>
            <span @click="collection">收藏</span>
        </div>
        <div class="content" v-html="novelContent.content"></div>
        <div class="func">
            <span @click="pre">上一章</span>
            <span @click="list">章节目录</span>
            <span @click="next">下一章</span>
            <span @click="collection">收藏</span>
        </div>
    </div>
</template>
<script>
import ContentHeader from "@/components/contentHeader.vue";
export default {
    components: {
        ContentHeader
    },
    data() {
        return {
            novelInfo: JSON.parse(this.$route.query.novelInfo),
            novelContent: {
                title:'第一章',
                content:"&nbsp;&nbsp;&nbsp;&nbsp;当王宝乐醒来的时候，在这梦境迷阵内，已经过去了一天的时间，蛇群的毒没有众人想象中那么剧烈，随行的同学中有人擅长治疗蛇毒，也就使得王宝乐的美好愿望落空。<br><br>&nbsp;&nbsp;&nbsp;&nbsp;好在随着他的苏醒，名叫周小雅的小白兔对他照顾无微不至，杜敏也罕见的没有与他针锋相对，这就让王宝乐心底舒坦，心里又开始琢磨自己的救人表现，必然会被老师们看到，想来自己这一次考核，应该能加分不少。<br><br>&nbsp;&nbsp;&nbsp;&nbsp;他唯独郁闷的，就是在之后的几天里，团队众人穿梭丛林，寻找其他同学的路上，柳道斌也不知道吃错了什么药，也许是因为之前的事情愧疚，所以一路上遇到一些小危机，总是抢着带人出手，迅速化解，使得本就虚弱的王宝乐，没有丝毫表现的机会。"
            }
        }
    },
    methods:{
        //上一章
        pre() {},
        //下一章
        next(){},
        //目录
        list() {},
        //收藏
        collection() {},
    },
    created() {
        this.title = this.novelInfo.value;
    }
}
</script>
<style lang="less" scoped>
    .novelContent {
        width: 80%;
        margin: 0 auto;
        border: .01rem solid #eee;
        padding: .1rem .1rem 0 .1rem;
        .title {
            font-size: .18rem;
            color: #000;
            margin-top: .1rem;
        }
        .func {
            display: flex;
            justify-content: center;
            font-size: .11rem;
            color: #085308;
            margin: .1rem 0 .05rem 0;
            span {
                padding-right: .1rem;
                cursor: pointer;
            }
        }
        .content {
            font-size: .11rem;
            color: #333;
            text-align: left;
        }
    }
</style>
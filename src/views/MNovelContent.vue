<template>
    <div class="mNovelContent">
        <div @click="showPopup">
            <div class="title">{{novelContent.title}}</div>
            <div class="content" v-html="novelContent.content"></div>
        </div>
        
        <van-popup v-model="show" position="bottom" :style="{ height: '20%' }">
            <div class="func1">
                <img src="@/assets/img/left.png" alt="">
                <span>第一章</span>
                <img src="@/assets/img/right.png" alt="">
            </div>
            <div class="func2">
                <div class="func2Item" v-for="item in func2" :key="item.id">
                    <span :class="item.className"></span>
                    <p>{{item.text}}</p>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
    computed: {},
    data() {
        return {
            novelContent: {
                title:'第一章',
                content:"&nbsp;&nbsp;&nbsp;&nbsp;当王宝乐醒来的时候，在这梦境迷阵内，已经过去了一天的时间，蛇群的毒没有众人想象中那么剧烈，随行的同学中有人擅长治疗蛇毒，也就使得王宝乐的美好愿望落空。<br><br>&nbsp;&nbsp;&nbsp;&nbsp;好在随着他的苏醒，名叫周小雅的小白兔对他照顾无微不至，杜敏也罕见的没有与他针锋相对，这就让王宝乐心底舒坦，心里又开始琢磨自己的救人表现，必然会被老师们看到，想来自己这一次考核，应该能加分不少。<br><br>&nbsp;&nbsp;&nbsp;&nbsp;他唯独郁闷的，就是在之后的几天里，团队众人穿梭丛林，寻找其他同学的路上，柳道斌也不知道吃错了什么药，也许是因为之前的事情愧疚，所以一路上遇到一些小危机，总是抢着带人出手，迅速化解，使得本就虚弱的王宝乐，没有丝毫表现的机会。"
            },
            show: false,
            func2: [
                {
                    id: 1,
                    className:'iconfont icon-mulu',
                    text:'目录'
                },
                {
                    id: 2,
                    className:'iconfont icon-shu',
                    text:'书架'
                },
                {
                    id: 3,
                    className:'iconfont icon-tuichu',
                    text:'退出'
                },
            ]
        }
    },
    methods: {
        showPopup() {
            this.show = !this.show;
        }
    },
    created() {
    }
}
</script>
<style lang="less" scoped>
    /deep/ .van-popup {
        background-color: #000;
        // opacity: .6;
    }
    .mNovelContent {
        text-align: left;
        padding: 0 .1rem;
        .title {
            text-align: center;
            font-size: .55rem;
            padding: .3rem 0;
        }
        .content {
            font-size: .45rem;
        }
        .func1 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 20%;
            font-size: .4rem;
            padding: .2rem 0;
            border-bottom: .005rem solid #eee;
            img {
                width: .8rem;
                color: #fff;
            }
            span {
                color: #fff;
            }
        }
        .func2 {
            display: flex;
            color: #fff;
            height: 80%;
            align-items: center;
            .func2Item {
                flex: 1;
                text-align: center;
                height: 100%;
                padding-top: .9rem;
                .iconfont {
                    font-size: .6rem;
                }
                p {
                    font-size: .5rem;
                }
            }
        }
    }
</style>
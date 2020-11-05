<template>
    <div class="rank">
        <ContentHeader :title="title"/>
        <div class="content">
            <div class="rankItem" v-for="(item,index1) in rankInfo" :key="item.id">
                <div>
                    <div class="title">{{item.title}}</div>
                    <div class="body"  v-for="(list,index2) in item.rankArr" :key="list.sortId">
                        <ul class="rankSort" v-if="index2 === rankInfo[index1].showItem">
                            <li class="rankTime">
                                <div class="leftRank">{{ list.title }}</div>
                                <div class="rightRank">
                                    <span v-for="(line,index3) in item.rankArr" :key="line.sortId" 
                                    @click="turnRankList(index1,index3)"
                                    :class="{active: index3 === rankInfo[index1].showItem}">{{line.title.slice(0, 1)}}</span>
                                </div>
                            </li>
                            <li v-for="line in list.sorts" :key="line.id" @click="goNovelDetail(line)" class="novelName"><span class="sort">{{line.id}}</span>{{line.value}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ContentHeader from "@/components/contentHeader.vue";
export default {
    components:{
        ContentHeader,
    },
    data() {
        return {
            title: 'Rank',
            rankInfo: [
                {
                    id: 1,
                    title:'玄幻小说排行榜',
                    showItem: 1,
                    rankArr:[
                        {
                            sortId: 1,
                            title:'总排名',
                            sorts:[
                                {id:1,value:'烽皇'},
                                {id:2,value:'开局签到一个女帝'},
                                {id:3,value:'陀螺之凡御世界'},
                                {id:4,value:'名劫'},
                                {id:5,value:'我有不灭金身'},
                                {id:6,value:'行者不归'},
                                {id:7,value:'猎天争锋'},
                                {id:8,value:'掬魂'},
                                {id:9,value:'虚假天王'},
                                {id:10,value:'猎天争锋'},
                                {id:11,value:'慈悲圣剑'},
                                {id:12,value:'天玄帝传'}
                            ]
                        },
                        {
                            sortId: 2,
                            title:'周排名',
                            sorts:[
                                {id:1,value:'烽皇'},
                                {id:2,value:'开局签到一个女帝'},
                                {id:3,value:'陀螺之凡御世界'},
                                {id:4,value:'名劫'},
                                {id:5,value:'一剑独尊'},
                                {id:6,value:'行者不归'},
                                {id:7,value:'猎天争锋'},
                                {id:8,value:'掬魂'},
                                {id:9,value:'虚假天王'},
                                {id:10,value:'猎天争锋'},
                                {id:11,value:'慈悲圣剑'},
                                {id:12,value:'牧神记'}
                            ]
                        },
                        {
                            sortId: 3,
                            title:'月排名',
                            sorts:[
                                {id:1,value:'沧元图'},
                                {id:2,value:'开局签到一个女帝'},
                                {id:3,value:'陀螺之凡御世界'},
                                {id:4,value:'斗罗大陆II绝世唐门'},
                                {id:5,value:'我有不灭金身'},
                                {id:6,value:'行者不归'},
                                {id:7,value:'猎天争锋'},
                                {id:8,value:'掬魂'},
                                {id:9,value:'虚假天王'},
                                {id:10,value:'猎天争锋'},
                                {id:11,value:'慈悲圣剑'},
                                {id:12,value:'牧龙师'}
                            ]
                        },
                        {
                            sortId: 4,
                            title:'日排名',
                            sorts:[
                                {id:1,value:'烽皇'},
                                {id:2,value:'开局签到一个女帝'},
                                {id:3,value:'武炼巅峰'},
                                {id:4,value:'名劫'},
                                {id:5,value:'我有不灭金身'},
                                {id:6,value:'行者不归'},
                                {id:7,value:'猎天争锋'},
                                {id:8,value:'掬魂'},
                                {id:9,value:'相爱千年的转世轮回'},
                                {id:10,value:'猎天争锋'},
                                {id:11,value:'慈悲圣剑'},
                                {id:12,value:'天玄帝传'}
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    title:'仙侠小说排行榜',
                    showItem: 1,
                    rankArr:[
                        {
                            sortId: 1,
                            title:'总排名',
                            sorts:[
                                {id:1,value:'丹道宗师'},
                                {id:2,value:'开局签到一个女帝'},
                                {id:3,value:'陀螺之凡御世界'},
                                {id:4,value:'名劫'},
                                {id:5,value:'我有不灭金身'},
                                {id:6,value:'行者不归'},
                                {id:7,value:'猎天争锋'},
                                {id:8,value:'掬魂'},
                                {id:9,value:'虚假天王'},
                                {id:10,value:'猎天争锋'},
                                {id:11,value:'慈悲圣剑'},
                                {id:12,value:'天玄帝传'}
                            ]
                        },
                        {
                            sortId: 2,
                            title:'周排名',
                            sorts:[
                                {id:1,value:'烽皇'},
                                {id:2,value:'开局签到一个女帝'},
                                {id:3,value:'陀螺之凡御世界'},
                                {id:4,value:'名劫'},
                                {id:5,value:'一剑独尊'},
                                {id:6,value:'行者不归'},
                                {id:7,value:'猎天争锋'},
                                {id:8,value:'掬魂'},
                                {id:9,value:'虚假天王'},
                                {id:10,value:'猎天争锋'},
                                {id:11,value:'慈悲圣剑'},
                                {id:12,value:'牧神记'}
                            ]
                        },
                        {
                            sortId: 3,
                            title:'月排名',
                            sorts:[
                                {id:1,value:'沧元图'},
                                {id:2,value:'开局签到一个女帝'},
                                {id:3,value:'陀螺之凡御世界'},
                                {id:4,value:'斗罗大陆II绝世唐门'},
                                {id:5,value:'我有不灭金身'},
                                {id:6,value:'行者不归'},
                                {id:7,value:'猎天争锋'},
                                {id:8,value:'掬魂'},
                                {id:9,value:'虚假天王'},
                                {id:10,value:'猎天争锋'},
                                {id:11,value:'慈悲圣剑'},
                                {id:12,value:'牧龙师'}
                            ]
                        },
                        {
                            sortId: 4,
                            title:'日排名',
                            sorts:[
                                {id:1,value:'烽皇'},
                                {id:2,value:'开局签到一个女帝'},
                                {id:3,value:'武炼巅峰'},
                                {id:4,value:'名劫'},
                                {id:5,value:'我有不灭金身'},
                                {id:6,value:'行者不归'},
                                {id:7,value:'猎天争锋'},
                                {id:8,value:'掬魂'},
                                {id:9,value:'相爱千年的转世轮回'},
                                {id:10,value:'猎天争锋'},
                                {id:11,value:'慈悲圣剑'},
                                {id:12,value:'天玄帝传'}
                            ]
                        }
                    ]
                },
                {
                    id: 3,
                    title:'青春小说排行榜',
                    showItem: 1,
                    rankArr:[
                        {
                            sortId: 1,
                            title:'总排名',
                            sorts:[
                                {id:1,value:'极品透视'},
                                {id:2,value:'开局签到一个女帝'},
                                {id:3,value:'陀螺之凡御世界'},
                                {id:4,value:'名劫'},
                                {id:5,value:'我有不灭金身'},
                                {id:6,value:'行者不归'},
                                {id:7,value:'猎天争锋'},
                                {id:8,value:'掬魂'},
                                {id:9,value:'虚假天王'},
                                {id:10,value:'猎天争锋'},
                                {id:11,value:'慈悲圣剑'},
                                {id:12,value:'天玄帝传'}
                            ]
                        },
                        {
                            sortId: 2,
                            title:'周排名',
                            sorts:[
                                {id:1,value:'烽皇'},
                                {id:2,value:'开局签到一个女帝'},
                                {id:3,value:'陀螺之凡御世界'},
                                {id:4,value:'名劫'},
                                {id:5,value:'一剑独尊'},
                                {id:6,value:'行者不归'},
                                {id:7,value:'猎天争锋'},
                                {id:8,value:'掬魂'},
                                {id:9,value:'虚假天王'},
                                {id:10,value:'猎天争锋'},
                                {id:11,value:'慈悲圣剑'},
                                {id:12,value:'牧神记'}
                            ]
                        },
                        {
                            sortId: 3,
                            title:'月排名',
                            sorts:[
                                {id:1,value:'沧元图'},
                                {id:2,value:'开局签到一个女帝'},
                                {id:3,value:'陀螺之凡御世界'},
                                {id:4,value:'斗罗大陆II绝世唐门'},
                                {id:5,value:'我有不灭金身'},
                                {id:6,value:'行者不归'},
                                {id:7,value:'猎天争锋'},
                                {id:8,value:'掬魂'},
                                {id:9,value:'虚假天王'},
                                {id:10,value:'猎天争锋'},
                                {id:11,value:'慈悲圣剑'},
                                {id:12,value:'牧龙师'}
                            ]
                        },
                        {
                            sortId: 4,
                            title:'日排名',
                            sorts:[
                                {id:1,value:'烽皇'},
                                {id:2,value:'开局签到一个女帝'},
                                {id:3,value:'武炼巅峰'},
                                {id:4,value:'名劫'},
                                {id:5,value:'我有不灭金身'},
                                {id:6,value:'行者不归'},
                                {id:7,value:'猎天争锋'},
                                {id:8,value:'掬魂'},
                                {id:9,value:'相爱千年的转世轮回'},
                                {id:10,value:'猎天争锋'},
                                {id:11,value:'慈悲圣剑'},
                                {id:12,value:'天玄帝传'}
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    title:'历史小说排行榜',
                    showItem: 1,
                    rankArr:[
                        {
                            sortId: 1,
                            title:'总排名',
                            sorts:[
                                {id:1,value:'民国谍影'},
                                {id:2,value:'开局签到一个女帝'},
                                {id:3,value:'陀螺之凡御世界'},
                                {id:4,value:'名劫'},
                                {id:5,value:'我有不灭金身'},
                                {id:6,value:'行者不归'},
                                {id:7,value:'猎天争锋'},
                                {id:8,value:'掬魂'},
                                {id:9,value:'虚假天王'},
                                {id:10,value:'猎天争锋'},
                                {id:11,value:'慈悲圣剑'},
                                {id:12,value:'天玄帝传'}
                            ]
                        },
                        {
                            sortId: 2,
                            title:'周排名',
                            sorts:[
                                {id:1,value:'烽皇'},
                                {id:2,value:'开局签到一个女帝'},
                                {id:3,value:'陀螺之凡御世界'},
                                {id:4,value:'名劫'},
                                {id:5,value:'一剑独尊'},
                                {id:6,value:'行者不归'},
                                {id:7,value:'猎天争锋'},
                                {id:8,value:'掬魂'},
                                {id:9,value:'虚假天王'},
                                {id:10,value:'猎天争锋'},
                                {id:11,value:'慈悲圣剑'},
                                {id:12,value:'牧神记'}
                            ]
                        },
                        {
                            sortId: 3,
                            title:'月排名',
                            sorts:[
                                {id:1,value:'沧元图'},
                                {id:2,value:'开局签到一个女帝'},
                                {id:3,value:'陀螺之凡御世界'},
                                {id:4,value:'斗罗大陆II绝世唐门'},
                                {id:5,value:'我有不灭金身'},
                                {id:6,value:'行者不归'},
                                {id:7,value:'猎天争锋'},
                                {id:8,value:'掬魂'},
                                {id:9,value:'虚假天王'},
                                {id:10,value:'猎天争锋'},
                                {id:11,value:'慈悲圣剑'},
                                {id:12,value:'牧龙师'}
                            ]
                        },
                        {
                            sortId: 4,
                            title:'日排名',
                            sorts:[
                                {id:1,value:'烽皇'},
                                {id:2,value:'开局签到一个女帝'},
                                {id:3,value:'武炼巅峰'},
                                {id:4,value:'名劫'},
                                {id:5,value:'我有不灭金身'},
                                {id:6,value:'行者不归'},
                                {id:7,value:'猎天争锋'},
                                {id:8,value:'掬魂'},
                                {id:9,value:'相爱千年的转世轮回'},
                                {id:10,value:'猎天争锋'},
                                {id:11,value:'慈悲圣剑'},
                                {id:12,value:'天玄帝传'}
                            ]
                        }
                    ]
                }
            ],
            rankListInfo:[],//排名
            activeId: 1,//当前显示
        }
    },
    methods:{
        turnRankList(index1,index3) {
            this.rankInfo[index1].showItem = index3;
        },
        goNovelDetail(line) {
            this.$router.push({name:"NovelDetail",params:{bookInfo:line}},() => {},err => {});
        }
    },
    created() {
    }
}
</script>
<style lang="less" scoped>
    @media screen and(max-width: 780px) {
        .rank {
            width: 100% !important;
        }
        .rankItem {
            width: 100% !important;
        }
        .novelName {
            font-size: .15rem !important;
            padding: .3rem 0 !important;
        }
    }
    .rank {
        width: 80%;
        margin: 0 auto;
        .content {
            border: .01rem solid #eee;
            text-align: left;
            .rankItem {
                display: inline-block;
                width: 33.3%;
                box-sizing: border-box;
                padding-right: .5rem;
                .title {
                    font-size: .12rem;
                    font-weight: bold;
                    padding: .1rem 0;
                    text-align: center;
                }
                .rankTime {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    padding: 0 .1rem;
                    .leftRank {
                        text-align: center;
                    }
                    .rightRank {
                        display: flex;
                        span {
                            padding-right: .1rem;
                            cursor: pointer;
                        }
                    }
                }
                .rankSort {
                    padding: 0 .1rem;
                    li {
                        text-align: left;
                        font-size: .1rem;
                        padding: .05rem 0;
                        .sort {
                            padding-right: .1rem;
                        }
                    }
                    .novelName {
                        cursor: pointer;
                    }
                    .novelName:hover {
                        color: skyblue;
                    }
                }
            }
        }
    }
    .active {
        color: skyblue;
    }
</style>
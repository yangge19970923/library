<template>
    <div class="novelDetail">
        <ContentHeader :title="title"/>
        <div class="content">
            <div class="novelInfo">
                <div class="img">
                    <img :src="bookInfoDetail.imgUrl" alt="">
                </div>
                <div class="info">
                    <div class="title">{{bookInfoDetail.name}}</div>
                    <div class="author">
                        <span>作者：{{bookInfoDetail.author}}</span>
                        <span class="action">动作：加入收藏</span>
                    </div>
                    <div class="update"><span>最后更新：{{bookInfoDetail.updateTime}}</span><span>最新章节：{{bookInfoDetail.updateChapter}}</span></div>
                    <div class="synopsis">{{bookInfoDetail.synopsis}}</div>
                </div>
            </div>
            <div class="chapter">
                <dl>
                    <dd v-for="item in bookInfoDetail.chapters" :key="item.id" @click="showDetail">{{ item.value }}</dd>
                </dl>
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
            title:'Novel Detail',
            bookInfo: this.$route.params.bookInfo,
            bookInfoDetail: {
                id:1,
                name:'三寸人间',
                author:'耳根',
                synopsis:'举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。',
                imgUrl:require('@/assets/img/bookList1.jpg'),
                updateTime:'2020-10-21 21:30:00',
                updateChapter: '1500章 谁是天道',
                chapters:[{id:1,value:"第一章 我要减肥！"},{id:2,value:"第二章 王宝乐，你干了什么！"},{id:3,value:"第三章 好同学，一切有我！"},
                {id:4,value:"第四章 飘渺道院"},{id:5,value:"第五章 特招学子"},{id:6,value:"第六章 麻烦大了"},{id:7,value:"第一章 我要减肥！"},{id:8,value:"第二章 王宝乐，你干了什么！"},{id:9,value:"第三章 好同学，一切有我！"},
                {id:10,value:"第四章 飘渺道院"},{id:11,value:"第五章 特招学子"},{id:12,value:"第六章 麻烦大了"},{id:13,value:"第一章 我要减肥！"},{id:14,value:"第二章 王宝乐，你干了什么！"},{id:15,value:"第三章 好同学，一切有我！"},
                {id:16,value:"第四章 飘渺道院"},{id:17,value:"第五章 特招学子"},{id:18,value:"第六章 麻烦大了"}]
            }
        }
    },
    methods:{
        showDetail(item) {

        }
    },
    created() {
    }
}
</script>
<style lang="less" scoped>
    @media screen and(max-width: 780px) {
        .novelDetail {
            width: 100% !important;
        }
        .novelInfo {
            .img {
                width: 100% !important;
            }
        }
        .chapter {
            dl{
                dd {
                    width: 100% !important;
                    font-size: .2rem !important;
                    padding: .2rem !important;
                }
            }
        }
    } 
    .novelDetail {
        width: 80%;
        margin: 0 auto;
        .content {
            border: .01rem solid #eee;
            border-bottom: none;
            border-top: none;
            border-radius: 0 0 .05rem .05rem;
            .novelInfo {
                display: flex;
                margin-top: .2rem;
                padding-bottom: .1rem;
                .img {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 15%;
                    margin-right: .3rem;
                    img {
                        width: 80%;
                        margin: 0 auto;
                        padding: .1rem;
                        background-color:#f5f5f5;
                    }
                }
                .info {
                    text-align: left;
                    font-size: .1rem;
                    .title {
                        font-size: .2rem;
                        font-weight: bold;
                    }
                    .author {
                        display: flex;
                        padding-top: .1rem;
                        span {
                            width: 2.5rem;
                        }
                        .action {
                            cursor: pointer;
                        }
                    }
                    .update {
                        display: flex;
                        padding: .1rem 0;
                        span {
                            width: 2.5rem;
                        }
                    }
                    .synopsis {
                    }
                }
            }
            .chapter {
                border-top: 1px solid #eee;
                dl {
                    dd {
                        display: inline-block;
                        box-sizing:border-box;
                        padding: .05rem 0 .05rem .1rem;
                        width: 33.3%;
                        text-align: left;
                        font-size: .1rem;
                        border-bottom: 1px dashed #ccc;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
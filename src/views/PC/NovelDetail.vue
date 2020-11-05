<template>
    <div class="novelDetail">
        <ContentHeader :title="title"/>
        <div class="content">
            <div class="novelInfo">
                <div class="img">
                    <img :src="bookInfoDetail.imgSrc" alt="">
                </div>
                <div class="info">
                    <div class="title">{{bookInfoDetail.title}}</div>
                    <div class="author">
                        <span>作者：{{bookInfoDetail.author}}</span>
                        <span class="action" @click="collection">动作：加入收藏</span>
                    </div>
                    <div class="update"><span>最后更新：{{bookInfoDetail.updateTime}}</span><span>最新章节：{{bookInfoDetail.update}}</span></div>
                    <div class="synopsis">{{bookInfoDetail.synopsis}}</div>
                </div>
            </div>
            <div class="chapter">
                <dl>
                    <dd v-for="item in bookInfoDetail.chapters" :key="item.id" @click="showDetail(item)">{{ item.chapter }}</dd>
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
            bookInfoDetail: {}
        }
    },
    methods:{
        collection() {
            
        },
        getNovelDetail() {
            this.$axios.post("novel/novelDetal",{urlId: JSON.parse(this.$route.query.info).urlId}).then(res => {
                this.bookInfoDetail = res.result;
            })
        },
        showDetail(item) {
            this.$router.push({name:'NovelContent',query:{novelInfo: JSON.stringify(item)}},() => {}, err => {});
        }
    },
    created() {
        this.getNovelDetail();
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
<template>
    <div class="classification">
        <ContentHeader :title="title"/>
        <div class="content">
            <div class="classItem" v-for="item in classif" 
            :key="item.id" 
            :style="{backgroundImage:'url('+ item.imgUrl +')'}"
            @click="goWapSort(item)">
                <p><span>{{ item.name }}</span></p>
            </div>
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
            title: 'Classification',
            classif:[
                {
                    id: 1,
                    name:'玄幻',
                    imgUrl:require('@/assets/img/classif1.png'),
                },
                {
                    id: 2,
                    name:'仙侠',
                    imgUrl:require('@/assets/img/classif2.png'),
                },
                {
                    id: 3,
                    name:'都市',
                    imgUrl:require('@/assets/img/classif3.png'),
                },
                {
                    id: 4,
                    name:'历史',
                    imgUrl:require('@/assets/img/classif4.png'),
                },
                {
                    id: 5,
                    name:'网游',
                    imgUrl:require('@/assets/img/classif5.png'),
                },
                {
                    id: 6,
                    name:'科幻',
                    imgUrl:require('@/assets/img/classif6.png'),
                },
                {
                    id: 7,
                    name:'其他',
                    imgUrl:require('@/assets/img/classif7.png'),
                }
            ]
        }
    },
    methods:{
        goWapSort(item) {
            this.$router.push({name:'Wapsort',query:{classification: JSON.stringify(item)}},() => {},err => {});
        },
    }
}
</script>
<style lang="less" scoped>
    @media screen and(max-width: 780px) {
        .classification {
            width: 100% !important;
        }
        .classItem {
            width: 48% !important;
            p {
                font-size: .45rem !important;
                // margin: 1.6rem 0 .4rem 0 !important;
            }
        }
    }
    .classification {
        width: 80%;
        margin: 0 auto;
        .content {
            text-align: left;
            padding-top: .13rem;
            border: .01rem solid #eee;
            .classItem {
                display: inline-block;
                width: 23%;
                background-color: #f5f5f5;
                background-size: cover;
                background-repeat: no-repeat;
                border-radius: .1rem;
                margin: 1%;
                cursor: pointer;
                p {
                    text-align: center;
                    font-size: .12rem;
                    background-color: #000;
                    opacity: .6;
                    padding: .05rem 0;
                    border-radius: .05rem;
                    margin: .8rem 0 .2rem 0;
                    span {
                        color: #fff;
                    }
                }
            }
            .classItem:hover {
                background-color: #bbb;
                // opacity: .8;
            }
        }
    }
</style>
<template>
    <div class="search">
        <div class="content">
            <div class="head">
                <span class="iconfont icon-tuShuGuan"></span>
                Book Libiary
            </div>
            <van-search v-model="searchText" 
            placeholder="请输入搜索关键词" :class="showShadowFlag ? 'state': ''"
            @focus="focus"
            @blur="blur"/>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchText: '',
            showShadowFlag: false,
        }
    },
    methods:{
        focus() {
            this.showShadowFlag = true;
        },
        blur() {
            this.showShadowFlag = false;
        }
    }
}
</script>
<style lang="less" scoped>
    @media screen and (max-width: 780px) {
        .content {
            width: 100% !important;
            padding-top: 2rem !important;
            .head {
                font-size: .6rem !important;
                .icon-tuShuGuan {
                    font-size: .6rem !important;
                    padding-right: .2rem !important;
                }
            }
        }
    }
    /deep/ .van-search {
        border: .01rem solid #ccc;
        border-radius: .3rem;
    }
    /deep/ .van-search:hover, .state {
        box-shadow: 0 0 .05rem #ccc;
    }
    /deep/ .van-search__content {
        background-color: #fff;
    }
    /deep/ .van-cell {
        font-size: .1rem;
    }
    /deep/ .van-field__left-icon .van-icon, .van-field__right-icon .van-icon {
        font-size: .15rem;
    }
    .search{
        .content {
            width: 50%;
            margin: 0 auto;
            padding-top: 1rem;
            .head {
                display: flex;
                justify-content: center;
                font-size: .3rem;
                padding-bottom: .1rem;
                .icon-tuShuGuan {
                    font-size: .3rem;
                    padding-right: .1rem;
                }
            }
        }
    }
</style>
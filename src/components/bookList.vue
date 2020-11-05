<template>
    <div class="book-list">
      <div class="list" v-for="(item, index) in bookLists" :key="item.urlId">
        <div class="img">
          <el-image :src="item.imgSrc" alt="" lazy></el-image>
        </div>
        <div class="info" @click="goNovelDetail(item)">
          <p class="name">{{item.novelName}}</p>
          <p class="author">{{item.author}}</p>
          <p class="synopsis">{{item.synopsis.length > 30 ? item.synopsis.slice(0,30) + '...' : item.synopsis}}</p>
        </div>
        <div class="collection">
          <span :class="item.collectionColorShow ? 'iconfont icon-collection show' : 'iconfont icon-collection'" 
          @click="collection(item)"></span>
        </div>
      </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      bookLists:[],
      collectionColorShow: false,
    }
  },
  computed: {
    ...mapState({
      userInfo: ({ user }) => user.userInfo,
    })
  },
  methods:{
    getType(info) {
      if(info.type === 0) {
        this.getBookList();
      }else if(info.type === 1) {
        this.getBookList2(info.info.href);
      }
    },
    getBookList() {
      this.$axios.get("novel/recommend",{params: {idCardNumber: this.userInfo.idCardNumber}}).then(res => {
        if(res.result.novelInfo.length) {
          this.bookLists = res.result.novelInfo;
        }
      })
    },
    getBookList2(href) {
      this.$axios.get("novel/classDetail",{
        params: {
          href, 
          idCardNumber: this.userInfo.idCardNumber}})
        .then(res => {
          if(res.result.novelInfo.length) {
            this.bookLists = res.result.novelInfo;
          }
        }).catch(err => {})
    },
    collection(item) {
      item.collectionColorShow = !item.collectionColorShow;
      if(item.collectionColorShow) {
        this.$axios.post("user/collectNovel",{
          idCardNumber: this.userInfo.idCardNumber,
          novelInfoItem: item
        }).then(res => {
          console.log(res);
        }).catch(err => {})
      }else {
        this.$axios.post("user/cancelCollectNovel",{
          idCardNumber: this.userInfo.idCardNumber,
          novelInfoItem: item
        }).then(res => {
          console.log(res);
        }).catch(err => {})
      }
    },
    goNovelDetail(item) {
      this.$router.push({name:"NovelDetail",query:{info: JSON.stringify(item)}});
    }
  },
  created() {
  }
}
</script>
<style lang="less" scoped>
@media screen and (max-width: 780px){
    .el-image {
        width: .8rem!important;
    }
    .info {
        .name {
        font-size: .3rem !important;
        }
        .author {
        font-size: .2rem !important;
        }
        .synopsis {
        font-size: .16rem !important;
        }
    }
    .icon-collection {
        font-size: .4rem !important;
    }
}
    .book-list {
      border: .01rem solid #eee;
      border-bottom: none;
      border-top: none;
      border-radius: 0 0 .05rem .05rem;
      .list {
        display: flex;
        padding: .08rem 0 .1rem 0;
        border-bottom: .01rem solid #eee;
        cursor: pointer;
        .img {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 15%;
          .el-image {
            width: .4rem;
          }
        }
        .info {
          width: 70%;
          text-align: left;
          .name {
            font-size: .12rem;
          }
          .author {
            font-size: .1rem;
            font-weight: bold;
            padding: .03rem 0;
          }
          .synopsis {
            font-size: .08rem;
          }
        }
        .collection {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 15%;
          .icon-collection {
            font-size: .15rem;
            cursor: pointer;
          }
          .show {
            color: skyblue;
          }
        }
      }
    }
</style>
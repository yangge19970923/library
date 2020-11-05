<template>
  <div class="Bookshelf">
    <ContentHeader :title="title"/>
    <div class="book-list">
      <div class="list" v-for="(item, index) in bookLists" :key="item.id">
        <div class="img">
          <el-image :src="item.imgSrc" alt="" lazy></el-image>
        </div>
        <div class="info" @click="goNovelDetail(item)">
          <p class="name">{{item.novelName}}</p>
          <p class="author">{{item.author}}</p>
          <p class="synopsis">{{item.synopsis.length > 30 ? item.synopsis.slice(0,30) + '...' : item.synopsis}}</p>
        </div>
        <div class="collection">
            <span>111章</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentHeader from "@/components/contentHeader.vue";
import { mapState } from "vuex";
export default {
  name: 'Home',
  components: {
    ContentHeader
  },
  computed: {
    ...mapState ({
      userInfo: ({ user }) => user.userInfo,
    })
  },
  data() {
    return {
      title:'Book Shelf',
      bookLists:[]
    }
  },
  methods:{
    getBookList(){
      this.$axios.get("novel/findCollectNovel", {
        params: {
          idCardNumber: this.userInfo.idCardNumber
        }
      }).then(res => {
        if(res) {
          this.bookLists = res.novelInfo;
        }
      }).catch(err => {})
    },
    goNovelDetail(item) {
      this.$router.push({name:"NovelDetail",params:{bookInfo:item}});
    },
  },
  created() {
    this.getBookList();
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 780px){
  .Bookshelf {
    width: 100% !important;
  }
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
  .collection {
      span {
          width: .8rem !important;
          height: .8rem !important;
          font-size: .15rem !important;
      }
  }
}
  .Bookshelf {
    width: 80%;
    margin: 0 auto;
    .book-list {
      border: .01rem solid #eee;
      border-bottom: none;
      border-top: none;
      border-radius: 0 0 .05rem .05rem;
      .list {
        display: flex;
        padding: .08rem 0 .1rem 0;
        border-bottom: .01rem solid #eee;
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
          span {
            display: flex;
            justify-content: center;
            align-items: center;
            width: .4rem;
            height: .4rem;
            background-color: skyblue;
            border-radius: 50%;
            font-size: .12rem;
            cursor: pointer;
            }
        }
      }
    }
  }
</style>

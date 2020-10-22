<template>
  <div class="home">
    <ContentHeader :title="title"/>
    <div class="book-list">
      <div class="list" v-for="(item, index) in bookLists" :key="item.id">
        <div class="img">
          <el-image :src="item.imgUrl" alt="" lazy></el-image>
        </div>
        <div class="info" @click="goNovelDetail(item)">
          <p class="name">{{item.name}}</p>
          <p class="author">{{item.author}}</p>
          <p class="synopsis">{{item.synopsis.length > 30 ? item.synopsis.slice(0,30) + '...' : item.synopsis}}</p>
        </div>
        <div class="collection">
          <span :class="item.collectionColorShow ? 'iconfont icon-collection show' : 'iconfont icon-collection'" 
          @click="collection(item)"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentHeader from "@/components/contentHeader.vue";
export default {
  name: 'Home',
  components: {
    ContentHeader
  },
  data() {
    return {
      title: 'Novel Recommendation',
      bookLists:[
        {
          id:1,
          name:'三寸人间',
          author:'耳根',
          synopsis:'举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。',
          imgUrl:require('@/assets/img/bookList1.jpg'),
          collectionColorShow: false
        },
        {
          id:2,
          name:'三寸人间',
          author:'耳根',
          synopsis:'举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。',
          imgUrl:require('@/assets/img/bookList1.jpg'),
          collectionColorShow: false
        }
      ],
      collectionColorShow: false,
    }
  },
  methods:{
    collection(item) {
      item.collectionColorShow = !item.collectionColorShow;
    },
    goNovelDetail(item) {
      this.$router.push({name:"NovelDetail",params:{bookInfo:item}});
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 780px){
  .home {
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
}
  .home {
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
  }
</style>

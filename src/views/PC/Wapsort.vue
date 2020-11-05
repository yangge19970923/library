<template>
  <div class="wapsort">
    <ContentHeader :title="queryInfo.title"/>
    <BookList ref="wapSort"/>
  </div>
</template>

<script>
import ContentHeader from "@/components/contentHeader.vue";
import BookList from "@/components/bookList.vue";
export default {
  name: 'Home',
  data() {
    return {
      queryInfo: JSON.parse(this.$route.query.classification),
    }
  },
  components: {
    ContentHeader,
    BookList
  },
  created() {
  },
  mounted() {
    console.log(this.queryInfo);
    this.$refs.wapSort.getType({type: 1, info: this.queryInfo});
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 780px){
  .wapsort {
    width: 100% !important;
  }
}
  .wapsort {
    width: 80%;
    margin: 0 auto;
  }
</style>

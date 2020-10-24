<template>
  <div class="wapsort">
    <ContentHeader :title="queryInfo.name"/>
    <BookList />
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

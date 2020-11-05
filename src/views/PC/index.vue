<template>
  <div class="home">
    <ContentHeader :title="title"/>
    <BookList ref="home"/>
  </div>
</template>

<script>
import ContentHeader from "@/components/contentHeader.vue";
import BookList from "@/components/bookList.vue";
export default {
  name: 'Home',
  data() {
    return {
      title: 'Home'
    }
  },
  components: {
    ContentHeader,
    BookList
  },
  mounted() {
    this.$refs.home.getType({type: 0});
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 780px){
  .home {
    width: 100% !important;
  }
}
  .home {
    width: 80%;
    margin: 0 auto;
  }
</style>

<template>
  <div class="container">
    <el-container style="height: 100%">
      <el-aside width="200px">
        <aside-item></aside-item>
      </el-aside>
      <el-main style="height: 100%">
        <article-detail></article-detail>    
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AsideItem from "@/views/Aside.vue";
import ArticleDetail from '@/components/ArticleDetail.vue';
import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/atom-one-dark.css'

export default {
  name: "BlogHome",

  data() {
    return {};
  },
  components: {
    AsideItem,
    ArticleDetail
  },
};
</script>

<style scoped>
.container {
  overflow: auto;
  display: flex;
  height: auto;
  flex-direction: column;
}
.el-aside {
  margin-top: 3%;
  color: #333;
  text-align: center;
  margin-left: 5%;
}

.el-main {
  margin-top: 3%;
  margin-left: 3%;
  margin-right: 5%;
  padding-top: 0%;
  padding-bottom: 0%;
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
}

</style>
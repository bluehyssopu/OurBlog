<template>
  <div class="container">
    <el-container>
      <el-aside width="200px">
        <aside-item></aside-item>
      </el-aside>
      <el-main>
        <article-item></article-item>    
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ArticleItem from "@/components/ArticleItem.vue";
import AsideItem from "@/views/Aside.vue";
export default {
  name: "BlogHome",

  data() {
    return {};
  },
  components: {
    ArticleItem,
    AsideItem
  },
};
</script>

<style scoped>
.container {
  overflow: auto;
  display: flex;
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
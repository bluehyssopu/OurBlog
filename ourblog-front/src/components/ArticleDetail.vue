<template>
  <div class="container" style="text-align: left; word-wrap: break-word">
    <el-container>
      <div class="markdown-body">
        <VueMarkdown :source="mdData" v-highlight></VueMarkdown>
      </div>
    </el-container>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import markdownData from "../static/test.md";
export default {
  name: "BlogArticleDetail",

  components: {
    VueMarkdown, // 注入组件
  },
  data() {
    return {
      mdData: markdownData,
    };
  },
};
</script>

<style scoped>
.container {
  border-radius: 8px;
  position: relative;
  background-color: #fff;
  height: auto;
  min-height: 400px;
  margin-bottom: 2%;
}
.markdown-body {
  box-sizing: border-box;
  word-wrap: break-word;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>

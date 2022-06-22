<template>
  <div class="container">
    <img
      src="https://res.cloudinary.com/chengchengcheng/image/upload/v1615820198/blog/%E9%A6%96%E9%A1%B5/v2-7e99c72876b50237b72ca4f8a393cf55_720w_yjmjfx.jpg"
      alt=""
    />

    <div class="message">
      <p class="title">test</p>
      <p class="article">
        FOUC：Flash of Unstyled
        Content，无样式内容闪烁。CSS与图片可以并发加载，但js在加载时会禁用并发，阻止其他内容加载。原因：在CSS文件放在页面底部时，或先执行脚本文件
        白屏：浏览器长时间不渲染页面。原因：CSS样式被置于底部(最后加载)，js放在页面顶部导致白屏,阻碍DOM解析
        浏览器性能问题：改变样式内容时，需要通过遍历整个DOM树，寻找需要修改的节点。dom树与js的模块是分开的，跨模块通讯成本增大；dom操作造成重绘与回流，使性能开销巨大。（用虚拟dom解决）hfkjdshjk
      </p>
      <el-button type="primary" plain>阅读全文</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogArticleItem",
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  border-radius: 8px;
  position: relative;
  background-color: #fff;
  height: 15rem;
  margin-bottom: 2%;
}
img {
  width: 40%;
  height: 100%;
  overflow: auto;
}
.message {
  position: absolute;
  left: 40%;
  width: 60%;
  height: 100%;
}
.title {
  display: inline-block;
  margin-top: 3%;
  font-size: 2rem;
  font-weight: bold;
  align-content: left;
}
.article {
  margin: 2% 5%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}
</style>

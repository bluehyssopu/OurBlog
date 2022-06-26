<template>
  <div class="container">
    <img
      src="https://res.cloudinary.com/chengchengcheng/image/upload/v1615820198/blog/%E9%A6%96%E9%A1%B5/v2-7e99c72876b50237b72ca4f8a393cf55_720w_yjmjfx.jpg"
      alt=""
    />
    <div class="message">
      <p class="title">{{ artdata.name }}</p>
      <p class="article">{{ artdata.content }}</p>
      <el-button type="primary" plain @click.stop="sendData"
        >阅读全文</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogArticleItem",
  data() {
    return {};
  },
  props: ["artdata"],

  methods: {
    sendData() {
      this.$router.push({
        name:'article',
        params: {
          mdData: this.artdata.content,
          create: this.artdata.createTime,
          update: this.artdata.updateTime,
          title: this.artdata.name,
          author: this.artdata.userId
        },
      });
      // console.log(this.artdata);
    },
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
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
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
  overflow: hidden;
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
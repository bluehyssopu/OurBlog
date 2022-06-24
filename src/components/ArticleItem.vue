<template>
  <div class="container">
    <img
      src="https://res.cloudinary.com/chengchengcheng/image/upload/v1615820198/blog/%E9%A6%96%E9%A1%B5/v2-7e99c72876b50237b72ca4f8a393cf55_720w_yjmjfx.jpg"
      alt=""
    />
    <div class="message">
      <p class="title">{{artdata.name}}</p>
      <p class="article">{{artdata.content}}
      </p>
      <el-button type="primary" plain @click.stop="sendData">阅读全文</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogArticleItem",
  data() {
    return {
      
    };
  },
  props:['artdata'],

  methods:{
    sendData(){
      this.$router.push({path:'/article',query:{mdData:this.artdata.content}});
    }
  },
};
</script>

<style scoped>
.container {
  border-radius: 8px;
  position: relative;
  background-color: #FFF;
  height: 15rem;
  margin-bottom: 2%;
  /* 2. 新增样式 */
  box-shadow: 0 3px 8px 6px rgba(7,17,27,0.05)
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
  /* 1. 新增样式 */
  overflow: hidden;
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
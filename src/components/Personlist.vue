<template>
  <div class="container">
    <div class="content">
      <img :src="circleUrl" />
      <div class="show">
        <p style="font-weight:bold">dsadsa</p>
        <p>1213211111111111111111111111</p>
      </div>
      <el-button round>关注</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPersonlist",

  data() {
    return {
      circleUrl:
        "https://res.cloudinary.com/chengchengcheng/image/upload/v1615819637/blog/%E9%A6%96%E9%A1%B5/v2-8d6aaa767ec5f0dad922bb3cf11b3847_r_k3cbcc.jpg",
    };
  },
};
</script>

<style scoped>
.container {
  height: 7rem;
  background-color:#fff;
  border-radius: 8px;
}
img {
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
}
.content {
  padding: 1rem 1rem;
  display: flex;
  position: relative;
  height: 100%;
}
.show{
  display: flex;
  flex-direction: column;
  margin-left: 3%;
}
.show p{
  margin-top: 1rem;
  width: 45rem;
   display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.el-button{
  position:absolute;
  right: 5%;
  top:25%;
  height: 50%;
}
</style>
<!-- 侧边栏文件 -->
<template>
  <div>
    <!-- 个人信息展示 -->
    <div class="container">
      <div class="show">
        <img src="../assets/logo.png" alt="author" />
        <p>knock code and love life</p>
      </div>

      <div class="link">
        <div class="circle"><a href="*">Git</a></div>
        <div class="circle"><a href="*">码</a></div>
        <div class="circle"><a href="*">知</a></div>
      </div>

      <div class="sum">
        <p style="font-weight: bold">60</p>
        <p>文章</p>
      </div>
    </div>
    <!-- 公告 -->
    <notice-item></notice-item>
  </div>
</template>

<script>
import NoticeItem from "@/components/Notice";
export default {
  name: "BlogAside",
  
  data() {
    return {};
  },

  components: {
    NoticeItem,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  margin-top: 0%;
  background-color: #fff;
  border-radius: 5%;
}
.show {
  padding: 8% 5% 0% 5%;
}
.show p {
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: inherit;
  font-size: 0.8rem;
  font-weight: bold;
}
.show img {
  width: 50%;
  border-radius: 50%;
  background-color: aquamarine;
}
.link {
  margin: 5% 5%;
  overflow: hidden;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.circle {
  width: 17%;
  height: 100%;
  border-radius: 50%;
  background-color: #a0daff;
}
.circle a {
  display: inline-block;
  margin-top: 15%;
  text-decoration-line: none;
  color: azure;
}
.sum {
  padding-bottom: 5%;
}
</style>
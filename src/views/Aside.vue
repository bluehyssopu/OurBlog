<!-- 侧边栏文件 -->
<template>
  <div>
    <!-- 个人信息展示 -->
    <div class="container" style="box-shadow: 0 2px 5px rgb(0 0 0 / 30%)">
      <div class="show">
        <el-avatar
          :src="imgurl"
          :size="100"
        ></el-avatar>
        <p style="margin: 20px">{{this.$store.state.onesay}}</p>
      </div>

      <div class="link">
        <div class="circle"><a href="*">Git</a></div>
        <div class="circle"><a href="*">码</a></div>
        <div class="circle"><a href="*">知</a></div>
      </div>

      <div class="sum">
        <p style="font-weight: bold">{{total}}</p>
        <p>文章</p>
      </div>
    </div>
    <!-- 公告 -->
    <notice-item></notice-item>
  </div>
</template>

<script>
import NoticeItem from "@/components/Notice";
import { loadApi } from "@/api";

export default {
  name: "BlogAside",
  data() {
    return {
      imgurl:'',
    };
  },

  components: {
    NoticeItem,
  },

  props:['total','imgId'],

  async created() {
    console.log(this.imgId);
    const res = await loadApi({ name: this.imgId});
    console.log(res);
    const src = window.URL.createObjectURL(res.data);
    console.log(src);
    this.imgurl = src;
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
  border-radius: 8px; 
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
  text-align: left;
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
<template>
  <div class="container">
    <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" router>
      <el-menu-item index="home">首页</el-menu-item>
      <el-menu-item index="timeline">时间轴</el-menu-item>
      <el-menu-item index="classify">分类</el-menu-item>
      <el-submenu index="">
        <template slot="title">文章</template>
        <el-menu-item index="edit">文章编辑</el-menu-item>
        <el-menu-item index="myarticle">我的文章</el-menu-item>
      </el-submenu>
      <el-menu-item index="search">搜索</el-menu-item>
      <el-menu-item index="timeline">关注</el-menu-item>
      <p v-if="login === 0">登录/注册</p>
      <p v-else>idddddddd</p>
    </el-menu>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "BlogIndex",

  data() {
    return {
      activeIndex: '1',
      login: this.$store.state.logined
    };
  },
};
</script>

<style scoped>
.container {
  overflow: auto;
  display: flex;
  flex-direction: column;

}
.el-menu {
  padding-left: 3%;
  /* background-color: aqua; */
}
.el-menu p {
  position: absolute;
  top: 30%;
  right: 10%;
  font-size: inherit;
  font-weight: bold;
  color: #909399;
  /* background-color: aqua; */
}


.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
<template>
  <div class="container">
    <el-menu
      :default-active="defaultActive"
      style="min-height: 100%;"
      theme="dark"
      router
      background-color="#324057"
      text-color="#BFCBD9"
      active-text-color="#20A0FF">
        <el-menu-item index="index"><i class="el-icon-menu"></i>首页</el-menu-item>
        <el-menu-item index="articleList"><i class="el-icon-document"></i>文章管理</el-menu-item>
        <el-menu-item index="userList"><i class="el-icon-user"></i>用户管理</el-menu-item>
        <el-menu-item index="logList"><i class="el-icon-document"></i>操作日志</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "manageAsides",
  data() {
    return {
      defaultActive: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  height: 100%;
  width: 200px;
  position: relative;
  .el-menu {
    height: 100%;
    position: absolute;
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>

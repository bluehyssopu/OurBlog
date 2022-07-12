<template>
  <div class="index">
    <el-container>
      <el-aside width="200px">
        <Aside width="200px"></Aside>
      </el-aside>
      <el-container height="100vh">
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/components/Aside";
export default {
  name: "BlogIndex",
  components: {
    Aside,
  },
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss">
.index {
  width: 100%;
  height: 100%;

  & > .el-container {
    width: 100%;
    height: 100%;

    & > .el-aside {
      background: #324057;
      line-height: 200px;
      padding-left: 0;
      overflow-x: hidden;
      overflow-y: scroll;
      .el-menu-item {
        padding-left: 0;
        width: 200px;
      }
    }

    & > .el-container {
      width: 100%;
      & > div {
        width: 100%;
        & > section {
          padding: 20px;
          position: absolute;
          left: 200px;
          right: 0;
          top: 60px;
          bottom: 0;
          overflow-y: scroll;
        }
      }
    }
  }
}

/**修改全局的滚动条*/
/**滚动条的宽度*/
::-webkit-scrollbar {
  width: 8px; 
 
}
//滚动条的滑块
::-webkit-scrollbar-thumb {
  background-color: #67aedd;
  border-radius: 3px;
}
</style>

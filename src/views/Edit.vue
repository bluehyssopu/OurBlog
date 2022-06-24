<template>
  <div>
    <el-container>
      <el-main>
        <el-button round>发布文章</el-button>
        <div class="search">
          <el-input placeholder="请输入文章题目" v-model="Input"> </el-input>
        </div>
        <mavon-editor
          v-model="content"
          ref="md"
          @change="change"
          style="min-height: 45vw; position: static"
        />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "BlogEdit",

  data() {
    return {
      Input: "",
      content: "",
    };
  },
  methods: {
    change() {
      return;
    },
  },
  components: {},
};
</script>

<style scoped>
 .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: right;
  }
</style>
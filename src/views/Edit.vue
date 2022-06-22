<template>
  <div>
    <el-container>
      <el-main>
        <div class="search">
          <el-input placeholder="请输入文章题目" v-model="Input">
          </el-input>
        </div>
      <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 45vw;position:static" />
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: "BlogArticleedit",

  data() {
    return {
      Input:'',
      content:'',
    };
  },
  methods:{
    change(){
      return;
    }
  },
  components:{
  }
};
</script>

<style lang="scss" scoped>
</style>
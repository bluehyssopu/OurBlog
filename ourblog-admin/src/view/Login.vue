<template>
  <div class="login">
    <el-form
      :model="LoginForm"
      :rules="rules"
      ref="LoginForm"
      class="LoginForm"
    >
      <el-form-item
        ><h1 style="font-size: 24px; text-align: center">
          OurBlog 后台管理系统
        </h1></el-form-item
      >
      <el-form-item prop="username">
        <el-input v-model="LoginForm.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="LoginForm.password"
          type="password"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="submitLogin"
          type="primary"
          size="middle"
          style="width: 100px"
          >登录</el-button
        >
      </el-form-item>
      <el-form-item style="color: #ccc"
        >注意：用户名应在3-5位,密码应在6-16位</el-form-item
      >
    </el-form>
  </div>
</template>

<script>
import { LoginApi } from "@/api";

export default {
  name: "BlogLogin",
  data() {
    return {
      LoginForm: {
        username: "likeorange",
        password: "111111",
      },
      rules: {
        username: [
          { required: true, message: "请输入正确用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入正确密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    async submitLogin() {
      const res = await LoginApi(JSON.stringify(this.LoginForm));
      if (res.data.code == 1) {
        this.$message({
          message: res.data.msg,
          type: "success",
        });
        this.$router.push("/index");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  margin: 0;
  background: #324057;
  & > p {
    color: #fff;
    font-size: 34px;
    text-align: center;
    padding-top: 260px;
  }
  & > .el-form {
    width: 370px;
    height: 270px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 25px;
    border-radius: 5px;
    overflow: visible;
    .el-input {
      width: 100%;
    }
    & > p {
      font-size: 12px;
      color: red;
      text-align: center;
    }
  }
}
</style>
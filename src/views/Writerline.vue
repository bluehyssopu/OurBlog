<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <aside-item></aside-item>
      </el-aside>
      <el-main>
        <el-timeline>
          <el-timeline-item timestamp="2018/4/12" placement="top" color="#FFF">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/12" placement="top" color="#fff">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/12" placement="top" color="#fff">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AsideItem from "@/views/Aside.vue";
export default {
  name: "BlogTimeLine",

  data() {
    return {};
  },
  components: {
    AsideItem,
  },
};
</script>

<style  scoped>
.el-aside {
  margin-top: 3%;
  color: #333;
  text-align: center;
  margin-left: 5%;
}
.el-main {
  margin-top: 3%;
  margin-left: 3%;
  margin-right: 5%;
  padding-top: 0%;
  padding-bottom: 0%;
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
}
.el-timeline-item {
  color: #fff;

}
</style>
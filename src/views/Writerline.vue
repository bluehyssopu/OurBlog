<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <aside-item></aside-item>
      </el-aside>
      <el-main>
        <el-timeline>
          <el-timeline-item v-for="item in msgList" :key="item.id" :timestamp="item.createTime" placement="top" color="#FFF">
            <el-card>
              <h4>{{item.name}}</h4>
              <p>更改于 {{item.updateTime}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AsideItem from "@/views/Aside.vue";
import {timeLineApi} from "@/api"
export default {
  name: "BlogTimeLine",

  data() {
    return {
      msgList:''
    };
  },
  components: {
    AsideItem,
  },
  async created(){
    const res = await timeLineApi({userId:this.$store.state.userId});
    console.log('------------------------');
    console.log(res);
    console.log('------------------------');
    this.msgList = res.data.data
  }
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
.el-card p{
  padding-top: 1rem;
}
</style>
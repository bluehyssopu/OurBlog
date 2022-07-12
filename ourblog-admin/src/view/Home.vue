<template>
  <div class="home">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-main>
        <section class="data_section">
          <header class="section_title">数据统计</header>
          <!-- 总数据 必须显示 -->
          <el-row style="margin: 40px auto" :gutter="20">
            <el-col :span="4">
              <div class="data_list all_head">
                <span class="data_num head">总数据：</span>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="data_list">
                <span class="data_num">{{ userCounter }}</span> 总注册用户数
              </div>
            </el-col>
            <el-col :span="4">
              <div class="data_list">
                <span class="data_num">{{ articleCounter }}</span> 总文章数
              </div>
            </el-col>
            <el-col :span="4">
              <div class="data_list">
                <span class="data_num">{{ adminCounter }}</span> 管理员数
              </div>
            </el-col>
          </el-row>
        </section>
        <!-- 图表 -->
        <el-container>
          <div id="main" style="width: 800px; height: 400px"></div>
          <div
            style="
              display: flex;
              width: 400px;
              flex-wrap: wrap;
              justify-content: flex-start;
            "
          >
            <el-header style="width: 400px">文章标签</el-header>
            <el-tag
              style="margin-right: 10px"
              type="success"
              v-bind:key="tag"
              v-for="tag in tags"
              >{{ tag }}</el-tag
            >
          </div>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/Header";
import * as echarts from "echarts";
import { adminCountApi,userCountApi,blogCountApi,classifyApi,tagsApi} from "@/api";
export default {
  name: "BlogHome",
  components: { Header },
  data() {
    return {
      userCounter: 0,
      articleCounter: 0,
      adminCounter: 0,
      tags: [],
      pieData: [],
    };
  },
  mounted() {
    this.getAllData()
    this.draw()
    this.getTagsData()
  },
  methods: {
    async getAllData() {
      const users = await userCountApi();
      const admins = await adminCountApi();
      const blogs = await blogCountApi();
      this.userCounter = users.data
      this.articleCounter = blogs.data
      this.adminCounter = admins.data
    },
    async draw() {
      const drawData = await classifyApi();
      console.log(drawData);
      this.pieData = drawData.data.data
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      const option = {
        title: {
          // 设置饼图标题，位置设为顶部居中
          text: "文章分类",
          top: "0%",
          left: "center",
        },
        series: [
          {
            type: "pie",
            data: this.pieData,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    async getTagsData() {
      const tagsData = await tagsApi()
      console.log(tagsData);
      this.tags = tagsData.data.data
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
.el-container {
  padding: 0;
  .el-header {
    background-color: #eff2f7;
    color: #97a8be;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    padding: 0;
    height: 100%;
    .el-row {
      display: flex;
      justify-content: center;
    }
  }
}
.data_section {
  padding: 20px;
  margin-bottom: 40px;
  .section_title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .data_list {
    text-align: center;
    font-size: 14px;
    color: #666;
    border-radius: 6px;
    background: #e5e9f2;
    .data_num {
      color: #333;
      font-size: 26px;
    }
    .head {
      border-radius: 6px;
      font-size: 22px;
      padding: 4px 0;
      color: #fff;
      display: inline-block;
    }
  }
  .today_head {
    background: #ff9800;
  }
  .all_head {
    background: #20a0ff;
  }
}
#main {
  display: flex;
  justify-content: center;
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


<template>
  <div class="container">
    <el-container>
      <el-aside width="200px">
        <aside-item :total="this.total" :imgId="this.$store.state.imgId"></aside-item>
      </el-aside>

      <el-container>
        <el-main>
          <article-item
            v-for="item in listData"
            :artdata="item"
            :key="item.id"
          ></article-item>
        </el-main>
        <el-footer
          ><el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentpage"
            :page-size="pagesize"
            layout="total, prev, pager, next, jumper"
            :total="this.total"
          >
          </el-pagination
        ></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ArticleItem from "@/components/ArticleItem.vue";
import AsideItem from "@/views/Aside.vue";
import { requestArticleApi } from "@/api";

export default {
  name: "BlogHome",

  data() {
    return {
      pagesize: 1,
      currentpage: 1,
      total: 0,
      listData: [],
    };
  },

  components: {
    ArticleItem,
    AsideItem,
  },

  methods: {
    async handleCurrentChange(val) {
      this.currentpage = val;
      const res = await requestArticleApi({
        page: this.currentpage,
        pageSize: this.pagesize,
      });
      (this.total = Number(res.data.data.total)),
        (this.listData = res.data.data.records);
    },
  },

  async created() {
    if (this.$store.state.logined == 0) {
      const res = await requestArticleApi({
        page: this.currentpage,
        pageSize: this.pagesize,
      });
      (this.total = Number(res.data.data.total)),
        (this.listData = res.data.data.records);
    } else {
      const res = await requestArticleApi({
        page: this.currentpage,
        pageSize: this.pagesize,
        userId: this.$store.state.userId,
      });
      (this.total = Number(res.data.data.total)),
        (this.listData = res.data.data.records),
        this.$store.commit("changeTotal", this.total);
      localStorage.setItem("total", this.total);
    }
  },
};
</script>

<style scoped>
.container {
  overflow: auto;
  display: flex;
  flex-direction: column;
}
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
.el-footer {
  text-align: center;
}
.el-pager li,
.el-pagination button {
  background-color: #fff;
  border-radius: 8px;
  width: 2.5em;
  height: 2.5em;
  margin: 6px;
  /* 3. 新增样式 */
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
}

.el-pager li:hover,
.el-pagination button:hover {
  background-color: rgb(111, 111, 238);
  color: #fff;
  transition: all 0.5s;
}

.el-pagination span {
  width: 2.5em;
  height: 2.5em;
  margin: 10px;
}
</style>
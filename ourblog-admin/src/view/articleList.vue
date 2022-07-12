<template>
  <div class="articleList">
    <Header></Header>
    <section style="padding: 0">
      <el-card style="width: 100%">
        <el-row :gutter="20">
          <el-col :span="10">
            <!--搜索区域-->
            <el-input placeholder="请输入内容" v-model="searchInfo">
              <el-button
                slot="append"
                icon="el-icon-search"

              ></el-button>
            </el-input>
          </el-col>
        </el-row>
      </el-card>
      <!-- 文章表格 -->
      <!-- 要有文章名、作者、发布日期、最近更新日期、类别、删除键、审核通过 -->
      <el-table
        :data="
          tables.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        style="width: 100%; padding-left: 20px"
      >
        <!-- 选中按钮 -->
        <el-table-column type="selection" width="55"> </el-table-column>
        <!-- 发布日期 列 -->
        <el-table-column label="发布日期" width="200" align="center">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
        <!-- 文章题目 -->
        <el-table-column label="文章标题" width="250" align="center">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag type="success" size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <!-- 用户名 列 -->
        <el-table-column label="作者" width="200" align="center">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.username }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <!-- 最近更新日期 列 -->
        <el-table-column label="最近修改" width="200" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.updateTime }}</span>
          </template>
        </el-table-column>
        <!-- 审核通过 启用 -->
        <el-table-column label="文章审核" width="200" align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.available"
              active-text="通过"
              inactive-text="未通过"
              @click.native="pass(scope.row)"
            >
            </el-switch>
          </template>
        </el-table-column>
        <!-- 账号删除 列 -->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleView(scope.row)"
              >详情</el-button
            >
          </template>
        </el-table-column>  
      </el-table>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 8, 20, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </section>
  </div>
</template>

<script>
import {articleListApi, articlePassApi} from "@/api"
import Header from "@/components/Header.vue";
export default {
  name: "articleList",
  data() {
    return {
      tableData: [],
      total: 0,
      currentPage: 1,
      pageSize: 8,
      searchInfo: "",
      checked:null,
      tags:[]
    };
  },
  props: {},
  components: {
    Header,
  },
  mounted() {
    this.getUserList();
  },
  methods: {
    async getUserList() {
      const articleListData = await articleListApi({page:this.currentPage,pageSize:this.pageSize})
      console.log(articleListData);
      this.tableData = articleListData.data.data;
      this.total = articleListData.data.data.length;
    },
    handleView(artdata) {
      this.$router.push({
        name: "articlecheck",
        params: {
          content: artdata.content,
          title: artdata.name,
          categoryId: Number(artdata.categoryId),
          titleId: artdata.id,
        },
      });
    },
    // 分页函数
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
   async pass(val){
    console.log(val.id);
      const res = await articlePassApi(JSON.stringify({
        id:val.id,
        available:val.available
      })) 
      console.log(res);
    }
  },
  computed: {
    tables() {
      const search = this.searchInfo;
      if (search) {
        // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        // 注意： filter() 不会对空数组进行检测。
        // 注意： filter() 不会改变原始数组。
        return this.tableData.filter((data) => {
          // some() 方法用于检测数组中的元素是否满足指定条件;
          // some() 方法会依次执行数组的每个元素：
          // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
          // 如果没有满足条件的元素，则返回false。
          // 注意： some() 不会对空数组进行检测。
          // 注意： some() 不会改变原始数组。
          return Object.keys(data).some((key) => {
            // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
            // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
            return String(data[key]).toLowerCase().indexOf(search) > -1;
          });
        });
      }
      return this.tableData;
    },
  },
};
</script>

<style scoped>
</style>
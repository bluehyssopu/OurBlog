<template>
  <div class="userList">
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
                @click="searchUser"
              ></el-button>
            </el-input>
          </el-col>
        </el-row>
      </el-card>
      <!-- 用户表格 -->
      <!-- 要有注册信息、姓名、邮箱、角色（是否为管理）、是否禁用(isActive) -->
      <el-table
        :data="
          tables.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        style="width: 100%; padding-left: 20px"
        @selection-change="handleSelectionChange"
      >
        <!-- 选中按钮 -->
        <el-table-column type="selection" width="55"> </el-table-column>
        <!-- 注册日期 列 -->
        <el-table-column label="id" width="300" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <!-- 用户名 列 -->
        <el-table-column label="账号" width="300" align="center">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.username }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <!-- 电子邮箱 列 -->
        <el-table-column label="创建时间" width="300" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
        <!-- 账号禁用启用 -->
        <el-table-column label="账号状态" width="300" align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.isDisable"
              active-text="禁用"
              inactive-color="#13ce66"
              inactive-text="启用"
              active-color="#ff4949"
              @click.native="ban(scope.row)"
            >
            </el-switch>
          </template>
        </el-table-column>
        <!-- 账号删除 列 -->
        
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
import Header from "@/components/Header.vue";
import { userListApi,userChangeApi } from "@/api";
export default {
  name: "userList",
  data() {
    return {
      tableData: [],
      total: 0,
      currentPage: 1,
      pageSize: 8,
      searchInfo: "",
    };
  },
  props: {},
  components: {
    Header,
  },
  mounted() {
    this.getUserList();
  },
  async created() {
    const userListData = await userListApi({
      page: this.currentPage,
      pageSize: this.pageSize,
    });
    console.log(userListData);
  },
  methods: {
    async getUserList() {
      const userListData = await userListApi({
        page: this.currentPage,
        pageSize: this.pageSize,
      });
      console.log(userListData);
      this.tableData = userListData.data.data;
      this.total = userListData.data.data.length;
    },  
    async ban(val){
      const res = await userChangeApi(val);
      console.log(res)

    },
    // 多选用户 checkbox
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 编辑 删除用户按钮
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 分页函数
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
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
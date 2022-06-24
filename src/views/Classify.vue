
<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <aside-item></aside-item>
      </el-aside>
      <el-main>
        <el-tree
          class="filter-tree"
          :data="data"
          node-key="id"
          :props="defaultProps"
          highlight-current
          :filter-node-method="filterNode"
          ref="tree"
          @node-click="handleNodeClick"
        >
          <span slot-scope="{ data }" class="span__">
            <i class="el-icon-s-promotion"></i>
            <span class="tree-node-span">{{ data.label }}</span>
          </span>
        </el-tree>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AsideItem from "@/views/Aside.vue";
export default {
  name: "BlogClassify",

  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
  components: {
    AsideItem,
  },
};
</script>

<style lang="less" scoped>
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
  background-color: #fff;
  color: #333;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 3px 8px 6px rgba(7,17,27,0.05)
}
/deep/.el-icon-caret-right:before {
  display: none;
}
/deep/.el-tree-node__content {
  height: 36px;
  border-radius: 8px;
  padding-left: 36px;
}
/deep/.el-icon-s-promotion:before {
  margin-right: 2em;
  color: #49b1f5;
}
</style>
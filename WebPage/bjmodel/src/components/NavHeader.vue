<template>
  <div class="outer-wrap">
    <el-container>
      <el-header class="nav-header">
        <div class="header-wrap">
          <div class="title">
            <a href="/#/home">
              <img src="../assets/dianxin.png" >
            </a>
            北京电信IDC机房智慧运营
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-tree node-key="id" :data="menus" :props="defaultProps" accordion @node-click="handleNodeClick">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>
                <router-link :to="data.Url">
                  <span>{{ node.label }}</span>
                </router-link>
              </span>
            </span>
          </el-tree>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.el-header{
  height: 65px;
}
.el-main{
  background-color: #f0f2f5;
}
.el-tree{
  background-color: #104694;
  color: #fff
}
.el-aside .el-tree-node__content{
  background-color: #104694;
  color: #fff;
  padding: 7px 0 9px 37px;
}
.el-tree-node__content:hover .custom-tree-node a{
  color: #666;
}
.el-aside:before{
  content: "";
  display: block;
  width: 200px;
  position: fixed;
  bottom: 0;
  top: 65px;
  background-color: #104694;
  border: 1px solid #ccc;
  border-width: 0 1px 0 0;
}
.custom-tree-node a{
  color: #fff;
  font-size: 13px;
}
.treeselected{
  background-color: #1890ff;
}
</style>

<script>
export default {
  name: 'Header',
  data () {
    return {
      menus: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted(){
    this.getMenuList();
  },
  methods:{
    getMenuList(){
      this.$ajax.get("/menus").then((res)=>{
        if(res.data.success==true){
          this.menus=res.data.data;
        }
      })
    },
    handleNodeClick(data) {
      console.log(data);
    },
    getNode(data){
      debugger;
    }
  }
}
</script>


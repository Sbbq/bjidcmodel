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
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <div class="vertical-align">
                <img src="../assets/guanliyuan.png" class="loginimg">
              {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
              </div>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router unique-opened >
            <el-submenu :index="menu.id+''" v-for="menu in menus" :key="menu.id">
              <template slot="title">
                <i :class="menu.icon" class="icon-sty"></i>
                <span>{{menu.label}}</span>
              </template>
              <el-menu-item-group v-for="submenu in menu.children"  :key="submenu.id">
                <el-menu-item @click.native.stop="select(submenu.id)" :class="{'selected':isselected==submenu.id}" :index="submenu.Url">{{submenu.label}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
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
.el-aside .el-submenu{
  background-color: #104694;
  color: #fff;
  width: 200px;
}
.el-menu-item-group{
  background-color:
}
.el-submenu__title{
  color: #fff;
  height: 38px;
  line-height: 38px;
  text-align: left;
  font-size: 13px;
}
.el-submenu__title:hover{
  color: #666;
  background-color: #104694;
}
.el-menu-item-group__title{
  display: none;
}
.el-menu-item{
  color: #bcc4cc;
  height: 35px!important;
  line-height: 35px!important;
  background-color: rgb(22, 56, 104);
  text-align: left;
  padding-left: 20px;
}
.el-menu-item{
  padding-left: 53px!important;
}
.el-menu-item:hover{
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
}
.el-main:after {
  background-color: #F0F2F5;
  bottom: 0;
  left: 0;
  content: "";
  display: block;
  max-width: inherit;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -2;
}
.custom-tree-node a{
  color: #fff;
  font-size: 13px;
}
i.icon-sty{
  color: #fff;
  padding-right: 13px;
}
.el-menu-item-group.selected{
  background-color: #22eeaa;
  z-index: 100;
}
.selected{
  background-color: #428bca !important;
  color: #fff !important;
}
.el-menu-item:focus, .el-menu-item:hover{
  background-color: rgb(22, 56, 104);
}
.el-dropdown{
  font-size: 18px;
  line-height: 33px;
  float: right;
}
</style>

<script>

export default {
  name: 'Header',
  data () {
    return {
      menus: [],
      isselected:0,
      username:"欢迎 Zk",
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted(){
    this.getMenuList();
  },
  computed: {
    defaultActive: function(){
      return this.$route.path.replace('/', '');
    }
  },
  methods:{
    getMenuList(){
      this.$axios.get("/menus").then((res)=>{
        if(res.data.success==true){
          this.menus=res.data.data;
        }
      })
    },
    select(id){
      console.log(id);
      this.isselected=id;
    },
    handleNodeClick(data) {
      console.log(data);
    },
    handleCommand(){

    },
    getNode(data){
      debugger;
    }
  }
}
</script>


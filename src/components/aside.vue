
<template>
<div class="asideBox">
    
<div class="headAside">

<img src="../assets/banner.png" alt="">

</div>
   <el-row class="tac">
  <el-col :span="12">
    
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#3085bf"
      text-color="#000"
      active-text-color="#fff">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>首页66666</span>
       
        </template>
        <el-menu-item-group>
        
          <el-menu-item index="1-1"  ><router-link tag='li' :to="{name:'content'}">订单管理</router-link></el-menu-item>
        <el-menu-item index="1-2"><router-link tag='li' :to="{name:'mine'}"> 商品管理</router-link></el-menu-item>
           <el-menu-item index="1-3"><router-link tag='li' :to="{name:'luru'}">录入管理</router-link></el-menu-item>
          <el-menu-item index="1-4"><router-link tag='li' :to="{name:'staff'}">员工管理</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#3085bf"
      text-color="#000"
      active-text-color="blue">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>列表</span>
       
        </template>
        <el-menu-item-group>
        
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#3085bf"
      text-color="#000"
      active-text-color="blue">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>详情</span>
       
        </template>
        <el-menu-item-group>
        
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#3085bf"
      text-color="#000"
      active-text-color="blue">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>购物车</span>
       
        </template>
        <el-menu-item-group>
        
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#3085bf"
      text-color="#000"
      active-text-color="blue">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>结算页面</span>
       
        </template>
        <el-menu-item-group>
        
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#3085bf"
      text-color="#000"
      active-text-color="red">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>后台管理</span>
       
        </template>
        <el-menu-item-group>
        
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#3085bf"
      text-color="#000"
      active-text-color="blue">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>订单查询</span>
       
        </template>
        <el-menu-item-group>
        
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    
  </el-col>
     </el-row> 
    


</div>
</template>
<style src='element-ui/lib/theme-chalk/index.css'></style>
<style lang="less" scoped >
.headAside{

    height: 150px;
    img{
        width:107px;
        height: 107px;
        display: block;
        margin-left: 79px;
        padding-top: 20px;

    }
}
.el-col-12 {
    width: 100%;
}

</style>

<script>
export default {
     methods: {
    
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
 
    },
    created(){
        this.$store.dispatch("getData");
    }
  
   
}
</script>

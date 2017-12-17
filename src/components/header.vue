<template>

<header class="clear">

<div class="htop left">

<span class="font ">欢迎<span class="username">{{txt}}</span>登录商品管理系统</span>

<span class="iconfont icon-addressbook_fill"></span>
<span >

<el-dropdown trigger="click">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><router-link tag="li" :to="{name:'login'}" >登录</router-link></el-dropdown-item>
        <el-dropdown-item>注册</el-dropdown-item>
        <el-dropdown-item><router-link tag="li" :to="{name:'login'}" >注销</router-link></el-dropdown-item>
       
      </el-dropdown-menu>
    </el-dropdown>
</span>


   

   </div>



  
    
</header>
  
</template>

<script>
export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        txt:localStorage.getItem("username"),
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
  mounted(){
      var zz =localStorage.getItem("username");
      console.log(zz);
  }
 
}
</script>
<style src='element-ui/lib/theme-chalk/index.css'></style>

<style lang="less" scoped>
header{
    .htop{
         .font{

        font-size: 26px;
        color: #3085bf;
        margin-right: 527px;
    }

      .icon-addressbook_fill{
        font-size: 26px;
        color: #6bb3eb;
    }

    }

    .xptop{
        height: 100px;
    }
}

.username{
  color:#230df9;
}
</style>

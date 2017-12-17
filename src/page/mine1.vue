<template>
  <el-container>

  <el-aside width="275px">
    <aside-com/>
  </el-aside>

  <el-container>
    <el-header><header-com/></el-header>
    <el-main>
            <from-com/>
           
    </el-main>
  
  </el-container>

</el-container>

</template>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  

  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

<script>
import asideCom from "../components/aside";
import headerCom from "../components/header";
import fromCom from "../components/from";

import footerCom from "../components/footer";
export default {
    name:'mine',
  components:{
      asideCom:asideCom,
      headerCom,
      fromCom,
      footerCom
  }
}
</script>

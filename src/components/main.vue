<template>
  <div>

       <el-table   
    ref="multipleTable"
    :data="list"
    tooltip-effect="dark"
    style="width: 100% ;"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55" >
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="120" height="30">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <footer-com></footer-com>
  
  
  </div>
</template>

<script>
  import footerCom from "./footer";
import { mapState } from "vuex";
  export default {

  
      computed:{
        ...mapState({
          list:state=>state.goods.list
        })
      },
      
     methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
        handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    components:{
        footerCom
    }
     
  } 
</script>



<style src='element-ui/lib/theme-chalk/index.css'></style>

<style scoped>
.el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid #e6ebf5;
    text-align: center!important;
}

</style>

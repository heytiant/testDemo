<template>
<div>
     <el-input  
    placeholder="请输入内容"
    v-model="inputValue" style="width:37%">
    <i slot="prefix" class="el-input__icon el-icon-search" ></i>
  </el-input>
  <el-button type="primary" icon="el-icon-search" @click="searchBtn">搜索</el-button>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="goodname"
      label="商品名称"
      width="180">
    </el-table-column>
     <el-table-column
      prop="price"
      label="市场价"
      width="180">
    </el-table-column>
    <el-table-column
      prop="memberPrice"
      label="会员价"
      width="180">
    </el-table-column>
    <el-table-column
      prop="stock"
      label="库存">
    </el-table-column>

       <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>

  <el-dialog title="修改订单详情" :visible.sync="dialogFormVisible">

    <el-form>
    <el-form-item label="商品名称" :label-width="formLabelWidth">
       <el-input v-model="changeContent.goodname" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="市场价" :label-width="formLabelWidth">
        <el-input v-model="changeContent.price" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="会员价" :label-width="formLabelWidth">
      <el-input v-model="changeContent.memberPrice" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="库存" :label-width="formLabelWidth">
     <el-input v-model="changeContent.stock" auto-complete="off"></el-input>
    </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="update">确 定</el-button>
  </div>
    </el-dialog>

        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <!-- <footer-com></footer-com> -->
  </div>
</template>

<script>
import footerCom from "./footer";
import { mapState } from "vuex";
export default {
  data() {
    return {
      input2: "",
      input21: "",
      input22: "",
      inputValue: "",
      changeContent:{},//修改内容
      dialogFormVisible: false,
      formLabelWidth: '120px'
    };
  },
  name: "luru",
  computed: {
    ...mapState({
      tableData: state => state.luru.tableData
    })
  },
  beforeMount() {
    this.$store.dispatch("getAllist");
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
       this.dialogFormVisible=true;
       this.changeContent =this.tableData[index];//修改里面的内容

      // alert("编辑数据!!");
    },
    handleDelete(index, row) {
      console.log(index, row);

      console.log(this.tableData[index].id);

      this.$store.dispatch("deleteList",{id:this.tableData[index].id});
       this.$store.dispatch("getAllist");//删除的函数,再重新加载一次.
      
    },
    update(index){
        this.dialogFormVisible = false;
        // console.log(this.changeContent);
      
        var Obj =this.changeContent;
        this.$store.dispatch("updateList",Obj);
      

    },
    //搜素功能
    searchBtn(){

      console.log("搜索结果!!");
      // console.log(this.tableData.goodname);
      var inpValue =this.inputValue;
      console.log(inpValue);
      this.$store.dispatch("goodSearch",{goodname:inpValue});
    
    }
  },
  components: {
    footerCom
  }
};
</script>

<style src='element-ui/lib/theme-chalk/index.css'></style>
<style>

</style>

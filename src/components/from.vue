<template>
  <el-form ref="form" :model="sizeForm"  label-width="80px" size="mini">
  <el-form-item label="产品名称">
    <el-input v-model="goodsInfo.goodname"></el-input>
  </el-form-item>
 
  <el-form-item label="产品分类">
    <el-select v-model="sizeForm.region" placeholder="请选择产品">
      <el-option label="水果" value="shanghai"></el-option>
      <el-option label="蔬菜" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
    </el-col>
     </el-form-item>
     <el-form-item   label="市场价(元)">
    <el-input  v-model="goodsInfo.marketpre"></el-input>
  </el-form-item>

     <el-form-item label="会员价(元)">
    <el-input v-model="goodsInfo.memberpre"></el-input>
  </el-form-item>
     <el-form-item label="库存(个)">
    <el-input  v-model="goodsInfo.stock"></el-input>
  </el-form-item>
    
      </el-form-item>

 <span class="uploadeImg">上传商品图片</span>
 <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
 
  <i class="el-icon-plus"></i>
</el-upload>
 <el-form-item size="large">
    <el-button type="primary" @click="onSubmit">提交</el-button>
    <el-button>取消</el-button>
  </el-form-item>

</el-form>

</template>
<script>
  var $ =require("jquery");
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
         
        },
        goodsInfo:{
            goodname:'',
            marketpre:'',
            memberpre:'',
            stock:'',
            id:''
        }
        
      };
    },
    
    methods: {
      onSubmit() {
        console.log(this.goodsInfo);
        var Obj =this.goodsInfo;
      upLoad();
        function upLoad(){
               var P =new Promise(function(resolve,reject){

              $.ajax({
                  type:"get",
                  url:"http://localhost/houtai/upLoad.php",
                  data:Obj,
                  success:function(result){
                      resolve(result);
                      console.log(result);
                  }
              })
        })
      return P ;
    }
      alert("商品录入成功!!");
        this.$router.push({
            name:"luru",
            query:{
              username:"login"
            }    
        })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  };
</script>

<style>
.uploadeImg{
    font-size: 20px;
    color:#000000;
}
</style>


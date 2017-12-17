<template>
  <div class="block">
  
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total=num >
    </el-pagination>

  </div>
</template>


<script>
  
import {mapState}  from "vuex";


export default {

  computed:{
    ...mapState({
        num:state =>state.home.num*1,
        pageSizes:state =>state.goods.pageSizes,
        pagesize:state =>state.goods.pagesize,
        currentPage:state =>state.goods.currentPage,
    })

  },
  methods: {
    
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.$store.commit("updateSizeM",val);
      this.$store.dispatch("getGoods",{pageIndex:this.currentPage,pageNum:val})
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$store.commit("updateSizeL",val);
      this.$store.dispatch("getGoods",{pageIndex:val,pageNum:this.pagesize});

     
        
    },

    getGoodsList(obj){
    this.$store.dispatch("getGoods",obj);
  }

  },
  created() {
    this.$store.dispatch("getCount");
    this.getGoodsList({pageIndex:this.currentPage,pageNum:this.pagesize});
  },

  

};
</script>

<style src='element-ui/lib/theme-chalk/index.css'></style>
<style scoped>
.el-pagination {
  white-space: nowrap;
  padding: 17px 5px;
  color: #2d2f33;
  font-weight: 700;
}
</style>      
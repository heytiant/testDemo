import $ from "jquery";

export default{
   
       state:{
        tableData: 
        [
        //     {
        //     goodname: '哈密瓜',
        //     price: '12',
        //     memberPrice: '8',
        //     stock:46
        //   }, {
        //     goodname: '火龙果',
        //     price: '28',
        //     memberPrice: '24',
        //     stock:108,
        //     id:,        
        //   },

          ]

       },
       mutations:{
        updateList:function(state,data){
            state.tableData =data;
        },
        upupDate:function(state,data){

        },
        updateSearch:function(state,data){
                state.tableData=data;
        }
       },
       actions:{
        getAllist(store){
             
            $.ajax({
                type:"get",
                dataType:"json",
                url:"http://localhost/houtai/getAllList.php",
                success:function(res){
                    console.log(res);
                    store.commit("updateList",res);
                }
            })
        },
        updateList(store,Obj){
                        $.ajax({
                            type:"get",
                            dataType:"json",
                            url:"http://localhost/houtai/updateList.php",
                            data:Obj,
                            success:function(res){
                                    console.log(res);
                                    console.log("修改成功!!")
                                    // store.commit("upupDate",res);
                            }
                        })
                   },
        deleteList(store,Obj){
            $.ajax({
                   type:"get",
                   url:"http://localhost/houtai/deleteGoods.php",
                    data:Obj,
                    success:function(res){
                        console.log(res);
                        if(res=1){
                            console.log("删除成功!");
                        }
                    }
            })
        },
        goodSearch(store,Obj){

            $.ajax({
                 type:"get",
                 url:"http://localhost/houtai/goodsSearch.php",
                 data:Obj,
                 success:function(res){
                     console.log(res);
                     var data =JSON.parse(res);

                     store.commit("updateSearch",data);
                 }


            })
        }                  
       },
}
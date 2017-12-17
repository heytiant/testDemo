import axios from "axios";
import $  from "jquery";
export default{
    
  
    state:{
        list: [],
        num:"",



    },
    mutations:{
     insert(state,data){  //data是形参

      state.list=data;

     },
     getcoun(state,data){
       state.num=data;
     }

    },
    actions:{
      getData(store){
        axios({
          method:"get",
          url:"http://localhost/houtai/getOrder.php",
          
      }).then(function(res){
        console.log(res.data);

        store.commit("insert",res.data); //从后台返回的数据是实参
      })

      },

      getCount(store){
        function getNumber(){
          var p  =new Promise(function(reslove,reject){
            $.ajax({
                type:"get",
                url:"http://localhost/houtai/querycounts.php",
                dataType:"json",
                success:function(res){
                    reslove(res);
                    console.log(res);
                    store.commit("getcoun",res);

                }
            })
          })
            return p;
        }
        getNumber();
      }

     
    },


   



}
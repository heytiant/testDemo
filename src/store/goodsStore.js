import $ from "jquery";
export default {
    state: {
        pageIndex: "",
        pageNum: "",
        list:[],
        pageSizes:[8, 16, 24, 32,40,48,51],
        pagesize:8,
        currentPage:1
    },
    mutations: {
        updateList(state,data){
            state.list=data;
        },
        updateSizeM(state,data){
            state.pagesize=data;
        },
        updateSizeL(state,data){
            state.currentPage=data;
        }

    },
    actions: {
        getGoods(store,obj) {  
                $.ajax({
                    type: "get",
                    url: "http://localhost/houtai/getGoodsList.php",
                    dataType: "json",
                    data: obj,
                    success: function (res) {
                        console.log(res);
                        store.commit("updateList",res);
                    }
                });
        },
    
    }
}


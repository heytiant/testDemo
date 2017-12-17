

// import Vue from "Vue";

// import Vuex from "Vuex";
// import home from "./homeStore";


// Vue.use(Vuex);


// var store =new Vuex.Store({
//     modules:{
//         home

//     }
// })

// export default store; 


import Vue from "vue";
import Vuex from "vuex";
import home from "./homeStore.js";
import goods from "./goodsStore.js";
import luru from "./luruStore.js";


Vue.use(Vuex);

var store = new Vuex.Store({
    modules : {
        home,
        goods,
        luru
    }
})

export default store;


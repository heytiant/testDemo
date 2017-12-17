<template>

<div class="box">

    <p>品牌名称-管理登录</p>

    <form >    
    <input type="text" placeholder="用户名"  name="username"  class="username" v-model="infoData.username"/>
    <input type="text" placeholder="密码" name="password"   class="password"  v-model="infoData.password"/>
    <input type="button" value="登录"  class="submit"  @click="submitBtn"/>
    </form>


</div>
 
</template>



<script>
var $ = require("jquery");
export default {
  methods: {
    submitBtn() {
      console.log(this.infoData);
      var that = this;
      var Datas = this.infoData;
      function insertUser() {
        var p = new Promise(function(reslove, reject) {
          $.ajax({
            type: "get",
            data: Datas,
            url: "http://localhost/houtai/login.php",
            success: function(result) {
              reslove(result);
              //  console.log(result);
              switch (result) {
                case "2":
                  alert("用户名和密码不匹配!");
                  break;
                case "3":
                  alert("该用户不存在!");
                  break;
                default:
                  alert("恭喜您,登录成功!");

                  localStorage.setItem("username",that.infoData.username);

                  that.$router.push({
                    // path:"/login",
                    name: "home",
                    query: {
                      username: that.infoData.username
                    }
                    // parmas:{
                    //     name:"login",
                    //     dataObj:this.infoData.username
                    // }
                  });
              }
            }
          });
        });
        return p;
      }

      insertUser();
    }
  },
  data() {
    return {
      infoData: {
        username: "",
        password: ""
      }
    };
  }
};
</script>



<style  lang="less">
body,
html {
  background: url("../assets/beijing.jpg");
  background-size: 100%;
}

.box {
  width: 420px;
  height: 420px;
  background: #ffffff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 5px;
  text-align: center;

  p {
    width: 100%;
    height: 60px;
    font-size: 16px;
    color: #ffffff;
    background: #26a9e3;
    line-height: 60px;
    text-align: center;
    margin-top: 50px;
  }
  .username {
    width: 338px;
    height: 48px;
    border: 1px solid #dee0e1;
    border-radius: 5px;
    margin-top: 30px;
    outline: none;
  }
  .password {
    width: 338px;
    height: 48px;
    border: 1px solid #dee0e1;
    border-radius: 5px;
    margin-top: 15px;
    outline: none;
  }
  .submit {
    width: 338px;
    height: 48px;
    border: 1px solid #dee0e1;
    border-radius: 5px;
    margin-top: 15px;
    outline: none;
    background: #26a9e3;
    font-size: 16px;
    color: #ffffff;
  }
}
</style>

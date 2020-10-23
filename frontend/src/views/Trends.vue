<template>
  <div id="trends" >
    <el-row>
      <div class="publish">
        <Publish></Publish>
      </div>
      <!-- <div class="new-trend"><a href="">有新动态，点击查看</a></div> -->
      <el-col :span="18">
        <div class="grid-content bg-purple" v-for="(item, index) in allFollowingArticles" :key="index">
          <Trend :aArticle="item"></Trend>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <SideMessage title="推荐用户" :recommendatoryUsers="recommendatoryUsers"></SideMessage>
        </div>
        <div class="grid-content bg-purple-light">
          <Footer></Footer>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Trend from "../components/Trend";
import SideMessage from "../components/SideMessage";
import Footer from "../components/Footer";
import Publish from "../components/Publish";

import axios from "axios"

export default {
  name: "Trends",
  data() {
    return {
      allFollowingArticles: [],
      recommendatoryUsers: []
    };
  },
  components: {
    Trend,
    SideMessage,
    Footer,
    Publish,
  },

  created(){

    let userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if(!userInfo){
      alert("您还没有登录，请先登录！")
      this.$router.push("/login")
      return;
    }
    let userid = userInfo.id;
    axios.get(`/myFollowingArticles?userid=${userid}`)
    .then( (res) => {
      this.allFollowingArticles = res.data.data;
      // console.log(res)
    } )
    .catch(e => { throw e })

    // 获取推荐用户

    let tags = JSON.parse(localStorage.getItem("userInfo")).tags
    tags = JSON.parse(tags)
    // console.log(tags);

    axios.post("/recommendatoryUsers", tags)
    .then( res => {
      // console.log(res.data.data);
      this.recommendatoryUsers = res.data.data;
    })
    .catch( err => {
      console.log(err);
    })
  }
};
</script>

<style scoped>
#trends {
  margin: 0 0 300px 0;
  padding-top: 60px;
}
.el-row {
  width: 80%;
  margin: 0 auto;
}
/* .new-trend{
  background-color: white;
  margin: 10px 10px 0 10px;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  color: skyblue;
}
.new-trend a{
  color: skyblue;
} */
</style>
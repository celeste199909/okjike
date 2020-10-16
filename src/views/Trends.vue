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
          <SideMessage title="推荐用户"></SideMessage>
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
      allFollowingArticles: []
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

    let userid = userInfo.id;
    axios.get(`api/myFollowingArticles?userid=${userid}`)
    .then( (res) => {
      this.allFollowingArticles = res.data.data;
    } )
    .catch(e => { throw e })


  }
};
</script>

<style scoped>
#trends {
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
<template>
  <div id="trends">
    <el-row>
      <el-col :span="18">
        <div class="grid-content bg-purple" v-for="(item, index) in allArticles" :key="index">
          <Trend :aArticle="item" ></Trend>
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
import axios from "axios"

export default {
  name: "Discovery",
  data() {
    return {
      allArticles: [],
      recommendatoryUsers: []
    };
  },
  components: {
    Trend,
    SideMessage,
    Footer
  },

  created(){
    axios.get("/allArticles")
    .then( ( response ) => {
      // console.log(response.data.data)
      this.allArticles = response.data.data
    })
    .catch(e => {throw e})

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
#trends{
  padding-top: 60px;
  margin: 0 0 300px 0;
}
.el-row{
    width: 80%;
    margin: 0 auto;
}

</style>
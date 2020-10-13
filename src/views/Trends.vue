<template>
  <div id="trends">
    <el-row>
      <div class="publish">
        <Publish></Publish>
      </div>
      <div class="new-trend"><a href="">有新动态，点击查看</a></div>
      <el-col :span="18">
        <div class="grid-content bg-purple" v-for="(i,j) in 5" :key="j">
          <!-- <Trend></Trend> -->
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <Profile title="动态"></Profile>
        </div>
        <div class="grid-content bg-purple-light">
          <Footer></Footer>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import Trend from "../components/Trend";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import Publish from "../components/Publish";

export default {
  data() {
    return {};
  },
  components: {
    // Trend,
    Profile,
    Footer,
    Publish,
  },
};
</script>

<style scoped>
#trends {
}
.el-row {
  width: 80%;
  margin: 0 auto;
}
.new-trend{
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
}
</style>
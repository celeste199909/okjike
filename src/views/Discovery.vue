<template>
  <div id="trends">
    <Carousel></Carousel>
    <el-row>
      <el-col :span="18">
        <div class="grid-content bg-purple" v-for="(i,j) in 5" :key="j">
          <Trend></Trend>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <Profile title="发现"></Profile>
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
import Profile from "../components/Profile";
import Footer from "../components/Footer"
// import Carousel from "../components/Carousel"

export default {
  data() {
    return {
      num: 10,
    };
  },
  components: {
    Trend,
    Profile,
    Footer,
    // Carousel
  },
};
</script>

<style scoped>
#trends{
}
.el-row{
    width: 80%;
    margin: 0 auto;
}

</style>
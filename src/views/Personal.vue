<template>
  <div>
    <div class="head">
      <div class="first-row">
        <el-avatar
          :size="100"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <div class="sign-out">
          <el-button round size="mini">
            <router-link to="/login">注销</router-link>
          </el-button>
        </div>
      </div>
      <div class="nickname personal-item">你的昵称</div>
      <div class="personal-item">
        <span>100</span>
        <span>关注 </span> 
        <span> 1000</span>
        <span>被关注</span>
      </div>
      <div class="personal-item">为什么要给我一颗跳动的心脏，却忘了给我飞翔的翅膀。</div>
      <div class="personal-item">
        <span> 天秤座 </span>
        <span> 游戏玩家 </span>
      </div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="动态" name="first">
        <div class="grid-content bg-purple" v-for="(i,j) in 5" :key="j">
          <Trend></Trend>
        </div>
      </el-tab-pane>
      <el-tab-pane label="关注" name="second">
        <div v-for="(i,j) in 10" :key="j">
          <Follow></Follow>
        </div>
      </el-tab-pane>
      <el-tab-pane label="被关注" name="third">
        <div v-for="(i,j) in 10" :key="j">
          <Follow></Follow>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Trend from "../components/Trend";
import Follow from "../components/Follow";
export default {
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    };
  },
  components: {
    Trend,
    Follow,
  },
};
</script>

<style scoped>
.head {
  padding: 5% 12%;
  background: url("https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg");
  color: #fff;
}
.first-row{
    display: flex;
    justify-content: space-between;
}
.personal-item{
    margin: 5px 0;
}
.nickname {
  font-size: 24px;
}
.el-tabs {
  padding: 0 12%;
}
.sign-out a {
  font-size: 18px;
  color: #fff;
  text-decoration: none;
}
.sign-out button {
  background: transparent;
}

</style>
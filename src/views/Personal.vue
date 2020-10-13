<template>
  <div>
    <div class="head">
      <div class="first-row">
        <el-avatar
          :size="100"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <div class="sign-out" @click="handleLoginOut">
          <el-button round size="mini" >
            <a href="/login">注销</a>
          </el-button>
        </div>
      </div>
      <div class="nickname personal-item">{{userInfo.nickname}}</div>
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
    <el-tabs v-model="activeName">
      <el-tab-pane label="动态" name="first">
        <div class="grid-content bg-purple" v-for="(item,index) in allMyArticles" :key="index">
          <Trend :aArticle="item"></Trend>
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
import store from "@/store"
import axios from "axios"
export default {
  data() {
    return {
      activeName:"first",
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
       userInfo: {
        username: "",
        nickname: ""
      },
      allMyArticles: []
    };
  },
  methods: {
    handleLoginOut(){
      localStorage.removeItem("userInfo");
    }
  },
  created(){
    this.userInfo.username = store.state.user.userInfo.username;
    this.userInfo.nickname = store.state.user.userInfo.nickname;

      let userid = JSON.parse(localStorage.getItem("userInfo")).id;
      console.log(typeof userid);
      axios.get(`api/allMyArticles?userid=${userid}`)
      .then((res) => {
        // console.log(res.data.data)
        this.allMyArticles = res.data.data;
      }).catch(e => {
        console.log(e)
      })

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
  background: url("../assets/defaultbg.jpg");
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
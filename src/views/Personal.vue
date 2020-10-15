<template>
  <div>
    <div class="head">
      <div class="first-row">
        <el-avatar
          :size="100"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <div class="sign-out" @click="handleLoginOut">
          <el-button round size="mini">
            <a href="/login">{{isLogin ? "注销" : "登录"}}</a>
          </el-button>
        </div>
      </div>
      <div class="nickname personal-item">{{ userInfo.username }}</div>
      <div class="personal-item">
        <span>关注：</span>
        <span>{{allMyFlollowing.length}} </span>
        <span> 关注我的：</span>
        <span>{{allMyFollower.length}}</span>
      </div>
      <div class="personal-item">
        {{userInfo.slogan}}
      </div>
      <div class="personal-item">
        <span> 天秤座 </span>
        <span> 游戏玩家 </span>
      </div>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="动态" name="first">
        <div
          class="grid-content bg-purple"
          v-for="(item, index) in allMyArticles"
          :key="index"
        >
          <Trend :aArticle="item"></Trend>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我关注的" name="second">
        <div v-for="(item, index) in allMyFlollowing" :key="index">
          <Follow :username="item.username" :slogan="item.slogan"></Follow>
        </div>
      </el-tab-pane>
      <el-tab-pane label="关注我的" name="third">
        <div v-for="(item, index) in allMyFollower" :key="index">
          <Follow :username="item.username" :slogan="item.slogan"></Follow>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Trend from "../components/Trend";
import Follow from "../components/Follow";
import store from "@/store";
import axios from "axios";
export default {
  data() {
    return {
      activeName: "first",
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      userInfo: {
        username: "",
        slogan: "",
      },
      allMyArticles: [],
      allMyFlollowing: [],
      allMyFollower: [],
      isLogin: false
    };
  },
  methods: {
    handleLoginOut() {
      localStorage.removeItem("userInfo");
    },
  },
  created() {
    this.userInfo.username = store.state.user.userInfo.username;
    this.userInfo.slogan = store.state.user.userInfo.slogan;

    // 获取自己所有的文章
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if(userInfo){
      this.isLogin = true;
    }
    // 如果用户未登录则return
    if(!this.isLogin){
      return;
    }
    let userid = userInfo.id;

    axios
      .get(`api/allMyArticles?userid=${userid}`)
      .then((res) => {
        // console.log(res.data.data)
        this.allMyArticles = res.data.data;
        // store.commit("user/getAllMyFollowing", res.data.data)
      })
      .catch((e) => {
        console.log(e);
      });

    // 获取所有自己关注的人

    axios
      .get(`api/allMyFollowing?userid=${userid}`)
      .then((res) => {
        // console.log(res.data.data)
        this.allMyFlollowing = res.data.data;
      })
      .catch((e) => {
        console.log(e);
      });

    // 获取所有关注我的人 /allMyFollower
       axios
      .get(`api/allMyFollower?userid=${userid}`)
      .then((res) => {
        // console.log(res.data.data)
        this.allMyFollower = res.data.data;
      })
      .catch((e) => {
        console.log(e);
      });
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
.first-row {
  display: flex;
  justify-content: space-between;
}
.personal-item {
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
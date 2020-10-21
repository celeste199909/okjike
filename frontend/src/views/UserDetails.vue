<template>
  <div class="wrapper">
    <div class="head">
      <div class="first-row">
        <el-avatar
          :size="100"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <div class="sign-out" >
          <el-button round size="mini" @click="handleFollow(userInfo)">
              {{hasFollowed ? "取关" : "关注"}}
          </el-button>
        </div>
      </div>
      <div class="nickname personal-item">{{ userInfo.username }}</div>
      <div class="personal-item">
        <span style="margin-right:10px">关注 {{allMyFlollowing.length}} </span>
        <span>被 {{allMyFollower.length}} 关注</span>
      </div>
      <div class="personal-item">
        {{userInfo.slogan}}
      </div>
      <div class="personal-item tags">
        <div v-for="(item,index) in this.userInfo.tags" :key="index">
          {{item}}
        </div>
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
      <el-tab-pane label="关注" name="second">
        <div v-for="(item, index) in allMyFlollowing" :key="index">
          <Follow :username="item.username" :slogan="item.slogan"></Follow>
        </div>
      </el-tab-pane>
      <el-tab-pane label="被关注" name="third">
        <div v-for="(item, index) in allMyFollower" :key="index">
          <Follow :username="item.username" :slogan="item.slogan"></Follow>
        </div>
      </el-tab-pane>
      <!-- <el-tab-pane label="收藏动态" name="four">
        <div v-for="(item, index) in allMyFollower" :key="index">
          <Follow :username="item.username" :slogan="item.slogan"></Follow>
        </div>
      </el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script>
import Trend from "../components/Trend";
import Follow from "../components/Follow";
// import store from "@/store";
import axios from "axios";
export default {
  data() {
    return {
      activeName: "first",
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      userInfo: {
        userid: "",
        username: "",
        slogan: "",
        tags: []
      },
      allMyArticles: [],
      allMyFlollowing: [],
      allMyFollower: [],
    //   isLogin: false,
      hasFollowed: false
    };
  },
  methods: {
    // handleLoginOut() {
    //   localStorage.removeItem("userInfo");
    //   location.href = "/login"
    // },
    handleFollow(){
        // console.log(userInfo.userid);
        let userid = JSON.parse(localStorage.getItem("userInfo")).id
        let data = {
            userid: userid,
            following: this.userInfo.userid
        }
        // console.log(data);
        axios.post("api/followUser",data)
        .then( (res) => {
            console.log(res);
            this.hasFollowed = !this.hasFollowed
        })
        .catch( (err) => {
            console.log(err);
        })


    }
  },
  created() {
    //  查看是否关注该用户
    let userid = JSON.parse(localStorage.getItem("userInfo")).id;
    let following = this.$route.params.userDetails.userInfo.id;
    console.log(following);
    let data = {
        userid: userid,
        following: following
    }
    axios.post("api/hasFollowed", data)
    .then( res => {
        // console.log(res.data.data);
        this.hasFollowed = res.data.data;
    })
    .catch( err => {
        console.log(err);
    })


     if (this.$route.params.userDetails) {
        //  console.log(this.$route.params.userDetails);
      this.userInfo.userid = this.$route.params.userDetails.userInfo.id;
      this.userInfo.username = this.$route.params.userDetails.userInfo.username;
      this.userInfo.slogan = this.$route.params.userDetails.userInfo.slogan;
      this.userInfo.tags = this.$route.params.userDetails.userInfo.tags;
      this.allMyArticles = this.$route.params.userDetails.aUserArticles;
    }


    // 获取所有自己关注的人

    axios
      .get(`api/allMyFollowing?userid=${this.userInfo.userid}`)
      .then((res) => {
        // console.log(res.data.data)
        this.allMyFlollowing = res.data.data;
      })
      .catch((e) => {
        console.log(e);
      });

    // // 获取所有关注我的人 /allMyFollower
       axios
      .get(`api/allMyFollower?userid=${this.userInfo.userid}`)
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
.wrapper{
  margin: 0 0 300px 0;
  padding-top: 60px;
  
}
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
  margin: 8px 0;
}
.nickname {
  font-size: 24px;
}
.el-tabs {
  padding: 0 12%;
}
/* .sign-out a {
  font-size: 18px;
  color: #fff;
  text-decoration: none;
} */
.el-button--default{
  font-size: 18px;
  color: #fff;
  text-decoration: none;
}

.sign-out a {
  font-size: 18px;
  color: #fff;
  text-decoration: none;
}

.sign-out button {
  background: transparent;
}
.tags{
    display: flex;
}
.tags div{
    border-radius: 999px;
    height: 20px;
    padding: 4px 10px;
    color: rgb(255, 255, 255);
    font-size: 12px;
    line-height: 12px;
    -webkit-box-align: center;
    align-items: center;
    word-break: keep-all;
    white-space: nowrap;
    box-sizing: border-box;
    margin: 0px;
    margin-right: 8px;
    min-width: 0px;
    background-color: rgba(191, 191, 191, 0.6);
}
</style>
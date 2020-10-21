<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    
  >
    <el-menu-item index="1"> 
      <router-link class="a" to="/">
        <i class="el-icon-ice-cream-round"></i>
        <span>OKJIKE</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link class="a" to="/discovery">发现</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link class="a" to="/trends">动态</router-link>
    </el-menu-item>
    <!-- <el-menu-item index="4">
      <div>
        <router-link class="a" to="/message">
          <i class="el-icon-bell"></i>
          <span >消息</span>
        </router-link>
      </div>
    </el-menu-item> -->
    <el-menu-item index="6">
      <div>
        <el-avatar size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <router-link class="a" to="/personal">{{userInfo.username}}</router-link>
      </div>
    </el-menu-item>
  </el-menu>
</template>

<script>
import store from "@/store"
export default {
  data() {
    return {
      activeIndex: '2',
      userInfo: {
        username: "",
        nickname: ""
      }
    }
  },
  async created(){
    this.userInfo.username = store.state.user.userInfo.username;
    this.userInfo.nickname = store.state.user.userInfo.nickname;
  },
  computed: {

  }

};
</script>

<style scoped>
.el-menu{
  position: fixed;
  z-index: 100; 
  display: flex;
  justify-content:space-evenly;
  width: 100%;
  /* margin-bottom: 000px; */
}
.clearfix::after{
  content: "";
  display: block;
  clear: both;
}
.el-menu-item{
  padding: 0;
}

.a{
  font-size: 16px;
  display: inline-block;
  padding: 0 10px;
  color: darkslategrey;
  text-decoration: none;
}
.a:hover{
  transform: scale(1.1);
  transition: all 0.1s;
}
.el-input__inner{
  width: 700px;
}

</style>
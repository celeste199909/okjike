<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
  >
    <el-menu-item index="1">
      <!-- <img class="logo" alt="Vue logo" src="../assets/logo.png"> -->
      <div>
        <i class="el-icon-ice-cream-round"></i>
        <span>okjike</span>
      </div>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link class="a" to="/discovery">发现</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link class="a" to="/trends">动态</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
    </el-menu-item>
    <el-menu-item index="5">
      <div>
        <router-link class="a" to="/message"> <i class="el-icon-bell"></i>消息</router-link>
      </div>
    </el-menu-item>
    <el-menu-item index="6">
      <div>
        <el-avatar size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <router-link class="a" to="/personal">个人中心</router-link>
      </div>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '2',
    }
  },
};
</script>

<style scoped>
.el-menu-demo{
  display: flex;
  justify-content:space-evenly;
}
.logo {
  width: 40px;
  height: 40px;
}
.el-menu-item{
  padding: 0;
}
.a{
  display: inline-block;
  padding: 0 20px;
}
a{
  text-decoration: none;
}
.el-input__inner{
  width: 700px;
}

</style>
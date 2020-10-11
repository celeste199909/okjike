<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="vertical"
  >
    <el-menu-item index="1"> 
      <router-link class="a" to="/discovery">
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
    <el-menu-item index="4">
      <div>
        <router-link class="a" to="/message">
          <i class="el-icon-bell"></i>
          <span >消息</span>
        </router-link>
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
.el-menu-item{
  padding: 0;
}
.a{
  display: inline-block;
  padding: 0 30px 0 10px;
}
a{
  text-decoration: none;
}
a:active{
  color: blue;
}
.el-input__inner{
  width: 700px;
}

</style>
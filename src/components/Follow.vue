<template>
  <div class="block">
    <el-row>
      <!-- 左边 -->
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
      </el-col>
      <!-- 右边 -->
      <el-col :span="18">
        <div class="grid-content bg-purple-light">
          <div class="nickname">{{username}}</div>
          <div class="signature">{{slogan}}</div>
        </div>
      </el-col>
      <!--  -->
      <el-col :span="4">
        <el-button round size="medium"><i class="el-icon-plus">关注</i></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["username", "slogan"],
  name: "Follow",
  data(){
    return {

    }
  },
  created(){
  }
};
</script>

<style scoped>
.block {
  background-color: white;
  margin: 10px;
  padding: 20px;
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  font-size: 14px;
}
.el-row{
    display: flex;
    align-items: center;
}
</style>
<template>
  <div class="trend">
    <article>
      <el-row>
      <!-- 左边 -->
        <el-col :span="2">
          <div class="grid-content bg-purple">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
        </el-col>
      <!-- 右边 -->
        <el-col :span="22">
          <div class="grid-content bg-purple-light">
              <div class="nickname">{{article.username}}</div>
              <div class="signature">{{article.slogan}}</div>
          </div>
          <div class="grid-content bg-purple-light content">
              {{article.content}}
          </div>
          <div class="grid-content bg-purple-light footer">
              <div class="footer-item"><i class="el-icon-thumb"></i></div>
              <div class="footer-item"><i class="el-icon-chat-dot-round"></i></div>
              <div class="footer-item"><i class="el-icon-star-off"></i></div>
              <div class="footer-item"><i class="el-icon-share"></i></div>
          </div>
        </el-col>
      </el-row>

    </article>
  </div>
</template>

<script>
// import axios from "axios"
export default {
  name: "Trend",
  props: ["aArticle"],
  data(){
    return {
      article: {
        userid: "",
        username: "",
        slogan: "",
        content: "",
        group: ""
      }
    }
  },
  mounted(){
    this.article = this.aArticle
  }
};
</script>

<style scoped>
.trend {
  background-color: white;
  margin: 10px;
  padding: 20px;
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  font-size: 14px;
}
.signature{
    color: #ccc;
}
.content{
    padding: 4px 0;
}
.footer{
    display: flex;
}
.footer-item{
    margin-right: 14px;
}
</style>
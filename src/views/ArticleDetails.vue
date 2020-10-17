<template>
  <div class="article-details">
    <article class="trend">
      <el-row>
        <!-- 左边 -->
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
          </div>
        </el-col>
        <!-- 右边 -->
        <el-col :span="22">
          <div class="grid-content bg-purple-light">
            <div class="username">{{ aArticle.username }}</div>
            <div class="slogan">{{ aArticle.slogan }}</div>
          </div>
          <div class="grid-content bg-purple-light content">
            {{ aArticle.content }}
          </div>
          <div class="grid-content bg-purple-light footer">
            <div class="footer-item"><i class="el-icon-thumb"></i></div>
            <div class="footer-item">
              <i class="el-icon-chat-dot-round"></i>
            </div>
            <div class="footer-item"><i class="el-icon-star-off"></i></div>
            <div class="footer-item"><i class="el-icon-share"></i></div>
          </div>
        </el-col>
      </el-row>
    </article>

    <div class="publish-comment">
      <div class="publish-comment-item">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
      <div class="publish-comment-item">
        <input type="text" placeholder="友善发言" />
      </div>
      <div class="publish-comment-item">
        <el-button size="mini" round>发表</el-button>
      </div>
    </div>

    <div class="comment">
        <h3>评论</h3>
      <div v-for="(item, index) in commentArr" :key="index">
        <Comment :aArticle="item"></Comment>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import Comment from "../components/Comment"
export default {
  name: "ArticleDetails",
  components: {
      Comment
  },
  data() {
    return {
      aArticle: {},
      commentArr: []
    };
  },
  created() {
    // console.log(location.pathname)
    let pathname = location.pathname;
    Axios.get("api" + pathname)
      .then((res) => {
        // console.log(res.data.data[0])
        this.aArticle = res.data.data[0];
        this.commentArr = JSON.parse(res.data.data[0].comment)
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.article-details {
  padding-top: 60px;
  margin: 0 150px;
}

.trend {
  background-color: white;
  font-size: 14px;
  margin: 10px 10px 0 10px;
  padding: 50px 40px ;
  border-radius: 10px 10px 0 0;
  /* transform:translateY(100px); */
  animation: slidein 0.5s;
  /* transform:translateY(-100px); */
}
.grid-content{
    margin: 8px 0;
}
.username {
  font-weight: 800;
  font-size: 16px;
}
.slogan {
  color: #ccc;
  font-size: 12px;
}
.content {
  padding: 4px 0;
  /* font-weight: 400; */
  color: rgb(100, 100, 100);
}
.footer {
  display: flex;
}
.footer-item {
  margin-right: 14px;
  font-size: 18px;
}

/* 取消默认动画 */
.trend:hover {
  cursor: auto;
  box-shadow: none;
  /* transition: all .2s; */
  transform: scale(1);
}

.publish-comment {
  margin: 0 10px;
  padding: 15px 40px;
  background-color: #F8FAFB;

  display: flex;
  justify-content: center;
  align-items: center;

}
.publish-comment-item{
    margin-right: 20px;
}
.publish-comment-item:nth-child(1){
    flex: 1;
}
.publish-comment-item:nth-child(2){
    flex: 10;
}
.publish-comment-item:nth-child(3){
    flex: 1;
}

.publish-comment input{
    width: 100%;
    height: 24px;
    /* margin-right: 20px; */
    border-radius: 20px;
    border: 1px solid #ccc;
    text-indent: 1rem;
    outline: none;
}
.publish-comment input:focus{
    border-radius: 20px;
    border: 1px solid rgb(83, 193, 226);
}


.comment {
  margin: 0 10px;
  padding: 0 40px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
}
</style>
<template>
  <div class="trend" @click="ArticleDetails(aArticle.id)">
    <article>
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
            <div class="footer-item"><i class="el-icon-thumb"></i> <span>{{ JSON.parse(aArticle.thumbsup).length }}</span></div>
            <div class="footer-item">
              <i class="el-icon-chat-dot-round"></i> <span>{{JSON.parse(aArticle.comment).length}}</span>
            </div>
            <div class="footer-item"><i class="el-icon-star-off"></i> <span>{{JSON.parse(aArticle.collection).length}}</span></div>
            <!-- <div class="footer-item"><i class="el-icon-share"></i></div> -->
          </div>
        </el-col>
      </el-row>
    </article>
  </div>
</template>

<script>
// import axios from 'axios';
// import axios from "axios"
export default {
  name: "Trend",
  props: ["aArticle"],
  data() {
    return {
      article: {
        userid: "",
        username: "",
        slogan: "",
        content: "",
        group: "",
        thumbsup: [],
        comment: [],
        collection: []
      },
    };
  },
  methods: {
    ArticleDetails(id) {
      // console.log(id);
      this.$router.push(`/details/${id}`);
    },

  },
  created() {
    // this.articlet.humbsup = JSON.parse(aArticle.humbsup)
    // this.articlet.comment = JSON.parse(aArticle.comment)
    // this.articlet.collection = JSON.parse(aArticle.collection)
    // console.log(this.articlet.humbsup)
  },
};
</script>

<style scoped>
.trend {
  background-color: white;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  font-size: 14px;

  /* transform:translateY(100px); */
  animation: slidein 0.5s;
  /* transform:translateY(-100px); */
}
@keyframes slidein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.trend:hover {
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  /* background-color: #EFF3F6; */
  transition: all .2s;
  /* animation: bgSlide 1s; */
  transform: scale(1.02);
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
  font-size: 16px;
}
</style>
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
  </div>
</template>

<script>
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
      },
    };
  },
  methods: {
    ArticleDetails(id) {
      console.log(id);
      this.$router.push(`/details/${id}`);
    },
  },
  mounted() {
    // this.article = this.aArticle
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
/* @keyframes bgSlide {
  0% {
    background: linear-gradient(to right, #fff 0%, #eff3f6 100%);
  }
  10% {
    background: linear-gradient(to right, #fff 10%, #eff3f6 90%);

  }
  20% {
    background: linear-gradient(to right, #fff 20%, #eff3f6 80%);

  }
  30% {
    background: linear-gradient(to right, #fff 30%, #eff3f6 70%);

  }
  40% {
    background: linear-gradient(to right, #fff 40%, #eff3f6 60%);

  }
  50% {
    background: linear-gradient(to right, #fff 50%, #eff3f6 50%);

  }
  60% {
    background: linear-gradient(to right, #fff 60%, #eff3f6 40%);

  }
  70% {
    background: linear-gradient(to right, #fff 70%, #eff3f6 30%);

  }
  80% {
    background: linear-gradient(to right, #fff 80%, #eff3f6 20%);

  }
  90% {
    background: linear-gradient(to right, #fff 90%, #eff3f6 10%);

  }
  100% {
    background: linear-gradient(to right, #fff 100%, #eff3f6 0%);

  }
} */
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
</style>
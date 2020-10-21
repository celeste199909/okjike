<template>
    <div>
        <article class="comment">
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
        </el-col>
      </el-row>
    </article>
    </div>
</template>

<script>
    export default {
        props: ["aArticle"],
        name: "Comment",
    }
</script>

<style scoped>
.comment {
  background-color: white;
  margin: 10px 0;
  padding: 0px;
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
</style>
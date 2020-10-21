<template>
  <div class="block">
    <el-input
      type="textarea"
      :autosize="{ minRows: 3, maxRows: 5 }"
      placeholder="请输入内容"
      v-model="article.content"
    ></el-input>
    <el-autocomplete
      v-model="article.group"
      :fetch-suggestions="querySearchAsync"
      placeholder="选择圈子"
      @select="handleSelect"
      size="mini"
      prefix-icon="el-icon-search"
    ></el-autocomplete>
    <div class="operations">
      <div class="files">
        <!-- <el-link icon="el-icon-picture-outline-round">图片</el-link>
        <el-link icon="el-icon-video-camera">视频</el-link> -->
      </div>
      <el-button size="mini" @click="handlePublishArticle">发布</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null,
      article: {
        userid: "",
        username: "",
        slogan: "",
        content: "",
        group: ""
      }
    };
  },
  methods: {
    // customer
    handlePublishArticle(){
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));

      this.article.userid = userInfo.id;
      this.article.username = userInfo.username;
      this.article.slogan = userInfo.slogan;

      axios.post("api/publishArticle", 
        this.article
      ).then(res => {
        console.log(res);
        if(res.data.code === 200){
          alert(res.data.status)
        }
      }).catch(e => {
        console.log(e);
      })
    },
    // element
    loadAll() {
      return [
        { value: "今天有什么好笑的" },
        { value: "有什么书值得读" },
        { value: "一觉醒来世界发生了什么" },
        { value: "最近在看什么剧" },
        { value: "前端交流站" },
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
};
</script>

<style scoped>
@keyframes slidein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.block {
  background-color: white;
  margin: 10px 10px 0 10px;
  padding: 20px;
  border-radius: 5px;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  animation: slidein 1s ;

}
.el-autocomplete {
  margin: 10px 0;
}

.operations {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.files a {
  margin-right: 10px;
}
.el-button{
  border-radius: 20px;
  /* background-color: #8ACEFF; */
}
/* #8ACEFF */
</style>
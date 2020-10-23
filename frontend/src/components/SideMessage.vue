<template>
  <div class="wrapper">
    <div v-if="title === '推荐用户'">
      <div>{{ title }}</div>
      <div v-for="(item, index) in recommendatoryUsers" :key="index">
        <a
          class="recommendatory-user"
          @click="handleRecommendatoryUser(item.id)"
          >{{ item.username }}</a
        >
      </div>
    </div>

    <!-- <div v-if="title === '热门动态'">
      {{ title }}
      <div></div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["title", "recommendatoryUsers"],
  data() {
    return {};
  },
  methods: {
    handleRecommendatoryUser(userid) {
      let currentUserid = JSON.parse(localStorage.getItem("userInfo")).id;
      // 如果是当前用户 则直接跳转到 personal 页面即可
      if (Number(userid) === currentUserid) {
        this.$router.push("/personal");
        return;
      }
      console.log(userid);
      // this.$router.push({name: "UserDetails", params: {aUser}})
      axios
        .get(`/user/${userid}`)
        .then((res) => {
          // let data = res.data;
          // console.log(res.data.data.userInfo);
          // console.log(res.data.data.aUserArticles);
          // this.userInfo = data;
          // 命名的路由
          this.$router.push({
            name: "UserDetails",
            params: { userDetails: res.data.data },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 200px;
  background-color: white;
  margin: 10px 10px 10px 0;
  padding: 20px;
  border-radius: 5px;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  animation: slidein 1s;
}

@keyframes slidein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.recommendatory-user {
  color: #8acdfe;
}
.recommendatory-user:hover {
  cursor: pointer;
}
</style>
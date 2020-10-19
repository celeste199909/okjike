<template>
  <div class="article-details">
    <article class="trend">
      <el-row>
        <!-- 左边 -->
        <el-col :span="2">
          <div
            class="grid-content bg-purple avatar"
            @click="handleUserDetails(aArticle.userid)"
          >
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
            <div
              :class="[
                hasThumbsup
                  ? 'footer-item thumbsup active'
                  : 'footer-item thumbsup',
              ]"
              @click="handleThumbsup"
            >
              <i class="el-icon-thumb"></i>
              <span>{{
                hasThumbsup ? thumbsupArr.length + 1 : thumbsupArr.length
              }}</span>
            </div>
            <div class="footer-item">
              <i class="el-icon-chat-dot-round"></i>
              <span>{{ commentArr.length }}</span>
            </div>
            <div class="footer-item">
              <i class="el-icon-star-off"></i>
              <span>{{ collectionArr.length }}</span>
            </div>
            <!-- <div class="footer-item"><i class="el-icon-share"></i></div> -->
          </div>
        </el-col>
      </el-row>
    </article>

    <div class="publish-comment">
      <div class="publish-comment-item">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </div>
      <div class="publish-comment-item">
        <input
          type="text"
          placeholder="友善发言"
          v-model="commentContent"
          @keydown.enter="handlePublishComment"
        />
      </div>
      <div class="publish-comment-item">
        <el-button size="mini" round @click="handlePublishComment"
          >发表</el-button
        >
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
import axios from "axios";
import Comment from "../components/Comment";
export default {
  name: "ArticleDetails",
  components: {
    Comment,
  },
  data() {
    return {
      aArticle: {},
      userInfo: {},
      thumbsupArr: [],
      commentArr: [],
      collectionArr: [],
      commentContent: "",
      hasThumbsup: false,
    };
  },
  computed: {
    //   autoCommentArr() {
    //       return this.commentArr
    //   }
  },
  methods: {
    //   文章格式
    //    {
    //         "id": "16",
    //         "userid": "1",
    //         "username": "hgw",
    //         "slogan": "让世界更美好",
    //         "content": "hahaha"
    //     }
    handlePublishComment() {
      let id = location.pathname.split("/")[2];
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      //   console.log(userInfo);

      //   console.log(id);
      let aComment = {
        id: id,
        userid: userInfo.userid,
        username: userInfo.username,
        slogan: userInfo.slogan,
        content: this.commentContent,
      };
      //   console.log(aComment);
      axios
        .post("api/publishComment", aComment)
        .then(() => {
        //   console.log(res);
          this.commentContent = "";
          alert("评论成功！");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleThumbsup() {
      let articleId = location.pathname.split("/")[2];
      let userid = JSON.parse(localStorage.getItem("userInfo")).id;

      let aThumbsup = {
        id: articleId,
        userid: userid,
      };
      axios
        .post("api/thumbsup", aThumbsup)
        .then(() => {
          // console.log(res);
          this.hasThumbsup = !this.hasThumbsup;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleUserDetails(userid) {
        console.log(userid);
        let currentUserid = JSON.parse(localStorage.getItem("userInfo")).id;
        // 如果是当前用户 则直接跳转到 personal 页面即可
        if(Number(userid) === currentUserid){
            this.$router.push("/personal")
            return;
        }
        axios.get(`api/user/${userid}`)
        .then( res => {
            // let data = res.data;
            console.log(res.data.data.userInfo);
            // console.log(res.data.data.aUserArticles);
            // this.userInfo = data;
            // 命名的路由
            this.$router.push({ name: 'UserDetails', params: { userDetails: res.data.data }})
        })
        .catch( err => {
            console.log(err);
        })
    },
  },
  created() {
    // console.log(location.pathname)
    let pathname = location.pathname;
    axios
      .get("api" + pathname)
      .then((res) => {
        // console.log(res.data.data)
        let data = res.data.data;
        this.aArticle = {
            userid: data.userid,
            username: data.username,
            slogan: data.slogan,
            content: data.content
        };
        // // console.log(JSON.parse(this.aArticle.comment).length)
        this.thumbsupArr = data.thumbsup;
        this.commentArr = data.comment;
        this.collectionArr = data.collection;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.active {
  color: #8acdfe;
}

.article-details {
  padding-top: 60px;
  margin: 0 150px 300px;
  animation-delay: slidein 0.5s;
}

.trend {
  background-color: white;
  font-size: 14px;
  margin: 10px 10px 0 10px;
  padding: 50px 40px;
  border-radius: 10px 10px 0 0;
  /* transform:translateY(100px); */
  animation: slidein 0.5s;
  /* transform:translateY(-100px); */
}
.grid-content {
  margin: 8px 0;
}
.avatar{
    cursor: pointer;
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
  cursor: pointer;
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
  background-color: #f8fafb;

  display: flex;
  justify-content: center;
  align-items: center;
}
.publish-comment-item {
  margin-right: 20px;
}
.publish-comment-item:nth-child(1) {
  flex: 1;
}
.publish-comment-item:nth-child(2) {
  flex: 10;
}
.publish-comment-item:nth-child(3) {
  flex: 1;
}

.publish-comment input {
  width: 100%;
  height: 24px;
  /* margin-right: 20px; */
  border-radius: 20px;
  border: 1px solid #ccc;
  text-indent: 1rem;
  outline: none;
}
.publish-comment input:focus {
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
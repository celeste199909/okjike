<template>
  <div id="block">
    <el-tabs v-model="activeName">
      <el-tab-pane label="登录" name="login">
        <el-form label-width="100px">
          <el-input
            type="text"
            placeholder="请输入账号"
            v-model="username"
          ></el-input>
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="password"
          ></el-input>
          <el-button type="primary" @click="submitForm('login')"
            >登录</el-button
          >
        </el-form>
      </el-tab-pane>
      <!--  -->
      <el-tab-pane label="注册" name="register">
        <el-form label-width="100px">
          <el-input
            type="text"
            placeholder="请输入账号"
            v-model="username"
          ></el-input>
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="password"
          ></el-input>
          <el-input
            type="password"
            placeholder="请确认密码"
            v-model="rePassword"
          ></el-input>
          <el-button type="primary" @click="submitForm('register')"
            >注册</el-button
          >
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import store from "@/store"
export default {
  data() {
    return {
      activeName: "login",
      username: "",
      password: "",
      rePassword: "",
      user: {
        username: "",
        nickname: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      if (formName === "register") {
        this.axios
          .post("/api/register", {
            username: this.username,
            password: this.password,
            slogan: "让世界更美好"
          })
          .then(() => {
            console.log("reigster success");
          })
          .catch((e) => {
            console.log(e);
          });
      }

      if(formName === "login"){
        this.axios
          .post("/api/login", {
            username: this.username,
            password: this.password,
          })
          .then((data) => {
            if(data.data === "登录失败"){
              console.log("login fail");
              return;
            }

            console.log(data)
            console.log(store)
            // store.commit("user/updateUserInfo", data.data)

            localStorage.setItem("userInfo", JSON.stringify(data.data))
            location.href = "/";
            // this.$router.push("/discovery")
            console.log("login success")
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
};
</script>

<style scoped>
#block {
  background-color: white;
  margin: 8% 32%;
  padding: 50px;
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  color: skyblue;
}
.el-input {
  margin: 10px 0;
}
.el-button {
  margin: 10px 0;
  width: 100%;
}
</style>
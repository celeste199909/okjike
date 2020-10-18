<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import store from "@/store"
import Nav from "./components/Nav"
export default {
  name: 'App',
  components: {
    Nav
  },
  created(){
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if(userInfo){
        store.commit("user/updateUserInfo", userInfo);
      }
  }
}
</script>

<style>
body{
  margin: 0;
  background-color: #EFF3F6;
  font-size: 14px;
}
@keyframes slidein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

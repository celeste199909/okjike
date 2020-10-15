<template>
    <div id="footer">
        <div>用户协议 | 隐私政策</div>
        <div>桂ICP备0000000号</div>
        <div>桂公网安备沪公网安备 00000000000号</div>
        <div>增值电信业务经营许可证：桂00000-000000</div>
    </div>
</template>

<script>
    export default {
        
    }
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
#footer{
    color: rgb(153, 153, 153);;
    height: 200px;
    /* background-color: white; */
    margin: 10px 10px 10px 0;
    padding: 20px;
    border-radius: 2px;
    /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
    animation: slidein 2s ;

}
</style>
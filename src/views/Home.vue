<template>
    <div class="wrapper">
        <div class="item1 item">OKJIKE</div>
        <div class="item2 item">OKJIKE</div>
        <div class="item3 item ">OKJIKE</div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style lang="css" scoped>
@keyframes slidin {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.wrapper{
    padding: 60px 0 0 0 ;
}
.item{
    width: 100vw;
    height: calc(100vh - 60px);
    font-size: 100px;
    line-height: calc(100vh - 60px);
    text-align: center;
    color: #fff;
    animation: slidin 1s;
}
.item1{
    background: url("../assets/defaultbg.jpg");
}
.item2{
    background: url("../assets/bg2.jpg");
}
.item3{
    background: url("../assets/bg3.jpg");
}
</style>
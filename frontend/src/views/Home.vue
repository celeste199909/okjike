<template>
    <div class="wrapper">
        <div class="item1 item">
            <div class="site-name"><i class="el-icon-ice-cream-round"></i> OKJIKE</div>
            <div >a social website</div>
            <div>
                <el-button round @click="handleStart">START</el-button>
            </div>
            <div class="jike">
                <span>imitate </span><a class="jike" href="https://web.okjike.com/">即刻</a>
            </div>
        </div>
        <!-- <div class="item2 item">OKJIKE</div>
        <div class="item3 item ">OKJIKE</div> -->
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods:{
            handleStart(){
                // this.$router.push("/discovery")
                location.href = "/discovery"
            }
        }
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
    /* line-height: calc(100vh - 60px); */
    text-align: center;
    color: #fff;
    animation: slidin 1s;

    display: flex;
}
.item1{
    background: url("../assets/defaultbg.jpg");
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 50px;
}
.item1 div:nth-child(1){
    font-size: 60px;
}
.item1 div:nth-child(2){
    font-size: 20px;
}
.item1 div:nth-child(3){
    margin: 50px 0;
    font-size: 30px;
}
.item1 div:nth-child(3) button{
    /* opacity: 0; */
    background: rgba(0, 0, 0, 0);
    color: #fff;
    font-size: 20px;
    border-radius: 30px;
}
.item2{
    background: url("../assets/bg2.jpg");
}
.item3{
    background: url("../assets/bg3.jpg");
}
.jike{
    color: #fff;
    font-size: 16px;
}
</style>
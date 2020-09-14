<template>
  <div class="trend">
    <article>
      <el-row>
      <!-- 左边 -->
        <el-col :span="2">
          <div class="grid-content bg-purple">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
        </el-col>
      <!-- 右边 -->
        <el-col :span="22">
          <div class="grid-content bg-purple-light">
              <div class="nickname">昵称</div>
              <div class="signature">个性签名</div>
          </div>
          <div class="grid-content bg-purple-light content">
              开头是一个假设，“假如生活欺骗了你”，这假设会深深伤害人们，足以使脆弱的人们丧失生活的信心，足以使那些不够坚强的人面临“灾难”。那的确是个很糟糕的事情，但诗人并不因为这而消沉、逃避和心情忧郁，不会因为被生活欺骗而去愤慨，做出出格的事情。诗中阐明了这样一种乐观坚强、积极向上的人生态度：当生活欺骗了你时，不要悲伤，不要心急。生活中不可能没有痛苦与悲伤，欢乐不会永远被忧伤所掩盖。
          </div>
          <div class="grid-content bg-purple-light footer">
              <div class="footer-item"><i class="el-icon-s-opportunity"></i></div>
              <div class="footer-item"><i class="el-icon-chat-dot-round"></i></div>
              <div class="footer-item"><i class="el-icon-star-off"></i></div>
              <div class="footer-item"><i class="el-icon-share"></i></div>
          </div>
        </el-col>
      </el-row>

    </article>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.trend {
  background-color: white;
  margin: 10px;
  padding: 20px;
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    font-size: 14px;

}
.grid-content{
}
.nickname{
    
}
.signature{
    color: #ccc;
}
.content{
    padding: 4px 0;
}
.footer{
    display: flex;
}
.footer-item{
    margin-right: 14px;
}
</style>
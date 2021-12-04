<template>
  <div class="footer">
    <el-row>
      违法和不良信息举报电话：4006690888 消费者维权/客户服务/青少年守护专线
    </el-row>
    <el-row>
      @2021 桃花岛 北京齐晋网络科技有限公司
      <a href="https://beian.miit.gov.cn/">京ICP备19004192号-1</a>
      北京市房山区阎富路66号院2号楼1层
    </el-row>
    <el-row> 营业执照：91110111MA04GBYN2H</el-row>
  </div>
</template>

<script>
export default {
  name: "myFooter",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.footer {
  background-color: #363636;
  color: white;
  padding: 20px 0px;
}
</style>

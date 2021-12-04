<template>
  <div class="about">
    <div class="title">
      <el-row>
        <el-col :span="6">
          <div class="t1">联系我们</div>
          <div class="t2">Contact Us</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="b1"></div>
        </el-col>
        <el-col :span="18">
          <div class="b2"></div>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <el-carousel height="400px">
        <el-carousel-item v-for="image in imageList" :key="image">
          <el-image
            style="height: 400px"
            :src="image"
            fit="contain"
            mode="widthFix"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
      <div class="t3">联系方式</div>
      <ul>
        <li>北京 · 北京</li>
        <li>地址：北京市房山区阎富路66号院2号楼1层</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  props: {
    msg: String,
  },
  data: function () {
    return {
      imageList: [
        "http://anli.web.weqcloud.cn/img/banner09.jpg",
        "http://anli.web.weqcloud.cn/img/banner10.jpg",
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}

.title {
  width: 100%;
  font-weight: bold;
}

.t1 {
  font-size: 30px;
}

.t2 {
  font-size: 24px;
}

.t3 {
  font-size: 26px;
  font-weight: bold;
}

.content {
  text-align: left;
  margin-top: 20px;
  padding-left: 60px;
}

img {
  height: 400px;
}

.b1 {
  border-bottom: 6px solid #e1a601;
}
.b2 {
  border-bottom: 6px solid #50a808;
}
</style>

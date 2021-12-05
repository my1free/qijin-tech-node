<template>
  <div class="about">
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
    <div class="title">
      <el-row>
        <el-col :span="6">
          <div class="t1">付费查看内容</div>
          <div class="t2">Valuable Contents</div>
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
      <el-row>
        <el-col :span="8">
          <div class="card card1" @click="onClick">
            <div class="title">充值会员</div>
            <div class="desc">充值成为会员 (费用 99元/月)</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card card3" @click="onClick">
            <div class="title">活动报名</div>
            <div class="desc">报名参加线下活动 (费用 88元/次)</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card card2" @click="onClick">
            <div class="title">超级曝光</div>
            <div class="desc">大力增加自己的曝光度 (费用 66元/次)</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "case",
  props: {
    msg: String,
  },
  data: function () {
    return {
      imageList: ["http://anli.web.weqcloud.cn/img/banner10.jpg"],
    };
  },
  methods: {
    onClick: function () {
      this.$message.error("请先登录");
    },
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
.card {
  width: 300px;
  height: 240px;

  background-size: cover;
  cursor: pointer;
  padding: 10px 20px;
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

.card .title {
  font-size: 30px;
}

.card .desc {
  margin-top: 170px;
}

.card1 {
  background-image: url("http://img.qijin.tech/Feishu20211205-192129.png");
  color: white;
}
.card2 {
  background-image: url("http://img.qijin.tech/Feishu20211205-193653.png");
  color: white;
}
.card3 {
  background-image: url("http://img.qijin.tech/Feishu20211205-193629.png");
  color: white;
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

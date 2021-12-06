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
            <div class="title">和畅餐饮品牌设计{收费5元}</div>
            <div class="desc">标志设计、品牌策划{收费5元}</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card card3" @click="onClick">
            <div class="title">莫瑞森超市logo设计{收费5元}</div>
            <div class="desc">标志设计、品牌策划{收费5元}</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card card2" @click="onClick">
            <div class="title">朗奥科技品牌LOGO设计{收费5元}</div>
            <div class="desc">品牌VIS/品牌画册/产品设计{收费5元}</div>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 30px">
        <el-col :span="8">
          <div class="card card4" @click="onClick">
            <div class="title">施必牢品牌标志设计{收费5元}</div>
            <div class="desc">施必牢品牌标志设计{收费5元}</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card card5" @click="onClick">
            <div class="title">ATIMA品牌策划{收费5元}</div>
            <div class="desc">报名参加线下活动 (费用 88元/次)</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card card6" @click="onClick">
            <div class="title">汉萨汽车品牌设计{收费5元}</div>
            <div class="desc">汉萨汽车品牌设计{收费5元}</div>
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

.card:hover {
  background-color: rgb(181, 218, 17) !important;
  background-image: none;
  z-index: 1000;
  opacity: 0.8;
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
  font-size: 18px;
}

.card .desc {
  margin-top: 170px;
}

.card1 {
  background-image: url("http://anli.web.weqcloud.cn/img/201711617375394022.jpg");
  color: black;
}
.card2 {
  background-image: url("http://anli.web.weqcloud.cn/img/201711614230249830.jpg");
  color: black;
}
.card3 {
  background-image: url("http://anli.web.weqcloud.cn/img/201782913525414227.jpg");
  color: white;
}
.card4 {
  background-image: url("http://anli.web.weqcloud.cn/img/201782913525414227.jpg");
  color: white;
}
.card5 {
  background-image: url("http://anli.web.weqcloud.cn/img/2016122910062331490.jpg");
  color: black;
}
.card6 {
  background-image: url("http://anli.web.weqcloud.cn/img/2016122916010552197.jpg");
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

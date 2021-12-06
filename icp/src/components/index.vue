<template>
  <div class="index">
    <div class="cover">
      <!-- <div>
        <img src="@/assets/cover.png" />
      </div>
      <div class="description">
        <div class="title">聚缘 | 桃花岛</div>
        <div class="sub">
          桃花岛：遇见桃花的地方。如果你喜欢的人也喜欢你，恭喜，一见钟情！只有相互喜欢的人才可以开始聊天，眼缘不错，趣味相投，向陌生人尴尬的搭讪说再见吧。
        </div>
      </div> -->
      <el-carousel height="600px" width="100%">
        <el-carousel-item v-for="banner in banners" :key="banner">
          <el-image
            style="height: 600px"
            :src="banner"
            fit="contain"
            mode="widthFix"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="component">
      <el-row>
        <el-col :span="6" class="card light">
          <div class="title">品牌策略</div>
          <div class="title1">Brand Strategy</div>
          <div class="desc">好品牌 策略强</div>
          <div class="desc1">企业调研、产品定位、设计命名、理念......</div>
        </el-col>
        <el-col :span="6" class="card deep">
          <div class="title">品牌形象设计</div>
          <div class="title1">Brand Design</div>
          <div class="desc">好品牌 设计佳</div>
          <div class="desc1">
            上海标志设计、VIS设计、官网LOGO设计、画册设计……
          </div>
        </el-col>
        <el-col :span="6" class="card light">
          <div class="title">产品视觉</div>
          <div class="title1">Product Vision</div>
          <div class="desc">好品牌 产品优</div>
          <div class="desc1">外观设计、包装设计、陈列、画册设计……</div>
        </el-col>
        <el-col :span="6" class="card deep">
          <div class="title">活动组织</div>
          <div class="title1">Visual Marketing</div>
          <div class="desc">好品牌 会营销</div>
          <div class="desc1">展会设计、新媒体运营、H5、宣传片……</div>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row style="height: 500px; overflow: hidden; margin-top: 20px">
        <el-col
          :span="10"
          style="
            background-color: red;
            color: white;
            padding: 60px;
            height: 500px;
          "
        >
          <div style="font-size: 26px; font-weight: bold">品牌策略</div>
          <div style="font-size: 20px; font-weight: bold">Brand Strategy</div>
          <div style="font-weight: bold">
            <p>
              品牌策略是一系列能够产生品牌积累的企业管理与市场营销方法，主要有：品牌化决策、品牌使用者决策、品牌名称决策、品牌战略决策、品牌再定位决策、品牌延伸策略、品牌更新。
              任何一个具有远大志向的品牌，都会有高瞻远瞩战略指导先行。品牌的战略规划为品牌的发展提供了方向与思路，让决策者能够在最大程度上减少决策的所带来的成本损耗，降低决策风险，让品牌在市场道路上不迷失。
            </p>
            <p>
              品牌策略包括品牌咨询、品牌调研、品牌定位、品牌命名、品牌架构、品牌文化、品牌故事、品牌标语、产品规划……
            </p>
          </div>
        </el-col>
        <el-col :span="10">
          <el-row style="height: 250px; overflow: hidden">
            <el-col :span="12">
              <img
                style="width: 100%"
                src="http://anli.web.weqcloud.cn/img/201722416495510612.jpg"
              />
            </el-col>
            <el-col :span="12">
              <img
                style="width: 100%"
                src="http://anli.web.weqcloud.cn/img/201711315004781362.jpg"
              />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <img
                style="width: 100%"
                src="http://anli.web.weqcloud.cn/img/201791317053247851.jpg"
              />
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-row style="height: 250px; overflow: hidden">
            <el-col :span="24">
              <img
                style="width: 100%; height: 250px"
                src="http://anli.web.weqcloud.cn/img/201511222125161938.jpg"
              />
            </el-col>
          </el-row>
          <el-row>
            <el-col
              :span="24"
              style="
                width: 100%;
                height: 250px;
                background-color: blue;
                color: white;
                text-align: right;
                padding-right: 10px;
                padding-top: 200px;
                cursor: pointer;
              "
              @click="onMore"
            >
              <span v-on:click="onMore()">查看更多 >>></span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row style="height: 500px; overflow: hidden; margin-top: 20px">
        <el-col
          :span="10"
          style="
            background-color: #076bb0;
            color: white;
            padding: 60px;
            height: 500px;
          "
        >
          <div style="font-size: 26px; font-weight: bold">品牌设计</div>
          <div style="font-size: 20px; font-weight: bold">
            Design Strategy and Research
          </div>
          <div style="font-weight: bold">
            <p>
              品牌设计是在企业自身正确定位的基础之上，基于正确品牌定义下的视觉沟通，不仅协助企业正确的把握品牌方向，而且能够使人们正确的、快速的对企业形象进行有效深刻的记忆。
            </p>
            <p>品牌元素=品名+品记+品类+品质+品位+品德+品行。</p>
            <p>
              品牌设计就是对一个企业或产品进行命名、标志设计、平面设计、包装设计、展示设计、广告设计及推广、文化理念的提炼等，从而使其区别于其他企业或产品的个性塑造过程。
            </p>
          </div>
        </el-col>
        <el-col :span="10">
          <el-row style="height: 500px; overflow: hidden">
            <el-col :span="24">
              <img
                style="width: 100%"
                src="http://anli.web.weqcloud.cn/img/201722416185953537.jpg"
              />
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-row style="height: 250px; overflow: hidden">
            <el-col :span="24">
              <img
                style="width: 100%; height: 250px"
                src="http://anli.web.weqcloud.cn/img/201511222125161938.jpg"
              />
            </el-col>
          </el-row>
          <el-row>
            <el-col
              :span="24"
              style="
                width: 100%;
                height: 250px;
                background-color: green;
                color: white;
                text-align: right;
                padding-right: 10px;
                padding-top: 200px;
                cursor: pointer;
              "
              @click="onMore"
            >
              <span v-on:click="onMore()">查看更多 >>></span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row style="height: 500px; overflow: hidden; margin-top: 20px">
        <el-col
          :span="10"
          style="
            background-color: #75b32a;
            color: white;
            padding: 60px;
            height: 500px;
          "
        >
          <div style="font-size: 26px; font-weight: bold">产品视觉</div>
          <div style="font-size: 20px; font-weight: bold">
            Design Strategy and Research
          </div>
          <div style="font-weight: bold">
            <p>
              产品视觉设计是指在产品定位、研发、生产、销售、使用的过程中，对整个流通过程产生直接影响的视觉层面的设计。也称为“产品形象设计”。产品视觉设计可概括为3个部分：与产品生产相关的有产品造型设计、产品配色、操作软件界面UI设计、产品PI系统，与产品流通和使用相关的有产品外包装设计、产品说明书设计，与销售环节相关的有产品画册、产品网站、H5推广、演示宣传片、发布会形象等。
            </p>
            <p>
              产品外观设计、结构设计、包装设计、UI设计、产品画册、产品网站、H5推广、宣传片……
            </p>
          </div>
        </el-col>
        <el-col :span="10">
          <el-row style="height: 250px; overflow: hidden">
            <el-col :span="24">
              <img
                style="width: 100%"
                src="http://anli.web.weqcloud.cn/img/2016122815441552003.jpg"
              />
            </el-col>
          </el-row>
          <el-row style="height: 250px; overflow: hidden">
            <el-col :span="24">
              <img
                style="width: 100%"
                src="http://anli.web.weqcloud.cn/img/2016122815464643564.jpg"
              />
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-row style="height: 250px; overflow: hidden">
            <el-col :span="24">
              <img
                style="width: 100%; height: 250px"
                src="http://anli.web.weqcloud.cn/img/2016122815592618341.png"
              />
            </el-col>
          </el-row>
          <el-row>
            <el-col
              :span="24"
              style="
                width: 100%;
                height: 250px;
                background-color: #f1ab3f;
                color: white;
                text-align: right;
                padding-right: 10px;
                padding-top: 200px;
                cursor: pointer;
              "
              @click="onMore"
            >
              <span v-on:click="onMore()">查看更多 >>></span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row style="height: 500px; overflow: hidden; margin-top: 20px">
        <el-col
          :span="10"
          style="
            background-color: #f1ab3f;
            color: white;
            padding: 60px;
            height: 500px;
          "
        >
          <div style="font-size: 26px; font-weight: bold">视觉营销</div>
          <div style="font-size: 20px; font-weight: bold">Visual Marketing</div>
          <div style="font-weight: bold">
            <p>
              一个企业，一种商品，一种服务或观念，可以宣传的方面有很多，但是广告传播实际所能传播的内容总是十分有限。因此，需要合理采用符合企业属性的传播渠道，开发设计出适合相应传播渠道的宣传品。品牌传播由浅入深，分为三个方面：认知（感知和理解）层次；情感体验（喜爱和偏好）层次；行为（尝试和购买）层次。
            </p>
            <p>
              企业官网、展览展示设计、网店形象设计、活动H5设计、店铺形象设计、企业形象画册设计、路牌广告、企业宣传片、楼宇广告画面……
            </p>
          </div>
        </el-col>
        <el-col :span="10">
          <el-row style="height: 250px; overflow: hidden">
            <el-col :span="12">
              <img
                style="width: 100%"
                src="http://anli.web.weqcloud.cn/img/2016122816244395202.png"
              />
            </el-col>
            <el-col :span="12">
              <img
                style="width: 100%"
                src="http://anli.web.weqcloud.cn/img/2016122816254173630.png"
              />
            </el-col>
          </el-row>
          <el-row style="height: 250px; overflow: hidden">
            <el-col :span="12">
              <img
                style="width: 100%"
                src="http://anli.web.weqcloud.cn/img/2016122816275680914.png"
              />
            </el-col>
            <el-col :span="12">
              <img
                style="width: 100%"
                src="http://anli.web.weqcloud.cn/img/2016122816292172269.png"
              />
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-row style="height: 250px; overflow: hidden">
            <el-col :span="24">
              <img
                style="width: 100%; height: 250px"
                src="http://anli.web.weqcloud.cn/img/2016122816262764840.png"
              />
            </el-col>
          </el-row>
          <el-row>
            <el-col
              :span="24"
              style="
                width: 100%;
                height: 250px;
                background-color: #e71f19;
                color: white;
                text-align: right;
                padding-right: 10px;
                padding-top: 200px;
                cursor: pointer;
              "
            >
              <span v-on:click="onMore()">查看更多 >>></span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    msg: String,
  },
  data() {
    return {
      banners: [
        "http://anli.web.weqcloud.cn/img/banner01.jpg",
        "http://anli.web.weqcloud.cn/img/banner02.jpg",
        "http://anli.web.weqcloud.cn/img/banner03.jpg",
        "http://anli.web.weqcloud.cn/img/banner04.jpg",
      ],
    };
  },
  methods: {
    onMore() {
      this.$message.success("点击'收费内容'查看更多");
    },
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

.index {
  display: flex;
  flex-direction: column;
}

.cover {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.cover .el-carousel {
  width: 100%;
}
.description {
  margin-left: -400px;
  width: 500px;
}

.description .title {
  font-size: 30px;
}

.description .sub {
  margin-top: 40px;
  padding: 20px;
}

.component {
}

.card {
  padding: 20px;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.title {
  font-size: 28px;
  font-weight: bold;
}

.title1 {
  font-size: 26px;
  font-weight: bold;
}

.light {
  background-color: gray;
}

.desc {
  margin-top: 30px;
  font-size: 19px;
  font-weight: bold;
  color: yellow;
  width: 70%;
}

.desc1 {
  width: 70%;
  font-size: 14px;
}

.deep {
  background-color: #333333;
}
</style>

<template>
  <div class="index">
    <div class="cover">
      <div>
        <img src="@/assets/cover.png" />
      </div>
      <div class="description">
        <div class="title">聚缘 | 桃花岛</div>
        <div class="sub">
          桃花岛：遇见桃花的地方。如果你喜欢的人也喜欢你，恭喜，一见钟情！只有相互喜欢的人才可以开始聊天，眼缘不错，趣味相投，向陌生人尴尬的搭讪说再见吧。
        </div>
      </div>
    </div>
    <div class="component">
      <el-row>
        <el-col :span="6" class="card light">
          <div class="title">卡牌推荐</div>
          <div class="desc">推荐卡牌，查看个人信息，了解你想认识的人</div>
        </el-col>
        <el-col :span="6" class="card deep">
          <div class="title">群组列表</div>
          <div class="desc">挑选值得信赖的群组加入，保护个人隐私</div>
        </el-col>
        <el-col :span="6" class="card light">
          <div class="title">广场交友</div>
          <div class="desc">关注群友动态，了解他/她喜欢的和爱好的</div>
        </el-col>
        <el-col :span="6" class="card deep">
          <div class="title">活动组织</div>
          <div class="desc">组织线上/线下活动，促进用户活跃</div>
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
}

.light {
  background-color: gray;
}

.desc {
  width: 70%;
}

.deep {
  background-color: #333333;
}
</style>

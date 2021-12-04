<template>
  <div class="header">
    <el-row>
      <el-col :span="6" class="click">
        <div class="company" v-on:click="onClick('index')">
          北京齐晋网络科技有限公司
        </div>
      </el-col>
      <el-col :span="3" class="click">
        <div class="tab" v-on:click="onClick('index')">
          <div>INDEX</div>
          <div>网站首页</div>
        </div>
      </el-col>
      <el-col :span="3" class="click">
        <div class="tab" v-on:click="onClick('about')">
          <div>ABOUT</div>
          <div>关于我们</div>
        </div>
      </el-col>
      <el-col :span="3" class="click">
        <div class="tab" v-on:click="onClick('case')">
          <div>CASE</div>
          <div>收费内容</div>
        </div>
      </el-col>
      <el-col :span="3" class="click">
        <div class="tab" v-on:click="onClick('member')">
          <div>MEMBERS</div>
          <div>会员中心</div>
        </div>
      </el-col>
      <el-col :span="3" class="click">
        <div class="tab" v-on:click="onClick('contact')">
          <div>CONTACT</div>
          <div>联系我们</div>
        </div>
      </el-col>
      <el-col :span="3" class="click">
        <div class="tab" v-on:click="onClick('login')">
          <div>LOGIN</div>
          <div>会员登录</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "myHeader",
  props: {
    tab: {
      require: true,
      type: String,
      default() {
        return "";
      },
    },
  },
  model: {
    prop: "tab",
    event: "changeTab",
  },
  methods: {
    onClick: function (tabValue) {
      console.log(tabValue);
      this.$emit("update:tab", tabValue);
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

.header {
  background-color: #363636;
  color: white;
  padding: 20px 0px;
}
.header .company {
  font-size: 26px;
  font-weight: bold;
}

.header .el-row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header .tab {
  font-size: 18px;
  display: flex;
  flex-direction: column;
}
.header .click {
  cursor: pointer;
}
</style>

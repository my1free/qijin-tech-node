<template>
  <div id="app">
    <el-container>
      <!-- <el-header :tab.sync="tab" @changeTab="changeTab"><myHeader /></el-header> -->
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
      <el-main v-if="tab == 'index'">
        <index />
      </el-main>
      <el-main v-if="tab == 'about'">
        <about />
      </el-main>
      <el-main v-if="tab == 'case'">
        <case />
      </el-main>
      <el-main v-if="tab == 'contact'">
        <contact />
      </el-main>
      <el-main v-if="tab == 'login'">
        <login />
      </el-main>
      <el-footer><myFooter /></el-footer>
    </el-container>
  </div>
</template>

<script>
import index from "./components/index.vue";
// import myHeader from "./components/header.vue";
import myFooter from "./components/footer.vue";
import About from "./components/about.vue";
import Contact from "./components/contact.vue";
import Login from "./components/login.vue";
import Case from "./components/case.vue";

export default {
  name: "App",
  components: {
    index,
    // myHeader,
    myFooter,
    About,
    Contact,
    Login,
    Case,
  },
  data: function () {
    return {
      tab: "index",
    };
  },
  methods: {
    onClick: function (tabValue) {
      if (tabValue == "member") {
        this.$message.error("请先登录");
        this.tab = "login";
        return;
      }
      this.tab = tabValue;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  background-color: #363636;
  color: white;
  padding: 20px 0px;
  font-weight: bold;
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

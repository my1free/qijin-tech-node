<template>
  <div class="login">
    <div class="lll" v-if="type == 'login'">
      <div class="title">会员登录</div>
      <div class="username mg-t">
        <el-input
          v-model="username"
          @change="onUsername"
          placeholder="请输入内容"
        ></el-input>
      </div>
      <div class="username mg-t">
        <el-input
          placeholder="请输入密码"
          v-model="password"
          show-password
        ></el-input>
      </div>
      <el-button type="danger" class="mg-t" v-on:click="onLogin">
        会员登录
      </el-button>
      <div class="mg-t register" v-on:click="toRegister()">
        没有账号，点击注册>>>
      </div>
    </div>
    <div class="lll" v-if="type == 'register'">
      <div class="title">会员注册</div>
      <div class="username mg-t line">
        <div class="text">用户名</div>
        <el-input
          v-model="username"
          @change="onUsername"
          placeholder="请输入内容"
        ></el-input>
      </div>
      <div class="desc">用户名6~20位小写字母与数字组成，开头不能为数字</div>

      <div class="password mg-t line">
        <div class="text">密码</div>
        <el-input
          placeholder="请输入密码"
          v-model="password"
          @change="onPassword"
          show-password
        ></el-input>
      </div>
      <div class="desc">密码长度必须在6~20位之间</div>
      <div class="password mg-t line">
        <div class="text">确认密码</div>
        <el-input
          placeholder="再次输入密码"
          v-model="confirmPassword"
          @change="onConfirmPassword"
          show-password
        ></el-input>
      </div>
      <div class="desc">密码输入两次需一致</div>
      <div class="username mg-t line">
        <div class="text">真实姓名</div>
        <el-input
          v-model="name"
          @change="onName"
          placeholder="请输入真实姓名"
        ></el-input>
      </div>
      <div class="desc">如：李四（国家防沉迷法规要求，请填写真实姓名）</div>

      <div class="username mg-t line">
        <div class="text">身份证号</div>
        <el-input
          v-model="id"
          @change="onId"
          placeholder="请输入身份证号"
        ></el-input>
      </div>
      <div class="desc">如：220106198101010155（此处应填写身份证号码）</div>
      <el-button type="danger" class="mg-t" v-on:click="onRegister">
        会员注册
      </el-button>
      <div class="mg-t register" v-on:click="toRegister()">
        已有账号，点击登录>>>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {
    msg: String,
  },
  data() {
    return {
      type: "login",
      username: "",
      password: "",
      confirmPassword: "",
      name: "",
      id: "",
    };
  },
  methods: {
    onUsername(e) {
      this.username = e;
    },
    onPassword(e) {
      this.password = e;
    },
    onConfirmPassword(e) {
      this.confirmPassword = e;
    },
    onName(e) {
      this.name = e;
    },
    onId(e) {
      this.id = e;
    },
    onLogin() {
      if (this.username == "") {
        this.$message.error("请输入用户名");
        return;
      }
      if (this.password == "") {
        this.$message.error("请输入密码");
        return;
      }
      var username = localStorage.getItem("username");
      var password = localStorage.getItem("password");
      if (this.username != username || this.password != password) {
        this.$message.error("用户名或密码错误");
        return;
      }
      this.$message.success("登录成功");
    },
    onRegister() {
      if (this.username == "") {
        this.$message.error("请输入用户名");
        return;
      }
      if (this.username.length < 6 || this.username.length > 20) {
        this.$message.error("用户名长度需要6~20个字符");
        return;
      }
      if (this.password == "") {
        this.$message.error("请输入密码");
        return;
      }
      if (this.password.length < 6 || this.password.length > 20) {
        this.$message.error("密码长度必须在6~20位之间");
        return;
      }
      if (this.confirmPassword == "") {
        this.$message.error("请输入确认密码");
        return;
      }
      if (this.name == "") {
        this.$message.error("请输入真实姓名");
        return;
      }
      if (this.id == "") {
        this.$message.error("请输入身份证号");
        return;
      }
      if (this.password != this.confirmPassword) {
        this.$message.error("两次密码不一致");
        return;
      }
      localStorage.setItem("username", this.username);
      localStorage.setItem("password", this.password);
      this.$message.error("请认真核对后提交");
      // this.type = "login";
    },
    toRegister() {
      if (this.type == "login") {
        this.type = "register";
      } else {
        this.type = "login";
      }
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
.login {
  display: flex;
  align-items: center;
  justify-content: center;
}
.lll {
  width: 400px;
  border: 2px gray solid;
  padding: 40px;
  margin: 100px 0px;
  border-radius: 6px;
}
.mg-t {
  margin-top: 18px;
}
.lll button {
  width: 300px;
}

.lll .register {
  text-decoration: underline;
}
.lll .register:hover {
  cursor: pointer;
}

.line {
  display: flex;
  flex-direction: row;
}
.line .text {
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.desc {
  color: red;
  font-size: 14px;
  margin-top: 6px;
}
</style>

<template>
  <div id="block">
   <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="登录" name="first">
        <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
        <el-input type="text" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入账号"></el-input>
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请输入密码"></el-input>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    </el-form>
    </el-tab-pane>
    <!--  -->
    <el-tab-pane label="注册" name="second">
        <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
        <el-input type="text" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入账号"></el-input>
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请输入密码"></el-input>
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请确认密码"></el-input>
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
    </el-form>
    </el-tab-pane>
  </el-tabs>
    
    
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
};
</script>

<style scoped>
#block {
  background-color: white;
  margin: 5% 25%;
  padding: 50px;
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  color: skyblue;
}
</style>
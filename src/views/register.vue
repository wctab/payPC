<template>
  <div id="reginster">
    <h1>欢迎注册EGAME游戏商城账号</h1>
    <div class="form">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" :label-position="labelPosition">
        <el-form-item label="账号" prop="name">
          <el-input type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="电子邮件" prop="email">
          <el-input v-model="ruleForm2.email"></el-input>
        </el-form-item>

        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="ruleForm2.phone"></el-input>
        </el-form-item>

        <el-form-item label="真实姓名" prop="realname">
          <el-input v-model="ruleForm2.realname"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }else{
          var qs = require('qs');
          this.axios.post("http://127.0.0.1:8081/user/search",qs.stringify(
              {
                "uname":value,
              }
            )).then(result=>{
              //console.log(result.data.code);
              if(result.data.code==200){
                return callback(new Error(result.data.msg));
              }
            });
        }
        
        var reg = /^[a-zA-Z]\w{3,15}$/;
        setTimeout(() => {
          if (!reg.test(value)) {
            callback(new Error('账号输入错误,请重新输入'));
          } else {
            callback();
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if(value.trim().length<6 || value.trim().length>12){
          callback(new Error('请输入6-12位密码'));
        } 
        else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var  checkEmail = (rule,value,callback)=>{
        var reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        if(value ===""){
          return callback(new Error("电子邮件不能为空"))
        }else if(!reg.test(value)){
          return callback(new Error("邮箱不符合规范!"))
        }else{
          callback()
        }
      };
      var checkPhone = (rule, value, callback)=>{
        var reg = /^1[3-8]\d{9}$/
        if(value ===""){
          return callback(new Error("联系方式不能为空"))
        }else if(!reg.test(value)){
          return callback(new Error("电话不符合规范!"))
        }else{
          callback()
        }
      };
      var checkrealName = (rule,value,callback)=>{
          var reg = /^[a-zA-Z]{3,30}$/;
          var reg1 = /^[\u4E00-\u9FA5]{2,5}$/;
        if(value ===""){
          return callback(new Error("姓名不能为空"))
        }else if(!reg.test(value) && !reg1.test(value)){
          return callback(new Error("姓名不符合规范!"))
        }else{
          callback()
        }
      };
      return {
        labelPosition:"left",
        ruleForm2: {
          name:'',
          pass: '',
          checkPass: '',
          email:'',
          phone:'',
          realname: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ],
          email:[
            {validator: checkEmail, trigger: 'blur'}
            ],
          phone:[
            {validator: checkPhone, trigger: 'blur'}
            ],
          realname:[
            {validator: checkrealName, trigger: 'blur'}
          ]  
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          var qs = require('qs');
          if (valid) {
            this.axios.post("http://127.0.0.1:8081/user/register",qs.stringify(
              {
                "uname":this.ruleForm2.name,
                "upwd":this.ruleForm2.pass,
                "email":this.ruleForm2.email,
                "phone":this.ruleForm2.phone,
                "user_name":this.ruleForm2.realname
              }
            )).then(result=>{
              console.log(result.data.code);
              if(result.data.code==200){
                this.$router.push("/");
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoded>
  #reginster{
    width:1200px;
    margin:auto;
  }
  .form{
    padding-top:60px;
    width:350px;
    margin:auto;
  }
</style>
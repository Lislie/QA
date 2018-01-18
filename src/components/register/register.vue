<template>
  <div class="register">
    <div class="container">
      <transition name="fade">
        <toastr id="toastr" v-show="toastrShow"></toastr>        
      </transition>
      <div class="title">创建账号</div>            
      <div class="main">
        <div class="phone">
          <label>输入您的手机号:</label>
          <input type="text" class="phoneNum" v-model="baseData.mobile" @blur="validate('phone')">
          <div class="warn">
            <p v-show="validateInput.phoneNull">请输入手机号</p> 
            <p v-show="validateInput.phoneExist">该手机号用户已存在</p>            
            <p v-show="validateInput.phoneWrong">您输入的手机号不合法，请输入正确11位手机号</p>            
            <p v-show="validateInput.checkWrong1">验证码发送失败</p>            
            <p v-show="validateInput.checkWrong2">验证码发送次数超限，请稍后再试</p>            
          </div>
        </div>
        <div class="check">
          <label>输入验证码:</label>
          <input type="text" class="checkNum" v-model="baseData.validateCode">
          <button @click="getCheckNum" v-show="!passwordBtn.passwordBtnShow" style="cursor:pointer">获取验证码</button>
          <button v-show="passwordBtn.passwordBtnShow" style="background:#cccccc">{{passwordBtn.time}}s</button>
          <div class="warn">
            <p v-show="validateInput.checkNumShow1">请输入验证码</p>            
            <p v-show="validateInput.checkNumShow2">您输入的验证码有误，请重新输入</p>            
          </div>
        </div>
        <div class="password">
          <label>设置密码:</label>
          <input type="text" @blur="validate('password')" @keyup.13="creatUser" class="passwordNum" placeholder="长度6-14个字符；不支持空格" v-model="baseData.password">
          <div class="warn">
            <p v-show="validateInput.passwordWrong">您输入的密码格式不合法，请按要求设置</p>            
            <p v-show="validateInput.userDie">您的账号被冻结，请联系管理员</p>   
            <p v-show="toastShow">服务异常，请稍后再试</p>            
          </div>
        </div>
        <div class="creat">
          <button type="button" class="created" @click="creatUser" style="cursor:pointer">创建账号</button>
        </div>
        <div class="toLogin">
          <span>已有账号？</span>
          <router-link to="/login" class="link">登录</router-link>
        </div>
        <div class="toAgreement">
          <span>注册即表示您同意网站的</span>
          <router-link to="/agreement" class="link">用户协议</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toastr from '../toast/toast'
export default {
  components:{toastr}, 
  data () {
    return {
      // 参数
      baseData: {
        mobile: '',
        validateCode: '',
        password: ''
      },
      // input验证
      validateInput: {
        phoneNull: false, // 手机号为空
        phoneWrong: false, // 手机号不合法
        checkNumShow1:false,//验证码为空        
        checkNumShow2:false,//验证码有误        
        passwordWrong: false ,// 密码不合法
        phoneExist:false,//手机号已存在
        checkWrong1:false,//验证码发送失败
        checkWrong2:false,//验证码发送次数超限
        userDie:false,//账号被冻结
      },
      // 获取验证码倒计时
      passwordBtn:{
        passwordBtnShow:false,//倒计时不显示
        time:30
      },
      toastShow:false,//服务异常
      toastrShow:false,//弹框
      timer:'',//计时器
    }
  },
  // watch:{
  //   $route:{
  //     handler(curVal,oldVal){
  //       var _this = this;
  //       // console.log(curVal)
  //       if(curVal.fullPath!='/register'){
  //         // 清空
  //         this.baseData= {
  //           mobile: '',
  //           validateCode: '',
  //           password: ''
  //         }
  //         // 清除验证提示
  //         this.validateInput = {
  //           phoneNull: false, // 手机号为空
  //           phoneWrong: false, // 手机号不合法
  //           checkNumShow1:false,//验证码为空        
  //           checkNumShow2:false,//验证码有误        
  //           passwordWrong: false ,// 密码不合法
  //           phoneExist:false,//手机号已存在
  //           checkWrong1:false,//验证码发送失败
  //           checkWrong2:false,//验证码发送次数超限
  //         }
  //         this.toastShow=false;
  //         // 停止计时器
  //         clearInterval(_this.timer);
  //         this.passwordBtn.passwordBtnShow = false;
  //         this.passwordBtn.time = 30;
  //       }        
  //     },
  //     deep:true
  //   },
  // },
  beforeRouteLeave(to,from,next){
    var _this = this;
    // console.log(curVal)
    if(to.name!='/register'){
      // 清空
      this.baseData= {
        mobile: '',
        validateCode: '',
        password: ''
      }
      // 清除验证提示
      this.validateInput = {
        phoneNull: false, // 手机号为空
        phoneWrong: false, // 手机号不合法
        checkNumShow1:false,//验证码为空        
        checkNumShow2:false,//验证码有误        
        passwordWrong: false ,// 密码不合法
        phoneExist:false,//手机号已存在
        checkWrong1:false,//验证码发送失败
        checkWrong2:false,//验证码发送次数超限
        userDie:false,//账号冻结
      }
      this.toastShow=false;
      // 停止计时器
      clearInterval(_this.timer);
      this.passwordBtn.passwordBtnShow = false;
      this.passwordBtn.time = 30;
    }   
    next()
  },
  methods: {
    // 验证
    validate (info) {
      var _this = this
      // this.validateInput = {
      //   phoneNull: false, // 手机号为空
      //   phoneWrong: false, // 手机号不合法
      //   checkNumShow1:false,//验证码为空        
      //   checkNumShow2:false,//验证码有误        
      //   passwordWrong: false ,// 密码不合法
      //   phoneExist:false,//手机号已存在
      // }
      // this.toastShow=false
      if (info === 'phone') {
          // 验证手机号
        if (this.baseData.mobile.length === 0) {
          this.validateInput.phoneNull = true
          this.validateInput.phoneWrong = false
          return false
        } else if (/^1[3|4|5|7|8][0-9]\d{8}$/.test(_this.baseData.mobile)) {
          this.validateInput.phoneNull = false
          this.validateInput.phoneWrong = false
          return true
        } else {
          this.validateInput.phoneNull = false
          this.validateInput.phoneWrong = true
          return false
        }
      }
      // 验证密码
      if (info === 'password') {
        // 验证密码
        if (this.baseData.password.indexOf(' ') !== -1 || this.baseData.password.length < 6 || this.baseData.password.length > 14) {
          this.validateInput.passwordWrong = true
          return false
        } else {
          this.validateInput.passwordWrong = false
          return true
        }
      }
    },
    // 获取验证码
    getCheckNum(){
      this.baseData.validateCode=''
      this.validateInput.checkWrong1=false
      this.validateInput.checkWrong2=false
      this.toastShow=false
      var _this = this
      // 验证手机号
      if(this.validate('phone')){
         // 调接口----
        this.$indexServer.validateCode(this.baseData.mobile)
          .then((res)=>{
              // console.log(res)
              if(res.data.code == 200){
                this.passwordBtn.passwordBtnShow = true;//显示倒计时
                var timer = setInterval(()=>{
                  this.passwordBtn.time--;
                  if(this.passwordBtn.time<=0){
                    this.passwordBtn.passwordBtnShow = false;
                    this.passwordBtn.time = 30;
                    clearInterval(timer);
                  }
                },1000)
                _this.timer = timer
              }else if(res.data.code == 400){
                _this.validateInput.checkWrong1=true
              }else if(res.data.code == 500){
                _this.validateInput.checkWrong2=true                
              }else{
                _this.toastShow=true//服务异常
              }
          })
      }
     
    },
    // 创建账号
    creatUser(){
      var _this = this
      this.validateInput.phoneWrong = false
      this.validateInput.passwordWrong = false
      this.validateInput.checkNumShow1 = false
      this.validateInput.checkNumShow2 = false
      this.validateInput.phoneExist=false
      this.validateInput.userDie=false
      this.toastShow=false
       // 验证手机号
      if(this.validate('phone')){
        // 验证 验证码
        if(this.baseData.validateCode.length==0){
          this.validateInput.checkNumShow1=true
          return false
        }else{
          this.validateInput.checkNumShow1=false
         // 验证密码
          if(this.validate('password')){
            this.$indexServer.registration(this.baseData.mobile,this.baseData.validateCode,this.baseData.password)
              .then((res)=>{
                // console.log(res.data)
                if(res.data.code==200){
                  // 登录成功
                  // console.log(1)
                  this.enterToast('操作成功，即将跳转登录页...')
                  setTimeout(()=>{
                    this.$router.push({path:'../login'})
                    this.baseData.mobile = ""
                    this.baseData.validateCode=""
                    this.baseData.password=""
                  },2000)                
                }else if(res.data.code==4000){//手机号码有误
                  this.validateInput.phoneWrong = true
                }else if(res.data.code==4001){//密码输入格式不对
                  this.validateInput.passwordWrong = true
                }else if(res.data.code==4005){//验证码不能为空
                  this.validateInput.checkNumShow1 = true
                }else if(res.data.code==4008||res.data.code==4009){
                  this.validateInput.checkNumShow2 = true
                }else if(res.data.code==4003){
                  this.validateInput.phoneExist=true;
                }else if(res.data.code==40011){
                  this.validateInput.userDie=true;
                }else{
                  this.toastShow=true
                }              
              })
          }
        }
        
      }  
     
    },
    enterToast(text,time) {
      var toastr = document.getElementById("toastr");
      // console.log(toastr)
      if (toastr) {
        toastr.innerHTML = text;
        this.toastrShow = true;
        setTimeout(() => {
          this.toastrShow = false;
        }, 2000||time);
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.container {
  // height: 550px;
  width: 623px;
  box-shadow: 0px 0px 10px #D6D6D6;
  margin: 89px auto 180px;
  background-color #fff
  color: rgb(1, 0, 25);
  font-family 'PingFangSC-Regular'
  position relative
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .title {
    height 75px
    line-height 75px
    font-size: 24px;
    color #ffffff
    text-align center
    background-color rgb(192,192,192)
  }
  .main {
    // width: 100%;
    display flex
    align-items flex-end
    flex-direction column
    margin-right 108px
    label {
      font-size 18px
      margin-right 10px
    }

    p {
      background: url('./note.png') no-repeat left;
      background-size: auto 100%;
      padding-left: 20px;
      color: #f9553f;
      font-size 12px
    }
    .warn{
      height 25px
      font-size 12px
      color rgb(249,85,63)
      padding-top 5px
      box-sizing border-box
    }

    input {
      width: 302px;
      height: 46px;
      border: 1px solid #C0C0C0;
      outline: none;
      box-sizing: border-box;
      padding-left 8px
    }
    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
      font-size 14px
    } 
    input:-moz-placeholder, textarea:-moz-placeholder { 
      font-size 14px
    } 
    input::-moz-placeholder, textarea::-moz-placeholder { 
      font-size 14px
    } 
    input:-ms-input-placeholder, textarea:-ms-input-placeholder { 
      font-size 14px
    } 
    button{
      height 46px
      font-size 18px
      color #ffffff
      font-family 'AdobeHeitiStd-Regular'
      background-color rgb(249,85,63)      
    }
    // 手机号
    .phone{
      margin-top 54px
      .warn{
        height 25px
        padding-left 146px
      }
    }
    // 验证码
    .check {
      input {
        width 165px
      }
      .warn{
        height 25px
        padding-left 110px
      }
      button {
        height 46px
        width 132px
        outline none 
        border none
      }
    }
    // 设置密码
    .password{
      .warn{
        padding-left 92px        
      }
    }
    // 创建账号
    .creat {
      button{
        width 408px
        outline none 
        border none
        margin 0 0 25px 0
      }
    }
    .toLogin{
      align-self flex-start
      margin-left 106px
      font-size 12px
      color rgb(0,1,32)
      .link{
        color rgb(249,85,63)
      }
    }
    .toAgreement{
      margin-bottom 50px
      margin-top -17px
      font-size 12px
      color rgb(148,148,148)
      .link{
        color rgb(249,85,63)
      }
    }    
  }
}
</style>

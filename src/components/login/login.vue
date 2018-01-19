<template>
  <div class="loginVue">
    <div class="container">
      <transition name="fade">
        <toastlo id="toastlo" v-show="toastShow" style="top:340px;z-index:999"></toastlo>
      </transition>
      <div class="head">
        <ul>
          <li :class="{active: mobilePsd==true}" @click="mobilePsd=true">账号密码登录</li>
          <li :class="{active: mobilePsd==false}" @click="mobilePsd=false">快捷登录</li>
        </ul>
      </div>
      <div class="mobile_main" v-show = 'mobilePsd'>
        <div class="phone">
          <label for="">手机号：</label>
          <input type="text" class="phoneNum" v-model="mobileMain.phone" @blur="validate('phone_main')">
          <div class="warn">
            <p v-show="phoneWarn.warn3">请输入手机号。</p>
            <p v-show="phoneWarn.warn4">你输入的手机号不合法，请输入正确11位手机号。</p>
          </div>
        </div>
        <div class="setPassword">
          <label for="">密码：</label>
          <input type="password" v-model="mobileMain.password" @keyup.13="login">
          <router-link class="getPassword" to="/getPassword">忘记密码?</router-link>
        </div>
        <div class="login">
          <div class="warn">
            <p v-show="phoneWarn.warn1">你输入的账号或密码有误。</p>
            <p v-show="phoneWarn.warn2">该账号被禁用，如有疑问请联系客服。</p>
            <p v-show="phoneWarn.warn7">请输入密码。</p>
            <p v-show="toastShow1">用户账号不存在。</p>
            <p v-show="toastShow2">服务异常，请稍后再试。</p>
          </div>
          <button type="button" @click="login" style="cursor:pointer">登录</button>
        </div>
        <div class="loginState">
          <input type="checkbox" value='true' v-model="state">记住登录状态
        </div>
        <div class="toRegister">
          <span>还未注册账号？</span>
        </div>
        <div class="created">
          <router-link class="goRegister" to="../register">创建账号</router-link>
        </div>
      </div>
      <div class="fast_main" v-show = '!mobilePsd'>
         <div class="phone">
          <label for="">手机号：</label>
          <input type="text" class="phoneNum" v-model="fastMain.phone" @blur="validate('phone_fast')">
          <button type="button" v-show="fastMain.checkBtn" @click="getChecknum" style="cursor:pointer">获取验证码</button>
          <button type="button" v-show="!fastMain.checkBtn" style="background:#cccccc">{{fastMain.time}}s</button>
          <div class="warn">
            <p v-show="phoneWarn.warn5">请输入手机号。</p>
            <p v-show="phoneWarn.warn6">你输入的手机号不合法，请输入正确11位手机号。</p>
            <p v-show="toastShow4">验证码发送失败。</p>
            <p v-show="fastMain.warn4">验证码发送次数超限，请稍后再试。</p>
          </div>
        </div>
        <div class="password">
          <label>验证码：</label>
          <input type="text" class="passwordNum" placeholder="" v-model="fastMain.password" @keyup.13="fastLogin">
          <div class="warn">
            <p v-show="fastMain.warn1">请输入验证码。</p>
            <p v-show="fastMain.warn2">您输入的验证码有误,请重新输入。</p>
            <p v-show="fastMain.warn3">您的账号被冻结，请联系管理员。</p>
            <p v-show="toastShow3">服务异常，请稍后再试。</p>
          </div>
        </div>

        <div class="login">
          <button type="button" @click="fastLogin" style="cursor:pointer">登录</button>
        </div>
        <div class="agreement">
          <div>若首次快捷登录，系统会自动为您创建账号</div>
          <div>登录即表示您同意网站的<router-link class="agrreTo" to="/agreement">用户协议</router-link></div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import toastlo from '../toast/toast'
export default {
  components:{toastlo},
  data() {
    return {
      mobilePsd: true,//显示账号密码登录true，快捷登录为false
      mobileMain: {
        phone: '',
        password: ''
      },
      phoneWarn:{
        warn1:false,//账号或密码有误
        warn2:false,//账号被禁用
        warn3:false,//账号密码登录--手机号为空
        warn4:false,//账号密码登录--手机号不合法
        warn5:false,//快捷登录--手机号为空
        warn6:false,//快捷登录--手机号不合法
        warn7:false,//账号密码登录---密码为空
      },
      fastMain:{
        phone: '',
        password: '',
        warn1:false,
        warn2:false,
        warn3:false,
        warn4:false,
        checkBtn:true,
        time:30
      },
      toastShow1:false,//账号不存在--账号密码登录
      toastShow2:false,//服务异常--账号密码登录
      toastShow3:false,//服务异常--快捷登录
      toastShow4:false,//验证码发送失败--快捷登录
      toastShow:false,
      state:false,//登录状态
      timer:'',//计时器
    };
  },
  watch:{
    // $route:{
    //   handler(curVal,oldVal){
    //     var _this = this;
    //     // console.log(curVal)
    //     if(curVal.fullPath!='/Login'){
    //       // 清空
    //       this.mobileMain.phone='';
    //       this.mobileMain.password='';
    //       this.fastMain.phone='';
    //       this.fastMain.password='';
    //       // 清除计时器
    //       this.fastMain.checkBtn = true;
    //       this.fastMain.time = 30;
    //       clearInterval(_this.timer);
    //       // 隐藏提示
    //       this.hidden();
    //     }
    //   },
    //   deep:true
    // },
    mobilePsd(curVal,oldVal){
      var _this = this;
      if(curVal==true){
        this.fastMain.phone='';
        this.fastMain.password='';
        this.fastMain.warn1 = false;
        this.fastMain.warn2 = false;
        this.fastMain.warn3 = false;
        // 清除计时器
        this.fastMain.checkBtn = true;
        this.fastMain.time = 30;
        clearInterval(_this.timer);
      }else if(curVal==false){
        this.mobileMain.phone='';
        this.mobileMain.password='';
      }
      // 隐藏提示
      this.hidden();
    }
  },
  beforeRouteLeave(to,from,next){
    var _this = this;
      // console.log(curVal)
    if(to.name!='/Login'){
      // 清空
      this.mobileMain.phone='';
      this.mobileMain.password='';
      this.fastMain.phone='';
      this.fastMain.password='';
      // 清除计时器
      this.fastMain.checkBtn = true;
      this.fastMain.time = 30;
      clearInterval(_this.timer);
      // 隐藏提示
      this.hidden();
    }
    next()
  },
  methods: {
    // 隐藏所有验证信息
    hidden(){
      this.phoneWarn={
        warn1:false,//账号或密码有误
        warn2:false,//账号被禁用
        warn3:false,//账号密码登录--手机号为空
        warn4:false,//账号密码登录--手机号不合法
        warn5:false,//快捷登录--手机号为空
        warn6:false,//快捷登录--手机号不合法
        warn7:false,//账号密码登录---密码为空
      }
      this.fastMain.warn1=false
      this.fastMain.warn2=false
      this.fastMain.warn3=false
      this.fastMain.warn4=false
      this.toastShow1 = false//账号不存在--账号密码登录
      this.toastShow2 = false//服务异常--账号密码登录
      this.toastShow3 = false//服务异常--快捷登录
      this.toastShow4 = false//验证码发送失败--快捷登录
    },
    // 验证
    validate (info) {
      // this.hidden();
      // 验证手机号---账号密码登录
      if(info==='phone_main'){
        if (this.mobileMain.phone.length === 0) {
          this.phoneWarn.warn3 = true
          this.phoneWarn.warn4 = false
          return false
        } else if (/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.mobileMain.phone)) {
          this.phoneWarn.warn3 = false
          this.phoneWarn.warn4 = false
          return true
        } else {
          this.phoneWarn.warn3 = false
          this.phoneWarn.warn4 = true
          return false
        }

      }
      // 验证密码是否为空---账号密码登录
      if(info==='phone_password'){
        if(this.mobileMain.password.length === 0){
          this.phoneWarn.warn7 = true
          return false
        }else{
          this.phoneWarn.warn7 = false
          return true
        }
      }

      // 验证手机号---快捷登录---验证码
      if(info==='phone_fast'){
        if (this.fastMain.phone.length === 0) {
          this.phoneWarn.warn5 = true
          this.phoneWarn.warn6 = false
          return false
        } else if (/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.fastMain.phone)) {
          this.phoneWarn.warn5 = false
          this.phoneWarn.warn6 = false
          return true
        } else {
          this.phoneWarn.warn5 = false
          this.phoneWarn.warn6 = true
          return false
        }
      }

    },
    // 账号密码登录=========================================
    login() {
      var _this = this;
      this.phoneWarn.warn1=false;
      this.phoneWarn.warn2=false;
      this.toastShow1=false;
      this.toastShow2=false;
      // 验证手机号
      if(this.validate('phone_main')){
         if(this.validate('phone_password')){
           // 调接口----------------
          this.$indexServer.loginByPassword (_this.mobileMain.phone, _this.mobileMain.password)
          .then((res)=>{
            // console.log(res.data)
            if(res.data.code==200){
              _this.enterToast('登录成功',1000)
              setTimeout(()=>{
                _this.$router.push({path:'/',query:{id:1}});
              },1000)
              document.cookie="nickname="+res.data.data.nickname;
              document.cookie="headUrl="+res.data.data.headUrl;
              _this.remState()
            }else if(res.data.code==4001||res.data.code==4007||res.data.code==4008){
              _this.phoneWarn.warn1=true;
              _this.phoneWarn.warn2=false;
            }else if(res.data.code==4006){
              _this.toastShow1=true;
            }else if(res.data.code==40011){
              _this.phoneWarn.warn1=false;
              _this.phoneWarn.warn2=true;
            }else{
              this.toastShow2=true
            }
          })
         }
      };
    },
    // 设置cookie
    setCookie(name,value,day){
      var date = new Date();
      date.setDate(date.getDate() + day);
      document.cookie = name + '=' + value + ';expires='+ date;
    },
    // 清除cookie
    delCookie(name){
      this.setCookie(name,null,-1);
    },
    // 记住登录状态
    remState(){
      // console.log(this.state)
      var _this = this
      if(this.state==true){
        this.setCookie('phone',_this.mobileMain.phone,7); //保存帐号到cookie，有效期7天
        this.setCookie('password',_this.mobileMain.password,7); //保存密码到cookie，有效期7天
      }
      // else if(this.state==false){
      //   this.delCookie('phone');
      //   this.delCookie('password');
      // }
    },

    // 快速登录====================================
    // 获取验证码
    getChecknum() {
      var _this = this;
      this.fastMain.password=''
      this.toastShow4=false
      this.fastMain.warn4=false
      this.toastShow3=false
      if(this.validate('phone_fast')){
        // 调接口------------------
        this.$indexServer.validateCode(_this.fastMain.phone)
        .then((res)=>{
            if(res.data.code == 200){
              this.fastMain.checkBtn = false;//显示倒计时
              var timer = setInterval(()=>{
                this.fastMain.time--;
                if(this.fastMain.time<=0){
                  this.fastMain.checkBtn = true;
                  this.fastMain.time = 30;
                  clearInterval(timer);
                }
              },1000);
              _this.timer=timer;
            }else if(res.data.code == 400){
              _this.toastShow4=true//验证码发送失败
            }else if(res.data.code == 500){
              _this.fastMain.warn4=true//验证码发送次数超限
            }else{
              _this.toastShow3=true//服务异常
            }
        })
      }
    },
    // 登录
    fastLogin() {
      var _this =this;
      _this.phoneWarn.warn6 = false;
      _this.fastMain.warn1 = false;
      _this.fastMain.warn2 = false;
      _this.fastMain.warn3 = false;
      _this.toastShow3=false;
      if(this.validate('phone_fast')){
        if(this.fastMain.password.length==0){
          this.fastMain.warn1=true
          return false
        }else{
          this.fastMain.warn1=false
           // 调接口------------------
          this.$indexServer.loginByValidateCode(this.fastMain.phone,this.fastMain.password)
          .then((res)=>{
            if(res.data.code==200){
              _this.enterToast('登录成功',1000)
              setTimeout(()=>{
                _this.$router.push({path:'/',query:{id:1}});
                document.cookie="nickname="+res.data.data.nickname;
                document.cookie="headUrl="+res.data.data.headUrl;
                _this.mobilePsd=true
              },1000)
            }else if(res.data.code==4000){//手机号码有误
              _this.phoneWarn.warn6 = true;
            }else if(res.data.code==4005){//验证码不能为空
              _this.fastMain.warn1 = true;
            }else if(res.data.code==4008||res.data.code==4009){//验证码有误
              _this.fastMain.warn2 = true;
            }else if(res.data.code==40011){//账户被冻结
              _this.fastMain.warn3 = true;
            }else{
              _this.toastShow3=true
            }
          })
        }

      }
    },
    enterToast(text,time) {
      var toast = document.getElementById("toastlo");
      // console.log(toast)
      if (toast) {
        toast.innerHTML = text;
        this.toastShow = true;
        setTimeout(() => {
          this.toastShow = false;
        }, 2000||time);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.container {
  // height: 550px;
  width: 632px;
  box-shadow: 0px 0px 10px #D6D6D6;
  margin: 90px auto 176px;
  font-family: 'PingFangSC-Reguler';
  background-color: #fff;
  color: rgb(1, 0, 25);

  .active {
    background-color: #ffffff;
    color: rgb(1, 0, 25);
  }

  .head {
    width: 100%;
    height: 75px;
    color: #ffffff;
    font-size: 24px;

    ul {
      height: 100%;
      background-color: rgb(195, 195, 195);

      li {
        float: left;
        width: 50%;
        height: 100%;
        line-height: 75px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .mobile_main, .fast_main {
    // width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .phone,.setPassword,.password, .login {
      label {
        font-size: 18px;
      }

      input {
        height: 46px;
        border: 1px solid rgb(195, 195, 195);
        outline: none;
        box-sizing: border-box;
        margin: 0 0 25px 10px;
        padding-left: 8px;
      }

      button {
        height: 46px;
        // cursor: pointer;
        border: none;
        outline: none;
        background-color: rgb(249, 85, 63);
        font-size: 18px;
        color: #ffffff;
        font-family: 'AdobeHeitiStd-Regular';
      }

      p {
        background: url('./note.png') no-repeat left;
        background-size: auto 100%;
        padding-left: 20px;
        font-size: 12px;
        color: rgb(249, 85, 63);
      }
    }
  }

  .mobile_main {
    margin-top: 35px;
    margin-right: 104px;

    .phone, .setPassword {
      position relative
      input {
        width: 333px;
        height: 46px;
        border: 1px solid rgb(195, 195, 195);
        outline: none;
        margin: 0px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 10px;
      }
      .getPassword {
        position: absolute;
        top: 56px;
        right: 0;
        font-size: 12px;
        color: rgb(112, 112, 112);
      }

    }

    .login {
      button {
        margin-top 10px
        width: 420px;
      }

    }

    .loginState {
      display: flex;
      margin-top: 16px;
      font-size: 12px;
      color: rgb(0, 1, 32);

      input {
        margin-right: 5px;
      }
    }

    .toRegister {
      margin: 32px 0 27px 0;
      text-align: center;
      width: 80%;

      span {
        display: block;
        position: relative;
        margin-right: -20px;
        font-size: 18px;
        color: rgb(128, 128, 128);
      }

      span:before, span:after {
        content: '';
        position: absolute;
        top: 52%;
        background: #cccccc;
        width: 35%;
        height: 1px;
      }

      span:before {
        left: -25px;
      }

      span:after {
        right: 0;
      }
    }

    .created {
      margin-bottom: 47px;

      .goRegister {
        display: block;
        background-color: rgb(192, 192, 192);
        height: 46px;
        width: 420px;
        text-align: center;
        line-height: 46px;
        // cursor: pointer;
        border: none;
        outline: none;
        font-size: 18px;
        color: #ffffff;
        font-family: 'AdobeHeitiStd-Regular';
      }
    }
    .warn {
      height: 25px;
      padding: 5px 0 0 87px;
      box-sizing: border-box;
    }


  }

  .fast_main {
    margin-right: 104px;
    margin-top: 54px;

    .phone {
      input {
        width: 187px;
        margin-right: 6px;
      }

      button {
        width: 136px;
      }
      input{
        margin 0px 0px 0px 10px
      }

    }

    .password {
      position: relative;
      input {
        width: 328px;
        margin 0px 0px 0px 10px
      }


    }
    .warn {
      height: 25px;
      padding: 5px 0 0 87px;
      box-sizing: border-box;
    }

    .login {
      button {
        width: 420px;
      }
    }

    .agreement {
      font-size: 12px;
      color: rgb(112, 112, 112);

      div:first-child {
        margin: 23px 0 8px 0;
      }

      div:nth-child(2) {
        text-align: right;
        margin: 0 0 47px 0;

        .agrreTo {
          color: #FF543B;
        }
      }
    }
  }
}
</style>

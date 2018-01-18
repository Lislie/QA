<template>
  <div class="register">
    <div class="container">
      <transition name="fade">
        <toastg id="toastg" v-show="toastgShow" style="top:340px"></toastg>        
      </transition>
      <div class="title">忘记密码</div>
      <div class="main">
        <div class="phone">
          <label>输入你原手机号：</label>
          <input type="text" class="phoneNum" @blur="validate('phone')" v-model="phone.mobile">
          <div class="warn">
            <p v-show="phone.warn1Show">请输入手机号。</p>
            <p v-show="phone.warn2Show">你输入的手机号不合法，请输入正确11位手机号。</p>
            <p v-show="phone.warn3Show">该用户账号不存在。</p>
          </div>
        </div>
        <div class="check">
          <div class="checkTime">
            <label>输入验证码：</label>            
            <input type="text" class="checkNum" v-model="checkNum.number"/>
            <button v-show="!checkNum.checkBtn" @click="getCheckNum" style="cursor:pointer">获取验证码</button>
            <button v-show="checkNum.checkBtn" style="background:#cccccc">{{checkNum.time}}s</button>
          </div>
          <div class="warn">
            <p v-show="checkNum.warnShow1">你输入的验证码有误，请重新输入。</p>            
            <p v-show="checkNum.warnShow">请输入验证码。</p>            
            <p v-show="checkNum.warnShow2">验证码发送失败。</p>            
            <p v-show="checkNum.warnShow3">验证码发送次数超限，请稍后再试。</p>            
          </div>
        </div>
        <div class="password">
          <label>设置新密码：</label>
          <input type="password" v-model="newPsd.password" class="passwordNum" placeholder="长度6-14个字符；不支持空格" @blur="validate('password')">
          <div class="warn1">
            <p v-show="newPsd.warnShow">你输入的密码格式不合法，请按要求设置。</p>            
          </div>  
        </div>
        <div class="password">
          <label>新密码再次确认：</label>
          <input type="password" class="passwordNum" placeholder="" v-model="newPsdAgain.password" @keyup.13="submitData">
          <div class="warn2">
            <p v-show="newPsdAgain.warn1Show">您输入的账号或验证码有误。</p>            
            <p v-show="newPsdAgain.warn2Show">您两次输入的密码不一致。</p>
            <p v-show="toastShow">服务异常，请稍后再试。</p>
            <p v-show="newPsdAgain.warn3Show">您的账号被冻结，请联系管理员。</p>
          </div>
        </div>
        <div class="creat">
          <button type="button" @click="submitData" style="cursor:pointer">完成</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import toastg from '../toast/toast'
export default {
  components:{toastg}, 
  data() {
    return {
      phone:{//手机号
        mobile:'',
        warn1Show:false,
        warn2Show:false,
        warn3Show:false,//用户账号不存在
      },
      checkNum:{//验证码
        number:'',
        warnShow:false,//验证码为空
        warnShow1:false,//验证码错误
        warnShow2:false,//验证码发送失败
        warnShow3:false,//验证码发送次数超限
        time:30,
        checkBtn:false
      },
      newPsd:{//设置新密码
        password:'',
        warnShow:false
      },
      newPsdAgain:{//再次新密码
        password:'',
        warn1Show:false,
        warn2Show:false,
        warn3Show:false,
      },
      toastShow:false,
      toastgShow:false,//弹框
      timer:'',
    };
  },
  // watch:{
  //   $route:{
  //     handler(curVal,oldVal){
  //       var _this = this;
  //       // console.log(curVal)
  //       if(curVal.fullPath!='/getPassword'){
  //         this.phone={//手机号
  //           mobile:'',
  //           warn1Show:false,
  //           warn2Show:false,
  //           warn3Show:false
  //         }
  //         this.checkNum={//验证码
  //           number:'',
  //           warnShow:false,//验证码为空
  //           warnShow1:false,//验证码有误
  //           warnShow2:false,//验证码发送失败
  //           warnShow3:false,//验证码发送次数超限
  //           time:30,
  //           checkBtn:false
  //         }
  //         this.newPsd={//设置新密码
  //           password:'',
  //           warnShow:false
  //         }
  //         this.newPsdAgain={//再次新密码
  //           password:'',
  //           warn1Show:false,
  //           warn2Show:false
  //         }
  //         this.toastShow=false 
  //         clearInterval(_this.timer)  
  //       }        
  //     },
  //   },
  //   deep:true
  // },
  beforeRouteLeave(to,from,next){
      var _this = this;
      if(to.name!='/getPassword'){
        this.phone={//手机号
          mobile:'',
          warn1Show:false,
          warn2Show:false,
          warn3Show:false
        }
        this.checkNum={//验证码
          number:'',
          warnShow:false,//验证码为空
          warnShow1:false,//验证码有误
          warnShow2:false,//验证码发送失败
          warnShow3:false,//验证码发送次数超限
          time:30,
          checkBtn:false
        }
        this.newPsd={//设置新密码
          password:'',
          warnShow:false
        }
        this.newPsdAgain={//再次新密码
          password:'',
          warn1Show:false,
          warn2Show:false,
          warn3Show:false          
        }
        this.toastShow=false 
        clearInterval(_this.timer)  
      } 
      next()
  },
  methods:{
     // 验证
    validate (info) {
      var _this = this
      // this.phone.warn1Show=false
      // this.phone.warn2Show=false
      // this.phone.warn3Show=false
      // this.checkNum.warnShow=false
      // this.checkNum.warnShow1=false
      // this.newPsd.warnShow=false
      // this.newPsdAgain.warn1Show=false
      // this.newPsdAgain.warn2Show=false
      // this.toastShow=false 
      // 验证手机号
      if (info === 'phone') {
          // 验证手机号
        if (this.phone.mobile.length === 0) {
          this.phone.warn1Show = true
          this.phone.warn2Show = false
          return false
        } else if (/^1[3|4|5|7|8][0-9]\d{8}$/.test(_this.phone.mobile)) {
          this.phone.warn1Show = false
          this.phone.warn2Show = false
          return true
        } else {
          this.phone.warn1Show = false
          this.phone.warn2Show = true
          return false
        }
      }

      // 验证码校验
      if(info==='checkNum'){
        if(this.checkNum.number.length==0){
          this.checkNum.warnShow=true
          return false
        }else{
          this.checkNum.warnShow=false
          return true
        }
      }
      
      //  验证密码
      if (info === 'password') {
        // 验证密码
        if (this.newPsd.password.indexOf(' ') !== -1 || this.newPsd.password.length < 6 || this.newPsd.password.length > 14) {
          this.newPsd.warnShow = true
          return false
        }else {
          this.newPsd.warnShow = false
          return true
        }
      }
     
    },
    // 获取验证码
    getCheckNum(){
      var _this = this
      this.checkNum.number=''
      this.phone.warn3Show=false
      this.checkNum.warnShow2=false
      this.checkNum.warnShow3=false
      this.toastShow=false   
      // 验证手机号
      if(this.validate ('phone')){
        // 验证码接口
        this.$indexServer.validateCode(this.phone.mobile)
        .then((res)=>{
          // console.log(res.data)
          if(res.data.code == 200){
            this.checkNum.checkBtn = true;//显示倒计时
            var timer = setInterval(()=>{
              this.checkNum.time--;
              if(this.checkNum.time<=0){
                this.checkNum.checkBtn = false;
                this.checkNum.time = 30;
                clearInterval(timer);
              }
            },1000)
            _this.timer=timer
          }else if(res.data.code == 400){
            _this.checkNum.warnShow2=true//验证码发送失败
          }else if(res.data.code == 500){
            _this.checkNum.warnShow3=true//验证码发送次数超限
          }else if(res.data.code==4006){
            _this.phone.warn3Show=true  //用户账号不存在
          } else {
            _this.toastShow=true
          }
        })
      }
    },
    // 完成
    submitData(){
      var _this=this;
      _this.phone.warn3Show=false
      _this.checkNum.warnShow=false
      _this.checkNum.warnShow1=false
      _this.newPsdAgain.warn1Show=false
      _this.newPsdAgain.warn3Show=false
      _this.toastShow=false           
      if(this.validate ('phone')){
        if(this.validate ('checkNum')){
          if(this.validate ('password')){
            if(this.newPsd.password!=this.newPsdAgain.password){
              this.newPsdAgain.warn2Show=true
              return false
            }else{
               this.newPsdAgain.warn2Show=false
               this.$indexServer.updatePassword(this.phone.mobile,this.checkNum.number,this.newPsd.password)
                .then((res)=>{
                  if(res.data.code==200){
                    _this.enterToast('操作成功，即将跳转登录页...')
                    setTimeout(()=>{
                      _this.$router.push({path:'/login'})
                    },2000)
                  }else if(res.data.code==4006){
                    _this.phone.warn3Show=true  //用户账号不存在
                  }else if(res.data.code==4005){
                    _this.checkNum.warnShow=true  //验证码不能为空
                  }else if(res.data.code==4008||res.data.code==4009){
                    _this.checkNum.warnShow1=true  //验证码有误
                  }else if(res.data.code==4000||res.data.code==4001){
                    _this.newPsdAgain.warn1Show=true  //账号或密码错误
                  }else if(res.data.code==40011){
                    _this.newPsdAgain.warn3Show=true  //账号被冻结
                  }else{
                    _this.toastShow=true
                  }
                })
              }           
          }
        }
        
      }     
    },
    enterToast(text,time) {
      var toastg = document.getElementById("toastg");
      // console.log(toastg)
      if (toastg) {
        toastg.innerHTML = text;
        this.toastgShow = true;
        setTimeout(() => {
          this.toastgShow = false;
        }, 2000||time);
      }
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.container {
  // height: 550px;
  width: 648px;
  box-shadow: 0px 0px 10px #D6D6D6;
  background-color #fff
  margin: 89px auto 98px;
  font-family 'PingFangSC-Regular'
  .title{
    height 75px
    width 648px
    background-color rgb(192,192,192)
    color #ffffff
    font-size 24px
    line-height 75px
    text-align center
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .main {
    margin-top 32px
    display flex
    flex-direction column
    align-items flex-end
    margin-right 115px
    label{
      font-size 18px
      color rgb(0,1,32)
      margin-right 10px
    }
    p {
      background: url('./note.png') no-repeat left;
      background-size: auto 100%;
      padding-left: 20px;
      font-size 12px
      color rgb(249,85,63)
    }

    input {
      width: 302px;
      height: 46px;
      border: 1px solid rgb(195,195,195);
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

    button {
      height 46px
      font-size 18px
      color #ffffff
      font-family 'AdobeHeitiStd-Regular'
      background-color rgb(249,85,63)  
      outline none 
      border none
    }
    .warn{
      height 25px
      padding-top 5px
      box-sizing border-box
    }
    // 手机号
    .phone{
      .warn{
        padding-left 155px
      }
    }
    // 验证码
    .check {
      .checkTime {
        input{
          width 155px
        }
        button{
          width 136px
          margin-left 7px
        }
      }
      .warn{
        padding-left 119px
      }
    }
    .password{
      .warn1,.warn2{
        height 25px
        padding-top 5px
        boxsizing border-box
        padding-left 121px
      }
      .warn2{
        padding-left 155px
      }
    }
    // 完成
    .creat{
      button{
        width 418px
        margin 0 0 50px 0
      }
    }
    
  }
}
</style>

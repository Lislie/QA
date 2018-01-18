<template>
  <div class="account">
    <transition name="fade">
      <toast4 id="toast4" v-show="toastShow" style="top:300px;z-index:999"></toast4>
    </transition>
    <!-- 侧边栏 -->
    <div class="aside">
      <ul>
        <li v-for="(item,index) in asideData.items" :class="{active:asideData.activeIndex==index}" @mouseover="asideData.activeIndex=index"
          @mouseout="asideData.activeIndex=1" @click="asideData.activeIndex=1">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="title">账户安全</div>
      <div class="header">
        <div class="left">
          <div class="left_top">
            <label for="">用户头像:</label>
            <div class="img" v-show="header.headerEditShow" style="border-radius:56px;overflow:hidden">
              <!-- <div class="img_box" style="border:1px solid red;height:112px;width:112px;border-radius:56px;overflow:fhidden"> -->
                <img v-show="userData.headUrl" :src="userData.headUrl"/>
                <!-- <img src="./head.png"/> -->
              <!-- </div> -->
            </div>
            <!-- <a class="btn" @click="toggleShow1">设置头像</a> -->
            <div class="item" >
                <img class="avatar" v-if="avatarUrl1" :src="avatarUrl1"  style="display: none;">
                <my-upload url="http://panda.easyto.com/knowledge/login/api/v1/qa/security/headUrl" img-format="png"
                           @crop-success="cropSuccess"
                           @crop-upload-success="cropUploadSuccess"
                           @crop-upload-fail="cropUploadFail"
                           field="avatar1"
                           ki="0"
                           :width="112"
                           :height="112"
                           :noSquare="true"
                           v-model="show1"
                           :headers="headers"
                           :params="otherParams">
                </my-upload>
            </div>
          </div>
          <div class="left_foot">
            <p>支持jpg、png、jpeg、bmp，图片大小5M以内</p>
          </div>
        </div>
        <div class="right">
        <a class="modifyImg" v-show="header.headerEditShow" @click="toggleShow1">修改</a>
        <input type="file" id="file" name="" @change="preview" style="display: none" />
        <a v-show="!header.headerEditShow" @click="uplodHeadImg">完成</a>
        <a v-show="header.headerEditShow" @click="exit">退出登录</a>
        <a v-show="!header.headerEditShow">取消</a>
      </div>
      </div>
      <div class="line"></div>
      <div class="name">
        <div class="left">
          <label for="">用户昵称：{{userData.nickname}}</label>
          <p>昵称不得超过7个汉字或14个英文，支持英文、汉字、数字、下划线</p>
        </div>
        <div class="right">
          <a @click="name.nameShow = true">修改</a>
        </div>
      </div>
      <div class="line"></div>
      <div class="phone">
        <div class="left">
          <label for="">绑定手机号: {{userData.mobile}}</label>
          <p>手机号作为用户账户及修改密码时的重要依据，请使用常用手机号</p>
        </div>
        <div class="right">
          <a @click="phone.phoneShow = true">修改</a>
        </div>
      </div>
      <div class="line"></div>
      <div class="password">
        <div class="left">
          <label for="">登录密码
            <span style="font-size:16px">修改更高级别的密码能提高帐号的安全性。</span>
          </label>
          <p>长度为6-14个字符，支持数字、大小写字母和标点符号，不允许有空格</p>
        </div>
        <div class="right">
          <a @click="password.passwordShow = true">修改</a>
        </div>
      </div>

      <!-- 昵称修改弹框 -->
      <transition name="fade">
        <div class="nameModify" v-show="name.nameShow">
          <div class="main">
            <img src="./close.png" alt="" class="close" @click="name.nameShow=false">
            <div class="name_title">昵称修改</div>
            <div class="line"></div>
            <div class="name_name">用户昵称：{{userData.nickname}}</div>
            <div class="name_phone">当前绑定手机号：{{userData.mobile}}</div>
            <div class="name_modify">
              <label for="">修改昵称为:</label>
              <input type="text" v-model="name.newName">
              <div class="warn">
                <p v-show="name.verifyNameShow">输入的昵称不合法，昵称不得超过7个汉字或14个英文，支持英文、汉字、数字、下划线。</p>
              </div>
            </div>
            <div class="btn_box">
              <button type="button" class="cancel" @click="name.nameShow=false">取消</button>
              <button type="button" class="sure" @click="modifyName">确认修改</button>
            </div>
          </div>
        </div>
      </transition>

      <!-- 修改手机号 -->
      <transition name="fade">
        <div class="phoneModify" v-show="phone.phoneShow">
          <div class="main">
            <img src="./close.png" alt="" class="close" @click="phone.phoneShow=false">
            <div class="name_title">修改绑定手机号</div>
            <div class="line"></div>
            <div class="name_name">用户昵称：{{userData.nickname}}</div>
            <div class="name_phone">当前绑定手机号：{{userData.mobile}}</div>
            <div class="phone_modify">
              <label for="">新手机号:</label>
              <input type="text" v-model="phone.newPhone">
              <div class="warn">
                <p v-show="phone.verifyPhoneShow">请输入正确的11位手机号。</p>
              </div>
            </div>
            <div class="phone_checkNum">
              <label for="">验证码:</label>
              <input type="text" v-model="phone.checkNum">
              <button type="button" @click="verifyPhone" v-show="phone.checkBtnShow" style="cursor:pointer">获取验证码</button>
              <button type="button" v-show="!phone.checkBtnShow" style="background:#cccccc">{{phone.time}}s</button>
              <div class="warn">
                <p v-show="phone.checkNumShow" style="margin-left:80px">您输入的验证码有误，请重新输入。</p>
                <p v-show="phone.checkAvilabelShow" style="margin-left:80px">该手机号已被绑定。</p>
              </div>
            </div>
            <div class="btn_box">
              <button type="button" class="cancel" @click="phone.phoneShow=false">取消</button>
              <button type="button" class="sure" @click="modifyPhone">确认修改</button>
            </div>
          </div>
        </div>
      </transition>


      <!-- 修改登录密码 -->
      <transition name="fade">
        <div class="passwordModify" v-show="password.passwordShow">
          <div class="main">
            <img src="./close.png" alt="" class="close" @click="password.passwordShow=false">
            <div class="name_title">修改登录密码</div>
            <div class="line"></div>
            <div class="name_name">用户昵称：{{userData.nickname}}</div>
            <div class="name_phone">当前绑定手机号：{{userData.mobile}}</div>
            <div class="name_modify">
              <label for="">原密码:</label>
              <input type="text" v-model="password.originalPsd">
              <div class="warn">
                <p v-show="password.originalPsdShow">原密码输入有误。</p>
                <p v-show="password.originalPsdShow1">请输入原密码。</p>
              </div>
            </div>
            <div class="name_modify">
              <label for="">新密码:</label>
              <input type="text" v-model="password.newPsd" @blur="verifyPsd('newPsd')">
              <div class="warn" id="newPsd">
                <p v-show="password.newPsdShow">密码不合法，请输入6-14个字符，支持数字、大小写字母和标点符号，不允许有空格。</p>
              </div>
            </div>
            <div class="name_modify">
              <label for="">确认新密码:</label>
              <input type="text" v-model="password.newPsdAgain" @blur="verifyPsd('newPsdAgain')">
              <div class="warn">
                <p v-show="password.newPsdAgainShow">你两次输入的密码不一致。</p>
              </div>
            </div>
            <div class="btn_box">
              <button type="button" class="cancel" @click="password.passwordShow=false">取消</button>
              <button type="button" class="sure" @click="modifyPsd()">确认修改</button>
            </div>
          </div>
        </div>
      </transition>


    </div>
  </div>
</template>

<script>
  import toast4 from '../toast/toast'
  import Avatar from 'vue-avatar/src/Avatar'
  import myUpload from 'vue-image-crop-upload'
  // import $ from 'jquery'
//   import Jcrop from 'jcrop'
  export default {
    components: {
      toast4,
      Avatar,
      'my-upload': myUpload
    },
    data() {
      return {
        show1: false,
        avatarUrl1: null,
        otherParams: {
          token: '123456798',
          name: 'img'
        },
        headers: {
          smail: '*_~'
        }
        ,
        // 侧边栏
        asideData: {
          items: [{
              name: "我的收益",
              path: "./myEarnings"
            },
            {
              name: "账户安全",
              path: "./account"
            },
            {
              name: "意见反馈",
              path: "./feedBack"
            }
          ],
          activeIndex: 1
        },
        //  用户信息
        userData: {
          mobile: '',
          nickname: '',
          headUrl: ''
        },
        header: {
          //头像
          headerEditShow: true, //头像修改显示
          fileImg: ''
        },
        name: {
          // 昵称
          nameShow: false, //用户昵称弹框
          newName: "", //修改的新昵称
          verifyNameShow: false //手机验证
        },
        phone: {
          //手机号
          phoneShow: false, //手机修改弹框
          newPhone: "", //新手机号
          checkNum: "", //验证码
          verifyPhoneShow: false, //手机验证
          checkNumShow: false, //验证码
          checkBtnShow: true, //获取验证码按钮显示
          checkAvilabelShow: false, //手机号已绑定
          time: 30
        },
        password: {
          //密码
          passwordShow: false, //密码修改弹框显示或隐藏
          originalPsd: "", //原密码
          newPsd: "", //新密码
          newPsdAgain: "", //确认新密码
          originalPsdShow: false,//原密码错误--warn
          newPsdShow: false,
          newPsdAgainShow: false,
          originalPsdShow1:false,//原密码不能为空-warn
        },
        toastShow: false,
        src: './head.png',
        timer:''//获取验证码计时器
      };
    },
    watch: {
      name: {
        handler(curVal, oldVal) {
          //   console.log(curVal.nameShow)
          if (curVal.nameShow == false) {
            this.name.newName = "",
              this.name.verifyNameShow = false
          }
        },
        deep: true
      },
      phone: {
        handler(curVal, oldVal) {
          //   console.log(curVal.nameShow)
          var _this =this
          if (curVal.phoneShow == false) {
            this.phone.newPhone = ""; //新手机号
            this.phone.checkNum = ""; //验证码
            this.phone.verifyPhoneShow = false;
            this.phone.checkNumShow = false;
            this.phone.checkAvilabelShow = false;
            clearInterval(_this.timer);
            this.phone.checkBtnShow = true;
            this.phone.time = 30;
          }
        },
        deep: true
      },
      password: {
        handler(curVal, oldVal) {
          //   console.log(curVal.nameShow)
          if (curVal.passwordShow == false) {
            this.password.originalPsd = ""; //原密码
            this.password.newPsd = ""; //新密码
            this.password.newPsdAgain = "" //确认新密码
            this.password.originalPsdShow = false;
            this.password.newPsdShow = false;
            this.password.newPsdAgainShow = false;
            this.password.originalPsdShow1 = false
          }
        },
        deep: true
      },
    },
    // created() {
    //   this.getUser()
    // },
    beforeRouteEnter (to, from, next) {
      next(vm => {
          vm.getUser()
      })
    },
    beforeRouteLeave(to,from,next){
      var _this = this;
      // console.log(curVal)
      if(to.name!='/account'){
         this.name = {
            // 昵称
            nameShow: false, //用户昵称弹框
            newName: "", //修改的新昵称
            verifyNameShow: false //手机验证
          }
          this.phone = {
            //手机号
            phoneShow: false, //手机修改弹框
            newPhone: "", //新手机号
            checkNum: "", //验证码
            verifyPhoneShow: false, //手机验证
            checkNumShow: false, //验证码
            checkBtnShow: true, //获取验证码按钮显示
            checkAvilabelShow: false, //手机号已绑定
            time: 30
          }
          this.password = {
            //密码
            passwordShow: false, //密码修改弹框显示或隐藏
            originalPsd: "", //原密码
            newPsd: "", //新密码
            newPsdAgain: "", //确认新密码
            originalPsdShow: false,//原密码错误--warn
            newPsdShow: false,
            newPsdAgainShow: false,
            originalPsdShow1:false,//原密码不能为空-warn
          }
      }
      next()
    },
    methods: {
      toggleShow1() {
        let {show1} = this;
        this.show1 = !show1;
      },
      cropSuccess(data, field, key) {
        if (field == 'avatar1') {
          this.avatarUrl1 = data;
        }
        console.log('-------- 剪裁成功 --------');
      },
      cropUploadSuccess(data, field, key) {
        console.log('-------- 上传成功 --------');
        this.getUser();
        setTimeout(()=>{
          location.reload();
        },1000)
        console.log(data);
        console.log('field: ' + field);
        console.log('key: ' + key);
      },
      cropUploadFail(status, field, key) {
        console.log('-------- 上传失败 --------');
        console.log(status);
        console.log('field: ' + field);
        console.log('key: ' + key);
      },
      // 修改头像======================================
      preview(e) {
        var file = e.target.files[0];
        var url = URL.createObjectURL(file);
        var size = file.size
        // console.log(size)
        if (size > 5242880) {
          this.enterToast('上传图片不能大于5M')
          return
        }
        document.getElementById("img").setAttribute("src", url);
        this.header.headerEditShow = false;
        // this.headImg()
        // console.log(file,file.size)
      },

      //  上传头像
      uplodHeadImg(){
          // this.$indexServer.headUrl()
      },
      // 退出登录========================================================
      exit() {
        // 调接口----------------
        var _this = this;
        this.$indexServer.exit()
          .then((res) => {
            if (res.data.code == 200 || res.data.code == 4010) {
              _this.$router.push({
                path: '/',
                query: {
                  id: 0
                }
              });
            }
            // else if (res.data.code == 4010) {
            //   _this.enterToast('登录已过期，请重新登录')
            // }
            else if (res.data.code == 4006) {
              _this.enterToast('该用户账号不存在')
            } else if (res.data.code == 40011) {
              _this.enterToast('您的账号被冻结，请联系管理员')
            } else {
              _this.enterToast('服务异常，请稍后再试')
            }
          })
      },
      // 获取昵称和绑定手机号===================================
      getUser() {
        var _this = this;
        this.$indexServer.user()
          .then((res) => {
            if (res.data.code == 200) {
              _this.userData = res.data.data;
              document.cookie="nickname="+res.data.data.nickname;
              document.cookie="headUrl="+res.data.data.headUrl;
            }else if(res.data.code==4010){
              _this.enterToast('登录超时，请重新登陆')
              setTimeout(()=>{
                _this.$router.push({
                  path: '/',
                  query: {
                    id: 0
                  }
                });
              },2000)
            } else if (res.data.code == 40011) {
              _this.enterToast('您的账号被冻结，请联系管理员')
            } else {
              _this.enterToast('服务异常，请稍后再试')
            }
          })
      },

      // 昵称=============================================================
      // 昵称验证
      verifyName() {
        // 判断汉字，字母，数字，下划线
        if (!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(this.name.newName)) {
          this.name.verifyNameShow = true;
          return false
        } else {
          this.name.verifyNameShow = false;
        }
        // 判断字节数
        var realLength = 0;
        for (var i = 0; i < this.name.newName.length; i++) {
          var charCode = this.name.newName.charCodeAt(i);
          if (charCode >= 0 && charCode <= 128) {
            realLength += 1;
          } else {
            realLength += 2;
          }
        }
        if (realLength > 14) {
          this.name.verifyNameShow = true;
          return false
        } else {
          this.name.verifyNameShow = false;
          return true
        }
      },
      // 提交
      modifyName() {
        // 提交修改 调接口----------------
        var _this = this;
        if(this.verifyName()){
          this.$indexServer.nickname(_this.name.newName)
            .then((res) => {
              if (res.data.code == 200) {
                _this.enterToast('修改成功')
                _this.getUser();
                setTimeout(()=>{
                  location.reload();
                  _this.name.nameShow = false
                },2000)
              }else if(res.data.code==4010){
                _this.enterToast('登录超时，请重新登陆')
                setTimeout(()=>{
                  _this.$router.push({
                    path: '/',
                    query: {
                      id: 0
                    }
                  });
                },2000)
              } else if (res.data.code == 40011) {
                _this.enterToast('您的账号被冻结，请联系管理员')
              } else {
                  _this.enterToast('服务异常，请稍后再试')
              }
          })
        }

      },

      // 电话号码==========================================================
      // 号码验证
      verifyPhone() {
        if (!/^1[3|4|5|7|8][0-9]{9}$/.test(this.phone.newPhone)) {
          this.phone.verifyPhoneShow = true;
        } else {
          this.phone.verifyPhoneShow = false;
          this.getCheck(); //发送验证码
        }
      },
      // 获取验证码
      getCheck() {
        var _this = this;
        // 调接口------------------
        this.$indexServer.validateCode(_this.phone.newPhone)
          .then((res) => {
            if (res.data.code == 200) {
              _this.phone.checkBtnShow = false;
              var timer = setInterval(() => {
                _this.phone.time--;
                if (_this.phone.time <= 0) {
                  _this.phone.checkBtnShow = true;
                  _this.phone.time = 30;
                  clearInterval(timer);
                }
              }, 1000)
              _this.timer = timer
            }else if(res.data.code==400){
              _this.enterToast('验证码发送失败')
            }else if(res.data.code==500){
              _this.enterToast('验证码发送次数超限，请稍后再试')
            } else if (res.data.code == 40011) {
              _this.enterToast('您的账号被冻结，请联系管理员')
            } else {
              _this.enterToast('验证码发送失败')
            }
          })
      },
      // cookie======================
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
        // 提交
      modifyPhone() {
        var _this = this;
        this.phone.checkNumShow=false
        this.phone.checkAvilabelShow=false
        if (!/^1[3|4|5|7|8][0-9]{9}$/.test(this.phone.newPhone)) {
          this.phone.verifyPhoneShow = true;
        } else {
          this.phone.verifyPhoneShow = false;
          if(this.phone.checkNum.length==0){
            this.phone.checkNumShow=true
          }else{
            this.phone.checkNumShow=false
             // 提交修改 调接口------------
            this.$indexServer.mobile(_this.phone.newPhone, _this.phone.checkNum)
              .then((res) => {
                if (res.data.code == 200) {
                  // _this.getUser();
                  _this.enterToast('修改成功，跳转至登录页')
                  _this.delCookie('phone')
                  _this.delCookie('password')
                  _this.delCookie('nickname')
                  _this.delCookie('headUrl')
                  setTimeout(()=>{
                    _this.phone.phoneShow = false
                    _this.$router.push({path:'/Login'});
                    location.reload();
                  },2000)
                }else if(res.data.code==4008||res.data.code==4009){
                  _this.phone.checkNumShow=true
                }else if(res.data.code==40010){
                  _this.phone.checkAvilabelShow=true
                }else if(res.data.code==4010){
                  _this.enterToast('登录超时，请重新登陆')
                  setTimeout(()=>{
                    _this.$router.push({
                      path: '/',
                      query: {
                        id: 0
                      }
                    });
                  },2000)
                } else if (res.data.code == 40011) {
                  _this.enterToast('您的账号被冻结，请联系管理员')
                } else {
                  _this.enterToast('服务异常，请稍后再试')
                }
              })
            }
          }
      },
      // 密码修改=====================================================
      // 验证
      verifyPsd(msg) {
        if (msg === 'newPsd') {
          if (
            //   密码验证
            this.password.newPsd.indexOf(" ") !== -1 ||
            this.password.newPsd.length < 6 ||
            this.password.newPsd.length > 14
          ) {
            this.password.newPsdShow = true;
            return false;
          } else {
            this.password.newPsdShow = false;
            return true;
          }
        } else if (msg === 'newPsdAgain') {
          //   确定新密码
          if (this.password.newPsdAgain != this.password.newPsd) {
            this.password.newPsdAgainShow = true;
            return false
          } else {
            this.password.newPsdAgainShow = false;
            return true
          }
        }
      },
      // 提交
      modifyPsd() {
        this.password.originalPsdShow = false
        if(this.password.originalPsd.length==0){
          this.password.originalPsdShow1 = true
        }else{
          this.password.originalPsdShow1 = false
          if(this.verifyPsd('newPsd')){
            if(this.verifyPsd('newPsdAgain')){
              // 调接口--------------
              // alert(1)
              var _this = this;
              this.$indexServer.passwd(_this.password.originalPsd, _this.password.newPsd)
                .then((res) => {
                  if (res.data.code == 200) {
                    _this.enterToast('修改成功，跳转至登录页')
                    _this.delCookie('phone')
                    _this.delCookie('password')
                    _this.delCookie('nickname')
                    _this.delCookie('headUrl')
                    setTimeout(()=>{
                      _this.password.passwordShow = false;
                      _this.$router.push({path:'/Login'});
                      location.reload();
                    },2000)
                  } else if (res.data.code == 4007) {
                    _this.password.originalPsdShow = true//密码输入有误
                  }else if(res.data.code==4010){
                    _this.enterToast('登录超时，请重新登陆')
                    setTimeout(()=>{
                      _this.$router.push({
                        path: '/',
                        query: {
                          id: 0
                        }
                      });
                    },2000)
                  } else if (res.data.code == 40011) {
                    _this.enterToast('您的账号被冻结，请联系管理员')
                  } else {
                    _this.enterToast('服务异常，请稍后再试')
                  }
                })
            }
          }
        }

      },
      enterToast(text, time) {
        var toast = document.getElementById("toast4");
        // console.log(toast)
        if (toast) {
          toast.innerHTML = text;
          this.toastShow = true;
          setTimeout(() => {
            this.toastShow = false;
          }, 2000 || time);
        }
      }

    }
  }

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrap {
    margin-bottom: 5px;
  }

  .btn {
    display: block;
    margin: 30px auto 10px auto;
    width: 120px;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }

  .avatar {
    display: block;
    width: 200px;
    margin: 10px auto;
  }
  .account {
    margin 0 15%
    padding 0 20px
    min-width 1024px
    box-sizing border-box
  }

  .aside {
    height: 130px;
    width: 147px; // border: 1px solid #d2d2d2;
    position: fixed;
    top: 105px;
    right 85%
    box-shadow: 0px 0px 10px #D6D6D6;

    ul {
      height: 100%;
      width: 100%;
      display: flex;
      display: -webkit-flex;
      flex-direction: column;

      li {
        flex: 1;
        border-bottom: 1px solid rgb(210, 210, 210);
        background-color: #ffffff;

        a {
          font-family: 'PingFangSC-Regular';
          font-size: 18px;
          color: rgb(1, 0, 25);
          display: flex;
          display: -webkit-flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
        }
      }

      li:last-child {
        border: none;
      }

      .active {
        background-color: rgb(249, 85, 63);
        transition: background 0.5s;

        a {
          color: #ffffff;
        }
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .content {
    margin: 21px 0 28px 0;
    min-width: 950px;
    background-color: #fff;
    font-family: PingFangSC-Regular;
    box-shadow: 0px 0px 10px #D6D6D6;

    .title {
      height: 90px;
      background-color: #DDDDDD;
      padding: 39px 0 0 48px;
      box-sizing: border-box;
      font-size: 24px;
      color: rgb(0, 1, 32);
    } // 分割线
    .line {
      height: 1px;
      width: 90%;
      margin: 0 auto 41px;
      background-color: rgb(220, 220, 220);
    }

    .header {
      overflow: hidden;

      .left {
        float: left;

        .left_top {
          overflow: hidden;
          margin-left: 91px;

          label {
            font-size: 20px;
            color: rgb(0, 1, 32);
            float: left;
            margin-top: 84px;
          }

          .img {
            height: 112px;
            width: 112px;
            margin: 30px 0 29px 22px;
            float: left;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .imgUpload {
            // height: 138px;
            // width: 138px;
            margin: 30px 0 29px 13px;
            float: left;
            background-color: pink;
          }
        }

        .left_foot {
          p {
            font-size: 16px;
            color: rgb(170, 170, 170);
            margin: 0 0 16px 100px;
          }
        }
      }

      .right {
        float: right;
        margin-right: 86px;
        margin-top: 81px;

        .modifyImg {
          cursor: pointer;
          font-size: 18px;
          color: rgb(249, 85, 63);
          background: url('./edit.png') no-repeat left;
          padding-left: 28px;
        }

        a {
          cursor: pointer;
          font-size: 18px;
          color: rgb(249, 85, 63);
        }

        a:nth-child(4) {
          margin-left: 31px;
        }

        a:nth-child(5) {
          margin-left: 31px;
          margin-right: 38px;
        }
      }
    }

    .name,
    .phone,
    .password {
      overflow: hidden;

      .left {
        float: left;
        margin-left: 92px;

        label {
          font-size: 20px;
          color: rgb(0, 1, 32);
        }

        p {
          font-size: 16px;
          color: rgb(170, 170, 170);
          margin: 12px 0 35px 0;
        }
      }

      .right {
        float: right;

        a {
          cursor: pointer;
          font-size: 18px;
          color: rgb(249, 85, 63);
          background: url('./edit.png') no-repeat left;
          padding: 0 194px 0 28px;
        }
      }
    } // 修改昵称
    .nameModify,
    .phoneModify,
    .passwordModify {
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.7);

      .main {
        height: 354px;
        width: 537px;
        background-color: #fff;
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        .close {
          position: absolute;
          top: -28px;
          right: -28px;
        }

        .name_title {
          font-size: 20px;
          color: rgb(0, 1, 32);
          text-align: center;
          padding: 32px 0;
        }

        .line {
          margin: 0 auto;
        }

        .name_name,
        .name_phone {
          font-size: 18px;
          color: rgb(87, 87, 87);
          padding: 29px 0 21px 61px;
        }

        .name_phone {
          padding: 0 0 23px 61px;
        }

        .name_modify {
          padding-left: 61px;
          font-size: 18px;
          color: rgb(87, 87, 87);

          input {
            height: 46px;
            width: 303px;
            border: 1px solid rgb(229, 229, 229);
            outline: none;
            margin-left: 15px;
            padding-left: 8px;
            box-sizing: border-box;
          }

          .warn {
            height: 40px;
            overflow: hidden;

            p {
              width: 303px;
              font-size: 12px;
              color: rgb(249, 85, 63);
              margin: 9px 0 7px 116px;
              padding-left: 15px;
              background: url('./mark.png') no-repeat left top;
              box-sizing: border-box;
            }
          }
        }

        .btn_box {
          display: flex;
          justify-content: center;

          button {
            height: 46px;
            width: 201px;
            border: none;
            outline: none;
            color: #ffffff;
            font-size: 16px;
            font-family: 'AdobeHeltlStd_regular';
            cursor: pointer;
          }

          .cancel {
            background-color: rgb(179, 179, 179);
            margin-right: 10px;
          }

          .sure {
            background-color: rgb(249, 85, 63);
          }
        }
      }
    } // 修改手机号
    .phoneModify {
      .main {
        height: 408px;

        .phone_modify,
        .phone_checkNum {
          padding-left: 61px;
          font-size: 18px;
          color: rgb(87, 87, 87);

          input {
            height: 46px;
            width: 312px; // width 165px
            border: 1px solid rgb(229, 229, 229);
            outline: none;
            margin-left: 15px;
            padding-left: 8px;
            box-sizing: border-box;
          }

          .warn {
            height: 25px;

            p {
              // width 303px
              line-height: 25px;
              font-size: 12px;
              color: rgb(249, 85, 63);
              margin-left: 99px;
              padding-left: 15px;
              background: url('./mark.png') no-repeat left center;
            }
          }
        }

        .phone_checkNum {
          padding-left: 78px;
          input {
            width: 165px;
          }

          button {
            height: 46px;
            width: 145px;
            outline: none;
            border: none;
            background-color: rgb(249, 85, 63);
            color: #fff;
            font-size: 16px;
          }
        }
      }
    } // 修改登录密码
    .passwordModify {
      .main {
        height: 503px;

        label {
          display: inline-block;
          width: 95px;
        }

        .name_modify {
          .warn {
            height: 25px;
          }
        }

        #newPsd {
          height: 40px;
        }

        .btn_box {
          margin-top: 15px;
        }
      }
    }
  }

</style>

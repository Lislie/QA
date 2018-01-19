<style lang="stylus" rel="stylesheet/stylus">
html, body {
  background-color: black !important
  width: 100%;
  // height auto
  /*overflow: auto;*/
}
.el-dropdown-menu__item{
  color #fff
}
.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: red !important
  color: #fff !important
}

// .el-container
// height 100%
.el-header, .el-footer {
  margin: 0 15%;
  // background-color black
  // width 6.25rem
  color: #fff;
  // text-align c
  min-width: 1024px;
  // height 84px
  display: flex;
  justify-content: space-between;

  #h-left {
    display: flex;
    height: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    cursor:pointer;

    span {
      width: 75px;
      height: 36px;
      background: url('./assets/e.png') no-repeat no-repeat;
      background-size: 100%;
      margin-right: 15px;

      #title {
        display: flex;
        // float left
        flex-direction: column;
      }
    }

    .t1 {
      font-size: 22px;
      color: #fefeff
      padding-bottom: 10px;
    }

    .p1 {
      font-size: 10px;
    }
  }

  #h-right {
    display: flex;
    height: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;

    p {
      margin-right: 44px;
    }

    #dh {
      width: 16px;
      height: 16px;
      background: url('./assets/phone.png') no-repeat no-repeat;
      background-size: 100%;
      margin-right: 8px;
    }

    #bz {
      width: 24px;
      height: 24px;
      background: url('./assets/bz.png') no-repeat no-repeat;
      background-size: 100%;
      margin-left: 22px;
      cursor:pointer;

    }

    .popper__arrow{
      background-color black !important
    }


    .el-dropdown-link {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      color: #fff
      /*width 100px*/
      float left
      .headerImg {
        height: 37px;
        width: 37px !important
        margin-right: 11px;
        border-radius 50%
        overflow hidden
        img {
          width: 100%;
          height: 100%;
          margin-bottom: 26px;
        }
      }
      span {
        display flex
        float right
        text-align: center;
        justify-content: center;
        left 0
        right 0
        top 0
        bottom 0
        align-items: center;
        margin-right: 0px;
        margin-top:15px
      }
    }
  }
}
.el-main{
  overflow hidden !important
  .content {
    width: 100%;
    height: 100%;
    min-width: 1024px;
    color: #fff;
    font-family: 'STYuanti-SC-Regular';
  }

  .index1 {
    height: 100%;
    width: 100%;
    // min-height 60px
    background: url('./assets/banner.png') no-repeat no-repeat;
    overflow: hidden;

    .title1 {
      text-align: center;
      padding-top: 70px;

      h2 {
        font-size: 50px;
        // padding-bottom 32px
      }

      .tp1 {
        padding-bottom: 24px;
        font-size: 36px;
      }

      .tp2 {
        padding-bottom: 93px;
        font-size: 22px;
      }

      .s1 {
        font-size: 36px;
        color: #f1c224;
        margin: 0 15px;
        text-align: center;
      }

      img {
        // padding-top 10px
        position: relative;
        top: 20px;
      }
    }

    .cont1 {
      text-align: center;
      display: flex;
      justify-content: center;
      padding-bottom: 87px;
      overflow: hidden;

      li {
        display: flex;
        // text-align center
        margin-right: 62px;

        span {
          width: 66px;
          height: 66px;
          display: inline-block;
          margin-right: 21px;
        }

        p {
          font-size: 34px;
        }

        .p2 {
          padding-top: 15px;
          font-size: 18px;
        }

        .sp1 {
          background: url('./assets/dz.png') no-repeat no-repeat;
          background-size: 100%;
        }

        .sp2 {
          background: url('./assets/cy.png') no-repeat no-repeat;
          background-size: 100%;
        }

        .sp3 {
          background: url('./assets/wt.png') no-repeat no-repeat;
          background-size: 100%;
        }

        .sp4 {
          background: url('./assets/ls.png') no-repeat no-repeat;
          background-size: 100%;
        }
      }
    }

    .btn1 {
      text-align: center;
      margin: 0 auto;
      display: flex;
      width: 288px;
      height: 69px;
      background-color: red;
      margin-bottom: 86px;
      // overflow hidden
      color: #fefefe;
      font-size: 30px;
      font-family: 'PingFangSC-Regular';
      justify-content: center;
    }
  }

  .index2 {
    width: 100%;
    height: 870px;
    background-color: #fff;

    h2 {
      font-size: 36px;
      color: black;
      text-align: center;
      padding: 108px 0 103px 0;
      // position relative
    }

    .line {
      height: 13px;
      width: 1200px;
      background: url('./assets/jx.png') no-repeat;
      text-align: center;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      top: -125px;
    }

    .benner {
      width: 100%;
      height: 400px;
      background-color: #dedede;
      // margin-top 62px
    }

    ul {
      display: flex;
      // text-align center
      margin: 0 auto;
      justify-content: center;
      position: relative;
      top: -450px;

      li {
        width: 348px;
        height: 501px;
        background-color: red;
        margin: 0 40px;
      }

      .l1 {
        background: url('./assets/zx.png') no-repeat;
        background-size: 100%;

        p {
          width: 100%;
          height: 60px;
          background-color: rgba(1, 0, 25, 0.78);
          text-align: center;
          line-height: 60px;
          font-size: 24px;
          position: relative;
          top: 380px;
        }
      }

      .l3 {
        background: url('./assets/lx.png') no-repeat;
        background-size: 100%;

        p {
          width: 100%;
          height: 60px;
          background-color: rgba(1, 0, 25, 0.78);
          text-align: center;
          line-height: 60px;
          font-size: 24px;
          position: relative;
          top: 380px;
        }
      }

      .l2 {
        background: url('./assets/img2.png') no-repeat;

        // background-size 150%
        .l2_cont {
          margin: 105px 60px;

          h3 {
            font-size: 24px;
            margin-bottom: 50px;
          }

          p {
            font-size: 16px;
            margin-bottom: 40px;
            line-height: 30px;
          }
        }
      }
    }
  }

  .index3 {
    // display flex
    width: 100%;
    height: 729px;
    background: url('./assets/banner2.png') no-repeat;
    // background-size 100%
    overflow: hidden;
    color: #fff;

    // flex-direction column
    // text-align center
    h2 {
      font-size: 36px;
      text-align: center;
      margin: 108px 0 72px 0;
      // position relative
    }

    .line {
      height: 13px;
      width: 1200px;
      background: url('./assets/line2.png') no-repeat;
      text-align: center;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      top: -100px;
    }

    ul {
      display: flex;
      // text-align center
      margin: 0 auto;
      justify-content: center;

      li {
        width: 381px;
        height: 444px;
        border: 1px solid;
        margin: 0 75px;
        display: flex;
        flex-direction: column;
        text-align: center;
      }

      .l1 {
        span {
          display: block;
          width: 66px;
          height: 70px;
          background: url('./assets/sy.png') no-repeat;
          margin: 31px auto 18px;
        }

        h3 {
          font-size: 24px;
          margin-bottom: 68px;
        }

        p {
          font-size: 16px;
          margin: 0 25px 50px;
        }
      }

      .l2 {
        height: 351px;

        span {
          display: block;
          width: 66px;
          height: 70px;
          background: url('./assets/rw.png') no-repeat;
          margin: 31px auto 18px;
        }

        h3 {
          font-size: 24px;
          margin-bottom: 68px;
        }

        p {
          font-size: 16px;
          margin: 0 25px 50px;
        }
      }
    }
  }

  .index4 {
    // display flex
    width: 100%;
    height: 787px;
    overflow: hidden;
    color: black;
    background-color: #fff;

    // flex-direction column
    // text-align center
    h2 {
      font-size: 36px;
      text-align: center;
      margin: 108px 0 50px 0;
      // position relative
    }

    .line4 {
      height: 13px;
      width: 1200px;
      background: url('./assets/line3.png') no-repeat;
      text-align: center;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      top: -70px;
    }

    ul {
      display: flex;
      // margin: 0 auto;
      justify-content: center;
      height: 300p;

      .cent4 {
        width: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      li {
        width: 200px;
        margin: 0 25px;
        font-size: 18px;
        position: relative;

        span {
          width: 78px;
          height: 78px;
          display: block;
          font-size: 30px;
          margin: 0 auto 45px;
        }

        p {
          line-height: 26px;
        }

        .sp {
          width: 12px;
          height: 22px;
          background: url('./assets/jt.png') no-repeat;
          background-size: 100%;
          float: right;
          position: absolute;
          top: 75px;
          right: 0;
        }

        .sp1 {
          background: url('./assets/zc2.png') no-repeat;
          background-size: 100%;
        }

        .sp2 {
          background: url('./assets/dj.png') no-repeat;
          background-size: 100%;
        }

        .sp3 {
          background: url('./assets/hd.png') no-repeat;
          background-size: 100%;
        }

        .sp4 {
          background: url('./assets/dd.png') no-repeat;
          background-size: 100%;
        }

        .sp5 {
          background: url('./assets/sy2.png') no-repeat;
          background-size: 100%;
        }
      }
    }

    .btn2 {
      text-align: center;
      margin: 122px auto;
      display: flex;
      width: 288px;
      height: 69px;
      background-color: red;
      margin-bottom: 86px;
      // overflow hidden
      color: #fefefe;
      font-size: 30px;
      font-family: 'PingFangSC-Regular';
      justify-content: center;
    }
  }
}
.el-footer {
  height: 320px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: center;
  justify-content: center;
  align-items: center;

  #f-top {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;

    p {
      margin-right: 50px;
    }
  }
}

#h_x {
  width: 100%;
  display: flex;
  height: 100%;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  color: #fff;
  h3{
    cursor:pointer;

  }
  #title_x {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    .p1 {
      display: inline-block;
      font-size: 26px;
      margin-right: 66px;
    }

    .p2 {
      display: inline-block;
      font-size: 26px;
      color: #f97564;
    }

    .t2 {
      text-align: center;
      margin-bottom: 8px;
    }

    .s1 {
      width: 44px;
      height: 30px;
      display: inline-block;
      background: url('./assets/big.png') no-repeat;
      background-size: 100%;
      margin-right: 10px;
    }
  }
}

.el-main {
  padding: 0;
  background-color: #fff;
  min-height: 800px;
  overflow hidden !important
}
  .is-opened{
    background-color red !important
  }
  .span_ex{
    width 70px
    height: 100%
    display: block
  }
  .popper__arrow{
    /*background-color black !important*/
    /*z-index 1000*/
    /*overflow hidden*/
  }
</style>

<template>
  <el-container>
  <toast id="toast" v-show="toastShow" style="z-index:999;top:200px"></toast>
  <el-header style="height:84px" v-show="que">
    <div id='h-left' @click="sy">
      <span ></span>
      <div id="title">
        <h1 class="t1">逸途-旅游问答社区{{aaa}}</h1>
        <p class="p1">EASYTO TOURISM KNOWLEDGE</p>
      </div>
    </div>
    <div id="h-right">
      <span id="dh"></span>
      <p>400-178-6881</p>
      <!--<el-menu-->
        <!--class="el-menu-demo"-->
        <!--mode="horizontal"-->
        <!--@select="handleSelect"-->
        <!--background-color="black"-->
        <!--text-color="#fff"-->
        <!--style="border: 0"-->
        <!--v-show="login1"-->
         <!--&gt;-->
        <!--<el-submenu  style="border: 0">-->

          <!--<router-link  class="tab-item" to="/myQuestion">-->
          <!--<el-menu-item style="border: 0">-->
              <!--<span>我的问答</span>-->
          <!--</el-menu-item>-->
          <!--</router-link>-->
          <!--<router-link  class="tab-item" to="/myEarnings">-->
          <!--<el-menu-item >-->
              <!--<span>我的收益</span>-->
          <!--</el-menu-item>-->
          <!--</router-link>-->
          <!--<router-link  class="tab-item" to="/feedBack">-->
          <!--<el-menu-item >-->
              <!--<span>意见反馈</span>-->
         <!--</el-menu-item>-->
          <!--</router-link>-->
          <!--<router-link  class="tab-item" to="/account">-->
          <!--<el-menu-item >-->
              <!--<span>账户安全</span>-->
        <!--</el-menu-item>-->
          <!--</router-link>-->
          <!--<router-link  class="tab-item" to="/">-->
          <!--<el-menu-item  @click="exit">-->
              <!--<span>退出</span>-->
           <!--</el-menu-item>-->
          <!--</router-link>-->
        <!--</el-submenu>-->
      <!--</el-menu>-->
      <el-dropdown v-show="Login" style="color: #fff;cursor:pointer;background-color: black">
        <span class="el-dropdown-link" style="display: block;background-color: black">
            <img class="headerImg" :src="headUrl" />
            <span>{{nickname}}</span>
        </span>
        <el-dropdown-menu slot="dropdown" style="margin-top: 30px;background-color: black;border: 0;">
          <router-link  class="tab-item" to="/myQuestion">
            <el-dropdown-item style="color:#fff">我的回答 &nbsp;{{answerNum}}</el-dropdown-item>
          </router-link>
          <router-link  class="tab-item" to="/myEarnings">
            <el-dropdown-item style="color:#fff">我的收益</el-dropdown-item>
          </router-link>
          <router-link  class="tab-item" to="/feedBack">
            <el-dropdown-item style="color:#fff">意见反馈</el-dropdown-item>
          </router-link>
          <router-link  class="tab-item" to="/account">
            <el-dropdown-item style="color:#fff">账户安全</el-dropdown-item>
          </router-link>
          <router-link  class="tab-item" to="/" @click="exit">
          <el-dropdown-item @click="exit">
            <span @click="exit" class="span_ex" style="color:#fff">退出</span>
          </el-dropdown-item>
          </router-link>
        </el-dropdown-menu>
      </el-dropdown>
      <div v-show="!Login" class="h-left">
        <router-link  to="/Login">
          <span style="color:#fff">登录</span>
        </router-link>
        <span>|</span>
        <router-link  to="/register">
           <span style="color:#fff">注册</span>
        </router-link>
      </div>
      <span id='bz' @click="yjfk()"></span>
    </div>
  </el-header>
   <el-header style="height:84px" v-show="!que">
    <div id='h_x'>
      <div id="title_x">
        <h2 class="t1">本次你已答题: <p class="p1">{{answerCount}}</p></h2>
        <h2 class="t2">预计得到收益: <span class="s1"></span><p class="p2">{{anticipatedIncome}}</p></h2>
      </div>
      <h3 @click="ext">退出答题</h3>
    </div>
  </el-header>
  <!--<el-main v-show="indexShow" style="padding: 0">-->
    <!--<div class="content">-->
      <!--<div class="index1">-->
        <!--<div class="title1">-->
          <!--<h2>旅游问答回享计划</h2>-->
          <!--<p class="tp1">回答旅游问题即可获得<span class="s1">现金<img src="./assets/baibaoixnagjizi.png" alt=""></span>收益</p>-->
          <!--<p class="tp2">你的每一个问答都有可能帮助到无数出游者</p>-->
        <!--</div>-->
        <!--<ul class="cont1">-->
          <!--<li>-->
            <!--<span class="sp1"></span>-->
            <!--<div>-->
              <!--<p>¥{{totalMoney}}</p>-->
              <!--<p class="p2">答主回享总额</p>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li>-->
            <!--<span class="sp2"></span>-->
            <!--<div>-->
              <!--<p>{{totalUser}}</p>-->
              <!--<p class="p2">参与答主</p>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li>-->
            <!--<span class="sp3"></span>-->
            <!--<div>-->
              <!--<p>{{totalAnswer}}</p>-->
              <!--<p class="p2">已回答问题</p>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li>-->
            <!--<span class="sp4"></span>-->
            <!--<div>-->
              <!--<p>82768</p>-->
              <!--<p class="p2">历史帮助游客</p>-->
            <!--</div>-->

          <!--</li>-->
        <!--</ul>-->
        <!--<el-button  type="danger" class="btn1" @click="myQuen">立即答题</el-button>-->
      <!--</div>-->
      <!--<div class="index2">-->
        <!--<h2>答主是谁</h2>-->
        <!--<div class="line"></div>-->
        <!--<div class="benner"></div>-->
        <!--<ul>-->
          <!--<li class="l1">-->
            <!--<p>-->
              <!--在校大学生-->
            <!--</p>-->
          <!--</li>-->
          <!--<li class="l2">-->
            <!--<div class="l2_cont">-->
              <!--<h3>职场小生</h3>-->
              <!--<p>1.善于利用互联网搜索想要的答案，噼里啪啦键盘侠。</p>-->
              <!--<p>2.有精力、有活力，愿意和一群小伙伴儿一起参与网上发布的各种有趣活动。</p>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li class="l3">-->
            <!--<p>旅行爱好者</p>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
      <!--<div class="index3">-->
        <!--<h2>答主收益及义务</h2>-->
        <!--<div class="line"></div>-->
        <!--<ul>-->
          <!--<li class="l1">-->
            <!--<span></span>-->
            <!--<h3>答主收益</h3>-->
            <!--<p>1.通过答题赚到实实在在的现金钞票~,支持随时提现。</p>-->
            <!--<p>2.在回答各种旅游问题的同时，学习很多的相关知识,赚钱学习两不误。</p>-->
            <!--<p>3.帮助更多爱好旅行的人,让更多的人认识你~</p>-->
          <!--</li>-->
          <!--<li class="l2">-->
            <!--<span></span>-->
            <!--<h3>答主义务</h3>-->
            <!--<p>1.认真回答每一个问题。</p>-->
            <!--<p>2.回答更多平台的问题~</p>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
      <!--<div class="index4">-->
        <!--<h2>我该如何做</h2>-->
        <!--<div class="line4"></div>-->
        <!--<ul>-->
          <!--<li>-->
            <!--<div class="cent4">-->
              <!--<span class="sp1"></span>-->
              <!--<p>免费注册并登录问答账号</p>-->
            <!--</div>-->
            <!--<span class="sp"></span>-->
          <!--</li>-->
          <!--<li>-->
            <!--<div class="cent4">-->
              <!--<span class="sp2"></span>-->
              <!--<p>点击"立即答题"获取问题</p>-->
            <!--</div>-->
            <!--<span class="sp"></span>-->
          <!--</li>-->
          <!--<li>-->
            <!--<div class="cent4">-->
              <!--<span class="sp3"></span>-->
              <!--<p>拿到问题后，认真回答问题。</p>-->
              <!--<p>答案可依据自己的旅行经验,或者旅游网站、搜索引擎进行获取</p>-->
            <!--</div>-->
            <!--<span class="sp"></span>-->
          <!--</li>-->
          <!--<li>-->
            <!--<div class="cent4">-->
              <!--<span class="sp4"></span>-->
              <!--<p>提交自己的回答,等待平台审核。</p>-->
              <!--<p>问题可以点击"下一题"进行持续作答，实在找不到答案的可以跳过~</p>-->
            <!--</div>-->
            <!--<span class="sp"></span>-->
          <!--</li>-->
          <!--<li>-->
            <!--<div class="cent4">-->
              <!--<span class="sp5"></span>-->
              <!--<p>审核通过，获得收益。手可随时提现</p>-->
            <!--</div>-->
            <!--<span class="sp"></span>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<el-button  type="danger" class="btn2" @click="myQuen">立即答题</el-button>-->
      <!--</div>-->
    <!--</div>-->
  <!--</el-main>-->
  <el-main style="padding: 0">
    <keep-alive>
      <router-view v-if="isRouterAlive" v-on:title="changeTitle" v-on:que="changeE" v-on:login="loge"></router-view>
    </keep-alive>
  </el-main>
  <el-footer style="height:223px">
    <div id="f-top">
      <p>北京市朝阳区酒仙桥路4号海航大厦</p>
      <p>Tel: &nbsp;&nbsp; 400-178-6881</p>
      <p>email: &nbsp;&nbsp; server@easyto.com </p>
      <p>ZipCode: 100020</p>
    </div>
    <p>Copyright 2016 easyto.com 京ICP备17072331号</p>
  </el-footer>
    <!--<el-button  @click="open4"></el-button>-->

  </el-container>
</template>

<script>
import toast from './components/toast/toast'
import ElMain from "element-ui/packages/main/src/main";
export default {
  components: {
    ElMain,
    toast },
  data() {
    return {
      isRouterAlive:true,
      Login: false,
      activeIndex: '1',
      activeIndex2: '1',
      toastShow: false,
      nickname: '',//用户名
      headUrl: '',//头像
      que: true,
      totalUser: '',
      totalMoney: '',
      totalAnswer: '',
      indexShow:true,
      olderShow:false,
      answerCount:'',
      anticipatedIncome:'',
      answerNum:'',
      aaa:''

    }
  },
  watch: {
    $route: {
      handler(curVal, oldVal) {
        if(curVal.query.id==1){
          this.Login=true
          this.nickname=this.getCookie('nickname')
          this.headUrl=this.getCookie('headUrl')
          this.$indexServer.auditHeader()
            .then((res) => {
              if (res.data.code === 200) {
                let data = res.data.data
                this.answerNum = data.answerNum
              }
            })
        }else if(curVal.query.id==0){
          this.Login=false
          this.delCookie('phone')
          this.delCookie('password')
          this.delCookie('nickname')
          this.delCookie('headUrl')
        }

      },
      deep: true
    }
  },
  created() {
    this.initLog()
    this.loginQue()
    this.rot()
    // this.$root.reload()
    this.reload()

    this.$indexServer.headData()
      .then((res) => {
        console.log(res)
        if (res.data.code === 200) {
          let data = res.data.data
          this.totalAnswer = data.totalAnswer
          this.totalMoney = data.totalMoney
          this.totalUser = data.totalUser
          console.log(this.totalAnswer, this.totalUser)
        }
        if(res.data.code === 400){
          this.open4()
          this.$router.push({ name: 'Login' });
          this.que = true
          this.login = false


        }
      })
    this.$indexServer.auditHeader()
      .then((res) => {
        if (res.data.code === 200) {
          let data = res.data.data
          this.answerNum = data.answerNum
        }
        // if(res.data.code === 400){
        //   this.open4()
        //   this.$router.push({ name: 'Login' });
        //   this.que = true
        //   this.login = false
        // }
        // if(res.data.code === 400){
        //   this.open4()
        //   this.$router.push({ name: 'Login' });
        //   this.que = true
        //
        //
        // }
      })
    // this.$indexServer.newQuestion()
    //   .then((res) => {
    //     if (res.data.code === 200) {
    //       let data = res.data.data
    //       console.log(res.data.data)
    //       this.answerCount = data.answerCount
    //       this.anticipatedIncome = data.anticipatedIncome
    //     }
    //   })
  },
  beforeRouteLeave (to, from, next) {
    this.$indexServer.auditHeader()
      .then((res) => {
        if (res.data.code === 200) {
          let data = res.data.data
          this.answerNum = data.answerNum
        }
      })
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next()
  },

  methods: {
    loge(e){
      this.Login = e
    },
    open4(){
      this.$message({
        message: '登录超时，请重新登录！',
        type: 'warning'
      });
    },
    changeE(a){
      this.que = a
    },
    changeTitle({a,b,c}){
      console.log(a)
      this.answerCount= a
      this.anticipatedIncome = b
      this.que = c
      // this.anticipatedIncome = z
    },
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => {this.isRouterAlive = true})
    },
    yjfk(){
      this.$router.push('/help')
    },
    sy(){
      this.$router.push('/')

    },

    ext() {
      this.que = true
      this.$indexServer.reset()
        .then((res) => {
          console.log(res.data)
          if(res.data.code === 400){
            this.open4()
            this.exit()
            this.que = true
            this.Login = false
            this.$router.push({ name: 'Login' });
          }
        })
      // this.$router.go(-1);
      this.que = true
      // this.$router.push('/');
      this.$router.push({ name: 'index' });

    },
    rot() {
      if (this.$route.path == '/quesTion') {
        this.que = false
      } else {
        this.que = true
      }
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    },
    // 查询是否是登录状态
    loginQue(){
      if(this.getCookie('nickname')&&this.getCookie('headUrl')){
        this.nickname=this.getCookie('nickname')
        this.headUrl=this.getCookie('headUrl')
        this.Login=true
      }else{
        this.Login=false
      }
    },

    // 退出登录========================================================
    exit() {
        // 调接口----------------
        let _this = this;
        // console.log('222')
        // _this.Login=false
      this.$indexServer.exit()
        .then((res)=>{
            if (res.data.code == 200 || res.data.code == 4010) {
              _this.Login=false
              _this.$router.push('/')

              _this.delCookie('phone')
              _this.delCookie('password')
              _this.delCookie('nickname')
              _this.delCookie('headUrl')
            }
            // else if(res.data.code == 4010){
            //     _this.enterToast('登录已过期，请重新登录',3000)
            //     _this.Login=false
            //     _this.delCookie('phone')
            //     _this.delCookie('password')
            //     _this.delCookie('nickname')
            //     _this.delCookie('headUrl')
            // }
            else if(res.data.code == 4006){
                _this.enterToast('该用户账号不存在')
            }else{
                _this.enterToast('服务异常，请稍后再试')
            }
        })
    },
    // 初始化登录状态
    initLog(){
      var _this = this
      //页面初始化时，如果帐号密码cookie存在则填充
      if(this.getCookie('phone') && this.getCookie('password')){
        // 调接口----------------
        this.$indexServer.loginByPassword (_this.getCookie('phone'), _this.getCookie('password'))
        .then((res)=>{
          // console.log(res.data)
          if(res.data.code==200){
            // _this.$router.push({path:'/',query:{id:1}});
            document.cookie="nickname="+res.data.data.nickname;
            document.cookie="headUrl="+res.data.data.headUrl;
            this.loginQue()
          }
        })
      }
    },
     // 获取cookie
    getCookie(name){
      var reg = RegExp(name+'=([^;]+)');
      var arr = document.cookie.match(reg);
      if(arr){
        return arr[1];
      }else{
        return '';
      }
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
    enterToast(text,time) {
      var toast = document.getElementById("toast");
      // console.log(toast)
      if (toast) {
        toast.innerHTML = text;
        this.toastShow = true;
        setTimeout(() => {
          this.toastShow = false;
        }, 2000||time);
      }
    }

  },

}
</script>

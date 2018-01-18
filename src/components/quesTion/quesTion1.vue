<style scoped lang="stylus" rel="stylesheet/stylus">
.myQ {
  margin: 42px 15%;
  display: flex;

  .left {
    // width: 100px;
    height: 100%;
    display: flex;
    font-size: 24px;
    color: #e7331b;
    flex-direction: row;

    .left_cont {
      display: flex;

      span {
        display: block;
        width: 37px;
        height: 27px;
        background: url('./jb.png') no-repeat;
        background-size: 100%;
      }

      p {
        margin: 0 30px 0 5px;
      }
    }
  }

  .content {
    width: 1024px;
    color: #000120;

    h2 {
      font-size: 26px;
      line-height 30px
      margin-bottom: 28px;
    }

    .p1 {
      // width: 100%;
      font-size: 18px;
      line-height: 30px;
    }

    .but {
      display: flex;
      font-size: 14px;
      color: #adadad;

      p {
        font-size: 14px;
        margin: 12px 12px 24px 0;
      }
    }

    .btn1 {
      width: 80px;
      height: 40px;
      background-color: #b3b3b3;
      font-size: 16px;
      color: #fff;
    }

    .fwb {
      margin-bottom: 20px;
    }

    .btn {
      margin-left: 800px;
    }

    .cg {
      display: flex;
      text-align: center;
      justify-content: center;

      .sp1 {
        width: 78px;
        height: 80px;
        display: block;
        background: url('./cg.png') no-repeat;
        background-size: 100%;
        margin-right: 11px;
      }

      .cg2 {
        display: inline-block;
        width: 37px;
        height: 27px;
        background: url('./jb.png') no-repeat;
        background-size: 100%;
      }

      .cg3 {
        color: red;
      }

      .cg4 {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: url('./time.png') no-repeat;
        background-size: 100%;
      }

      .cg5 {
        color: #0099f0;
      }

      .p3 {
        margin-top: 8px;
        font-size: 14px;
        color: #878787;
      }

      h3 {
        font-size: 20px;
        color: #0098f0;
      }

      p {
        font-size: 16px;
        color: #0098f0;
        margin-right: 10px;
      }
    }

    .cg2 {
      display: flex;
      text-align: center;
      justify-content: center;

      .sp2 {
        width: 75px;
        height: 75px;
        display: block;
        background: url('./sb.png') no-repeat;
        background-size: 100%;
        margin-right: 11px;
      }

      .p3 {
        margin-top: 8px;
        font-size: 14px;
        color: #878787;
      }

      p {
        font-size: 20px;
        color: #727272;
        margin-right: 10px;
      }

      .cg4 {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: url('./time.png') no-repeat;
        background-size: 100%;
      }

      .cg5 {
        color: #0099f0;
        margin-right: 10px;
      }
    }
  }

  .info {
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
  .myAnswer {
    background #ffefed
  }
  .errAnswer {
    .a_top {
      color #f9553f
      .lamp {
        width 28px
        height 28px
        background url("./error.png") no-repeat bottom
        background-size 86% auto
      }
      .a_times {
        color: #000120;
      }
    }
  }
  .keyAnswer {
    background: #e9e9e9;
    .a_top {
      .lamp {
        width 21px
        height 25px
        background url("./a_right.png") no-repeat center
        background-size 100% 100%
      }
    }
  }
  .bad {
    width: 988px;
    padding: 28px;
    background-color: #fff1f1;
    margin: 30px 0;

    .bad_t {
      display: flex;

      span {
        display: block;
        width: 23px;
        height: 23px;
        background: url('./x.png') no-repeat;
        background-size: 100%;
      }

      h2 {
        font-size: 20px;
        color: #e7331b;
        margin-left: 10px;
      }
    }

    .btn3 {
      text-align: center;
      display: flex;
      margin: 0 auto;
      color: #adadad;
    }

    .a_content {
      font-size: 18px;
      line-height: 30px;
    }

    .hideSome {
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .ck {
    width: 988px;
    padding: 28px;
    background-color: #e9e9e9;
    margin: 30px 0;

    .ck_t {
      display: flex;

      span {
        display: block;
        width: 21px;
        height: 25px;
        background: url('./da.png') no-repeat;
        background-size: 100%;
      }

      h2 {
        font-size: 20px;
        color: #000120;
        margin-left: 10px;
      }
    }

    .btn3 {
      text-align: center;
      display: flex;
      margin: 0 auto;
      color: #adadad;
    }

    .a_content {
      font-size: 18px;
      line-height: 30px;
    }

    .hideSome {
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .right {
    display: flex;
    align-items: center;
    margin-left: 40px;
    flex-direction: column;
    justify-content: center;
    margin-top: -160px

    .r1 {
      width: 58px;
      height: 58px;
      display: block;
      background: url('./wxz.png') no-repeat;
      background-size: 100%;
      cursor:pointer;

    }

    .r1:hover {
      width: 58px;
      height: 58px;
      display: block;
      background: url('./xz.png') no-repeat;
      background-size: 100%;
      cursor:pointer;
    }

    p {
      font-size: 16px;
      color: #3e3e3e;
      margin-top: 18px;
    }
  }
}

.fxh {
  display: flex;
  .fxh_center {
    width: 100%
    .fxh_1 {
      display: flex

    }
  }
  .cell {
    width 100%
    height:100%
    .fx_background{
      width:100%;
      height:100%;
      background: #000;
      position: absolute;
      -moz-opacity:0.5;
      opacity: 0.5;
    }
    .fx_container {
      width: 571px;
      height: 571px;
      background: #fff;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      .close {
        position: absolute;
        top: -32px;
        right: -32px;
        cursor: pointer;
      }
      .fx_head {
        width: 100%;
        height: 74px;
        line-height: 74px;
        text-align: center;
        background: #000;
        color: #f2f2f2;
        font-size: 20px;
      }
      .fx_body {
        box-sizing: border-box;
        padding: 20px 40px 0 39px;
        font-size: 14px;
        color: #000120;
        span {
          display: inline-block;
        }
        .num {
          margin-left: 6px;
        }
        .earn {
          margin-left: 22px;
        }

        .gold {
          margin-left: 6px;
          margin-right: 3px;
          position: relative;
          top: 2px;
        }
        .red {
          font-size: 18px;
          color: #f43333;
        }
        .fx_ico {
          height: 32px;
          margin-top: 14px;
          color: #010019;
          span {
            float: left;
            margin-top: 13px;
          }
          ul {
            height: 32px;
            float: left;
          }
          li {
            float: left;
            margin-left: 11px;
            margin-right: 15px;
            cursor: pointer;
            position: relative;
            list-style: none;
            .checkbox {
              width: 8px;
              height: 8px;
              border: 1px solid #bfbfbf;
              position: absolute;
              right: -12px;
              bottom: 4px;
              border-radius: 2px;
            }
            .checkbox.checked {
              border: 1px solid #f97564;
              background: #f97564;
            }
          }
        }
        textarea {
          resize: none;
          outline: none;
          box-sizing: border-box;
          width: 100%;
          height: 168px;
          background: #f5f5f5;
          border: 1px solid #dcdcdc;
          font-size: 16px;
          color: #010019;
          padding: 10px;
          margin-top: 14px;
          line-height: 25px;
        }
        .link {
          margin-top: 14px;
          margin-bottom: 10px;
         img {
            margin-left: 13px;
            position: relative;
            top: 3px;
          }
          .line {
            width: 1px;
            height: 10px;
            background: #bfbfbf;
            margin: 0 9px 0 6px;
          }
          a {
            text-decoration: none;
            color: #2179a2;
          }
        }
       .advert {
          margin-right: 5px;
        }

      }


      .btn {
        text-align: center;
        margin-top: 5px;
        button {
          outline: none;
          border: none;
          cursor: pointer;
          width: 131px;
          height: 38px;
          line-height: 38px;
          font-size: 15px;
          color: #fff;
          background: #f97564;
        }
        &:focus {
          background: #ea6554;
        }
      }
    }

  }

}
</style>

<template>
  <div class="myQ">
    <div class="hed"></div>
    <div class="left">
      <div class="left_cont">
        <span></span>
        <p>{{integralOrg}}</p>
      </div>
    </div>
    <div class="content" style="margin: 0">
        <h2>问题:{{question}}</h2>
        <p class="p1">{{description}}</p>
        <div class="but">
          <p>来源:{{source}}</p>
          <p>|</p>
          <p>{{createTime}}</p>
        </div>
        <div class="fwb">
          <div class="components-container">
            <!-- <button @click="getUEContent">获取内容</button> -->
            <div class="editor-container">
              <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue" ></UE>
            </div>
        </div>
        </div>
        <div class="btn">
         <el-button type="info" @click="disable()">不会</el-button>
         <el-button type="danger" @click="getUEContent()">提交答案</el-button>
        </div>
        <el-dialog
          :visible.sync="centerDialogVisible"
          width="504px" height="334px"
          center top="20%">
          <div class="cg">
            <span class="sp1"></span>
            <div class="cg1">
             <h3>提交回答成功</h3>
             <p>预计获得<span class="cg2"></span ><span class="cg3">{{anticipatedIncome}}</span>收益</p>
             <p class="p3"><span class="cg4"></span><span class="cg5">{{time}}s</span>自动跳转到下一题</p>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <!-- <el-button @click="centerDialogVisible = false">取 消</el-button> -->
            <el-button type="primary" @click="nxcom">直接下一题</el-button>
          </span>
        </el-dialog>
        <el-dialog
          :visible.sync="sbVisible"
          width="474px" height="308px"
          center top="20%">
          <div class="cg2">
            <span class="sp2"></span>
            <div class="cg1">
             <p>你的回答内容为空</p>
             <p>不能进行"提交回答"</p>
             <p class="p3"><span class="cg4"></span><span class="cg5">{{time}}s</span>自动跳转当页</p>
            </div>
          </div>

        </el-dialog>
        <el-dialog
          :visible.sync="fxVisible"
          class="cell"
         >
              <div class="fx_background"></div>
              <div class="fx_container">
                <img class="close" src="./img/close.png" alt="关闭">
                <div class="fx_head">
                  <span>分享</span>
                </div>
                <div class="fx_body">
                  <div>
                    <span>本次你已答题:<span class="num">67</span></span>
                    <span class="earn">预计得到收益:</span><img class="gold" src="./img/jinb.png" alt="金币"><span class="red">232</span>
                    <p>辛苦了~快把你的成绩告诉你的小伙伴吧~</p>
                  </div>
                  <div class="fx_ico">
                    <span>分享到:</span>
                    <ul>
                      <li>
                        <img src="./img/wb.png" alt="">
                        <div class="checkbox"></div>
                      </li>
                      <li>
                        <img src="./img/qqkj.png" alt="">
                        <div class="checkbox"></div>
                      </li>
                      <li>
                        <img src="./img/rr.png" alt="">
                        <div class="checkbox"></div>
                      </li>
                      <li>
                        <img src="./img/tx.png" alt="">
                        <div class="checkbox"></div>
                      </li>
                    </ul>
                  </div>
                  <textarea>辛苦了~快把你的成绩告诉你的小伙伴辛苦了~快把你的成绩告诉你的小伙伴辛苦了~快把你的成绩告诉你的小伙伴</textarea>

                  <div class="link">
                    <span>网站分享链接:</span>
                    <img src="./img/link.png" alt="链接">
                    <span class="line"></span>
                    <a href="javascript:;">http://wenda.easyto.com</a>
                  </div>
                  <img class="advert" src="./img/fx2.png" alt="广告"><img src="./img/fx1.png" alt="广告">
                </div>
                <div class="btn">
                  <button>分享</button>
                </div>
              </div>
            </el-dialog>
      <!--<div class="ck">-->
        <!--<div class="ck_t">-->
          <!--<span></span>-->
          <!--<h2>参考回答</h2>-->
        <!--</div>-->
        <!--<div :class="isTogel2 ? 'a_content' : 'a_content hideSome' "  @copy="false" v-html="reference">-->
        <!--</div>-->
        <!--<el-button type="text" @click='detailTogel2' class="btn3" v-show="btn2">{{buttonText2}}</el-button>-->
      <!--</div>-->
      <!--<div class="bad"   v-for="(item,index) in errorList">-->
        <!--<div class="bad_t">-->
          <!--<span></span>-->
          <!--<h2>错误回答</h2>-->
        <!--</div>-->
        <!--<div :class="isTogel ? 'a_content' : 'a_content hideSome' " ref="xx" v-html="item.errorAnwser">-->
        <!--</div>-->
         <!--<el-button type="text" @click='detailTogel' class="btn3" v-show="btn">{{buttonText}}</el-button>-->
      <!--</div>-->
      <div class='myAnswer keyAnswer'>
        <h2 class='a_top'><i class='lamp'></i>参考答案</h2>
        <div :class="togelC ? 'a_content a_contentZ' : 'a_content hideSome a_contentZ' "
             v-html='reference'></div>
        <el-button type="text" @click='detailTogel()' v-show='hasTogelZ'>{{buttonTextC}}</el-button>
      </div>
      <div class='myAnswer errAnswer' v-show='hasErrAnswer' v-for='(val,x) in errorList'>
        <h2 class='a_top'><i class='lamp'></i>错误回答<span class='a_times'>{{val.createTime}}</span></h2>
        <div class="a_content a_contentY" v-html='val.errorAnwser'></div>
        <el-button type="text" class='errBtn'>显示全文</el-button>
      </div>
    </div>
    <div class="right">
      <span class="r1" @click="com"></span>
      <p>下一题</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import UE from '../../components/ue/ue.vue';
export default {
  components: { UE },
  data() {
    return {
      buttonTextC: '显示全文',
      hasTogelZ: false,
      hasErrAnswer: false,
      activeIndex: '',
      togelC:false,
      defaultMsg: '',
      errorList:[],
      config: {
        toolbars: [
          ['fullscreen', 'source', 'undo', 'redo', 'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc'],

        ],
        // initiaFrameWidth: null,
        initialFrameHeight: 300,
        maximumWords:3000,
        wordOverFlowMsg:'已超出最大字符限制',
        elementPathEnabled: false,
        zIndex:0,
        enableAutoSave:false
      },
      isTogel: false,
      isTogel2: true,
      buttonText: '',
      buttonText2: '',
      ue1: "ue1",
      centerDialogVisible: false,
      sbVisible: false,
      right: true,
      answerCount: 0,
      anticipatedIncome: 0,
      createTime: '',
      description: '',
      integralOrg: '',
      question: '',
      questionId: '',
      reference: ' ',
      source: '',
      time: 2,
      fxVisible: false,
      err:true,
      copy:false,
      btn:false,
      btn2:false,
      next:true,
      c:''
    }
  },
  watch: {
    $route: {
      handler(curVal, oldVal) {
        if (curVal.query.id !== '') {

        }

      }
    }
  },
  computed: {
    // editor() {
    //   return this.$refs.myQuillEditor.quill
    // }
  },
  // beforeRouteLeave (to, from, next) {
  //   console.log(to,from,next)
  //
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   // next(vm => {
  //   //   vm.com()
  //   //
  //   // })
  // },
  mounted() {

    this.$emit('title',{a:this.answerCount,b:this.anticipatedIncome,c:false})
    console.log(this.$route.query.id)
    if(this.$route.query.id !== undefined){
      this.$indexServer.reanswer(this.$route.query.id)
        .then((res) =>{
          if (res.data.code === 200) {
            let data = res.data.data
            // this.right = !this.right
            console.log(res.data.data)
            this.errorList = data.errorList
            this.answerCount = data.answerCount
            this.anticipatedIncome = data.anticipatedIncome
            this.createTime = data.createTime
            this.description = data.description
            this.integralOrg = data.integralOrg
            this.question = data.question
            this.questionId = data.questionId
            this.reference = data.reference
            this.source = data.source
            this.copy=data.copy

            // this.right = true
            this.centerDialogVisible = false
            var errBtns = document.getElementsByClassName('errBtn')
            if (this.errorList) {
              this.hasErrAnswer = true
              var yy = document.getElementsByClassName('a_contentY')
              var n = this.errorList.length
              this.$nextTick(() => {
                for (let i = 0; i < n; i++) {
                  if (yy[i].offsetHeight > 150) {
                    errBtns[i].style.display = 'block'
                    yy[i].classList.add("hideSome")
                    errBtns[i].onclick = function () {
                      if (yy[i].classList.contains('hideSome')==true) {
                        yy[i].classList.remove("hideSome")
                        this.innerHTML = '收起'
                      }
                      else {
                        yy[i].classList.add("hideSome")
                        this.innerHTML = '显示全文'
                      }
                    }
                  }
                  else {
                    errBtns[i].style.display = 'none'
                    yy[i].classList.remove("hideSome")
                  }
                }
              })
            }
            this.isTogel = true
            this.togelC = true
            this.$nextTick(function () {
              var zz = document.getElementsByClassName('a_contentZ')[0].offsetHeight;
              if (zz > 150) {
                this.togelC = false
                this.hasTogelZ = true
              }
            })
            // location.reload();

          }
        })

    }else {
      // location.reload();
      this.com()
      // location.reload();

    }

    // 初始化
    // window.scrollTo(0,0)

    this.init()
    localStorage.setItem("question", true);
  },
  // beforeRouteLeave (to, from, next) {
  //   console.log(to.name)
  //   if(to.name='/'){
  //     localStorage.removeItem('question',true)
  //   }
  //   next();
  // },

  methods: {
    isHide(){
      var errBtns = document.getElementsByClassName('errBtn')
      if (this.errorList) {
        this.hasErrAnswer = true
        var yy = document.getElementsByClassName('a_contentY')
        var n = this.errorList.length
        this.$nextTick(() => {
          for (let i = 0; i < n; i++) {
            if (yy[i].offsetHeight > 150) {
              errBtns[i].style.display = 'block'
              yy[i].classList.add("hideSome")
              errBtns[i].onclick = function () {
                if (yy[i].classList.contains('hideSome')==true) {
                  yy[i].classList.remove("hideSome")
                  this.innerHTML = '收起'
                }
                else {
                  yy[i].classList.add("hideSome")
                  this.innerHTML = '显示全文'
                }
              }
            }
            else {
              errBtns[i].style.display = 'none'
              yy[i].classList.remove("hideSome")
            }
          }
        })
      }
      this.isTogel = true
      this.togelC = true
      this.$nextTick(function () {
        var zz = document.getElementsByClassName('a_contentZ')[0].offsetHeight;
        if (zz > 150) {
          this.togelC = false
          this.hasTogelZ = true
        }
      })
    },
    init: function () {
      let url = 'http://v3.jiathis.com/code/jia.js'
      let script = document.createElement('script')
      script.setAttribute('src', url)
      document.getElementsByTagName('head')[0].appendChild(script)
    },
    com() {
      // this.$refs.ue.remove()
      this.$indexServer.newQuestion()
        .then((res) => {
          console.log(res)
          if (res.data.code === 200) {
            let data = res.data.data
            console.log(res.data.data)
            this.errorList = data.errorList
            this.answerCount = data.answerCount
            this.anticipatedIncome = data.anticipatedIncome
            this.$emit('title',{a:this.answerCount,b:this.anticipatedIncome})
            this.createTime = data.createTime
            this.description = data.description
            this.integralOrg = data.integralOrg
            this.question = data.question
            this.questionId = data.questionId
            this.reference = data.reference
            this.source = data.source
            this.copy = data.copy
            // this.right = true
            this.centerDialogVisible = false
            // this.$router.go(0);
            this.$refs.ue.remove()

            var errBtns = document.getElementsByClassName('errBtn')
            if (this.errorList) {
              this.hasErrAnswer = true
              var yy = document.getElementsByClassName('a_contentY')
              var n = this.errorList.length
              this.$nextTick(() => {
                for (let i = 0; i < n; i++) {
                  if (yy[i].offsetHeight > 150) {
                    errBtns[i].style.display = 'block'
                    yy[i].classList.add("hideSome")
                    errBtns[i].onclick = function () {
                      if (yy[i].classList.contains('hideSome')==true) {
                        yy[i].classList.remove("hideSome")
                        this.innerHTML = '收起'
                      }
                      else {
                        yy[i].classList.add("hideSome")
                        this.innerHTML = '显示全文'
                      }
                    }
                  }
                  else {
                    errBtns[i].style.display = 'none'
                    yy[i].classList.remove("hideSome")
                  }
                }
              })
            }
            this.isTogel = true
            this.togelC = true
            this.$nextTick(function () {
              var zz = document.getElementsByClassName('a_contentZ')[0].offsetHeight;
              if (zz > 150) {
                this.togelC = false
                this.hasTogelZ = true
              }
            })
          }
          if(res.data.code ===400){
            this.open4()
            this.$router.push('/Login')

          }
        })

    },
    nxcom(){
      this.next = false
      this.tim()
      this.com()
      this.centerDialogVisible = false
    },
    cp(){
      console.log('11')
      return
    },
    disable() {
      this.$refs.ue.remove();
      this.$indexServer.disable(this.questionId)
        .then((res) => {
          if(res.data.code === 200) {
            this.com()
          }
          if(res.data.code ===400){
            this.open4()
            this.$router.push('/Login')

          }
        })
      // this.fxVisible = true
    },
    open4(){
      this.$message({
        message: '登录超时，请重新登录！',
        type: 'warning'
      });
    },
    GetQueryString(name){
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
      var r = window.location.search.substr(1).match(reg);
      if(r != null) return unescape(r[2])
      return null
    },
    tim(){

      this.time = 2;

      let timer = setInterval(() => {
        this.time--;
        if (this.time <= 0) {
          this.sbVisible = false
          this.centerDialogVisible = false
          clearInterval(timer);
         if(this.next){
           this.com()
         }
        }

      }, 1000)

    },
    getUEContent() {
      let content = this.$refs.ue.getUEContent(); // 调用子组件方法
      console.log(content)
      if (content.length > 1) {
        this.centerDialogVisible = true
        this.$refs.ue.remove()
        this.$indexServer.commit(this.questionId, content)
          .then((res) => {
            this.next = true
            this.tim()
            this.anticipatedIncome = res.data.data
            if(res.data.code ===400){
              this.open4()
              this.$router.push('/Login')

            }
          })
        // location.reload();
      } else {
        this.time = 2;
        this.sbVisible = true
        let timer = setInterval(() => {

          this.time--;
          if (this.time <= 0) {
            this.sbVisible = false
            this.centerDialogVisible = false
            clearInterval(timer);
          }

        }, 1000)

      }


    },

    // isHide () {
    //   this.err = true
    //   this.isTogel = true
    //   this.$nextTick(function () {
    //     var xx = this.$refs.xx.offsetHeight;
    //     if (xx > 150) {
    //       this.isTogel = false
    //       this.err = true
    //     }
    //   })
    // },
    // 显示隐藏按钮
    isShow(n) {
      this.show_a = !this.show_a
    },
    detailTogel() {
      if (this.isTogel === true) {
        this.buttonTextC = '显示全文'
      } else if (this.isTogel === false) {
        this.buttonTextC = '收起'
      }
      this.togelC = !this.togelC
    },
    detailTogel2() {
      if (this.isTogel2 === true) {
        this.buttonText2 = '显示全文'
      } else if (this.isTogel2 === false) {
        this.buttonText2 = '收起'
      }
      this.isTogel2 = !this.isTogel2
    },
    // onSubmit() {
    //   // 提交
    //   // this.$refs.infoForm.validate，这是表单验证
    //   this.$refs.infoForm.validate((valid) => {
    //     if (valid) {
    //       this.$post('m/add/about/us', this.infoForm).then(res => {
    //         if (res.errCode === 200) {
    //           this.$message({
    //             message: res.errMsg,
    //             type: 'success'
    //           })
    //           this.$router.push('/aboutus/aboutlist')
    //         } else {
    //           this.$message({
    //             message: res.errMsg,
    //             type: 'error'
    //           })
    //         }
    //       })
    //     }
    //   })
    // }
  }
}
</script>


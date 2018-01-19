<template>
  <el-main>
    <div class='setRoles'>
      <div class='a_lists' v-for='(item,index) in lists'>
        <h1 class='q_title textBig' @click='isShow(index)' v-show='show_a & index === activeIndex'>
          问题:{{item.question}}<span
          class='q_static'>审核失败</span><i class='el-icon-minus up'></i></h1>
        <h1 class='q_title overHiden' @click='isHide(index,item.questionId)' v-show='index !== activeIndex || !show_a'>
          问题:{{item.question}}<i class='el-icon-plus down'></i></h1>
        <el-collapse-transition>
          <div v-show='show_a & index === activeIndex'>
            <p class='a_descript'>{{listDetail.description}}</p>
            <div class='income'>悬赏积分<em class=gold></em><a class=goldNum>{{listDetail.integral}}</a>
              <div class='source'>来源：{{listDetail.source}}<span>|</span>{{listDetail.createTime}}</div>
            </div>
            <el-button type="primary" @click='reAnswer (item.questionId)' v-show='!listDetail.hideReanswer'>重新回答
            </el-button>
            <div class='myAnswer'>
              <h2 class='a_top'><i class='lamp'></i>我的回答<span class='a_times'>{{myAnswers.createTime}}</span></h2>
              <div :class="isTogel ? 'a_content a_contentX' : 'a_content hideSome a_contentX' "
                   v-html='myAnswers.myAnswer'></div>
              <el-button type="text" @click='detailTogel(index,"x")' v-show='hasTogelX & index === activeIndex'>{{buttonText}}</el-button>
            </div>
            <div class='myAnswer errAnswer' v-show='hasErrAnswer' v-for='(val,x) in listDetail.errorList'>
              <h2 class='a_top'><i class='lamp'></i>错误回答<span class='a_times'>{{val.createTime}}</span></h2>
              <div class="a_content a_contentY" v-html='val.errorAnwser'></div>
              <el-button type="text" class='errBtn'>显示全文</el-button>
            </div>
            <div class='myAnswer keyAnswer'>
              <h2 class='a_top'><i class='lamp'></i>参考答案</h2>
              <div :class="togelC ? 'a_content a_contentZ' : 'a_content hideSome a_contentZ' "
                   v-html='listDetail.reference'></div>
              <el-button type="text" @click='detailTogel(index,"z")' v-show='hasTogelZ & index === activeIndex'>{{buttonTextC}}</el-button>
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
    <!--分页-->
    <div class="block">
      <el-pagination layout="prev, pager, next" :total='listsSize' :page-size='pageSize'
                     @current-change="handleCurrentChange" :current-page='currentPage'
                     @size-change="handleSizeChange"></el-pagination>
    </div>
  </el-main>
</template>

<script>
  export default {
    data () {
      return {
        activeNames: ['1'],
        buttonText: '显示全文',
        buttonTextB: '显示全文',
        buttonTextC: '显示全文',
        showIndex: 0,
        show_a: false,
        isTogel: false,
        togelIndex: '',
        togelC: false,
        lists: '',
        listsSize: 0,
        listDetail: '',
        pageNum: 1,
        pageSize: 20,
        currentPage: 1,
        activeIndex: '',
        hasTogelX: false,
        hasTogelY: false,
        hasTogelZ: false,
        hasErrAnswer: false,
        myAnswers: ''
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.getDetail(vm.pageNum)
      })
    },
    created () {
    },
    mounted () {
      // 初始化
    },
    methods: {
      // 显示隐藏按钮
      isShow (index) {
        this.activeIndex = index
        this.show_a = false
      },
      isHide (index, questionId) {

        var _this = this
        let question = questionId
        _this.$indexServer.failDetailed(question)
          .then((res) => {
            if (res.data.code == 200) {
              _this.listDetail = res.data.data
              _this.myAnswers = _this.listDetail.myAnswer
              _this.show_a = true
              if (_this.listDetail.errorList) {
                _this.hasErrAnswer = true
                var n = _this.listDetail.errorList.length
                _this.$nextTick(() => {
                  var arr = document.getElementsByClassName('a_lists')
                  var errBtns = document.getElementsByClassName('errBtn')
                  var yy = arr[index].getElementsByClassName('a_contentY')
                  console.log(arr)
                  console.log(errBtns)
                  console.log(yy)
                  for (let i = 0; i < n; i++) {
                    if (yy[i].offsetHeight > 150) {
                      errBtns[i].style.display = 'block'
                      yy[i].classList.add("hideSome")
                      console.log(yy[i])
                      console.log(this)
                      errBtns[i].onclick = function () {
                        if (yy[i].classList.contains('hideSome') == true) {
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
              _this.activeIndex = index
              _this.isTogel = true
              _this.togelC = true
              _this.$nextTick(function () {
                var arr = document.getElementsByClassName('a_lists')
                var xx = arr[index].getElementsByClassName('a_contentX')[0].offsetHeight;
                var zz = arr[index].getElementsByClassName('a_contentZ')[0].offsetHeight;
                if (xx > 150) {
                  _this.isTogel = false
                  _this.hasTogelX = true
                }
                if (zz > 150) {
                  _this.togelC = false
                  _this.hasTogelZ = true
                }
              })
            } else if (res.data.code == 400) {
              _this.open7()
            } else if (res.data.code == 401) {
              _this.open8('您的参数有误！')
            } else if (res.data.code == 402) {
              _this.open8('该题已下架！')
            } else if (res.data.code == 406) {
              _this.open8('该题已被别人获取！')
            }
          })
      },
      detailTogel (n, m) {
        this.togelIndex = n
        if (m === 'x') {
          if (this.isTogel === true && this.togelIndex === n) {
            this.buttonText = '显示全文'
          } else if (this.isTogel === false && this.togelIndex === n) {
            this.buttonText = '收起'
          }
          this.isTogel = !this.isTogel
          return
        } else if (m === 'z') {
          if (this.togelC === true && this.togelIndex === n) {
            this.buttonTextC = '显示全文'
          } else if (this.togelC === false && this.togelIndex === n) {
            this.buttonTextC = '收起'
          }
          this.togelC = !this.togelC
        }
        return
      },
      getDetail (n) {
        var _this = this
        _this.$indexServer.auditFailure(n, _this.pageSize)
          .then((res) => {
            if (res.data.code == 200) {
              _this.lists = res.data.data
              _this.listsSize = res.data.total
            } else if (res.data.code == 400) {
              _this.open7()
            } else if (res.data.code == 401) {
              _this.open8('您的参数有误！')
            } else if (res.data.code == 402) {
              _this.open8('该题已下架！')
            } else if (res.data.code == 406) {
              _this.open8('该题已被别人获取！')
            }
          })
      },
      // 重新回答
      reAnswer (id) {
        this.$router.push({name: 'question', query: {id: id}});
      },
      // 分页器
      handleSizeChange: function (size) {
        this.pagesize = size;
      },
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage;
        this.pageNum = this.currentPage;
        this.getDetail(this.pageNum)
      },
      open7() {
        var _this = this
        _this.$message({
          showClose: true,
          message: '登录超时，请重新登录！',
          type: 'warning',
          duration: 2000,
          onClose: function () {
            _this.$router.push({
              path: '/Login',
              query: {
                id: 0
              }
            })
          }
        });
      },
      open8(n) {
        var _this = this
        _this.$message({
          showClose: true,
          message: n,
          type: 'warning',
          duration: 3000,
        });
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus"></style>

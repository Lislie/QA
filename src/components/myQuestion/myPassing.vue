<template>
  <el-main>
  <div class='passingCheck'>
    <div class='a_lists'  v-for='(item,index) in lists'>
      <h1 class='q_title textBig' @click='isShow(index)' v-show='show_a & index === activeIndex'>
        <div class='gainGold' v-show='show_a'>获得：<em class='goldBig'></em><a>{{item.integralGain}}</a></div>问题:{{item.question}}<span
        class='q_static'>审核成功</span><i class='el-icon-minus up'></i></h1>
      <h1 class='q_title overHiden' @click='isHide(index)' v-show='index !== activeIndex || !show_a'>问题:{{item.question}}<i class='el-icon-plus down'></i></h1>
      <el-collapse-transition>
        <div v-show='show_a & index === activeIndex'>
          <p class='a_descript'>{{item.description}}</p>
          <div class='income'>悬赏积分：<em class=gold></em><a class=goldNum>{{item.integralOrg}}</a>
            <div class='source'>来源：{{item.source}}<span>|</span>{{year(item.createTime)}}</div>
          </div>
          <div class='myAnswer'>
            <h2 class='a_top'><i class='lamp'></i>我的回答<a class='corrected' v-show="item.isModify==1">{{error(item.isModify)}}</a><span class='a_times'>{{item.createTime}}</span>
            </h2>
            <div :class="isTogel ? 'a_content' : 'a_content hideSome' " v-html='item.answer'></div>
            <el-button type="text" @click='detailTogel(index)' v-show='hasTogel & index === activeIndex'>{{buttonText}}</el-button>
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
  /* import ElMain from "../../../node_modules/element-ui/packages/main/src/main"; */
  /* import { quillEditor } from 'vue-quill-editor'
   import ElButton from "../../../node_modules/element-ui/packages/button/src/button"; // 调用编辑器 */
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
        lists: '',
        pageNum: 1,
        pageSize: 20,
        currentPage: 1,
        activeIndex:'',
        hasTogel: false,
        listsSize: 0
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.getDetail(vm.pageNum)
      })
    },
    mounted () {
      // 初始化
    },
    methods: {
      //时间处理
      add0(m){
        return m<10?'0'+m:m
      },
      getLocalTime(nS) {
        var time = new Date(nS);
        var y = time.getFullYear();
        var m = time.getMonth()+1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y+'-'+this.add0(m)+'-'+this.add0(d)+' '+this.add0(h)+':'+this.add0(mm)+':'+this.add0(s);
      },
      year (yy) {
       return yy.split(' ')[0];
      },
      //source来源
      source (n) {
        if (n===0) {
          return '百度知道'
        }
        else if(n===1){
          return '马蜂窝'
        }
        else if(n===2){
          return '携程问答'
        }
        else if(n===3){
          return '途牛问答'
        }
        else if(n===4){
          return '后台录入'
        }
      },
      // 显示隐藏按钮
      isShow (index) {
        this.activeIndex = index
        this.show_a = false
      },
      isHide (index) {
        var _this = this
        _this.activeIndex = index
        _this.show_a = true
        _this.isTogel = true
        var arr = document.getElementsByClassName('a_lists')
        _this.$nextTick(function () {
          var hh = arr[index].getElementsByClassName('a_content')[0].offsetHeight;
          if (hh > 150) {
            _this.isTogel = false
            _this.hasTogel = true
          }
          else {
            _this.hasTogel = false
            _this.isTogel = true
          }
        })
      },
      detailTogel (n) {
        this.togelIndex = n
        if (this.isTogel === true && this.togelIndex === n) {
          this.buttonText = '显示全文'
        } else if (this.isTogel === false  && this.togelIndex === n) {
          this.buttonText = '收起'
        }
        this.isTogel = !this.isTogel
      },
      getDetail (n) {
        var _this = this
        this.$indexServer.auditSuccess(n,_this.pageSize)
          .then((res)=>{
            if(res.data.code == 200){
              _this.lists = res.data.data
              _this.listsSize = res.data.total
            } else if (res.data.code == 400) {
              _this.open7()
            }
          })
      },
      // 分页器
      handleSizeChange: function (size) {
        this.pagesize = size;
      },
      handleCurrentChange: function(currentPage){
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
          duration:2000,
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
      //平台纠错
      error(x){
          if (x == 0) {

          }
          else if (x == 1) {
              return '平台纠错'
          }
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus"></style>

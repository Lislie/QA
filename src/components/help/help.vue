<template>
  <div class="help">
    <div class="help_content">
      <div class="main">
        <!-- 使用规则 -->
        <div class="help_useRules">
          <h4>1.我该如何进行问题找到问题的答案？</h4>
          <div class="con">
            <p>答：逸途-旅游问答社区里的问题均来自于网络，对于您不知道的答案可以通过搜索引擎检索、也可以在各大旅游问答社区中进行寻找，如穷游问答、携程问答、途牛问答等。</p>
          </div>
        </div>
        <div class="help_useRules">
          <h4>2.我的收益微信提现，为什么迟迟未到？</h4>
          <div class="con">
            <p>答：收益微信提现，用户在填写【提现账户】时正确填写自己的微信号。平台工作人员会以【逸途  知识问答社区】的微信加你为好友，以红包的形式进行转账。若长时间未收到好友添加请求，你可以主动添加平台微信【yt  zswdsq】向平台工作人员留言或拨打客服电话。</p>
          </div>
        </div>
        <div class="help_useRules">
          <h4>3.提现审核成功了，为什么我的银行卡没有收到钱，这是怎么回事？</h4>
          <div class="con">
            <p>答：平台通过银行转账的形式进行的收益打款，到账的速度取决于各银行的转账速度，一般在2-3个工作日，遇到节假日顺延，请您耐心等待。若还是长时间未收到，请拨打平台热线：400- 826-1977。</p>
          </div>
        </div>
        <div class="help_useRules">
          <h4>4.为什么声明的悬赏积分，审核通过之后只发放了一部分的积分呢？</h4>
          <div class="con">
            <p>答：对于您提交的问题答案平台会进行审核，审核过程中若发现答案有小的错误，审核人员会进行【答案纠错】即对您的回答进行调整，调整完的回答也会算作审核通，但该问题的的悬赏积分不全全额发放。</p>
          </div>
        </div>
        <div class="help_useRules">
          <h4>5.多少积分可以兑换一块钱？</h4>
          <div class="con">
            <p>答：积分现金比，您可以在账户收益、申请提现页面查看到。平台10积分可兑换1元现金（特殊情况下平台会对该比例进行调整）。</p>
          </div>
        </div>
        <div class="help_useRules">
          <h4>6.我的提现申请还没有审核呢，为什么会扣我的积分？</h4>
          <div class="con">
            <p>答：申请提现之后，您提现使用的积分会处于冻结状态，当审核成功之后才会真正的扣除。若审核失败的话，冻结的积分会解冻返回到您的账户。</p>
          </div>
        </div>
        <div class="help_useRules">
          <h4>7.【参考回答】是什么意思？</h4>
          <div class="con">
            <p>答：【参考回答】是平台在网上抓取问题时，附带抓取了以往网友回答的答案。仅仅为了使答主能对问题有更好的理解，并不代表该答案就一定有参考意义。</p>
          </div>
        </div>
        <div class="help_useRules">
          <h4>8.【错误回答】是什么意思？</h4>
          <div class="con">
            <p>答：【错误回答】是指该问题之前已经有别的答主回答过，但是平台审核失败的答案。您在回答时，需避开以往答主的错误回答。</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.help {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: rgb(1, 0, 25);
}

.help_content {
    /* width 50% */
    padding: 0 25%;
    min-width: 680px;
    margin: 50px auto 57px;
    text-align: justify;

    .main {
        padding: 0 5px;
        .help_useRules {
            margin-bottom: 42px;
            overflow hidden
            h4 {
                font-size: 22px;
                height: 35px;
            } 
            .con {
                line-height: 32px;
                p{
                    text-indent:-2em;
                    padding-left:2em
                }
            }
        }
    }
}
</style>

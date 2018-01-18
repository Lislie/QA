<template>
  <div class="agreement">
    <div class="agreement_content">
      <h3>用户协议</h3>
      <div class="main">
        <!-- 欢迎 -->
        <div class="welcome">
          <h4>欢迎您来到逸途 - 旅游问答社区。</h4>
          <div class="con">
            请您仔细阅读以下条款，如果您对本协议的任何条款表示异议，您可以选择不进入本网站。当您注册成功，无论是进入逸途 - 旅游问答社区，还是在逸途 - 旅游问答社区上提交任何内容，均意味着您（即「用户」）完全接受本协议项下的全部条款。
          </div>
        </div>
        <!-- 使用规则 -->
        <div class="useRules">
          <h4>使用规则</h4>
          <div class="con">
            <p>1. 用户注册成功后，逸途 - 旅游问答社区将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管；</p>
            <p>2. 逸途 - 旅游问答社区是一个通过社会众包建立旅游知识库的平台，用户对所有问题提交的回答，对平台来讲均为公开内容。平台有权对提交的回答进行编辑、发布或其他用途；</p>
            <p>3. 用户不得在逸途 - 旅游问答社区提交以下内容：</p>
            <p><span></span>提交恶意的灌水内容；</p>
            <p><span></span>恶意的攻击或低俗言论；</p>
            <p><span></span>通过各种不合规手段套取平台奖励；</p>
            <p style="text-indent:35px">逸途有权对用户使用逸途 - 旅游问答社区的情况进行审查和监督，如用户在使用过程中违反任何上述规定，逸途有权要求用户改正或直接采取一切必要的措施（包括但不限于暂停或终止用户使用“逸途 - 旅游问答社区”的权利）。</p>
          </div>
        </div>
        <!-- 个人隐私 -->
        <div class="personalPrivacy">
          <h4>个人隐私</h4>
          <div class="con" style="text-indent:35px">
              逸途尊重用户个人隐私信息的私有性，除法律或有法律赋予权限的政府部门要求或事先得到用户明确授权等原因外，逸途保证不对外公开或向第三方透露用户个人隐私信息。
          </div>
        </div>
        <!-- 悬赏积分-->
        <div class="useRules">
          <h4>悬赏积分</h4>
          <div class="con">
            <p>1. 问题悬赏积分是用于在奖励问题回答者的虚拟币，不等同于现金货币。积分可用于现金提现，除此之外，不得用于其他用途。</p>
            <p>2. 积分和人民币的兑换比例以用户申请提现时的“积分现金比”显示为准。逸途有权根据运营情况随时变更兑换比例，并在用户申请提现页面显示。</p>
            <p>3. 逸途对用户提交的积分提现申请拥有审核权，可独立判断提现申请是否通过。</p>
          </div>
        </div>
        <!-- 免责说明 -->
        <div class="useRules">
          <h4>免责说明</h4>
          <div class="con">
            <p>1. 用户在逸途 - 旅游问答社区提交的内容仅表明其个人的立场和观点，并不代表知乎的立场或观点。作为内容的提交者，需自行对所发表内容负责，因所提交内容引发的一切
                纠纷，由该内容的提交者承担全部法律及连带责任。知乎不承担任何法律及连带责任。</p>
            <p>2. 逸途不保证网络服务一定能满足用户的要求，也不保证网络服务不会中断，对网络服务的及时性、安全性、准确性也都不作保证。对于因不可抗力或逸途不能控制的原因造
                成的网络服务中断或其它缺陷，逸途不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。</p>
          </div>
        </div>
        <!-- 修改声明 -->
        <div class="useRules">
          <h4>修改声明</h4>
          <div class="con">
            <p style="text-indent:35px">根据互联网的发展和有关法律、法规及规范性文件的变化，或者因业务发展需要，逸途有权对本协议的条款作出修改或变更，一旦本协议的内容发生变动，逸途将会直接在逸途-旅游问答社区网站上公布修改之后的协议内容，该公布行为视为逸途已经通知用户修改内容。逸途也可采用电子邮件或私信的传送方式，提示用户协议条款的修改、服务变更、或其它重要事项。</p>
            <p style="text-indent:35px">如果不同意逸途对本协议相关条款所做的修改，用户有权并应当停止使用逸途-旅游问答社区。如果用户继续使用逸途-旅游问答社区，则视为用户接受逸途对本协议相关条款所做的修改。</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.agreement{
  font-family PingFangSC-Regular
  font-size 18px
  color rgb(1,0,25)
}
.agreement_content{
  /* width 50% */
  padding 0 25%
  min-width 680px
  margin 59px auto 57px
  text-align justify  
  h3{
    font-size 22px
    padding 0 5px 24px 5px
    border-bottom 1px solid rgb(210,210,210)
    font-family PingFangSC-Medium
    margin-bottom 34px
  }
  
  .main{
    padding 0 5px
    h4{
      font-size 22px
      height 35px
    }
    .con{
      line-height 32px 
    }
    .welcome{
      .con{
        color rgb(93,93,94)  
      }
    }
    .welcome,.useRules,.personalPrivacy{
      margin-bottom 42px  
    }
    .useRules{
      span{
        display: inline-block;
        height: 10px;
        width: 10px;
        border:1px solid rgb(1,0,25);
        border-radius:10px;
        margin-right:3px;
      }
    }

  }
}
</style>

<template>
    <div class="withdraw">
        <!-- 侧边栏 -->
         <!-- 侧边栏 -->
        <div class="aside">
            <ul>
                <li v-for="(item,index) in asideData.items" :class="{active:asideData.activeIndex==index}" @mouseover="asideData.activeIndex=index" @mouseout="asideData.activeIndex=0" @click="asideData.activeIndex=0">
                    <router-link :to="item.path">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
        <!-- 主要内容 -->
        <div class="withdraw_content">
            <transition name="fade">
                <toast3 id="toast3" v-show="toastShow"   style="top:45%;z-index:999"></toast3>
            </transition>
            <div class="header">
                <span>注：</span>
                <div class="note">
                    <p>1.积分余额申请提现后，平台会进行审核。审核通过后，平台会在5个工作日内将现金打到你的指定账户内；</p>
                    <p>2.审核处理中的积分会处于冻结状态，账户积分余额会相应减少。审核成功，积分扣除；审核失败，积分解冻回到你的账户。</p>
                </div>
            </div>
            <div class="line"></div>
            <div class="main">
                <div class="top">
                    <label for="">当前可提现余额：</label>
                    <span>{{myintegral.currentIntegral}}</span>
                    <div class="top_line"></div>
                    <label for="">价值现金</label>
                    <span>￥{{myintegral.cashValue}}</span>
                </div>
                <div class="integral">
                    <label for="">选择提现积分：</label>
                    <input id="myIntegral" type="text" v-model="baseData.integral" style="text-align:center">
                </div>
                <div class="cash">
                    <label for="">兑换现金：</label>
                    <span>￥{{exchangeMoney}}</span>
                    <span>积分现金比：{{myintegral.rate}}</span>
                </div>
                <div class="userType">
                    <label for="">账户类型：</label>
                    <label><input type="radio" value="0" v-model="baseData.withdrawType" />微信 </label> 
                    <label><input type="radio" value="1" v-model="baseData.withdrawType" />支付宝 </label> 
                </div>
                <div class="user">
                    <label for="">提现账户：</label>
                    <input type="text" placeholder="请输入你的支付宝账号 / 微信账号" v-model="baseData.userName">                
                </div>
                <div class="name">
                    <label for="">真实姓名：</label>
                    <input type="text" placeholder="请输入你的支付宝/微信账号认证的真实姓名" v-model="baseData.name">
                </div>
            </div>
            <div class="button">
                <router-link class="back" to="../myEarnings">返回</router-link>
                <button class="applyMoney" type="button"  @click="applyWithdraw">申请提现</button>
            </div>
           
        </div>
        <!-- 申请提现成功弹框 -->
        <transition name="fade">
            <div class="withdrawBox" v-show="withdrawBox.withdrawBoxShow">
                <div class="withdraw_main">
                    <img src="./close.png" alt="" class="withdraw_close" @click="withdrawBox.withdrawBoxShow=false">                
                    <div class="withdraw_content">
                        <div class="withdraw_img"></div>
                        <div class="withdraw_info">
                            <p>申请提现成功。</p> 
                            <span>现金将在3-5个工作日内打到您提现账户，请耐心等待...</span>                       
                        </div>
                    </div>
                    <div class="btn">
                        <span class="time">{{withdrawBox.time}}s...</span>
                        <!-- <router-link class="queRoom1" to="../myEarnings">账户收益 》</router-link> -->
                        <router-link class="queRoom2" to="../quesTion">继续答题 》</router-link>
                    </div>
                    
                </div>
            </div>
        </transition>
        
    </div>
</template>

<script>
import toast3 from '../toast/toast'
export default {
  components:{toast3}, 
  data() {
    return {
    // 侧边栏
    asideData: {
        items: [
            {
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
        activeIndex: 0
    },
    //   我的收益
    myintegral:{
        currentIntegral:'0',//当前积分
        cashValue:'0.00',//价值现金
        rate:'0',//积分现金比
    },
    //  申请提现数据
    baseData:{
        integral:'',//提现积分
        userName:'',//提现账户
        name:'',//真实姓名
        withdrawType:'0',//账户类型
    },
    exchangeMoney:'0.00',//兑换现金
    //申请提现成功弹框显示
    withdrawBox: {
        withdrawBoxShow: false, //申请提现成功弹框显示
        time: 3
    },
    toastShow:false,
    timer:''
    };
  },
//   created(){
//       this.myIncome()
//   },
  beforeRouteEnter (to, from, next) {
    next(vm => {
        vm.myIncome()
    })
  },
  watch:{
    baseData:{
        handler(curVal,oldVal){
            if(curVal.integral.length!=0){
                if(parseInt(curVal.integral)>parseInt(this.myintegral.currentIntegral)){
                    var length = curVal.integral.length-1
                    this.baseData.integral = curVal.integral.substring(0,length)
                    this.enterToast('提现积分不能多于可提现余额');
                }
                if(!/^[1-9]\d*$/.test(curVal.integral)){
                    var length = curVal.integral.length-1
                    this.baseData.integral = curVal.integral.substring(0,length)
                    this.enterToast('提现积分只能为整数');                
                }
            }
            this.exchangeMoney = (curVal.integral/this.myintegral.rate).toFixed(2)
        },
        deep:true
    },
    withdrawBox:{
        handler(curVal,oldVal){
            // console.log(curVal)
            var _this = this
            if(curVal.withdrawBoxShow==false){
                clearInterval(_this.timer)
                this.withdrawBox.time=3
                this.baseData.integral=''
                this.baseData.userName=''
                this.baseData.name=''                
                this.myIncome()
            }
        },
        deep:true
    }
    // $route:{
    //   handler(curVal,oldVal){
    //     var _this = this;
    //     // console.log(curVal)
    //     if(curVal.fullPath!='/withdraw'){
    //       this.baseData.integral=''
    //       this.baseData.userName=''
    //       this.baseData.name=''
    //     }
    //   },
    //   deep:true
    // },
  },
  beforeRouteLeave(to,from,next){
    var _this = this;
    // console.log(curVal)
    if(to.name!='/withdraw'){
        this.baseData.integral=''
        this.baseData.userName=''
        this.baseData.name=''
        clearInterval(_this.timer)
        this.withdrawBox.withdrawBoxShow = false;
        this.withdrawBox.time = 3;
    }
    next()
  },
  methods: {
    validate(){
        if(this.baseData.integral.length===0){
            this.enterToast('提现积分不能为空');
            return false
        }else if(this.baseData.userName.length===0){
            this.enterToast('提现账户不能为空');
            return false
        }else if(this.baseData.name.length===0){
            this.enterToast('真实姓名不能为空');
            return false
        }
        // else if(parseInt(curVal.integral)>parseInt(this.myintegral.currentIntegral)){
        //     // console.log(this.baseData.integral+'=='+this.myintegral.currentIntegral)
        //     this.enterToast('提现积分不能多于可提现余额');
        //     return false
        // }
        else if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.baseData.userName)&&!/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.baseData.userName)){
            this.enterToast('请填写正确的提现账号');
            return false
        }else if(!/[\u4e00-\u9fa5]/.test(this.baseData.name)||this.baseData.name.length>6){
            this.enterToast('请填写正确的姓名');
            return false
        }else{
            return true
        }
    },
    //   获取我的收益
    myIncome(){
        var _this = this;
        this.$indexServer.integral()
        .then((res)=>{
            if(res.data.code==200){
                _this.myintegral = res.data.data
            }else if(res.data.code==400){
                _this.enterToast('登录超时，请重新登陆')
                    _this.$router.push({
                    path: '/',
                    query: {
                    id: 0
                    }
                });
            } else if (res.data.code == 40011) {
                _this.enterToast('您的账号被冻结，请联系管理员')
            }else{
                 _this.enterToast('服务异常，请稍后再试')
            }
        })
    },
   
    // 申请提现成功弹框3s倒计时
    applyWithdraw() {
        //  调接口------
        var _this = this;
        if(this.validate()){
            this.$indexServer.cash(_this.baseData.integral,_this.baseData.userName,_this.baseData.name,_this.baseData.withdrawType)
            .then((res)=>{
                if (res.data.code == 200) {
                    _this.withdrawBox.withdrawBoxShow = true;
                    var timer = setInterval(() => {
                        _this.withdrawBox.time--;
                        if (_this.withdrawBox.time < 0) {
                            _this.withdrawBox.withdrawBoxShow = false;
                            _this.withdrawBox.time = 3;
                            _this.$router.push('../myEarnings');
                            clearInterval(timer);
                        }
                        // if(_this.withdrawBox.withdrawBoxShow==false){
                        //     clearInterval(timer);  
                        //     _this.withdrawBox.time=3
                        // }
                    }, 1000);
                    this.timer = timer
                }else if(res.data.code==400){
                    _this.enterToast('登录超时，请重新登陆')
                     _this.$router.push({
                        path: '/',
                        query: {
                            id: 0
                        }
                    });
                } else if (res.data.code == 40011) {
                    _this.enterToast('您的账号被冻结，请联系管理员')
                }else{
                    _this.enterToast('服务异常，请稍后再试')
                }
            })
        }
       
        
    },
    enterToast(text,time) {
        var toast = document.getElementById("toast3");
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
<style scoped lang="stylus" rel="stylesheet/stylus">
.withdraw {
    margin: 0 15%;
    padding:0 20px;
    font-family: 'PingFangSC-regular';
    min-width 1024px
    box-sizing border-box
}

.aside {
    height: 130px;
    width: 147px;
    // border: 1px solid #d2d2d2;
    position: fixed;
    top: 105px;
    right: 85%;
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
// 主要内容
.withdraw_content {
    margin-top: 21px;
    box-shadow: 0px 0px 10px #D6D6D6;
    background-color: #fff;
    position relative
    // input框整体样式
    input {
        height: 60px;
        width: 355px;
        outline: none;
        border: 1px solid rgb(210, 210, 210);
        padding-left: 18px;
        box-sizing: border-box;
        font-size: 32px;
        color: rgb(0, 1, 32);
    }

    input::-webkit-input-placeholder {
        color: rgb(170, 170, 170);
        font-size: 16px;
    }

    input::-moz-placeholder {
        color: rgb(170, 170, 170);
        font-size: 16px;
    }

    label {
        display: inline-block;
        font-size: 20px;
        color: rgb(0, 1, 32);
        width: 160px;
        text-align: right;
    }

    // 单独样式
    .header {
        overflow: hidden;
        font-size: 14px;
        color: rgb(131, 131, 131);
        padding: 30px 0 0 0;
        display: flex;
        justify-content: center;

        span {
            float: left;
        }

        .note {
            float: left;

            p:nth-child(1) {
                margin-bottom: 5px;
            }
        }
    }

    .line {
        height: 1px;
        width: 90%;
        background-color: rgb(210, 210, 210);
        margin: 19px auto 46px;
    }

    .main {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position:relative;
        left:50%;
        margin-left:-335px

        .top {
            margin-right: 24px;

            span:nth-child(2) {
                padding-left: 32px;
                background: url('./money.png') no-repeat left;
                font-size: 22px;
                color: rgb(248, 40, 24);
            }

            .top_line {
                display: inline-block;
                height: 20px;
                width: 1px;
                background-color: rgb(210, 210, 210);
                margin: 0 28px;
            }

            span:nth-child(5) {
                font-size: 20px;
                color: rgb(231, 51, 27);
            }

            label:nth-child(4) {
                display: inline;
            }
        }

        .integral {
            margin: 43px 0 27px 0;
        }

        .cash {
            span:nth-child(2) {
                font-size: 20px;
                color: rgb(231, 51, 27);
                margin-right: 35px;
            }

            span:nth-child(3) {
                font-size: 20px;
                color: rgb(0, 1, 32);
            }
        }
        .userType{
            margin: 26px 0 0 0;
            label:nth-child(2),label:nth-child(3){
                width 100px
                text-align left
                input{
                    height:15px;
                    width: 30px;
                    outline: none;
                    font-size: 50px;
                }
            }
           
        }
        .user {
            margin: 26px 0 20px 0;
        }

        .name {
            margin-bottom: 20px;
        }
        .user,.name{
            input::-webkit-input-placeholder { 
                font-size:16px;
                color: #b6b6b6;
            } 
            input:-moz-placeholder { 
                font-size:16px;  
                color: #b6b6b6;                              
            } 
            input::-moz-placeholder { 
                color: #b6b6b6;
                font-size:16px;
            } 
            input:-ms-input-placeholder { 
                color: #b6b6b6;
                font-size:16px;
            } 
        }
    }

    .button {
        display: flex;
        justify-content: flex-start;
        position:relative;
        left:50%;
        margin-left:-169px
    }
}

.back, .applyMoney {
    height: 50px;
    width: 173px;
    border: none;
    outline: none;
    color: rgb(254, 254, 254);
    font-size: 20px;
    margin-bottom: 132px;
}

.back {
    background-color: rgb(182, 182, 182);
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.applyMoney {
    background-color: rgb(249, 85, 63);
    cursor: pointer;
}

.withdrawBox {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);

    .withdraw_main {
        height: 308px;
        width: 474px;
        background-color: #fff;
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        font-family: 'SourceHanSansCN-Regular';

        .withdraw_close {
            position: absolute;
            top: -28px;
            right: -28px;
        }

        .withdraw_content {
            margin-top: 90px;
            margin-left: 32px;

            .withdraw_img {
                float: left;
                height: 70px;
                width: 72px;
                // border-radius: 35px;
                // border: 1px solid rgb(231, 79, 58);
                background: url('./tick.png') no-repeat center;
                margin-right: 10px;
                margin-top: -10px;
            }

            .withdraw_info {
                font-size: 14px;
                color: rgb(135, 135, 135);

                p {
                    color: #0095F3;
                    font-size: 20px;
                    line-height: 23px;
                    margin-bottom: 16px;
                }
            }
        }

        .btn {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 65px;

            .time {
                background: url('./clock.png') no-repeat left;
                padding-left: 15px;
                margin-right: 30px;
            }

            .queRoom1, .queRoom2 {
                display: block;
                // float left;
                height: 38px;
                width: 110px;
                font-size: 15px;
                color: rgb(255, 255, 255);
                font-family: 'PingFangSC-Regular';
                background-color: rgb(249, 117, 100);
                line-height: 38px;
                text-align: center;
            }

            .queRoom2 {
                margin-left: 10px;
            }
        }
    }
}
</style>


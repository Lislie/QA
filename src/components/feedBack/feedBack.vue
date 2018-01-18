<template>
    <div class="feedBack">
        <!-- 侧边栏 -->
        <div class="aside">
            <ul>
                <li v-for="(item,index) in asideData.items" :class="{active:asideData.activeIndex==index}" @mouseover="asideData.activeIndex=index" @mouseout="asideData.activeIndex=2" @click="asideData.activeIndex=2">
                    <router-link :to="item.path">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="main">
                <textarea v-model="suggestContent" name="" ref="text" cols="30" rows="10" placeholder="提出您的宝贵意见，我们将及时作出改进......"></textarea>
                <span class="num">{{suggestNum}}/500</span>
            </div>
            <button type="button" @click="submitSuggest">提交意见</button>
        </div>
         <!-- 申请提现成功弹框 -->
        <transition name="fade">
            <div class="feedbackBox" v-show="feedback.withdrawBoxShow">
                <div class="withdraw_main">
                    <img src="./close.png" alt="" class="withdraw_close" @click="feedback.withdrawBoxShow=false">                
                    <div class="withdraw_content">
                        <div class="withdraw_img"></div>
                        <div class="withdraw_info">
                            <p>已成功提交，感谢您的宝贵意见。</p>                    
                        </div>
                    </div>
                    <div class="btn">
                        <span class="time">{{feedback.time}}s...</span>
                        <!-- <router-link class="queRoom1" to="../myEarnings">账户收益 》</router-link> -->
                        <router-link class="queRoom2" to="../quesTion">继续答题 》</router-link>
                    </div>
                    
                </div>
            </div>
        </transition>       
        <transition name="fade">
            <toast2 id="toast2" v-show="toastShow"></toast2>
        </transition>
    </div>
</template>

<script>
import toast2 from '../toast/toast'
export default {
    components:{toast2}, 
    data(){
        return{
            // 侧边栏
            asideData:{
                items:[{
                    name:'我的收益',
                    path:'./myEarnings'
                },{
                    name:'账户安全',
                    path:'./account'
                },{
                    name:'意见反馈',
                    path:'./feedBack'
                }],
                activeIndex:2,
            },
            suggestContent:'',//意见反馈内容
            suggestNum:'0',
            feedback:{
                withdrawBoxShow:false,
                time:2
            },
            toastShow:false,
            timer:''       
        }
    },
    watch:{
        suggestContent(curVal,oldVal){
            this.suggestNum = curVal.length
            if(this.suggestNum>500){
                this.suggestContent = curVal.substring(0,500)
            }
        },
        // $route:{
        //     handler(curVal,oldVal){
        //         var _this =this
        //         if(curVal.fullPath!='/feedBack'){
        //             this.suggestContent=''
        //             clearInterval(_this.timer)                    
        //             this.feedback.withdrawBoxShow = false
        //             this.feedback.time = 2
        //         }
        //     },
        //     deep:true
        // },
        feedback:{
            handler(curVal,oldVal){
                var _this= this
                if(curVal.withdrawBoxShow == false){
                    clearInterval(_this.timer)                    
                    this.feedback.time = 2
                    this.suggestContent=''                    
                }
            },
            deep:true
        }
    },
    beforeRouteLeave(to,from,next){
        var _this =this
        if(to.name!='/feedBack'){
            this.suggestContent=''
            clearInterval(_this.timer)                    
            this.feedback.withdrawBoxShow = false
            this.feedback.time = 2
        }
        next()
    },
    methods:{
        // 弹框2s倒计时
        feedBackBox() {
            var _this=this
            this.feedback.withdrawBoxShow = true;
            var timer = setInterval(() => {
                this.feedback.time--;
                if (this.feedback.time < 0) {
                    this.feedback.withdrawBoxShow = false;
                    this.feedback.time = 2;
                    this.$router.push({path:'../quesTion'});//跳转问题库                    
                    clearInterval(timer);
                }
                if(this.feedback.withdrawBoxShow==false){
                     this.feedback.time = 2;
                     clearInterval(timer);
                }
            }, 1000);
            _this.timer = timer
        },
        submitSuggest(){
            // 调用接口
            var _this = this;
            if(this.suggestContent.length == 0){
                this.enterToast('请输入内容')
            }else{
                this.$indexServer.feedback(_this.suggestContent)
                .then((res)=>{
                    if(res.data.code == 200){                    
                        _this.feedBackBox();//弹框2s提示
                    }else if(res.data.code==400){
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
                        _this.enterToast('系统异常，请稍后再试')
                    }
                })
            }
        },
        enterToast(text,time) {
            var toast = document.getElementById("toast2");
            // var toast = document.getElementsByClassName("toast")[0];
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
.feedBack{
    margin 0 15%
    padding 0 20px
    background-color #fff
    min-width 1024px
    box-sizing border-box
}
.aside {
    height: 130px;
    width: 147px;
    // border: 1px solid #d2d2d2;
    position: fixed;
    top: 105px;
    right 85%
    box-shadow 0px 0px 10px #D6D6D6
    ul {
        height: 100%;
        width: 100%;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        li {
            flex: 1;
            border-bottom: 1px solid rgb(210,210,210);
            background-color #ffffff
            a {
                font-family 'PingFangSC-Regular';
                font-size 18px
                color rgb(1,0,25)
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
            background-color: rgb(249,85,63);
            transition:background 0.5s;
            a{
                color #ffffff
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
.content{
    font-family 'PingFangSC-Regular'
    margin: 21px 0 28px 0;
    height 670px
    min-width 950px
    background-color #fff
    font-family PingFangSC-Regular
    box-shadow: 0px 0px 10px #D6D6D6;
    overflow hidden
    display flex
    flex-direction column
    align-items center
    .main{
        height 397px
        width 88%
        // margin 0 auto
        margin-top 45px
        position relative
        textarea{
            height 100%
            width 100%
            padding 36px 0 28px 47px
            border 1px solid rgb(191,191,191)
            outline none
            resize none
            box-sizing border-box
            font-size 20px
        }
        .num{
            position absolute
            bottom 10px
            right 16px
            font-size 16px
            color rgb(1,0,25)
        }
    }
    button{
        height 50px
        width 173px
        margin-top 31px
        background-color rgb(249,85,63)
        color #ffffff
        font-size 20px
        outline none
        border none
        cursor pointer
    }



}
.feedbackBox {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);

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
        // display flex
        // justify-content center
        // align-items center
        // flex-direction column

        .withdraw_close {
            position: absolute;
            top: -28px;
            right: -28px;
        }

        .withdraw_content {
            margin-top: 90px;
            margin-left: 50px;

            .withdraw_img {
                float: left;
                height: 70px;
                width: 72px;
                // border-radius: 35px;
                // border: 1px solid rgb(231, 79, 58);
                background: url('./tick.png') no-repeat center;
                margin-right: 10px;
                margin-top: -20px;
            }

            .withdraw_info {
                font-size: 14px;
                color: rgb(135, 135, 135);
                p {
                    color: #0095F3;
                    font-size: 20px;
                    // line-height: 23px;
                    // margin-bottom: 16px;
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


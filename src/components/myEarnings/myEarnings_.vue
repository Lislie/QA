<template>
    <div class="earnings">
        <!-- 侧边栏 -->
        <div class="aside">
            <ul>
                <li v-for="(item,index) in asideData.items" :class="{active:asideData.activeIndex==index}" @mouseover="asideData.activeIndex=index" @mouseout="asideData.activeIndex=0" @click="asideData.activeIndex=0">
                    <router-link :to="item.path">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
        <!-- 主要内容 -->
        <div class="earnings_content">
            <!-- 头部  个人信息 -->
            <div class="personal">
                <div class="top"></div>
                <div class="personal_info">
                    <div class="personal_img" v-show="userData.headUrl">
                        <!-- <img class="pic" src="./aaa.jpg" alt=""> -->
                        <img class="pic" :src="userData.headUrl" alt="">
                    </div>
                    <div class="personal_img" style="border:none" v-show="!userData.headUrl"></div>                    
                    <div class="name">{{userData.nickname}}</div>
                    <div class="phone">{{userData.mobile}}</div>
                </div>
                <!-- 申请提现模块 -->
                <div class="money">
                    <span>当前账户余额:</span>
                    <span>{{resData.currentIntegral}}</span>
                    <div class="line"></div>
                    <span>价值现金：</span><span>￥{{resData.cashValue}}</span>
                    <button type="button" @click="applyWithdrawal" style="cursor:pointer">申请提现</button>
                </div>
            </div>
            <div class="bottom">
                <!-- 搜索模块 -->
                <div class="search">
                    <div class="search_top">
                        <div class="question">
                            <label for="">问题:</label>
                            <input type="text" v-model="inquireParam.keyword">
                        </div>
                        <div class="type">
                            <label for="">变动类型:</label>
                            <img id="select_img" :class="{rotate_img1:isRotate1,rotate_img2:!isRotate1}" src="./aaa.png" alt="" @click="click">
                            <select name="" id="select1" v-model="inquireParam.transactionType" @click="isRotate1=!isRotate1" @blur="isRotate1=false">
                                <option value="">请选择</option>
                                <option value="0">积分奖励</option>
                                <option value="1">积分提现</option>
                            </select>
                        </div>
                        <div class="state">
                            <label for="">变动动态:</label>
                            <img id="select_img" :class="{rotate_img1:isRotate2,rotate_img2:!isRotate2}" src="./aaa.png" alt="">                            
                            <select name="" id="select2" v-model="inquireParam.transactionState" @click="isRotate2=!isRotate2" @blur="isRotate2=false">
                                <option value="">请选择</option>
                                <option value="1">审核中</option>
                                <option value="2">完成</option>
                                <option value="3">审核失败</option>
                            </select>
                        </div>
                    </div>
                    <div class="search_foot">
                        <div class="time" style="color:#000120">
                            <label for="">交易日期:</label>
                            <!-- <el-date-picker
                                style="width:140px;margin:0 5px"
                                v-model="inquireParam.startDate"
                                type="date"
                                placeholder="日期"
                                value-format="yyyy-MM-dd">
                            </el-date-picker>
                            至
                            <el-date-picker
                                style="width:140px;margin:0 5px"
                                v-model="inquireParam.endDate"
                                type="date"
                                placeholder="日期"
                                value-format="yyyy-MM-dd">
                            </el-date-picker> -->
                            <el-date-picker
                                style="border:1px solid #d2d2d2"
                                v-model="changeDate"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="日期"
                                end-placeholder="日期"
                                value-format="yyyy-MM-dd">
                            </el-date-picker>
                        </div>
                        <button type="button" @click="inquireData" style="cursor:pointer">搜索</button>
                    </div>
                </div>
                <div class="line"></div>
                <!-- 历史收益 -->
                <div class="history">
                    <!-- 历史收益 -->
                    <div class="history_income">历史收益：<span>{{resData.integralTotal}}</span></div>
                    <!-- 历史提现金额 -->
                    <div class="history_money">历史提现金额：<span>￥{{resData.cashTotal}}</span></div>
                    <!-- 记录 -->
                    <div class="recordNum">共 <span>{{total}}</span> 条记录</div>
                    <!-- 累计积分变动 -->
                    <!-- <div class="total_integral">累计积分变动 <span>{{resData.currentIntegral}}</span></div> -->
                    <!-- 累计现金变动 -->
                    <!-- <div class="total_money">累计现金变动<span>￥{{resData.cashValue}}</span></div> -->
                </div>
                <!-- 列表 -->
                <div class="list">
                    <table width="100%" class="table">
                        <tr style="background-color: #E9EAEA">
                            <th style="width:59px">序号</th>
                            <th style="width:97px">交易时间</th>
                            <th style="width:279px">交易内容</th>
                            <th style="width:98px">变动类型</th>
                            <th>积分变动</th>
                            <th style="width:75px">积分现金比</th>
                            <th>现金变动</th>
                            <th>变动状态</th>
                            <th>积分余额</th>
                        </tr>
                        <tr style="height:69px" v-for="(item,index) in listData">
                            <td>{{index+1}}</td>
                            <td>{{item.createTime}}</td>
                            <td>{{item.content}}</td>
                            <td>
                                <a v-show="item.type == 0">积分奖励</a>
                                <a v-show="item.type == 1">积分提现</a>
                                <a v-show="item.type == 2">后台充值</a>
                            </td>
                            <td >
                                <a v-show="item.state == 1">{{item.integral}}</a>
                                <a v-show="item.state == 3">{{item.integral}}</a>
                                <a v-show="item.integral>0&&item.state == 2" style="color:rgb(0,152,240)">{{item.integral}}</a>
                                <a v-show="item.integral<0&&item.state == 2" style="color:rgb(231,51,27)">{{item.integral}}</a>
                            </td>
                            <td>
                                <a v-if="item.rate">{{item.rate}}</a>
                                <a v-else>——</a>
                            </td>
                            <td>
                                <a v-show="!item.cash">——</a>                                
                                <a v-show="item.cash && item.state == 2" style="color:rgb(231,51,27)">{{item.cash}}</a>
                                <a v-show="item.cash && item.state != 2">{{item.cash}}</a>
                            </td>
                            <td>
                                <a v-show="item.state == 1" style="color:#266BE8;">审核中</a>
                                <a v-show="item.state == 2">完成</a>                                
                                <a v-show="item.state == 3" style="color:#E7331B;text-decoration:underline;cursor:pointer" :title="item.remark">审核失败</a>
                            </td>
                            <td>{{item.integralBalance}}</td>
                        </tr>
                    </table>
                </div>
                <!-- 分页 -->
                <div class="page">
                    <el-pagination v-show="listData.length != 0" @current-change="currentPage"
                        layout="prev, pager, next"
                        :page-size="15"
                        :total="total">
                    </el-pagination>
                </div>
            </div>
            <!-- 申请提现弹框 -->
            <transition name="fade">
                <div class="box" v-show="applyBomb">
                    <div class="applyBomb">
                        <!-- <div class="title">
                            <span>提示</span>
                            <span class="close" @click="applyBomb=false">X</span>
                        </div> -->
                        <div class="apply_content">
                            <div class="img"></div>
                            <div class="apply_info">
                                <p>当前账号余额为0，<br />不能进行此操作。</p>
                                <span>1</span><span>s</span><span>自动跳转到当前页...</span>
                            </div>
                        </div>
                        <router-link class="apply_queRoom" to="../quesTion">继续答题 》</router-link>
                    </div>

                </div>
            </transition>            
            <!-- 审核说明弹框 -->
            <div class="box" v-show="auditBomb">
                <!-- 审核说明 -->
                <div class="auditBomb">
                    <div class="title">
                        <span>审核说明</span>
                        <span class="close" @click="auditBomb=false">X</span>
                    </div>
                    <div class="content">+
                        <span>提交的审核不通过，该账号的收益存在异议需要进行重新的核实请你及时联系业务部门。</span>
                    </div>
                </div>
            </div>
            <transition name="fade">
                <toast1 id="toast1" v-show="toastShow" style="top:300px"></toast1>                                    
            </transition>
        </div>
    </div>
</template>

<script>
import toast1 from '../toast/toast'
export default {
    components:{toast1}, 
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
            resData:{},//后台数据
            total:'',//返回记录总数量
            // 列表数据
            listData: [],
            applyBomb: false, //提现弹框显示
            auditBomb: false, //审核说明弹框显示
            inquireParam:{
                keyword:'',//问题
                transactionType:'',//积分变动类型
                transactionState:'',//积分变动状态
                startDate:'',//开始时间
                endDate:'',//结束时间
            },
            changeDate:'',//交易日期
            userData:{ //用户信息
                mobile:'',
                nickname:'',
                headUrl:''
            },
            pageNum:1,//页码
            pageSize:15,
            toastShow:false,
            isRotate1:false,//下拉菜单箭头旋转
            // isRotate1_1:false,//下拉菜单箭头旋转
            isRotate2:false,//下拉菜单箭头旋转
            // isRotate2_1:false,//下拉菜单箭头旋转
        };
    },
    // beforeRouteEnter (to, from, next) {
    //     next(vm => {
    //         vm.getData(vm.inquireParam.keyword,vm.inquireParam.transactionType,vm.inquireParam.transactionState,vm.inquireParam.startDate,vm.inquireParam.endDate,vm.pageNum,vm.pageSize)
    //         vm.getUser()
    //     })
    // },
    // created() {
    //     this.getData(this.inquireParam.keyword,this.inquireParam.transactionType,this.inquireParam.transactionState,this.inquireParam.startDate,this.inquireParam.endDate,this.pageNum,this.pageSize)
    //     this.getUser()
    // },
    watch:{
        changeDate(curVal,oldVal){
            // console.log(curVal)
            if(curVal==null){
                this.inquireParam.startDate=''
                this.inquireParam.endDate=''
            } else {
                this.inquireParam.startDate=curVal[0]
                this.inquireParam.endDate=curVal[1]
            }
            // console.log(this.inquireParam.startDate+'==',this.inquireParam.endDate+'==')            
        }
    },
    methods: {
        // 获取用户信息
        getUser(){
            var _this = this;
            this.$indexServer.user()
            .then((res)=>{
                if(res.data.code==200){
                    _this.userData = res.data.data
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
                }else{
                    _this.enterToast('服务异常，请稍后再试')
                }
            })
        },
        // 获取用户收益信息 查询
        getData(keyword,transactionType,transactionState,startDate,endDate,pageNum,pageSize){
            var _this = this;
            //调接口方法-----
            this.$indexServer.income(_this.inquireParam.keyword,_this.inquireParam.transactionType,_this.inquireParam.transactionState,_this.inquireParam.startDate,_this.inquireParam.endDate,_this.pageNum,_this.pageSize)
            .then((res)=>{
                // console.log(res)
                if(res.data.code==200){
                    _this.resData = res.data.data; //后台返回数据                
                    _this.listData = res.data.data.transaction; //列表数据
                    _this.total = parseInt(res.data.total) // 记录总数
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
                }else{
                    _this.enterToast('服务异常，请稍后再试')
                }
            })
            
        },

        // 分页  获取当前页
        currentPage(val) {
            // console.log(val);
            var _this = this;
            this.pageNum = val;
            this.getData(_this.inquireParam.keyword,_this.inquireParam.transactionType,_this.inquireParam.transactionState,_this.inquireParam.startDate,_this.inquireParam.endDate,_this.pageNum,_this.pageSize);//要传参
        },

        // 搜索
        inquireData(){
            var _this = this;
            // console.log(this.inquireParam);
            this.getData(_this.inquireParam.keyword,_this.inquireParam.transactionType,_this.inquireParam.transactionState,_this.inquireParam.startDate,_this.inquireParam.endDate,_this.pageNum,_this.pageSize);//要传参
        },

        // 申请提现
        applyWithdrawal(){
            if(this.resData.currentIntegral <= 0){
                this.applyBomb = true;
                setTimeout(()=>{
                    this.applyBomb = false;
                },1000)
            }else{
                this.$router.push('../withdraw')
            }
        },
        // 滚动事件
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // console.log(scrollTop)
            this.isRotate1=false
            this.isRotate2=false
        },
        click(){
            var select = document.getElementById('select1')
            console.log(select)
            select.click()
        },
        enterToast(text,time) {
            var toast = document.getElementById("toast1");
            if (toast) {
                toast.innerHTML = text;
                this.toastShow = true;
                setTimeout(() => {
                    this.toastShow = false;
                }, 2000||time);
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.earnings {
    margin 0 15%
    padding 0 20px
    font-family: 'PingFangSC-Regular';
    min-width: 1024px;
    box-sizing border-box
}

// 侧边栏
.aside {
    height: 130px;
    width: 147px;
    // width:7.8%;
    // border: 1px solid #d2d2d2;
    position: fixed;
    top: 105px;
    right:85%;
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
// 内容
.earnings_content {
    // margin-left: 166px;
    margin-top: 21px;

    // 头部个人信息模块
    .personal {
        height: 301px;
        background-color: #ffffff;
        overflow: hidden;
        box-shadow: 0px 0px 10px #D6D6D6;

        .top {
            height: 96px;
            background-color: #C9C9C9;
        }

        .personal_info {
            // height 205px
            background-color: #ffffff;

            .personal_img {
                height: 126px;
                width: 126px;
                margin: -49px 10px 0 49px;
                float: left;
                border-radius: 63px;
                overflow: hidden;
                border: 4px solid #fff;
                box-sizing: border-box;

                .pic {
                    height: 100%;
                    width: 100%;
                }
            }

            .name {
                font-size: 22px;
                color: rgb(0, 1, 32);
                padding: 20px 0 14px 0;
            }

            .phone {
                font-size: 18px;
                color: rgb(0, 1, 32);
            }
        }

        .money {
            margin-top: 38px;

            span:nth-child(1) {
                margin-left: 41px;
                font-size: 22px;
                color: rgb(1, 0, 25);
            }

            span:nth-child(2) {
                margin-left: 12px;
                padding-left: 44px;
                font-size: 42px;
                color: rgb(231, 51, 27);
                background: url('./money2Img.png') no-repeat left 20px;
            }

            .line {
                display: inline-block;
                height: 20px;
                width: 1px;
                background-color: #8C8C8C;
                margin: 0 28px;
            }

            span:nth-child(4) {
                font-size: 22px;
                color: rgb(1, 0, 25);
            }

            span:nth-child(5) {
                font-size: 22px;
                color: rgb(249, 85, 63);
            }

            button {
                height: 46px;
                width: 153px;
                color: rgb(254, 254, 254);
                background-color: rgb(249, 85, 63);
                font-size: 20px;
                outline: none;
                border: none;
                float: right;
                margin-right: 40px;
            }
        }
    }

    // 搜索模块
    .bottom {
        margin-top: 20px;
        box-shadow: 0px 0px 10px #D6D6D6;
        background-color: #fff;
        margin-bottom: 28px;

        .search {
            overflow: hidden;
            label {
                font-size: 16px;
                color: rgb(0, 1, 32);
            }

            .search_top {
                overflow: hidden;
                margin: 23px 0 24px 40px;
                .question {
                    float: left;
                    input {
                        width: 178px;
                        height: 36px;
                        border: 1px solid rgb(210, 210, 210);
                        box-sizing: border-box;
                        margin-left: 5px;
                        outline: none;
                        padding-left: 5px;
                    }
                }

                .type, .state {
                    float: left;
                    margin-left: 24px;
                    position relative
                    select {
                        width: 124px;
                        height: 36px;
                        outline: none;
                        margin-left: 4px;
                        border: 1px solid rgb(210, 210, 210);
                        box-sizing: border-box;
                        appearance:none;
                        -moz-appearance:none;
                        -webkit-appearance:none;
                        padding-left:8px;
                    }
                    select::-ms-expand { display: none; }
                    #select_img{
                        position absolute
                        right 5px
                        top 10px
                    }
                    .rotate_img1{
                        transform: rotate(180deg);
                        -ms-transform: rotate(180deg);             /* IE 9 */
                        -webkit-transform: rotate(180deg);      /* Safari and Chrome */
                        -o-transform: rotate(180deg);              /* Opera */
                        -moz-transform: rotate(180deg);         /* Firefox */
                        transition all 0.5s
                    }
                    .rotate_img2{
                        transform: rotate(0deg);
                        -ms-transform: rotate(0deg);             /* IE 9 */
                        -webkit-transform: rotate(0deg);      /* Safari and Chrome */
                        -o-transform: rotate(0deg);              /* Opera */
                        -moz-transform: rotate(0deg);         /* Firefox */
                        transition all 0.5s
                    }
                }
            }

            .search_foot {
                overflow: hidden;
                margin-left: 40px;

                .time {
                    float: left;

                    .el-input__inner {
                        border: 1px solid rgb(210, 210, 210);
                        border-radius: 0;
                        height: 36px;
                        box-sizing: border-box;
                    }

                    .el-input__icon {
                        line-height: 0px;
                    }
                    .el-icon-date:before {
                        content: url('./timeImg.png')
                        display block
                        margin 4px 0 0 4px
                    }
                }

                button {
                    height: 36px;
                    width: 79px;
                    background-color: rgb(75, 198, 244);
                    outline: none;
                    border: none;
                    color: rgb(254, 254, 254);
                    font-size: 16px;
                    margin-right: 40px;
                    float: right;
                }
            }
        }

        .line {
            height: 1px;
            // width 100%
            margin: 24px 2% 0;
            background-color: rgb(229, 229, 229);
        }

        .history {
            display: flex;
            align-items: baseline;

            .history_income {
                font-size: 18px;
                color: rgb(0, 1, 32);
                margin-left: 40px;

                span {
                    font-size: 18px;
                    color: rgb(231, 51, 27);
                    background: url('./money1Img.png') no-repeat left;
                    padding-left: 35px;
                }
            }

            .history_money {
                font-size: 18px;
                color: rgb(0, 1, 32);
                margin-left: 36px;
                margin-right: 46px;

                span {
                    font-size: 18px;
                    color: rgb(231, 51, 27);
                }
            }

            .recordNum, .total_integral, .total_money {
                font-size: 14px;
                color: rgb(160, 160, 160);
                margin-right: 36px;

                span {
                    color: rgb(231, 51, 27);
                }
            }
        }

        .list {
            table {
                table-layout: fixed;
                empty-cells: show;
                border-collapse: collapse;
                margin: 0 auto;
            }

            .table td, .table th {
                border: 1px solid rgb(210, 210, 210);
                padding: 0 5px 0;
                text-align: center;
                vertical-align: middle;
                font-size: 12px;
                color: rgb(0, 1, 32);
            }

            .table th {
                background-repeat: repeat-x;
                height: 50px;
                font-size: 14px;
            }

            a {
                color: rgb(0, 1, 32);
            }
        }

        .page {
            display: flex;
            justify-content: center;
            padding: 40px 0 54px 0;
            .el-pager li {
                font-size:16px
            }
            .el-pager li.active {
                color: rgb(251, 67, 43);
            }

            .el-pager li:hover {
                color: rgb(251, 67, 43);
            }
        }
    }

    // 历史收益模块
    .history {
        display: flex;
        margin: 20px 0;

        .el-input {
            width: 50%;
        }
    }

    // 申请提现弹框
    .box {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.7);
        .applyBomb, .auditBomb {
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

            // .title {
            // border-bottom: 1px solid red;
            // background-color: #cccccc;
            // height: 30px;
            // line-height: 30px;
            // padding: 0 10px;

            // .close {
            // float: right;
            // cursor: default;
            // }
            // }
            .apply_content {
                margin-top: 104px;
                margin-left: 111px;

                .img {
                    float: left;
                    height: 70px;
                    width: 70px;
                    border-radius: 35px;
                    border: 1px solid rgb(231, 79, 58);
                    background: url('./cha.png') no-repeat center;
                    margin-right: 10px;
                }

                .apply_info {
                    font-size: 14px;
                    color: rgb(135, 135, 135);

                    p {
                        color: rgb(231, 79, 58);
                        font-size: 20px;
                        line-height: 23px;
                        margin-bottom: 16px;
                    }

                    span:nth-child(2) {
                        padding-left: 17px;
                        color: rgb(13, 157, 241);
                        background: url('./clock.png') no-repeat left;
                    }

                    span:nth-child(3) {
                        color: rgb(45, 45, 45);
                        padding-right: 5px;
                    }
                }
            }

            .apply_queRoom {
                display: block;
                height: 38px;
                width: 131px;
                font-size: 15px;
                color: rgb(255, 255, 255);
                font-family: 'PingFangSC-Regular';
                background-color: rgb(249, 117, 100);
                line-height: 38px;
                text-align: center;
                margin: 60px auto;
            }
        }

        .auditBomb {
            .title {
                height: 50px;
                background-color: #ccc;
                line-height: 50px;
                padding: 0 20px;

                .close {
                    float: right;
                }
            }

            .content {
                margin: 0;
                padding: 20px;
            }
        }
    }
}
</style>


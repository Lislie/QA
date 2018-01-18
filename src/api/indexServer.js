import server from './server'

/**
 * 对应后端涉及到用户认证的 API
 */
class IndexService {


  failDetailed (questionId) { // 我的回答-审核失败
    return server({
      url: 'rest/api/v1/qa/question/detailed?questionId=' + questionId,
      method: 'get'
    })
  }
  auditHeader () { // 审核页面头信息
    return server({
      url: 'rest/api/v1/qa/question/auditHeader',
      method: 'get'

    })
  }

  cash (integral, account, name, withdrawType) { // 我的收益-提现
    return server({
      url: 'rest/api/v1/qa/user/income/cash?integral='+integral+'&account='+account+'&name='+name+'&withdrawType='+withdrawType,
      method: 'post',
      data: {
        integral: integral,
        account: account,
        name: name,
        withdrawType: withdrawType
      }
    })
  }

  integral () {
    return server({ // 我的收益
      url: 'rest/api/v1/qa/user/income/integral',
      method: 'get'
    })
  }

  exit () { // 退出
    return server({url: 'login/api/v1/qa/user/exit', method: 'get'})
  }

  newQuestion () { // 我要回答-获取新问题
    return server({url: 'rest/api/v1/qa/question/newQuestion', method: 'post'})
  }

  reanswer (questionId) { // 我的问答-重新回答
    return server({
      url: 'rest/api/v1/qa/question/reanswer?questionId='+questionId,
      method: 'post',
      data: {
        questionId: questionId
      }
    })
  }

  auditFailure (pageNum, pageSize) { // 我的回答-审核失败
    return server({
      url: 'rest/api/v1/qa/question/auditFailure?pageNum=' + pageNum + '&pageSize=' + pageSize,
      method: 'get'
    })
  }

  auditSuccess (pageNum, pageSize) { // 我的回答-审核成功
    return server({
      url: 'rest/api/v1/qa/question/auditSuccess?pageNum=' + pageNum + '&pageSize=' + pageSize,
      method: 'get'
    })
  }

  nonChecked (pageNum, pageSize) { // 我的回答-未审核
    return server({
      url: 'rest/api/v1/qa/question/nonChecked?pageNum=' + pageNum + '&pageSize=' + pageSize,
      method: 'get'
    })
  }

  income (keyword, transactionType, transactionState, startDate, endDate, pageNum, pageSize) {
    // 获取用户收益信息 pageNum,pageSize必传
    return server({
      url: 'rest/api/v1/qa/user/income?keyword=' + keyword + '&transactionType=' + transactionType + '&transactionState=' + transactionState + '&startDate=' + startDate + '&endDate=' + endDate + '&pageNum=' + pageNum + '&pageSize=' + pageSize,
      method: 'get'
    })
  }

  disable (questionId) { // 此题我不会
    return server({
      url: 'rest/api/v1/qa/question/disable?questionId='+questionId,
      method: 'post',
      data: {
        questionId: questionId
      }
    })
  }

  commit (questionId, answer) { // 提交问题答案
    return server({
      url: 'rest/api/v1/qa/question/commit',
      method: 'post',
      data: {
        questionId: questionId,
        answer: answer
      }
    })
  }

  headData () { // 首页数据
    return server({url: 'rest/api/v1/qa/headData', method: 'get'})
  }

  mobile (mobile, validateCode) { // 用户修改电话
    return server({
      url: 'login/api/v1/qa/security/mobile?mobile='+mobile+'&validateCode='+validateCode,
      method: 'post',
      data: {
        mobile: mobile,
        validateCode: validateCode
      }
    })
  }

  nickname (nickname) { // 用户修改昵称
    return server({
      url: 'login/api/v1/qa/security/nickname?nickname='+nickname,
      method: 'post',
      data: {
        nickname: nickname
      }
    })
  }

  headUrl (headUrl) { // 用户修改头像
    return server({
      url: 'login/api/v1/qa/security/headUrl?headUrl='+headUrl,
      method: 'post',
      data: {
        headUrl: headUrl
      }
    })
  }

  passwd (oldPasswd, newPasswd) { // 用户修改密码
    return server({
      url: 'login/api/v1/qa/security/passwd?oldPasswd='+oldPasswd+'&newPasswd='+newPasswd,
      method: 'post',
      data: {
        oldPasswd: oldPasswd,
        newPasswd: newPasswd
      }
    })
  }

  user () { // 获取用户信息
    return server({url: 'login/api/v1/qa/security/user', method: 'get'})
  }

  updatePassword (mobile, validateCode, password) { // 忘记密码
    return server({
      url: 'login/api/v1/qa/user/updatePassword?mobile=' + mobile + '&validateCode=' + validateCode + '&password=' + password,
      method: 'post',
    // data: {
    //   mobile: mobile,
    //   validateCode: validateCode,
    //   password: password
    // }
    })
  }

  loginByValidateCode (mobile, validateCode) { // 登录验证码
    return server({
      url: 'login/api/v1/qa/user/loginByValidateCode?mobile=' + mobile + '&validateCode=' + validateCode,
      method: 'post'
    })
  }

  loginByPassword (mobile, password) { // 登录密码
    return server({
      url: 'login/api/v1/qa/user/loginByPassword?mobile=' + mobile + '&password=' + password,
      method: 'post',
    // data: {
    //   mobile: mobile,
    //   password: password
    // }
    })
  }

  registration (mobile, validateCode, password) { // 注册
    return server({
      url: 'login/api/v1/qa/user/registration?mobile=' + mobile + '&validateCode=' + validateCode + '&password=' + password,
      method: 'post',
    // data: {
    //   mobile: mobile,
    //   validateCode: validateCode,
    //   password: password
    // }
    })
  }

  feedback (content) { // 意见反馈
    return server({
      url: 'rest/api/v1/qa/user/feedback?content='+content,
      method: 'post',
      data: {
        content: content
      }
    })
  }

  validateCode (mobile) { // 发送验证码
    return server({
      url: 'login/api/v1/qa/user/validateCode?mobile=' + mobile,
      method: 'get'
    })
  }

  reset(questionId){ // 重置本次答题数量和积分
    return server({
      url: 'rest/api/v1/qa/question/reset',
      method: 'post',
    })
  }

  answerCount(){ //本次答题数量和积分
    return server({
      url: 'rest/api/v1/qa/question/answerCount',
      method: 'get',
    })
  }

}
export default new IndexService()

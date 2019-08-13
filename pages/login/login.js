const app = getApp();
Page({
  data: {
    code:''
  },
  onLoad: function (options) {
    let then = this
    wx.login({
      success: function (res) {
        console.log(res.code)
        then.setData({
          code:res.code
        })
      },
    })
  },
  getPhoneNumber(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  }
})
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
    wx.request({
      url: app.globalData.appUrl +'user/create_user',
      data: {
        code:this.data.code,
        iv: e.detail.iv,
        encryptedData: e.detail.encryptedData
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res)
        wx.setStorageSync(key, data)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    // console.log(e.detail.iv)
    // console.log(e.detail.encryptedData)
  }
})

// https://jkxw.guaishe.com/index.php/index/user/create_user
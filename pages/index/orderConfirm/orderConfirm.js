const app = getApp();
Page({
  data: {
    isSite: true
  },
  onLoad: function(options) {
    this.setData({
      Id: options.id,
      Num: options.num
    })
    this.getInfo()
  },
  onShow: function() {

  },
  getInfo() {
    let then = this
    wx.request({
      url: app.globalData.appUrl + 'drug/drug_num',
      data: {
        id: this.data.Id,
        num: this.data.Num,
        uid: 1
      },
      success: function(res) {
        then.setData({
          data: res.data
        })
      },
      fail: function(res) {
        wx.showToast({
          title: '网络错误请稍后再试',
          icon: 'none',
          duration: 1000,
        })
      },
    })
  },
  toAddress() {
    wx.navigateTo({
      url: '/pages/personal/address/address',
    })
  },
  pay() {
    wx.request({
      url: '',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {

      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
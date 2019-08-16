const app = getApp
Page({
   data: {
      isSite:true
   },
  toAddress(){
    wx.navigateTo({
      url: '/personal/address/adress',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
   onLoad: function (options) {

   },
})
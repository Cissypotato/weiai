// pages/personal/personal.js
Page({
   data: {
      userInfo: {},
      hasUserInfo: false,
      isLogin: false,
   },
   onLoad: function(options) {


   },
   onShow: function() {
      var value = wx.getStorageSync('user')
      if (value) {
         // Do something with return value
         this.setData({
            isLogin: true
         })
      }
   },
   getLogin: function() {
      wx.navigateTo({
         url: "../login/login"
      })

   },
   getUserInfo: function(e) {
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
         userInfo: e.detail.userInfo,
         hasUserInfo: true
      })
   },
   getHealthyRecord: function() {
      if (this.data.isLogin) {
         wx.navigateTo({
            url: "./record/record"
         })
      } else {
         this.getLogin()
      }


   },
   showMyphysical: function() {

      wx.showToast({
         title: '功能开发中，请期待',
         icon: 'none',
         duration: 2000
      })
   },
   toMyrecord: function() {
      if (this.data.isLogin) {
         wx.navigateTo({
            url: "./myrecord/myrecord"
         })
      } else {
         this.getLogin()
      }

   },
   toMyOrder() {
      if (this.data.isLogin) {
         wx.navigateTo({
            url: "./myOrder/myOrder"
         })
      } else {
         this.getLogin()
      }


   },
   toAdrress() {
      if (this.data.isLogin) {
         wx.navigateTo({
            url: "./address/address"
         })
      } else {
         this.getLogin()
      }


   }
})
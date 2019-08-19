// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    isLogin:false,
  },
  getLogin:function(){
    wx.navigateTo({
      url: "../login/login"
    })

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getHealthyRecord: function () {
    if(this.data.isLogin){
      wx.navigateTo({
        url: "./record/record"
      })
    }else{
      this.getLogin()
    }
   

  },
  showMyphysical:function(){
    
    wx.showToast({
      title: '功能开发中，请期待',
      icon: 'none',
      duration: 2000
    })
  },
  toMyrecord: function () {
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
  toAdrress(){
    if (this.data.isLogin) {
      wx.navigateTo({
        url: "./address/address"
      })
    } else {
      this.getLogin()
    }

   
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

   
      var value = wx.getStorageSync('user')
      if (value) {
        // Do something with return value
        this.setData({
          isLogin:true
        })
      }
    } ,

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onGotUserInfo: function (e) {
     console.log(e.detail.rawData)
    wx.navigateBack({
      delta: 2,
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit(e.detail.rawData, { data: 'userInfo' })
      }
    })
    
    // console.log(e.detail.errMsg)
    // console.log(e.detail.userInfo)
    // console.log(e.detail.rawData)
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

  },

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
// pages/personal/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formShow:true,
    isLogin: false,
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  getLogin: function () {
    wx.navigateTo({
      url: "./login/login"
    })

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
    // var value = wx.getStorageSync('user')
    // if (value) {
    //   // Do something with return value
    //   this.setData({
    //     isLogin: true
    //   })
    // }else{
    //   this.getLogin()
    // }
  },



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
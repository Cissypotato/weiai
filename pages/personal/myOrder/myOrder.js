// pages/personal/myOrder/myOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  handleAll(){
    this.setData({
      state: 0
    })
  },
  handlePay() {
    this.setData({
      state: 1
    })
  },
  handleSend() {
    this.setData({
      state: 2
    })
  },
  handleReceipt() {
    this.setData({
      state: 3
    })
  },
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
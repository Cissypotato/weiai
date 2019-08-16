// pages/personal/myOrder/myOrder.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  topay(){
    // wx.requestPayment({
    //   timeStamp: '1000',
    //   nonceStr: 'vferg',
    //   package: 'prepay_id=33',
    //   signType: 'MD5',
    //   paySign: '',
    // })
  },
  toDetail(event){
    console.log(event.currentTarget.dataset.id)
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '../../index/orderDetail/orderDetail?id='+id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getOrderList(){
    wx.request({
      url: app.globalData.appUrl+'order/my_order_list',
      data: {
        "uid":1
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=> {
        this.setData({
          orderList: res.data.info
        })
        console.log(res.data.info)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onLoad: function (options) {
    this.getOrderList()
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
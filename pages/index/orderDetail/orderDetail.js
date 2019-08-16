// pages/index/orderDetail/orderDetail.js
const app=getApp()
Page({

   /**
    * 页面的初始数据
    */
   data: {
     orderItem:null
   },

   /**
    * 生命周期函数--监听页面加载
    */
    getOrder(id){
      wx.request({
        url: app.globalData.appUrl + 'order/drug_desc',
        data: {
          id
        },
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (res)=> {
          console.log(res.data.info)
          this.setData({
            orderItem: res.data.info
          })
        },
        fail: function(res) {},
        complete: function(res) {},
      })
    },
   onLoad: function (options) {

     let id = options.id
     this.getOrder(id)
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
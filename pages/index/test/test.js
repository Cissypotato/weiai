const app = getApp()
Page({
<<<<<<< HEAD

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
=======
   data: {
      navTar: [{
         name: "综合排序"
      }, {
         name: "价格排序"
      }, {
         name: "推荐"
      }],
      isIndex: 0,
      drugList: {},
      queryText:''
   },
   onLoad: function(options) {
      this.getDrugList()
   },
   getDrugList: function() {
      let then = this
      wx.request({
         url: app.globalData.appUrl + 'drug/drug_list',
         success: function(res) {
            then.setData({
               drugList: res.data.info
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
   qhTar: function(event) {
      var then = this
      let data
      if (event.currentTarget.dataset.index == 1){
         data = { price: "desc" }
      } else if (event.currentTarget.dataset.index == 2){
         data = { state: 1 }
      } else if (event.currentTarget.dataset.index == 2) {
         data = {}
      }
      wx.request({
         url: app.globalData.appUrl + 'drug/drug_list',
         data:{
            data
         },
         success: function(res) {
            console.log(res)
            then.setData({
               isIndex: event.currentTarget.dataset.index,
               drugList: res.data.info
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
   query:function(e){
      this.setData({
         queryText: e.detail.value
      })
   },
   queryItem:function(){
      let then = this
      wx.request({
         url: app.globalData.appUrl + 'drug/drug_list',
         data: {
            key: then.data.queryText
         },
         success: function (res) {
            then.setData({
               drugList: res.data.info
            })
         },
         fail: function (res) {
            wx.showToast({
               title: '网络错误请稍后再试',
               icon: 'none',
               duration: 1000,
            })
         },
      })
   }
>>>>>>> 651c06dba3064b75dd63c42f4b1374e549b79e76
})
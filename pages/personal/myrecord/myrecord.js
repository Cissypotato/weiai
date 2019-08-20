// pages/personal/myrecord/record.js

const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    hasInfo:true,
    mylist:[],
    doctorList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getInfo()
   
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

  },
  getInfo(){
    wx.request({
      url: app.globalData.appUrl + "doctor/my_about",
      data: {
        uid:wx.getStorageSync("user")
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=> {
        console.log(res)
        if(res.data==''){
          this.setData({
            hasInfo:false
          })
        }else{
          let mylist=[]
          let doctorList=[]

          let list = res.data
          for (let i = 0; i < list.length;i++){
            if(list[i].state==2){
              console.log(list[i])
              mylist.push(list[i])
            } else if (list[i].state == 3){
              doctorList.push(list[i])
            }
          }
          this.setData({
            hasInfo:true,
            mylist:mylist,
            doctorList:doctorList
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
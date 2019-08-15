// pages/personal/address/address.js
const app = getApp ()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[]
  },

  toAddAdress(){

  wx.navigateTo({
    url: './addAddress/addAddress',
  })

  },
  handleDefault(event){



    let index = event.currentTarget.dataset.index
    let addressList = this.data.addressList
    addressList[index].defaultSelected = !addressList[index].defaultSelected
    this.setData({
      addressList
    })

  },
  deleteAddress(event){
   let id=event.currentTarget.dataset.id
    wx.request({
      url: app.globalData.appUrl + 'address/del_address',
      data: {
        "id":id,
        "uid":1,

      },
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (res)=> {
        if(res.data.state){
          wx.showToast({
            title: '删除成功',
            icon: 'none',
            duration: 1000,
            success: (res) =>{
              this.onShow()
             },
            
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  getAddress(){
   wx.request({
     url: app.globalData.appUrl + 'address/address_list',
     data: {
       uid:1
     },
     header: {},
     method: 'GET',
     dataType: 'json',
     responseType: 'text',
     success: (res)=> {
       console.log(res.data.info)
       this.setData({
         addressList: res.data.info
       })
     },
     fail: function(res) {},
     complete: function(res) {},
   })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAddress()
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
    this.getAddress()
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
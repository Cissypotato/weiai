// pages/personal/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[
      {
        id:1,
        name:"tudou",
        tel:132473857,
        province:[1,2,3],
        address:'sfvghdy8ugyue',
        defaultSelected:true
      },
      {
        id:2,
        name: "xigaun",
        tel: 132473857,
        province: [1, 2, 3],
        address: 'sfvghdy8ugyue',
        defaultSelected: false
      },
      
    ]
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
    let index = event.currentTarget.dataset.index
    let addressList=this.data.addressList
    addressList.splice(index,1)
    this.setData({
      addressList
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {

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
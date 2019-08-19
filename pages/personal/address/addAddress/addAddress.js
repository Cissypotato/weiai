// pages/personal/address/addAddress/addAddress.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    region: ['广东省', '广州市', '海珠区'],
    addressItem:null,
    isLogin: false,
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    
    this.setData({
      region: e.detail.value
    })
  },
  updateFormSubmit:function(e){
    let name = e.detail.value.name
    let province = e.detail.value.province[0]
    let city = e.detail.value.province[1]
    let area = e.detail.value.province[2]
    let place = e.detail.value.address
    let defaultValue = e.detail.value.defaultSelected ? 1 : 0
    let tel = e.detail.value.tel
    let myreg = /^(0|86|17951)?(13[0-9]|15[012356789]|16[6]|19[89]]|17[01345678]|18[0-9]|14[579])[0-9]{8}$/
    if (myreg.test(tel)) {
      wx.request({
        url: app.globalData.appUrl + 'address/upt_address',
        data: {
          "id":this.data.id,
          "porvince": province,
          "city": city,
          "area": area,
          "name": name,
          "tel": tel,
          "place": place,
        },
        header: {},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          if (res.data.state) {
            wx.navigateBack({
              delta: 1,
              success: function () {
                wx.showToast({
                  title: '修改地址成功',
                  icon: 'none',
                  duration: 1000,
                })
              }
            })
          }


        },
        fail: function (res) { },
        complete: function (res) { },
      })
    }

  },

  formSubmit: function (e) {
    let name = e.detail.value.name
    let province = e.detail.value.province[0]
    let city = e.detail.value.province[1]
    let area = e.detail.value.province[2]
    let place = e.detail.value.address
    let defaultValue = e.detail.value.defaultSelected?1:0
    let tel = e.detail.value.tel
    let myreg = /^(0|86|17951)?(13[0-9]|15[012356789]|16[6]|19[89]]|17[01345678]|18[0-9]|14[579])[0-9]{8}$/
    if (myreg.test(tel)) {
      wx.request({
        url: app.globalData.appUrl + 'address/add_address',
        data: {
          "uid": 1,
          "porvince":province,
          "city":city,
          "area":area,
          "name": name,
          "tel": tel,
          "place":place,
          "default": defaultValue 
        },
        header: {},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          if(res.data.state){
            wx.navigateBack({
              delta: 1,
              success:function(){
                wx.showToast({
                  title: '添加地址成功',
                  icon: 'none',
                  duration: 1000,
                })
              }
            })
          }

         
        },
        fail: function (res) { },
        complete: function (res) { },
      })


    } else {
      wx.showToast({
        title: '请输入正确的手机号码',
        icon: 'none',
        duration: 1000,
      })
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value)


  },
  switchChange: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.id
    this.setData({
      id
    })
    wx.request({
      url: app.globalData.appUrl + 'address/select_address',
      data: {
        "id": id
      },
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        this.setData({
          addressItem: res.data.info
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
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
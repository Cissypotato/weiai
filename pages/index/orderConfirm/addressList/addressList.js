// pages/personal/address/address.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [],
    isLogin: false,
    hasAddress: true,
    selected:false,
  },

  toAddAdress() {

    wx.navigateTo({
      url: '../../../personal/address/addAddress/addAddress',
    })

  },
  handleSelect(event) {

    let id = event.currentTarget.dataset.id
  
    wx.request({
      url: app.globalData.appUrl +'address/select_address',
      data: {id},
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=> {
        this.setData({
          selected: true,
        })
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    // wx.request({
    //   url: app.globalData.appUrl + 'address/set_def_address',
    //   data: {
    //     "id": id,
    //     "uid": wx.getStorageSync('user')
    //   },
    //   header: {},
    //   method: 'POST',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: (res) => {
    //     if (res.data.state) {

    //       this.onShow()
    //     }

    //   },
    // })
  },
  deleteAddress(event) {
    let id = event.currentTarget.dataset.id
    wx.request({
      url: app.globalData.appUrl + 'address/del_address',
      data: {
        "id": id,
        "uid": 1,

      },
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        if (res.data.state) {
          wx.showToast({
            title: '删除成功',
            icon: 'none',
            duration: 1000,
            success: (res) => {
              this.onShow()
            },

          })
        }
      },
    })

  },
  getAddress() {
    wx.request({
      url: app.globalData.appUrl + 'address/address_list',
      data: {
        uid: 1
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data.info)
        if (res.data.info === "暂无地址") {
          this.setData({
            hasAddress: false
          })
        } else {
          this.setData({
            hasAddress: true,
            addressList: res.data.info
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
  editAddress: function (event) {
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: './addAddress/addAddress?id=' + id,
    })
  },

  onLoad: function (options) {
    this.getAddress()
  },

  onReady: function () {

  },

  onShow: function () {
    this.getAddress()
  },


})
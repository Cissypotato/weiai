// pages/index/register/register.js
const app = getApp()
Page({


  data: {
    doctorList: null,
    isLogin: false
  },
  onLoad: function(options) {
    this.getDoctorList()
  },
  getDoctorList: function() {
    wx.request({
      url: app.globalData.appUrl + 'doctor/doctor_list_about',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        this.setData({
          doctorList: res.data.info
        })
        // console.log(this.data.doctorList)
      },

      fail: function(res) {},
      complete: function(res) {},
    })

  },
  goMake(event) {

    let id = event.currentTarget.dataset.id

    if (this.data.isLogin) {
      wx.navigateTo({
        url: '/pages/index/registerDate/registerDate?id=' + id,
      })
    } else {
      wx.navigateTo({
        url: './../../login/login',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },
  onShow() {
    let value = wx.getStorage({
      key: 'user',
    })
    if (value) {
      this.setData({
        isLogin: true
      })
    }
  }
})
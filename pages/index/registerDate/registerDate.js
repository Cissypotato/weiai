const app = getApp()
Page({
   data: {
      weekInfo:{},
      intervalInfo:{},
      isZg:false
   },
   onLoad: function(options) {
      this.week(23)
   },
   week: function(id) {
      let then = this
      wx: wx.request({
         url: app.globalData.appUrl + 'doctor/doctor_time',
         data: {
            id: id
         },
         method: 'GET',
         success: function(res) {
            console.log(res);
            then.setData({
               weekInfo: res.data.doctor,
               intervalInfo: res.data.doctor[0].day,
            })
         },
         fail: function(res) {

         }
      })
   },
   next_tel:function(){
      wx.navigateTo({
         url: '/pages/index/registerInfo/registerInfo',
      })
   },
   zg_btn:function(){
      let then = this
      then.setData({
         isZg:true
      })
   },
   close_zg:function(){
      let then = this
      then.setData({
         isZg: false
      })
   },
   formSubmit(){
      wx.navigateTo({
         url: '/pages/index/registerInfo/registerInfo',
      })
   }
})
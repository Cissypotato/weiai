const app = getApp()
Page({
   data: {
      isWeekId:0,
      isIndex:0,
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
   formSubmit(e){
      let then = this
      let week_id = then.data.isWeekId
      let tel = e.detail.value.tel
      let uname = e.detail.value.uname
      let myreg = /^(0|86|17951)?(13[0-9]|15[012356789]|16[6]|19[89]]|17[01345678]|18[0-9]|14[579])[0-9]{8}$/
      if (week_id != 0){
         if(myreg.test(tel)){
           wx.navigateTo({
              url: '/pages/index/registerInfo/registerInfo',
           })
         }else{
            wx.showToast({
               title: '请输入正确的手机号码',
               icon: 'none',
               duration: 1000,
            })
         }
      }else{
         wx.showToast({
            title: '请选择时段',
            icon: 'none',
            duration: 1000,
         })
      }
   },
   choice_week(event){
      let then = this
      let index = event.currentTarget.dataset.index
      then.setData({
         isIndex: index,
         intervalInfo: then.data.weekInfo[index].day
      })
   },
   choice_sd(event){
      let then = this
      let id = event.currentTarget.dataset.id
      then.setData({
         isWeekId: id,
      })
   }
})
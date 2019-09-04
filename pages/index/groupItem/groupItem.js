const app = getApp();
Page({
   data: {
      isIndex:0,
      info:'',
      ass_id:'',
      order_id:''
      
   },
   onLoad: function (options) {
      this.getInfo(options.id)
   },
   onShow: function () {

   },
   getInfo:function(id){
      var then =  this
      wx.request({
         url: app.globalData.appUrl + 'drugs/drug_desc',
         data: {
            id:id
         },
         header: {},
         method: 'GET',
         dataType: 'json',
         responseType: 'text',
         success: function(res) {
            console.log(res)
            then.setData({
               info:res.data.info,
               nodes: res.data.info.content.replace(/\<img/gi, '< img style="max-width:100%;height:auto"')
            })
         },
         fail: function(res) {},
      })
   },
   xzTar(event){
      this.setData({
         isIndex: event.currentTarget.dataset.index
      })
   },
   lj_qg(e){
      var then = this
      wx.request({
         url: app.globalData.appUrl + 'drugs/doctor_details',
         data: {
            uid:wx.getStorageSync("user"),
            drug_id: e.currentTarget.dataset.id
         },
         header: {},
         method: 'GET',
         dataType: 'json',
         responseType: 'text',
         success: function(res) {
            console.log(res)
            then.setData({
               ass_id: res.data.ass_id,
            })
            then.toPay(res.data.id)
         },
         fail: function(res) {
            wx.showToast({
               title: '请求失败请稍后再试',
               icon: 'none',
               duration: 1000,
            })
         }
      })
   },
   toPay(order_id) {
      
      wx.login({
         success: (res) => {
            wx.request({
               url: app.globalData.appUrl + "pay/returnPays",
               data: {
                  id: order_id,
                  code: res.code
               },
               header: {},
               method: 'GET',
               dataType: 'json',
               responseType: 'text',
               success: (res) => {
                  let pay = res.data
                  let param = {
                     "timeStamp": pay.timeStamp,
                     "package": pay.package,
                     "paySign": pay.paySign,
                     "signType": pay.signType,
                     "nonceStr": pay.nonceStr
                  };
                  this.payment(param)
               },
               fail: function (res) {
                  wx.showToast({
                     title: '请求失败请稍后再试',
                     icon: 'none',
                     duration: 1000,
                  })
               },
            })
         },
      })
   },
   payment(param) {
      wx.requestPayment({
         timeStamp: param.timeStamp,
         nonceStr: param.nonceStr,
         package: param.package,
         signType: param.signType,
         paySign: param.paySign,
         success: function (res) {
            wx.reLaunch({
               url: '/pages/personal/myOrder/myOrder',
               success: function (res) {
                  wx.showToast({
                     title: '支付成功',
                     icon: 'none',
                     duration: 1000,
                  })

               }
            })
         },
         fail: function (res) {
            wx.reLaunch({
               url: '/pages/personal/myOrder/myOrder',
               success: function (res) {
                  wx.showToast({
                     title: '支付失败',
                     icon: 'none',
                     duration: 1000,
                  })

               }
            })
         },
      })
   },
})
const app = getApp()
Page({
   data: {
      orderItem: null
   },
   onLoad: function(options) {
      this.getOrder(options.id)
   },
   getOrder(id) {
      wx.request({
         url: app.globalData.appUrl + 'order/drug_desc',
         data: {
            id
         },
         header: {},
         method: 'GET',
         dataType: 'json',
         responseType: 'text',
         success: (res) => {
            console.log(res.data.info)
            this.setData({
               orderItem: res.data.info
            })
         },
         fail: function(res) {},
         complete: function(res) {},
      })
   },
   toPay(event) {
      wx.login({
         success: (res) => {
            wx.request({
               url: app.globalData.appUrl + "pay/returnPay",
               data: {
                  id: event.currentTarget.dataset.id,
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
               fail: function(res) {
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
         success: function(res) {
            wx.reLaunch({
               url: '/pages/personal/myOrder/myOrder',
               success: function(res) {
                  wx.showToast({
                     title: '支付成功',
                     icon: 'none',
                     duration: 1000,
                  })

               }
            })
         },
         fail: function(res) {
            wx.reLaunch({
               url: '/pages/personal/myOrder/myOrder',
               success: function(res) {
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
   toSh(event){
      wx.request({
         url: app.globalData.appUrl + 'order/sureOrder',
         data: {
            id: event.currentTarget.dataset.id
         },
         header: {},
         method: 'GET',
         dataType: 'json',
         responseType: 'text',
         success: function(res) {
            wx.navigateBack({
               delta: 1,
               success:function(res){
                  wx.showToast({
                     title: '确认收货成功',
                     icon: 'none',
                     duration: 1000,
                  })
               }
            })
         },
         fail: function(res) {
            wx.showToast({
               title: '请求失败请稍后再试',
               icon: 'none',
               duration: 1000,
            })
         },
      })
   },
   toDelOrder(event){
      wx.request({
         url: app.globalData.appUrl + 'order/delOrder',
         data: {
            id: event.currentTarget.dataset.id
         },
         header: {},
         method: 'GET',
         dataType: 'json',
         responseType: 'text',
         success: function (res) {
            wx.navigateBack({
               delta: 1,
               success: function (res) {
                  wx.showToast({
                     title: '删除订单成功',
                     icon: 'none',
                     duration: 1000,
                  })
               }
            })
         },
         fail: function (res) {
            wx.showToast({
               title: '请求失败请稍后再试',
               icon: 'none',
               duration: 1000,
            })
         },
      })
   }
})
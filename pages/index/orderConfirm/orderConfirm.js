const app = getApp();
Page({
   data: {
      isSite: true
   },
   onLoad: function(options) {
      this.setData({
         Id: options.id,
         Num: options.num
      })
      this.getInfo()
   },
   onShow: function() {

   },
   getInfo() {
      let then = this
      wx.request({
         url: app.globalData.appUrl + 'drug/drug_num',
         data: {
            id: this.data.Id,
            num: this.data.Num,
            uid: 1
         },
         success: function(res) {
            then.setData({
               data: res.data
            })
         },
         fail: function(res) {
            wx.showToast({
               title: '网络错误请稍后再试',
               icon: 'none',
               duration: 1000,
            })
         },
      })
   },
   toAddress() {
      wx.navigateTo({
         url: '/pages/personal/address/address',
      })
   },
   tjOrder() {
      wx.request({
         url: app.globalData.appUrl + '',
         data: {
            id: this.data.Id
         },
         header: {},
         method: 'GET',
         dataType: 'json',
         responseType: 'text',
         success: function(res) {
            console.log(res)
            let pay = res.data
            let param = {
               "timeStamp": pay.timeStamp,
               "package": pay.packages,
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
   payemnt(param) {
      wx.requestPayment({
         timeStamp: param.timeStamp,
         nonceStr: param.nonceStr,
         package: param.package,
         signType: param.signType,
         paySign: param.paySign,
         success: function(res) {

            wx.reLaunch({
               url: '',
               success: function(res) {
                  wx.showToast({
                     title: '支付成功',
                     icon: 'none',
                     duration: 2000,
                  })
               }
            })
         },
         fail: function(res) {
            
         },
      })
   }


})
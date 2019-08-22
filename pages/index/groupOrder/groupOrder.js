const app = getApp();
Page({
   data: {
      isSite: false,
      Id: "",
      Num: '',
      medicine: null,
      defaultAddress: null,
      addressList: [],
   },
   onLoad: function (options) {
      wx.removeStorageSync('defa')
      this.setData({
         Id: options.id,
         Num: options.num,
      })
   },
   onShow: function () {
      this.getInfo()
   },
   getInfo() {
      wx.request({
         url: app.globalData.appUrl + 'drug/drug_num',
         data: {
            id: this.data.Id,
            num: this.data.Num,
            uid: wx.getStorageSync('user')
         },
         success: (res) => {
            console.log(res)
            let site;

            if (res.data.address.length != 0) {
               site = true;
            } else {
               site = false;
            }

            let defa = wx.getStorageSync('defa')
            let siteItem = []
            console.log(defa)
            if (defa != '') {
               res.data.address.forEach(function (elem, index, arr) {
                  if (elem.id === defa) {
                     siteItem.push(elem)
                  }
               })
            } else {
               res.data.address.forEach(function (elem, index, arr) {
                  if (elem.def === 1) {
                     siteItem.push(elem)
                  }
               })
            }
            this.setData({
               isSite: site,
               site: siteItem,
               medicine: res.data.drug
            })

         },
         fail: function (res) {
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
         url: './addressList/addressList'
      })
   },
   tjOrder(event) {
      wx.request({
         url: app.globalData.appUrl + 'drug/doctor_details',
         data: {
            uid: wx.getStorageSync('user'),
            drug_id: this.data.Id,
            num: this.data.Num,
            address_id: event.currentTarget.dataset.address
         },
         header: {},
         method: 'GET',
         dataType: 'json',
         responseType: 'text',
         success: (res) => {
            let id = res.data.id
            wx.login({
               success: (res) => {
                  wx.request({
                     url: "https://jkxw.guaishe.com/index.php/index/pay/returnPay",
                     data: {
                        id: id,
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
         fail: function (res) { },
         complete: function (res) { },
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
   }


})
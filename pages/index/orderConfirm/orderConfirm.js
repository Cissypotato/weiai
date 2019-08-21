const app = getApp();
Page({
  data: {
    isSite: false,
    Id: "",
    Num: '',
    uid:'',
    medicine:null,
    defaultAddress:null,
    addressList:[]

  },
  onLoad: function(options) {
    console.log(options)
    this.setData({
      Id: options.id,
      Num: options.num,
      uid: wx.getStorageSync('user')
    })
    this.getInfo()
    
  },
  onShow: function() {
    this.getInfo()
  },
  getInfo() {
    // let then = this
    wx.request({
      url: app.globalData.appUrl + 'drug/drug_num',
      data: {
        id: this.data.Id,
        num: this.data.Num,
        uid: this.data.uid
      },
      success: (res) =>{

        let address=res.data.address
        let defaultAddress=null
        if(address){
          for (let i = 0; i < address.length; i++) {
            if (address[i].def === 1) {
              defaultAddress = address[i]
            }
          }

          console.log(res)
          this.setData({
            isSite:true,
            defaultAddress,
            addressList: address,
            medicine: res.data.drug
          })

        }else{
          this.setData({
            isSite:false
          })
        }
        
      
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
      url: './addressList/addressList'
    })
  },
  tjOrder() {

    wx.request({
      url: app.globalData.appUrl + 'drug/doctor_details',
      data: {
        uid: this.data.uid,
        drug_id: this.data.Id,
        num: this.data.Num
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data.id)
        let id = res.data.id
        wx.login({
          success: (res) => {
            console.log(res.code)
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
                console.log(res)
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
      fail: function(res) {},
      complete: function(res) {},
    })
    // wx.login({
    //   success: (res) =>{
    //     console.log(res.code)
    //     wx.request({
    //       url: "https://jkxw.guaishe.com/index.php/index/pay/returnPay",
    //       data: {
    //         id: this.data.Id,
    //         code:res.code

    //       },
    //       header: {},
    //       method: 'GET',
    //       dataType: 'json',
    //       responseType: 'text',
    //       success:(res)=> {
    //         console.log(res)
    //         let pay = res.data
    //         let param = {
    //           "timeStamp": pay.timeStamp,
    //           "package": pay.package,
    //           "paySign": pay.paySign,
    //           "signType": pay.signType,
    //           "nonceStr": pay.nonceStr
    //         };
    //         this.payment(param)
    //       },
    //       fail: function(res) {
    //         wx.showToast({
    //           title: '请求失败请稍后再试',
    //           icon: 'none',
    //           duration: 1000,
    //         })
    //       },
    //     })
    //   },
    // })

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
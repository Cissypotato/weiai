<<<<<<< HEAD
// pages/index/drug/drug.js

const app=getApp()
=======
const app = getApp()
>>>>>>> 651c06dba3064b75dd63c42f4b1374e549b79e76
Page({
   data: {
      isIndex: 0,
      isZg: false,
      number: 1
   },
   onLoad: function(options) {
      this.getInfo(options.id)
   },
   getInfo(id) {
      let then = this
      wx.request({
         url: app.globalData.appUrl + 'drug/drug_desc',
         data: {
            id: id
         },
         success: function(res) {
            console.log(res)
            then.setData({
               info: res.data.info,
               nodes: res.data.info.info.replace(/\<img/gi, '<img style="max-width:100%;height:auto"')
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
   tabQh(e) {
      console.log(e.currentTarget.dataset.index)
      this.setData({
         isIndex: e.currentTarget.dataset.index
      })
   },
   close_zg: function() {
      let then = this
      then.setData({
         isZg: false
      })
   },
   zg_btn: function() {
      let then = this
      then.setData({
         isZg: true
      })
   },
   drugNumber(e) {
      this.setData({
         number: e.detail.value
      })
   },
   jiaNumber(e) {
      let number = this.data.number
      number++
      this.setData({
         number: number
      })
   },
   jianNumber(e) {

      let number = this.data.number
      if (number <= 1) {
         wx.showToast({
            title: '不能在减了',
            icon: 'none',
            duration: 1000,
         })
      }else{
         number--
         this.setData({
            number: number
         })
      }
      
   },
<<<<<<< HEAD
   orderConfirm(){
      wx.navigateTo({
         url: '/pages/index/orderConfirm/orderConfirm',
      })
   },
   
   
=======
   orderConfirm(event) {
      if (this.data.number >= 1){
         wx.navigateTo({
            url: '/pages/index/orderConfirm/orderConfirm?id=' + event.currentTarget.dataset.id + '&num=' + this.data.number,
         })
      }else{
         wx.showToast({
            title: ' 请填写正确的数量',
            icon: 'none',
            duration: 1000,
         })
      }
   }


>>>>>>> 651c06dba3064b75dd63c42f4b1374e549b79e76
})
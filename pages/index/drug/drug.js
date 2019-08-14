// pages/index/drug/drug.js
Page({
   data: {
      isIndex:0,
      isZg: false,
      number:0
   },
   onLoad: function (options) {

   },
   tabQh(e){
      console.log(e.currentTarget.dataset.index)
      this.setData({
         isIndex: e.currentTarget.dataset.index
      })
   },
   close_zg: function () {
      let then = this
      then.setData({
         isZg: false
      })
   },
   zg_btn: function () {
      let then = this
      then.setData({
         isZg: true
      })
   },
   drugNumber(e){
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
      number--
      this.setData({
         number: number
      })
   },
   orderConfirm(){
      wx.navigateTo({
         url: '/pages/index/orderConfirm/orderConfirm',
      })
   }

   
})
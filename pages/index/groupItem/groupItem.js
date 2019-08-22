Page({
   data: {
      isIndex:0,
   },
   onLoad: function (options) {

   },
   onShow: function () {

   },
   xzTar(event){
      this.setData({
         isIndex: event.currentTarget.dataset.index
      })
   },
   lj_qg(e){
      wx.navigateTo({
         url: '/pages/index/groupOrder/groupOrder'
      })
   }
})
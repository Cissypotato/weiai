const app = getApp()
Page({
   data: {
      orderList: [],
      isLogin: false,
      hasOrder: true
   },
   onShow: function (options) {
      this.getOrderList()
   },
   toDetail(event) {
      let id = event.currentTarget.dataset.id
      wx.navigateTo({
         url: '/pages/index/orderDetail/orderDetail?id=' + id,
      })
   },
   getOrderList() {
      wx.request({
         url: app.globalData.appUrl + 'order/my_order_list',
         data: {
            "uid": wx.getStorageSync('user')
         },
         header: {},
         method: 'GET',
         dataType: 'json',
         responseType: 'text',
         success: (res) => {

            if (res.data.info === "暂无数据") {
               this.setData({
                  hasOrder: false
               })
            } else {
               this.setData({
                  hasOrder: true,
                  orderList: res.data.info
               })
            }
         },
         fail: function (res) { },
         complete: function (res) { },
      })
   },
})
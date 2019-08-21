const app = getApp()
Page({
   data: {
      addressList: [],
      isLogin: false,
      hasAddress: true,
      selected: false,
      isIndex: -1
   },
   onShow: function() {
      this.getAddress()
   },
   toAddAdress() {

      wx.navigateTo({
         url: '/pages/personal/address/addAddress/addAddress',
      })

   },
   handleSelect(event) {
      let id = event.currentTarget.dataset.id
      this.setData({
         isIndex: event.currentTarget.dataset.index
      })
      setTimeout(function() {
         wx.navigateBack({
            delta: 1,
            success: function() { 
               wx.setStorageSync('defa',id)
            }
         }) 
      }, 200)
   },
   deleteAddress(event) {
      let id = event.currentTarget.dataset.id
      wx.request({
         url: app.globalData.appUrl + 'address/del_address',
         data: {
            "id": id,
            "uid": wx.getStorageSync('user'),
         },
         header: {},
         method: 'POST',
         dataType: 'json',
         responseType: 'text',
         success: (res) => {
            if (res.data.state) {
               wx.showToast({
                  title: '删除成功',
                  icon: 'none',
                  duration: 1000,
                  success: (res) => {
                     this.onShow()
                  },

               })
            }
         },
      })

   },
   getAddress() {
      wx.request({
         url: app.globalData.appUrl + 'address/address_list',
         data: {
            uid: wx.getStorageSync('user')
         },
         header: {},
         method: 'GET',
         dataType: 'json',
         responseType: 'text',
         success: (res) => {
            console.log(res.data.info)
            if (res.data.info === "暂无地址") {
               this.setData({
                  hasAddress: false
               })
            } else {
               this.setData({
                  hasAddress: true,
                  addressList: res.data.info
               })
            }
         },
         fail: function(res) {},
         complete: function(res) {},
      })

   },
   editAddress: function(event) {
      let id = event.currentTarget.dataset.id
      wx.navigateTo({
         url: '/pages/personal/address/addAddress/addAddress?id=' + id,
      })
   },
})
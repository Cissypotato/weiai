const app = getApp()
Page({
   data: {
      navTar: [{
         name: "综合排序"
      }, {
         name: "价格排序"
      }, {
         name: "推荐"
      }],
      isIndex: 0,
      drugList: {},
      queryText: ''
   },
   onLoad: function(options) {
      this.getDrugList()
   },
   getDrugList: function() {
      let then = this
      wx.request({
         url: app.globalData.appUrl + 'drugs/drugs_list',
         success: function(res) {
            console.log(res)
            then.setData({
               drugList: res.data.info
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
   qhTar: function(event) {
      var then = this
      let data
      if (event.currentTarget.dataset.index == 1) {
         data = {
            price: "desc"
         }
      } else if (event.currentTarget.dataset.index == 2) {
         data = {
            state: 1
         }
      } else if (event.currentTarget.dataset.index == 2) {
         data = {}
      }
      wx.request({
         url: app.globalData.appUrl + 'drug/drug_list',
         data: {
            data
         },
         success: function(res) {
            console.log(res)
            then.setData({
               isIndex: event.currentTarget.dataset.index,
               drugList: res.data.info
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
   query: function(e) {
      this.setData({
         queryText: e.detail.value
      })
   },
   queryItem: function() {
      let then = this
      wx.request({
         url: app.globalData.appUrl + 'drug/drug_list',
         data: {
            key: then.data.queryText
         },
         success: function(res) {
            then.setData({
               drugList: res.data.info
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
})
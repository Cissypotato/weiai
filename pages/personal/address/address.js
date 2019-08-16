// pages/personal/address/address.js
const app = getApp ()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[]
  },

  toAddAdress(){

    wx.navigateTo({
      url: './addAddress/addAddress',
    })

  },
  handleDefault(event){

    let id = event.currentTarget.dataset.id
    wx.request({
      url: app.globalData.appUrl + 'address/set_def_address',
      data: {
        "id": id,
        "uid": 1,

      },
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        if (res.data.state) {

              this.onShow()
        }
         
      },
    })
  },
  deleteAddress(event){
   let id=event.currentTarget.dataset.id
    wx.request({
      url: app.globalData.appUrl + 'address/del_address',
      data: {
        "id":id,
        "uid":1,

      },
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (res)=> {
        if(res.data.state){
          wx.showToast({
            title: '删除成功',
            icon: 'none',
            duration: 1000,
            success: (res) =>{
              this.onShow()
             },
            
          })
        }
      },
    })

  },
  getAddress(){
   wx.request({
     url: app.globalData.appUrl + 'address/address_list',
     data: {
       uid:1
     },
     header: {},
     method: 'GET',
     dataType: 'json',
     responseType: 'text',
     success: (res)=> {
       console.log(res.data.info)
       this.setData({
         addressList: res.data.info
       })
     },
     fail: function(res) {},
     complete: function(res) {},
   })

  },
  editAddress:function(event){
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: './addAddress/addAddress?id='+id,
    })
  },
  
  onLoad: function (options) {
    this.getAddress()
  },

  onReady:function () {
   
  },

  onShow: function () {
    this.getAddress()
  },

 
})
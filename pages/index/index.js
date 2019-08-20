const app = getApp();

Page({
   data: {
      doctorList: null,
      medicineList: null
   },
   onLoad: function(options) {
      this.getData()
   },
   getData: function() {
      wx.request({
         url: app.globalData.appUrl + 'doctor/doctor_list',
         header: {},
         method: 'GET',
         dataType: 'json',
         responseType: 'text',
         success: (res) => {
            let data = res.data

            this.setData({
               doctorList: data.info,
               medicineList: data.drug
            })
         },
         fail: function(res) {},
         complete: function(res) {},
      })

   },
   goMake(event) {
      let id = event.currentTarget.dataset.id
      wx.navigateTo({
         url: '/pages/index/registerDate/registerDate?id=' + id,
      })
   },
   toMedicine(event) {
      let id = event.currentTarget.dataset.id
      wx.navigateTo({
         url: '/pages/index/drug/drug?id=' + id,
      })
   },
   bd_tel: function() {
      wx.showModal({
         title: '提示',
         content: '是否拨打电话13541042346',
         success(res) {
            if (res.confirm) {
               wx.makePhoneCall({
                  phoneNumber: '13541042346'
               })
            } else if (res.cancel) {

            }
         }
      })
   },
   toDoctorList(){
     wx.navigateTo({
       url: './register/register',
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })
   },
  toMedicineList() {
    wx.navigateTo({
      url: './test/test',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
})
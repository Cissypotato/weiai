const app = getApp();

Page({
   data: {
     doctorList:null
   },
   onLoad: function(options) {
     this.getData()
   },
   getData:function(){
     wx.request({
       url:app.globalData.appUrl+'doctor/doctor_list',
       header: {},
       method: 'GET',
       dataType: 'json',
       responseType: 'text',
       success:(res)=> {
        //  let then=this
         let data=res.data
         if(data.state){
           this.setData({
             doctorList:data.info
           })
         }
        //  console.log(this.data.doctorList)
       },
       fail: function(res) {},
       complete: function(res) {},
     })
    // wx.request({
    //   url: '',
    //   data: '',
    //   header: {},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })

   },
   goMake(event) {
     let id = event.currentTarget.dataset.id
      wx.navigateTo({
         url: '/pages/index/registerDate/registerDate?id='+id,
      })
   }
})
Page({
   data: {
      distance:"0km",
   },
   onLoad: function(options) {
      var then = this
      wx.getLocation({
         type: 'wgs84',
         success(res) {
            const latitude = res.latitude
            const longitude = res.longitude
            var distance = then.distance(res.latitude, res.longitude, 30.813259, 104.161163)
            console.log(distance)
            then.setData({
               distance: distance + "km"
            })
         }
      })
   },
   distance: function(la1, lo1, la2, lo2) {
      var La1 = la1 * Math.PI / 180.0;
      var La2 = la2 * Math.PI / 180.0;
      var La3 = La1 - La2;
      var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
      var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
      s = s * 6378.137;
      s = Math.round(s * 10000) / 10000;
      s = s.toFixed(2);
      return s;
   },
})
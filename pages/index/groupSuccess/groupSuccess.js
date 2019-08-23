const app = getApp()
var interval = new Object();
Page({
   data: {

   },
   onLoad: function(options) {
      let time = new Date;
      console.log(time)
   },

   //时间倒计时
   startTimer: function(currentstartTimer) {
      clearInterval(interval);
      interval = setInterval(function() {
         // 秒数
         var second = currentstartTimer;
         // 天数位
         var day = Math.floor(second / 3600 / 24);
         var dayStr = day.toString();
         if (dayStr.length == 1) dayStr = '0' + dayStr;

         // 小时位
         var hr = Math.floor((second - day * 3600 * 24) / 3600);
         var hrStr = hr.toString();
         if (hrStr.length == 1) hrStr = '0' + hrStr;

         // 分钟位 
         var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
         var minStr = min.toString();
         if (minStr.length == 1) minStr = '0' + minStr;

         // 秒位
         var sec = second - day * 3600 * 24 - hr * 3600 - min * 60;
         var secStr = sec.toString();
         if (secStr.length == 1) secStr = '0' + secStr;

         this.setData({
            countDownDay: dayStr,
            countDownHour: hrStr,
            countDownMinute: minStr,
            countDownSecond: secStr,
         });
         currentstartTimer--;
         if (currentstartTimer <= 0) {
            clearInterval(interval);
            this.setData({
               countDownDay: '00',
               countDownHour: '00',
               countDownMinute: '00',
               countDownSecond: '00',
            });
         }
      }.bind(this), 1000);
   },
})
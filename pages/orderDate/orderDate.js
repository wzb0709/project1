// pages/orderDate/orderDate.js
import { navigate } from '../../common/common'

Page({
  data: {
    currentIndex:0,
    year: 0,
    month: 0,
    date: ['日', '一', '二', '三', '四', '五', '六'],
    dateArr: [],
    isToday: 0,
    isTodayWeek: false,
    todayIndex: 0,
    maxMonth:2, //最大可选择月份
  },
  onLoad: function () {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate()
    if(month / 10 < 1) month = '0' + month
    if(day / 10 < 1) day = '0' + day
    this.dateInit();
    this.setData({
      year: year,
      month: month,
      isToday: '' + year + month + day,
      today:'' + year + month + day
    })
  },
  dateInit: function (setYear, setMonth) {
    let toastDate = []
    let maxMonth = this.data.maxMonth
    //全部时间的月份都是按0~11基准，显示月份才+1

    let arrLen = 0;                            //dateArr的数组长度
    let now = setYear ? new Date(setYear, setMonth) : new Date();
    let year = setYear || now.getFullYear();
    let nextYear = 0;
    let month = setMonth || now.getMonth();                    //没有+1方便后面计算当月总天数

    for(let n = 0; n < maxMonth; n++){
      let dateArr = [];                        //需要遍历的日历数组数据
      if(month > 11) {
        month -= 12
        year += 1
      }
      let nextMonth = (month + 1) > 11 ? 1 : (month + 1);
      let startWeek = new Date(year + ',' + (month + 1) + ',' + 1).getDay();                            //目标月1号对应的星期
      let dayNums = new Date(year, nextMonth, 0).getDate();                //获取目标月有多少天
      let obj = {};
      let num = 0;

      if (month + 1 > 11) {
        nextYear = year + 1;
        dayNums = new Date(nextYear, nextMonth, 0).getDate();
      }
      arrLen = startWeek + dayNums;
      for (let i = 0; i < arrLen; i++) {
        if (i >= startWeek) {
          num = i - startWeek + 1;
          let newMonth = (month / 10) < 1 ? '0' + (month + 1) : (month + 1)
          let day = (num / 10) < 1 ? '0' + num : num
          obj = {
            isToday: '' + year + newMonth + day,
            dateNum: num,
            weight: 5,
            today: '' + year + newMonth + day
          }
        } else {
          obj = {};
        }
        dateArr[i] = obj;
      }
      toastDate.push({dateArr:dateArr,year,month:month+1})
      month += 1
    }
    this.setData({
      toastDate
    })

  },
  handleCalendarChange:function(e){
    const {current} = e.detail
    this.setData({
      currentIndex:current
    })
  },
  lastMonth: function () {
    if (this.data.currentIndex === 0) return false
    this.setData({
      currentIndex:this.data.currentIndex - 1
    })
  },
  nextMonth: function () {
    if (this.data.currentIndex === this.data.toastDate.length - 1) return false
    this.setData({
      currentIndex: this.data.currentIndex + 1
    })
  },
  handleDateClick:function(e){
    const {date,today} = e.currentTarget.dataset
    if(parseInt(this.data.today) > parseInt(today)) return false
    this.setData({
      isToday:date
    })
  },

  handleTimeChoose:function(e){
    this.setData({
      currentTime:e.currentTarget.dataset.index
    })
  }
})  
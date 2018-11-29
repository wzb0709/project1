// pages/user/user.js
import { navigate } from '../../common/common'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    currentType:"order",
    nav:[{
      navItem:"我的订单",
      type:"order"
    },{
      navItem:"我的优惠券",
      type:"ticket"
    }],
    orderList:[
      {
        area:"宁波",
        title:"全家福系列-其乐融融款",
        price:"￥199",
        time:"2018-12-01 09:00~10:00",
        status:'待付预约金'
      },
      {
        area: "宁波",
        title: "全家福系列-其乐融融款",
        price: "￥199",
        time: "2018-12-01 09:00~10:00",
        status: '已付预约金,待确认'
      },
      {
        area: "宁波",
        title: "全家福系列-其乐融融款",
        price: "￥199",
        time: "2018-12-01 09:00~10:00",
        status: '已确认,等待拍摄'
      },
      {
        area: "宁波",
        title: "全家福系列-其乐融融款",
        price: "￥199",
        time: "2018-12-01 09:00~10:00",
        status: '拍摄完成,待付尾款'
      },
      {
        area: "宁波",
        title: "全家福系列-其乐融融款",
        price: "￥199",
        time: "2018-12-01 09:00~10:00",
        status: '已取消'
      },
    ],

    ticketList:[
      {
        price:'300',
        title:'双12优惠券',
        status:"未使用",
        time:"2018/11/25~2019/01/31"
      },
      {
        price: '300',
        title: '双12优惠券',
        status: "已使用",
        time: "2018/11/25~2019/01/31"
      },
      {
        price: '300',
        title: '双12优惠券',
        status: "已失效",
        time: "2018/11/25~2019/01/31"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleNavItemClick:function(e){
    const {index,type} = e.currentTarget.dataset
    this.setData({
      currentIndex:index,
      currentType:type
    })
  },

  handleGoOrderDetail:function(e){
    navigate.Go('orderDetail')
  }
})
// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    currentType:"order",
    nav:[{
      navItem:"我的订单",
    },{
      navItem:"我的优惠券"
    }],

    orderList:[{
      area:"宁波",
      title:"全家福系列-其乐融融款",
      price:"￥199"
    }]
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
    const {index} = e.currentTarget.dataset
    this.setData({
      currentIndex:index
    })
  }
})
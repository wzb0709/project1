// pages/productInfo/productInfo.js
import {navigate} from '../../common/common'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    nav: [{
      navItem: "效果展示",
      type: 0
    }, {
      navItem: "费用说明",
      type: 1
    },{
      navItem: "服务说明",
      type: 2
    }],

    article:"测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
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

  handleNavItemClick: function (e) {
    const { index, type } = e.currentTarget.dataset
    this.setData({
      currentIndex: index,
      currentType: type
    })
  },

  handleSwiperChange:function(e){
    const {current} = e.detail
    this.setData({
      currentIndex:current
    })
  },

  handleGoHome:function(e){
    navigate.switch('index')
  },
  handleGoShare:function(e){

  },
  handleGoOrder:function(e){
    navigate.Go('productOrder')
  }
})
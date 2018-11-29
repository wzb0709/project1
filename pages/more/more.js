// pages/more/more.js

import { dealImage, navigate} from '../../common/common'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    type: [{
      typeItem: "全家福系列"
    }, {
      typeItem: "结婚照系列"
    }, {
      typeItem: "亲子照系列"
    }, {
      typeItem: "同学会系列"
    }],

    imageList: [{
      url: 'https://cdn.haimati.cn/V3/Index/Product/more-jhdjz-v3.jpg',
      class: ''
    },
    {
      url: 'https://cdn.haimati.cn/V3/Index/Product/more-qjf-v3.jpg',
      class: '',
    },
    {
      url: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=02d5092c0755b31998f9857773a98286/562c11dfa9ec8a13ce3112cdfa03918fa0ecc0f0.jpg',
      class: '',
    }
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

  imageLoad: function (e) {
    const flag = dealImage.CompareImgWidthAndHeight(e)
    const { index } = e.target.dataset
    const { imageList } = this.data
    if (flag) {
      imageList[index].class = 'second-image'
    } else {
      imageList[index].class = 'image'
    }
    this.setData({ imageList })
  },

  handleClickType: function (e) {
    const { index } = e.currentTarget.dataset
    this.setData({
      currentIndex: index
    })
  },

  handleNavigate:function(e){
    navigate.Go('productInfo')
  }
})
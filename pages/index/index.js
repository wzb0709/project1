//index.js
//获取应用实例
import {
  dealImage
} from '../../common/common'

Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 首页轮播开始

    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,

    // 首页轮播结束
    // 首页详情开始

    content: [{
        title: '标题一',
        imageList: [{
            url: 'https://cdn.haimati.cn/V3/Index/Product/index-94-v3.jpg',
            width: '',
            describe:"古装风",
          },
          {
            url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2252212662,545103002&fm=200&gp=0.jpg',
            width: "",
            describe: "古装风",
          },
          {
            url: 'https://cdn.haimati.cn/V3/Index/Product/index-94-v3.jpg',
            width: '',
            describe: "古装风",
          },
          {
            url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2252212662,545103002&fm=200&gp=0.jpg',
            width: "",
            describe: "古装风",
          },
        ]
      },
      {
        title: '标题二',
        imageList: [{
            url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2594815291,2512542654&fm=26&gp=0.jpg',
            width: ''
          },
          {
            url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2252212662,545103002&fm=200&gp=0.jpg',
            width: ""
          },
          {
            url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2594815291,2512542654&fm=26&gp=0.jpg',
            width: ''
          },
          {
            url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2252212662,545103002&fm=200&gp=0.jpg',
            width: ""
          },
        ]
      },
      {
        title: '标题三',
        imageList: [{
            url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2594815291,2512542654&fm=26&gp=0.jpg',
            width: ''
          },
          {
            url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2252212662,545103002&fm=200&gp=0.jpg',
            width: ""
          },
          {
            url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2594815291,2512542654&fm=26&gp=0.jpg',
            width: ''
          },
          {
            url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2252212662,545103002&fm=200&gp=0.jpg',
            width: ""
          },
        ]
      },
      {
        title: '标题四',
        imageList: [{
            url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2594815291,2512542654&fm=26&gp=0.jpg',
            width: ''
          },
          {
            url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2252212662,545103002&fm=200&gp=0.jpg',
            width: ""
          },
          {
            url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2594815291,2512542654&fm=26&gp=0.jpg',
            width: ''
          },
          {
            url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2252212662,545103002&fm=200&gp=0.jpg',
            width: ""
          },
        ]
      },
    ],

    // 首页详情结束
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  //对加载图片进行处理
  bindImg: function(e) {
    const width = dealImage.ImgHeightFix(e)
    const {
      index,
      imgindex
    } = e.target.dataset
    let {
      content
    } = this.data
    content[index].imageList[imgindex].width = width
    this.setData({
      content
    })
  }
})
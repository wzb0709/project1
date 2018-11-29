// components/topShow/topShow.js
import {dealImage} from '../../common/common'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      vaule:'全家福其乐融融款'
    },
    price:{
      type:String,
      vaule:"￥199"
    },
    url:{
      type:String,
      vaule:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImg:function(e){
      let height = dealImage.ImgWidthFix(e,690)
      console.log(height)
      this.setData({
        height
      })
    }
  }
})

const url = '/pages/'


export const dealImage = {
  ImgHeightFix:(e)=>{
    const {height,width} = e.detail
    const ratio = width/height
    const ViewHeight = 280
    const ViewWidth = ViewHeight * ratio
    return ViewWidth
  },
  CompareImgWidthAndHeight:(e) => {
    const { height, width } = e.detail
    if(height >= width) return true
    else return false
  }
}

export const navigate = {
  Go:(page,params)=>{
    if(params){
      let paramsString = '?'
      for(let i in params){
        paramsString += `${i}=${params[i]}&`
      }
      paramsString.substring(0,paramsString.length-1);
      wx.navigateTo({
        url: `${url}${page}/${page}${paramsString}`,
      })
    }else{
      wx.navigateTo({
        url: `${url}${page}/${page}`,
      })
    }
  },
  Back:()=>{
    wx.navigateBack({ })
  },
  switch:(page)=>{
    wx.switchTab({
      url: `${url}${page}/${page}`,
    })
  }
}

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
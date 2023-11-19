class Qqimagedealer {
  static GetPath(fullUrl) {
    const urlObject = new URL(fullUrl);
// 获取路径部分
    const pathPart = urlObject.pathname;
    return "/qlogo" + pathPart
  }
}


export default Qqimagedealer

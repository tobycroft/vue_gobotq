import axios from 'axios';

const baseURL = 'http://gobotq.tuuz.top:81';

class Net {
  constructor(path) {
    this.apiEndpoint = baseURL + path;
    this.headers = {
      uid: localStorage.getItem("uid"),
      token: localStorage.getItem("token"),
    };
  }


  async PostFormData(dataObject) {
    // 创建一个 FormData 对象
    const formData = new FormData();

    // 将对象的键值对添加到 FormData
    for (const key in dataObject) {
      if (dataObject.hasOwnProperty(key)) {
        formData.append(key, dataObject[key]);
      }
    }
    this.headers['Content-Type'] = 'multipart/form-data';

    const response = await axios.post(this.apiEndpoint, formData, {
      headers: this.headers,
    });
    return this.ErrorHandler(response.data);
  }

  ErrorHandler(ret) {
    console.log(ret)
    if (ret["code"] > 0) {
      console.log(ret["echo"])
    } else if (ret["code"] < 0) {
      console.log(ret["echo"])
    } else {
      return ret;
    }
  }
}

export default Net;

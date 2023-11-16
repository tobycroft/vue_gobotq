import axios from 'axios';
import Alert from "@/plugins/Alert";

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
    switch (ret["code"]) {
      case 0:
        return ret;

      case -1:
        localStorage.clear();
        Alert.SetAlert(ret["echo"])
        return ret;


      default:
        if (ret["code"] > 0) {
          Alert.SetAlert(ret["echo"])
        } else if (ret["code"] < 0) {
          Alert.SetAlert(ret["echo"])
        } else {

        }
        return ret;
    }
  }
}

export default Net;

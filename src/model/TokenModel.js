class TokenModel {
  static Api_set_uidAndToken(uid, token) {
    localStorage.setItem("uid", uid);
    localStorage.setItem("token", token);
  }

  static Api_find_uidAndToken() {
    return {uid: localStorage.getItem("uid"), token: localStorage.getItem("token")}
  }

}

export default TokenModel

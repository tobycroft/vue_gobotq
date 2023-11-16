class TokenModel {
  static Api_set_uidAndToken(uid, token) {
    localstorage.setItem(uid, token);
  }

}

export default TokenModel

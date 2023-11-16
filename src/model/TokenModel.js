class TokenModel {
  static Api_set_uidAndToken(uid, token) {
    localStorage.setItem(uid, token);
  }

}
export default TokenModel

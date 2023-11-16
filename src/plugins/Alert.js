class Alert {

  static SetAlert(message) {
    localStorage.setItem("alert", message)
  }

  static SetToast(message) {
    localStorage.setItem("toast", message)
  }

  static SetGo(message) {
    localStorage.setItem("gourl", message)
  }

  static GetGo(message) {
    localStorage.getItem("gourl")
  }

  static GetToast() {
    const toast = localStorage.getItem("toast")
    localStorage.removeItem("toast")
    return toast
  }

  static GetAlert() {
    const alert = localStorage.getItem("alert")
    localStorage.removeItem("alert")
    return alert
  }

}

export default Alert;

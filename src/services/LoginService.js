import Api from '@/services/Api'

export default {
  g () {
    return Api().get('login')
  },
  p (params) {
    return Api().post('login', params)
  }
}

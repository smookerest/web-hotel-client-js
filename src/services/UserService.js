import Api from '@/services/Api'

export default {
  g () {
    return Api().get('users')
  },
  p (params) {
    return Api().post('users', params)
  }
}

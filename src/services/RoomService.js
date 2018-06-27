import Api from '@/services/Api'

export default {
  g () {
    return Api().get('api/availablerooms')
  },
  getSingleRoom (id) {
    return Api().get('rooms' + id)
  },
  p (params) {
    return Api().post('rooms', params)
  }
}

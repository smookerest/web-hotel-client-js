import Api from '@/services/Api'

export default {
  g () {
    return Api().get('costumers')
  },

  p (params) {
    return Api().post('costumers', params)
  },

  getSingleCostumer (cedula) {
    return Api().get('costumers' + cedula)
  }
}

import Api from '@/services/Api'
import QueryString from 'querystring'

export default {
  g () {
    return Api().get('costumers')
  },

  SaveBooking (params) {
    return Api().post('booking', params)
  },

  SaveBookingDetails (params) {
    return Api().post('bookingdetails', params)
  },

  ValidateRoom (id, checkindate, checkoutdate) {
    return Api().get('api/validateroom?' + QueryString.stringify({id: id, checkin: checkindate, checkout: checkoutdate}))
  }

}

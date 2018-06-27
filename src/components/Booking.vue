<template>
        <div class="hello">
            <div class="row">
                    <div class="col-md-2">
                            <RightMenu></RightMenu>
                    </div>
                    <div class="col-md-7">
                        
                        <h3>
                            Tabla de Habitaciones
                        </h3>
                        <form action="">
                                <div class="form-row">
                                        <div class="form-group col-md-3">
                                            <div class="form-group">
                                                    <label for="">Clasificacion</label>
                                                    <select name="" class="costum-select form-control" id="">
                                                            <option value="">Especial</option>
                                                            <option value="">Full</option>
                                                    </select>
                                            </div>          
                                        </div>
                                        <div class="form-group col-md-3">
                                                <div class="form-group">
                                                    <label for="">Desde:</label>
                                                        <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
                                                        <div class="input-group">
                                                                <div class="input-group-prepend">
                                                                        <span class="input-group-text">$</span>
                                                                      </div>
                                                            <input type="number" class="form-control" placeholder="Monto Desde" value="0">
                                                            <div class="input-group-append">
                                                                    <span class="input-group-text">.00</span>
                                                                  </div>
                                                        </div> 
                                                </div>    
                                        </div>
                                        <div class="form-group col-md-3">
                                                <div class="form-group">
                                                    <label for="">Hasta: </label>
                                                        <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
                                                        <div class="input-group">
                                                                <div class="input-group-prepend">
                                                                        <span class="input-group-text">$</span>
                                                                      </div>
                                                            <input type="number" class="form-control" placeholder="Monto Hasta" value="999">
                                                            <div class="input-group-append">
                                                                    <span class="input-group-text">.00</span>
                                                                  </div>
                                                        </div> 
                                            </div>    
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="">  </label>
                                                <button class="btn btn-default btn-block"> Buscar </button>        
                                        </div> 
                                </div>
                        </form>

                        <table class="table table-hover">
                            <thead class=" thead-dark" >
                                <tr>
                                    <th scope="col">Habitacion</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Precio x Dia</th>
                                    <th scope="col">Check In</th>
                                    <th scope="col">Check Out</th>
                                </tr>
                            </thead>
                            <tbody v-for="room in rooms">
                                    <tr>
                                            <th scope="row">#0{{ room.RoomNumber }}P{{room.RoomFloor}}</th>
                                            <td>{{ room.RoomType }}</td>
                                            <td>${{ room.RoomPricePerDay }}</td>
                                            <td>
                                                <input type="date" @input="dates.initialdate = $event.target.valueAsDate" class="form-control">
                                            </td>
                                            <td>
                                                <input type="date"  @input="dates.finaldate = $event.target.valueAsDate" class="form-control">                                                           
                                            </td>
                                    </tr>   
                                    <tr>
                                        <td colspan="5">
                                           <a class="btn btn-sm btn-default btn-block addRoom" v-on:click="addRoomP(room.RoomID)"> <i class="fas fa-share-square"></i></a>          
                                        </td>
                                    </tr>
                                  </tbody>
                        </table>                      
                    </div> 
                    
                    <div class="col-md-3">
                        <div class="BookingInfo">
                                <form class="">
                                        <div class="form-group">
                                            <label class="col-form-label" for="">Cedula: </label>
                                            <input v-model="costumerCedula" type="text" class="form-control">
                                        </div>
                                        <button v-on:click="addCostumer" type="submit" class="btn btn-default btn-block">Buscar</button>
                                    </form>
                            <div v-for="costumer in costumers">
                                    <h4 class="lead text-center">{{ costumer.CostumerFirstName }} {{ costumer.CostumerLastName }}</h4>
                                    <h4 class="lead text-center">{{ costumer.CostumerCedula }} - {{ costumer.CostumerPhoneNumber }}</h4>
                            </div>
                        </div>   
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Habitacion</th>
                                    <th>P/N</th>
                                    <th>Noches</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="room in temporaryRooms">
                                    <th scope="row">{{ room.RoomID }}</th>
                                    <td>{{ room.RoomPricePerDay }}</td>
                                    <td>{{ room.Nights }}</td>
                                    <td>${{ room.Total }}</td>
                                    <td>{{ }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button v-on:click="reserveBooking" class="btn btn-block btn-primary">
                            Reservar
                        </button>
                    </div>     
            </div>  

        </div>
</template>

      <script>
      import LoginService from '@/services/LoginService'
      import RoomService from '@/services/RoomService'
      import CostumerService from '@/services/CostumerService'
      import BookingService from '@/services/BookingService'
      import RightMenu from './Right-Menu'
      import moment from 'moment'
      export default {
        name: 'HelloWorld',
        components: {
            RightMenu
        },
        data () {
          return {
            rooms: null,
            temporaryRooms: [],
            dates: {
                initialdate: null,
                finaldate: null
            },
            days: {
                days: null,
                nights: null
            },
            costumers: [],
            costumerCedula: '',
            costumer:   [{
                CostumerCedula: null,
                CostumerName: null
            }]
          }
        },

        async mounted() {
                await RoomService.g().then(response => {
                    this.rooms = response.data
                    console.log(this.rooms)
                    console.log(typeof(this.rooms))
                })

                
            },
        methods: {
            async addRoomP(id)   {
                var a = moment(this.dates.initialdate)
                var b = moment(this.dates.finaldate)
                this.days.nights = b.diff(a, 'days')
                this.days.days = b.diff(a, 'days') + 1

                if (BookingService.ValidateRoom(id, this.dates.initialdate,  this.dates.finaldate)) {
                    await RoomService.getSingleRoom(id).then(response => {
                    if (this.dates.initialdate == null) {
                        alert('Coloca la fecha de Check In')
                        return;
                    }
                    if (this.dates.finaldate == null) {
                        alert('Coloca la fecha de Check Out')
                        return;
                    }
                    alert(response.data.RoomPricePerDay)
                    this.temporaryRooms.push({
                        RoomID: response.data.RoomID,
                        BookingID: null,
                        RoomPricePerDay: response.data.RoomPricePerDay,
                        InitialDate: this.dates.initialdate,
                        Finaldate: this.dates.finaldate,
                        Type: response.data.RoomType,
                        Days: this.days.days,
                        Nights: this.days.nights,
                        Total: response.data.RoomPricePerDay * this.days.nights
                    })
                })
                } else {
                    alert('Esta habitacion estara ocupada')
                }
                
            },

            async reserveBooking() {
                var BTotal = 0
                for (var item of this.temporaryRooms){
                    BTotal = BTotal + item.Total
                }

                var Booking = {
                    CostumerID: this.costumers[0].CostumerID,
                    BookingTotal: BTotal
                }


                await BookingService.SaveBooking(Booking).then(response => {
                    for (var item of this.temporaryRooms){
                        item.BookingID = response.data.BookingID
                    }
                })

                for (var item of this.temporaryRooms){
                    await BookingService.SaveBookingDetails(item).then(response => {
                        console.log(response.data)
                    })
                }
            },

            async addCostumer() {
                if (event) event.preventDefault()
                await CostumerService.getSingleCostumer(this.costumerCedula).then(response => {
                    this.costumers = []
                    this.costumers.push(response.data)
                    console.log(this.costumer)
                })
            },

            async addRoom(id) {
                await RoomService.getSingleRoom(id).then(response => {
                    if(!this.temporaryRooms.some(item => this.findElement(item, response.data))){
                        this.temporaryRooms.push(response.data)
                        console.log(this.temporaryRooms)
                    } else {
                        console.log('Element already exists')
                    }
                })
            },
            findElement (item, json) {
                if (item.roomID == json.roomID) return true
                else return false;
            },
            setDate (val) {
                this.dates.initialdate = val
                console.log(val)
            }
        }
    }
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>
          .BookingInfo {
              padding: 5%;
              padding-top: 5.7em
          }

          .addRoom {
              padding: 5%;
              padding-top: 1em
          }
      </style>
      
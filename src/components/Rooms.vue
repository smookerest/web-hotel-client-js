<template>
        <div class="room">
            <div class="row">
                    <div class="col-md-2">
                            <RightMenu></RightMenu>
                    </div>
                    <div class="col-md-10">
                        <form class="form-inline ">
                                <div class="form-group">
                                        <label class="col-sm-2 col-form-label" for="">Cedula: </label>
                                        <input type="text" class="form-control">
                                </div>  
                                <button v-on:click="" type="" class="btn btn-default">Buscar</button>
                        </form>
                        <div class="container-fluid">
                                <div class="row">
                                        <div class="col-md-4">
                                                <div>
                                                        <h3>Tabla de Habitaciones</h3>
                                                </div>
                                        </div>                     
                                        
        
                                        <div class="offset-md-7">
                                        <nav class="navbar navbar-default">
                                                <ul class="nav navbar-nav navbar-right">
                                                        <li class="nav-item">
                                                                <a data-toggle="modal" data-target=".bs-example-modal-lg" class="navbar-right">Agregar</a>
                                                        </li>
                                                </ul>
                                                </nav>
                                                
                                        </div>
                                </div>
                        </div>
                        

                        <table class="table table-hover">
                                <thead class="thead-dark" >
                                        <tr>
                                                <th scope="col">Habitacion</th>
                                                <th scope="col">Categoria</th>
                                                <th scope="col">Precio x Dia</th>
                                                <th scope="col">Estado</th>
                                        </tr>
                                </thead>
                                <tbody>
                                        <tr v-for="room in rooms">
                                                <th scope="row">#0{{ room.RoomNumber }}P{{room.RoomFloor}}</th>
                                                <td>{{room.RoomType}}</td>
                                                <td>${{room.RoomPricePerDay}}</td>
                                                <td>{{room.RoomDesription}}</td>
                                        </tr>
                                </tbody>
                        </table>

                </div>      
        </div>       
        <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                        <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                        <div class="modal-header">
                                                <h4>Registro de Habitacion</h4>
                                        </div>
                                        <div class="modal-body">
                                                <form action="">
                                                        <div class="form-row">
                                                        <div class="form-group col-md-3">
                                                                <label for=""># Habitacion</label>
                                                                <input v-model="room.RoomNumber" class="form-control" type="number" placeholder="Ej: 1, 2, 3, 4...">
                                                        </div>
                                                        <div class="form-group col-md-3">
                                                                <label for="">Piso</label>
                                                                <input v-model="room.RoomFloor" class="form-control" type="number" placeholder="Ej: 1, 2 o 3">
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                                <label for="">Categoria</label>
                                                                <select v-model="room.RoomType" class="form-control">
                                                                        <option disabled value="">Please select one</option>
                                                                        <option value="Especial">Especial</option>
                                                                        <option value="Full">Full</option>
                                                                </select>
                                                        </div>
                                                        
                                                        </div>  
                                                        <div class="form-row">        
                                                        <div class="form-group col-md-6">
                                                                <label for="">Precio x Noche (US$)</label>
                                                                <input v-model="room.RoomPricePerDay" type="number" class="form-control" placeholder="">
                                                        </div>
                                                        
                                                        <div class="form-group col-md-6">
                                                                <label>Caracteristicas</label>
                                                                <input v-model="room.RoomDescription"  type="text" class="form-control"></select>
                                                                <p><small class="text-muted">Separa por (",") cada caracteristica.</small></p>
                                                        </div>
                                                        </div>     
                                                </form>    
                                        </div>
                                        <div class="modal-footer">
                                                <button v-on:click="addRoom" class="btn btn-default btn-block">Registrar</button>
                                        </div>
                                </div>
                        </div>
                </div>           
        </div>
</template>
      
      <script>
      import RightMenu from './Right-Menu'
      import RoomService from '@/services/RoomService'
      export default {
        name: 'Room',
        data: () => {
          return {
            rooms: null,
            room: {
                RoomNumber: null,
                RoomFloor: null,
                RoomType: null,
                RoomPricePerDay: null,
                RoomDescription: null
            }
          }
        },
        components: {
            RightMenu
        },
        methods: {
                async addRoom() {
                        await RoomService.p(this.room).then(response => location.reload())
                }
        },
        async mounted() {
                await RoomService.g().then(response => {
                        this.rooms = response.data
                        console.log(this.rooms)
                        console.log(typeof(this.rooms))
                })
        }
}
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>

      </style>
      
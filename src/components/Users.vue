<template>
        <div class="Users">
            <div class="row">
                    <div class="col-md-2">
                            <RightMenu></RightMenu>
                    </div>
                    <div class="col-md-10">
                        <form class="form-inline ">
                                <div class="form-group">
                                        <label class="col-sm-2 col-form-label" for="">Username: </label>
                                        <input type="text" class="form-control">
                                </div>  
                                <button type="submit" class="btn btn-default">Buscar</button>
                        </form>
                        <div class="container-fluid">
                                <div class="row">                     
                                        <div class="col-md-4">
                                                <h3>Tabla de Usuarios</h3>
                                        </div>

                                        <div class="offset-md-7">
                                        <nav class="navbar navbar-default">
                                                <ul class="nav navbar-nav navbar-right">
                                                        <li class="nav-item">
                                                                <a data-toggle="modal" data-target=""  class="navbar-right">Agregar</a>
                                                        </li>
                                                </ul>
                                                </nav>
                                                
                                        </div>
                                </div>
                        </div>
                        <table class="table table-hover">
                                <thead class="thead-dark" >
                                        <tr>
                                                <th scope="col">Username</th>
                                                <th scope="col">Fecha de Creacion</th>
                                                <th scope="col">Codigo de Empleado</th>
                                                <th scope="col">Ultimo LogIn</th>
                                                <th scope="col"></th>
                                        </tr>
                                </thead>
                                <tbody>
                                        <tr v-for="user in Users">
                                                <th scope="row">{{ user.UserName }}</th>
                                                <td>{{user.createdAt}}</td>
                                                <td>{{user.EmployerID}}</td>
                                                <td>{{user.createdAt}}</td>
                                                <td>
                                                    <button data-toggle="modal" data-target="#mymodalp" class="btn btn-default">Permisos</button>
                                                </td>
                                        </tr>
                                </tbody>
                        </table>

                </div>      
        </div>
        
<div class="modal fade bs-example-modal-lg" id="mymodalp" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                        <div class="modal-header">
                                <h4>Administracion de Permisos</h4>
                        </div>
                        <div class="modal-body">
                                <form action="">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                        <label class="form-check-label" for="defaultCheck1">
                                            Booking
                                        </label>
                                    </div>   
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                        <label class="form-check-label" for="defaultCheck1">
                                            Caja General
                                        </label>
                                    </div>   
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                        <label class="form-check-label" for="defaultCheck1">
                                            Habitaciones
                                        </label>
                                    </div>   
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                        <label class="form-check-label" for="defaultCheck1">
                                            Clientes
                                        </label>
                                    </div>   
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                        <label class="form-check-label" for="defaultCheck1">
                                            Usuarios
                                        </label>
                                    </div>          
                                </form>    
                        </div>
                        <div class="modal-footer">
                                <button v-on:click="addUser" class="btn btn-default btn-block">Registrar</button>

                        </div>
                </div>
        </div>
</div>       




</div>


</template>
      
      <script>
      import RightMenu from './Right-Menu'
      import UserService from '@/services/UserService'
      export default {
        name: 'Users',
        data: () => {
          return {
              Users: [],
              User: {
                  UserName: null, 
                  UserPassword: null,
                  EmployerID: null,
                  UserEmail: null
              }
              
          }
        },
        components: {
            RightMenu
        },
        methods: {
            async addUser () {
                await UserService.p(this.User).then(response => location.reload())
            }
        },
        async mounted() {
                await UserService.g().then(response => {
                        this.Users = response.data
                        console.log(this.Users)
                })
        }
}
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>
      </style>


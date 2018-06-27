<template>
        <div class="Costumers">
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
                                <button type="submit" class="btn btn-default">Buscar</button>
                        </form>   
                        <div class="container-fluid">
                                <div class="row">
                                        <div class="col-md-4">
                                                <div>
                                                        <h3>Tabla de Clientes</h3>
                                                </div>
                                        </div>
                                        <div class="offset-md-7">
                                                <nav class="navbar navbar-default">
                                                        <ul class="nav navbar-nav navbar-right">
                                                                <li class="nav-item">
                                                                        <li><a data-toggle="modal" data-target=".bs-example-modal-lg"  class="navbar-right">Agregar</a></li>
                                                                </li>
                                                        </ul>
                                                </nav>
                                        </div>
                                </div>
                               
                        </div>                
                                

                        <table class="table table-hover">
                                <thead class="thead-dark" >
                                        <tr>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Cedula</th>
                                                <th scope="col">Telefono</th>
                                                <th scope="col">Pais</th>
                                        </tr>
                                </thead>
                                <tbody>
                                        <tr v-for="costumer in Costumers">
                                                <th scope="row">{{ costumer.CostumerFullName }}</th>
                                                <td>{{costumer.CostumerCedula}}</td>
                                                <td>{{costumer.CostumerPhoneNumber}}</td>
                                                <td>{{costumer.CostumerCountry}}</td>
                                        </tr>
                                </tbody>
                        </table>

                </div>      
        </div>
        
<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                        <div class="modal-header">
                                <h4>Registro de Cliente</h4>
                        </div>
                        <div class="modal-body">
                                <form action="">
                                        <div class="form-row">
                                        <div class="form-group col-md-6">
                                                <label for="">Nombre Completo</label>
                                                <input v-model="Costumer.CostumerFullName" class="form-control" type="text" placeholder="Ej: José Moronto">
                                        </div>
                                        <div class="form-group col-md-6">
                                                <label for="">Cedula / Pasaporte</label>
                                                <input v-model="Costumer.CostumerCedula" class="form-control" type="number" placeholder="Ej: 40210170052">
                                        </div>
                                        </div>  
                                        <div class="form-row">
                                        <div class="form-group col-md-6">
                                                <label for="">Celular</label>
                                                <input v-model="Costumer.CostumerPhoneNumber" type="text" class="form-control" placeholder="Ej: 8095843951">
                                        </div>
                                        <div class="form-group col-md-6">
                                                <label for="">Celular 2</label>
                                                <input type="text" class="form-control" placeholder="Ej: 8095843951">
                                        </div>
                                        </div>
                                        <label id="pais" for="">Pais</label>
                                        <div class="form-group">    
                                                <input v-model="Costumer.CostumerCountry" type="text" class="form-control" id="country">
                                        </div>                  
                                </form>    
                        </div>
                        <div class="modal-footer">
                                <button v-on:click="addCostumer" class="btn btn-default btn-block">Registrar</button>

                        </div>
                </div>
        </div>
</div>       




</div>


</template>
      
      <script>
      import RightMenu from './Right-Menu'
      import CostumerService from '@/services/CostumerService'
      export default {
        name: 'Costumers',
        data: () => {
          return {
            Costumers: null,
            Costumer: {
                    CostumerFullName: null,
                    CostumerCedula: null, 
                    CostumerPhoneNumber: null,
                    CostumerOptionalPhoneNumber: null,
                    CostumerCountry: null
            }
          }
        },
        components: {
            RightMenu
        },
        methods: {
                async addCostumer() {
                        var countryData = $("#country").countrySelect("getSelectedCountryData");
                        this.Costumer.CostumerCountry = countryData.name

                        await CostumerService.p(this.Costumer).then(response => location.reload())
                        
                }
        },
        async mounted() {
                await CostumerService.g().then(response => {
                        this.Costumers = response.data
                        console.log(this.Costumers)
                        console.log(typeof(this.Costumers))
                })
                $("#country").countrySelect()
        }

}
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>
      </style>

